Ext.define('JiaoYou.controller.Signup', {
    extend: 'Ext.app.Controller',
    config: {
        refs : {
            signup: 'signup',
            login: 'login',
            signupSave: '#signup_save',
            signupBack: '#signup_back',
            personalInfo: 'personal_info'
        },
        control: {
            signupSave: {
                tap: 'onSignupButtonTap'
            },
            signupBack: {
                tap: 'onBackButtonTap'
            },
            '#from_personal_info_btn': {
                tap: 'onBackSignUp'
            },
            
            '#personal_info_save_btn': {
                tap: 'onFinishPersonalInfo'
            }
        }
    },

    onBackSignUp: function() {
      if (!this.getSignup()) {
        Ext.create('JiaoYou.view.Signup');
      }
      Ext.Viewport.setActiveItem(this.getSignup());
    },
    
    onFinishPersonalInfo: function() {
      var values =  this.getPersonalInfo().getValues();
      if (values.name == '') {
        Ext.Msg.alert('提示', '昵称不能为空!');
         return false;
      }
      if (values.height == '') {
        Ext.Msg.alert('提示', '身高不能为空!');
         return false;
      }
      values.user_id = window.localStorage.getItem('signup_id');
      values.borth = Ext.DateExtras.format(values.borth, 'Y-m-d')
      Ext.data.JsonP.request({
          url: Ext.ip +'/finish_personal_info',
          callbackKey: 'callback',
          scope: this,
          params: values,
          success: function(result) {
            if (result.success == 'false') {
             Ext.Msg.alert('提示','保存失败');
             return;
            }
            this.getLogin().reset();
            Ext.Viewport.setActiveItem(this.getLogin()); 
          }
        });  
    },
    
    onSignupButtonTap: function() {
       var values = this.getSignup().getValues();
       var login = this.getLogin();
        Ext.Viewport.setActiveItem(this.getPersonalInfo());
        return
       if ((values.crypted_password != "" || values.confirm_password != "" ) && values.crypted_password != values.confirm_password) {
         Ext.Msg.alert('提示', '两次密码输入不一致！');
         return false;
       }
       if (values.crypted_password  == "" || values. crypted_password.email == "" || values.name == "" || values.confirm_password == "") {
          Ext.Msg.alert('提示', '请填写完整！');
       } else {
        Ext.data.JsonP.request({
          url: Ext.ip +'/signup',
          callbackKey: 'callback',
          params: values,
          scope: this,
          success: function(result) {
            if (result.success == 'false') {
             Ext.Msg.alert('提示','用户名已存在');
             return;
            }
            console.log(result)
            window.localStorage.setItem('signup_id', result.data.id);
            Ext.Viewport.setActiveItem(this.getPersonalInfo()); 
          }
        });    
      }
        /*
      Ext.Msg.alert('消息', '邮件已发，请先激活', function(){
        Ext.Viewport.setActiveItem(this.getLogin());   
      }, this);*/
        
      /*
        Ext.Ajax.request({
            // RESTful or Ajax Service for Login            
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Processing your signup request...',            
            scope       : this,
            callback    : this.onSignupResult
        });
      */
    },  

    onSignupResult: function(request, success, response) {
        console.log('signup result callback')
    },

    onBackButtonTap: function() {
       this.getLogin().reset();
       Ext.Viewport.setActiveItem(this.getLogin());     
    }    
});
