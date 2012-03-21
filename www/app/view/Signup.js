Ext.define('JiaoYou.view.Signup', {
    extend: 'Ext.form.Panel',
    xtype: 'signup',
    id: 'signup',
    config: {
        fullscreen : true,
        standardSubmit: false,
        url: 'localhost:3000/signup',
        items: [
            {
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : '注册'            
            }, 
            {                
                xtype  : 'fieldset',
                height : 250,
                cls    : 'loginview',
                items  : [
                    {
                        xtype       : 'emailfield',
                        name        : 'email',
                        label       :'邮箱',
                        required    : true
                    },
                    {   
                        xtype       : 'textfield',
                        name        : 'login',
                        label       : '用户名',
                        required    : true
                    },
                    {
                        xtype       : 'passwordfield',
                        name        : 'crypted_password',
                        label       : '密码',
                        required    : true
                    },
                    {
                        xtype       : 'passwordfield',
                        name        : 'confirm_password',
                        label       : '确认密码',
                        required    : true
                    },
                    {    
                        xtype       : 'selectfield',
                        label       : '性别',
                        id          : 'select_sex',
                        name        : 'gender',
                        required    : true,
                        options: [
                            {
                                text : '帅锅',
                                value: '2'
                            },
                            {
                                text : '妹纸',
                                value: '1'
                            }
                        ]
                    }
                ]                                          
            }, 
            {            
                id: 'signupBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        text    : '返回',
                        id      : 'signup_back',
                        ui      : 'back'
                    }, 
                    {
                        xtype   : 'spacer'
                    }, 
                    {
                        xtype   : 'button',
                        id      : 'signup_save',
                        text    : '保存',
                        ui      : 'confirm'                         
                    }
                ]            
            }
        ]                
    }
});
        