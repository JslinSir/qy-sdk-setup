import RegisterWx from './core/registerWx'



const wxSDK = new RegisterWx({
    wxConfig:{
        appId:'123',
        name:'lalalla'
    }
  
})

// 页面用到的时候去注册
wxSDK.register()

 