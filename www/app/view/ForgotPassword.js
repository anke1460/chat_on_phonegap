Ext.define('JiaoYou.view.ForgotPassword', {
    extend: 'Ext.Container',
    xtype: 'forgot_password',
    config: {
        fullscreen : true,
        layout     : {
            type      : 'card',
            animation : {
                type      : 'slide',
                direction : 'left',
                duration  : 250
            }
        },
        items: [
            {
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : '忘记密码'            
            }, 
            {                
                xtype  : 'fieldset',
                height: 100,
                cls    : 'loginview',
                instructions: '请填入你注册时的邮箱',
                items  : [
                    {
                        xtype       : 'emailfield',
                        name        : 'name',
                        label       :'邮箱',
                        required    : true
                    }
                ]                                          
            }, 
            {            
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        text    : '返回',
                        id      : 'forgot_password_back',
                        ui      : 'back'
                    }, 
                    {
                        xtype   : 'spacer'
                    }, 
                    {
                        xtype   : 'button',
                        id      : 'forgot_password_save',
                        text    : '保存',
                        ui      : 'confirm'                         
                    }
                ]            
            }
        ]                
    }
});
        