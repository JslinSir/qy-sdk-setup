import CryptoJS from "crypto-js";
import { randomString, createTimestamp, checkFunction } from "../utils/index";
import { initSdk } from "./initSdk";

class RegisterWx {
  constructor(props) {
    const { wxConfig } = props || {};
    this.wxConfig = wxConfig;
    this.init();
  }

  static getInstance(props) {
    if (!RegisterWx.instance) {
      RegisterWx.instance = new RegisterWx(props);
    }
    return RegisterWx.instance;
  }

  async init() {
    const { sdkSrc } = this.wxConfig;
    await initSdk(sdkSrc);
    this.setWxConfig();
    this.logger('----🚚🚚🚚 jssdk 导入页面成功 ----')
    return {
      message: "jssdk init ok",
      wxConfig: this.wxConfig,
    };
  }

  setWxConfig() {
    const { wxReadyCallBack, wxFailCallBack } = this.wxConfig;
    const nonceStr = randomString();
    const timestamp = createTimestamp();
    const { appId } = this.wxConfig;
    const { ticket } = this.wxConfig;
    const { jsApiList } = this.wxConfig;
    const encodeStr = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${window.location.href}`;
    const hash = CryptoJS.SHA1(encodeStr); // 生成sha1加密签名.
    const signature = CryptoJS.enc.Hex.stringify(hash);
    wx.config({
      beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，企业微信的corpID
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
      jsApiList, // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
      ...this.wxConfig,
    });

    wx.ready((res) => {
      this.logger('---- ✅ wx.ready 装载成功：可配置 wxConfig 的 wxReadyCallBack 处理回调 ✅----')
      checkFunction(wxReadyCallBack) && wxReadyCallBack(res);
    });

    wx.error((err) => {
      this.logger('error','----😭 触发了 wx.error：可配置 wxConfig 的 wxFailCallBack 处理报错回调 😭----')
      checkFunction(wxFailCallBack) && wxFailCallBack(err);
    });
  }

  register() {
    this.logger('---- 执行 register ----')
    this.setWxConfig()
  }

  logger(){
    const [type,message] = arguments.length === 1 ? ['log', arguments[0]] :  [arguments[0],arguments[1]]
    this.wxConfig.debug && console[type](message)
  }
}

function _getInstance(props) {
  return RegisterWx.getInstance(props);
}

export default _getInstance;
