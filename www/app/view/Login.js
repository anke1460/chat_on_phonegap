Ext.define('JiaoYou.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: [
       'JiaoYou.view.ClientInterface',
       'JiaoYou.view.Chat',
       'JiaoYou.view.UserInfo',
       'JiaoYou.view.UserMain',
       'JiaoYou.view.Signup',
       'JiaoYou.view.MessageList',
       'JiaoYou.view.Message',
       'JiaoYou.view.DisplayInfo',
       'JiaoYou.view.ForgotPassword',
       'JiaoYou.view.PersonalInfo',
       'JiaoYou.view.PersonalSetting',
       'JiaoYou.view.AccessMyHistory',
       'JiaoYou.view.MyHistory',
       'JiaoYou.view.GalleryList',
       'JiaoYou.view.GalleryView',
       'JiaoYou.view.ImageView'
     ],
    config: {
      fullscreen : true,
      items: [
            {
                id: 'loginTitleBar',
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : '找朋友，快去看看吧！'            
            }, 
            {
                cls     : 'loginview',
                xtype  : 'fieldset',
                height: 150,
                width: Ext.os.deviceType == 'Phone' ? 280 : null,
                instructions: '同城交友网，玩转同城',
                items  : [ 
                    {
                        xtype       : 'emailfield',
                        name        : 'Username',
                        height: 50,
                        layout: 'fit',
                        label       : '用户名',
                        id          : 'username',
                        required    : true
                    }, 
                    {
                        xtype       : 'passwordfield',
                        name        : 'Password',
                        id          : 'passowrd',
                        label       : '密码',        
                        height: 50,    
                        layout: 'fit',            
                        required    : true
                    }
                ]            
            }, 
            {            
                id: 'loginBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        id      : 'btnSignup',
                        text    : '立即注册',
                        ui      : 'back'                        
                    }, 
                    {
                        xtype   : 'spacer'
                    }, 
                    {
                        xtype   : 'button',
                        id      : 'btnLogin',
                        text    : '登录',
                        ui      : 'confirm'     
                    }, 
                    {
                        xtype   : 'spacer'                    
                    }, 
                    {                
                        xtype   : 'button',
                        id      : 'btnForgotPassword',
                        text    : '忘记密码',   
                        ui      : 'forward'                                                                                    
                    }
                ]            
            },            
        ]
    }
});
