import RegisterWx from './index'



const wxSDK = new RegisterWx({
    wxConfig:{
        debug:true, 
        appId:'xxxxx',
        ticket:'js ticket',
        jsApiList:[], //需要使用的 jsApi 
        wxReadyCallBack:()=>{
            //wx  ready 后执行的回调
            console.log('--📧 收到了 wx.ready 回调')
        },
        wxFailCallBack:(err)=>{
            // wx error 的回调
        },

    }
  
})

// 页面用到的时候去注册
// wxSDK.register()

 