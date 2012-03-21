Ext.define('JiaoYou.controller.Login', {
    extend: 'Ext.app.Controller',

    config : {
      refs: {
         login: 'login',
         signup: 'singup',
         userMain: 'user_main',
         showChat: 'chat',
         forgotPassword: 'forgot_password',
         showClientInterface: 'client_interface',
         btnLogin: '#btnLogin',
         btnForgotPassword: '#btnForgotPassword',
         btnSignup: '#btnSignup',
         forgot_password_back: '#forgot_password_back',
         backUserList: '#back_user_list',
         showUserList: 'user_list',
         openUserButton: '#open_user_button',
         chatButton: '#chat_button',
         showMessage: 'message',
         showMessageList: 'message_list',
         backMessageList: '#back_message_list_button',
         editMessageListButton: '#edit_message_list',
         finishMessageButton: '#finish_message_edit',
         sendMessage: '#send_message',
         personalInfo: 'personal_info',
         personalSetting: 'personal_setting',
         accessMyHistory: 'access_my_history',
         myHistory: 'my_history',
         galleryList: 'gallery_list'
         
      },
      control: {
        editMessageListButton: {
          tap: 'editMessageList'
        },
        
        backMessageList: {
          tap: 'backMessageList'
        },
        
        backUserList: {
          tap: 'onBackUserList'
        },
        
        btnLogin: {
          tap: 'onLoginButtonTap'
        },
        btnForgotPassword: {
          tap: 'onForgotPasswordButtonTap'
        },
        btnSignup: {
          tap: 'onSignupButtonTap'
        },
        forgot_password_back: {
          tap: 'onForgotPasswordBackTap'
        },
        openUserButton: {
          tap: 'openUserListPage'
        },
        
        chatButton: {
          tap: 'openChatPage'
        },
        
        showUserList: {
          itemtap: 'onUserInfoPop'
        },
        
        showMessageList: {
         itemtap: 'openMessagePage'
        },

        '#user_setting': {
          itemtap: 'openPersonalSetting'
        },

        accessMyHistory: {
          itemtap: 'onUserInfoPop'
        },
        
        finishMessageButton: {
          tap: 'finishMessageEdit'
        },
        
        '#send_message_button': {
          tap: 'sendMessage'
        },
        
        sendMessage: {
         tap: 'sendMessage'
        },
        
        '#login_out': {
            tap: 'login_out'
        },
        
        '#refresh_message_list': {
            tap: 'reloadMessageList'
        },

        '#personal_setting_back': {
          tap: 'backSetting'
        },

        '#back_access_me': {
          tap: 'backSetting'
        },

        '#back_from_myhistory': {
          tap: 'backSetting'
        },

        '#personal_setting_save': {
          tap: 'savePersonalSetting'
        },

        '#by_distance_sort': {
          tap: 'sortUser'
        },

        '#by_time_sort': {
          tap: 'sortUser'
        }
    }
    },
    
    init: function() {
      Ext.Viewport.add({
        xclass: 'JiaoYou.view.Login'
      });
      Ext.create('JiaoYou.view.PersonalInfo');
    },
    
    login_out: function() {
      this.socket.emit('disconnect', window.localStorage.getItem('uid'));
      Ext.Viewport.setActiveItem(this.getLogin());
    },

    sortUser: function(self) {
       console.log(self)
       if (self.id == 'by_distance_sort') {
         this.getShowUserList().getStore().load({
            params: {
              name: Ext.getCmp('username').getValue(),
              latitude: window.localStorage.getItem('latitude'),
              longitude: window.localStorage.getItem('longitude')
            }
         });
       } else {
         this.getShowUserList().getStore().load({
            params: {
              name: Ext.getCmp('username').getValue(),
              sort: 'time'
            }
       });
       }
      
    },

    finishMessageEdit: function() {
      this.getEditMessageListButton().show();
      this.getFinishMessageButton().hide();
      Ext.each(Ext.DomQuery.select('#message_list .x-list-disclosure'), function(item) {
        Ext.get(item).hide();
      });
      Ext.each(Ext.DomQuery.select('#message_list .message-total'), function(item) {
         Ext.get(item).show();
      });
    },
    
    reloadMessageList: function() {
      this.getShowMessageList().getStore().load({
        params: {
          user_id: window.localStorage.getItem('user_id')
        },
        callback: function(records) {
          Ext.getCmp('finish_message_edit').hide();
          Ext.getCmp('edit_message_list').show();
          Ext.each(Ext.DomQuery.select('#message_list .x-list-disclosure'), function(item) {
           Ext.get(item).hide();
        });
        }
      });
    },
    
    editMessageList: function() {
       Ext.each(Ext.DomQuery.select('#message_list .message-total'), function(item) {
         Ext.get(item).hide();
       });
      Ext.each(Ext.DomQuery.select('#message_list .x-list-disclosure'), function(item) {
          Ext.get(item).show();
       });
       this.getEditMessageListButton().hide();
       this.getFinishMessageButton().show();
    },
    
    backMessageList: function() {
      Ext.Viewport.setActiveItem(this.showClientInterface);
      this.showClientInterface.setActiveItem(1);
      this.getShowMessageList().deselectAll();
    },

    openPersonalSetting: function(self, index, target, record) {
      console.log(this)
      console.log(this.getPersonalSetting())
      console.log(index)
      console.log(record)
      if (record.data.name == '查看最近访问我的人') {
        if (this.getAccessMyHistory() == undefined) {
          Ext.create('JiaoYou.view.AccessMyHistory');
        }
       
        Ext.Viewport.setActiveItem(this.getAccessMyHistory());
        this.getAccessMyHistory().getStore().load({params:{user_id:window.localStorage.getItem('user_id')},callback:function(){
           Ext.each(Ext.DomQuery.select('#access_my_history_list .x-list-disclosure'), function(item) {
            Ext.get(item).hide();
          });
        }});
        return;
      }
       if (record.data.name == '我关注的人') {
        if (this.getMyHistory() == undefined) {
          Ext.create('JiaoYou.view.MyHistory');
        }

        Ext.Viewport.setActiveItem(this.getMyHistory());
        this.getMyHistory().getStore().load({params:{user_id:window.localStorage.getItem('user_id'),my: true},callback: function(){
          Ext.each(Ext.DomQuery.select('#my_history_list .x-list-disclosure'), function(item) {
            Ext.get(item).hide();
          });
        }});
        return;
      }
      if (record.data.name == '相册管理') {
        if (this.getGalleryList() == undefined) {
          Ext.create('JiaoYou.view.GalleryList');
        }
        Ext.Viewport.setActiveItem(this.getGalleryList());
        this.getGalleryList().getStore().load({callback: function(){
           Ext.each(Ext.DomQuery.select('#gallery_list .x-list-disclosure'), function(item) {
            Ext.get(item).hide();
         });
        }});
        return;
      }
      if (this.getPersonalSetting() == undefined) {
        Ext.create('JiaoYou.view.PersonalSetting');
      }
      if (!this.personal_info) {
        this.personal_info = Ext.create('JiaoYou.model.UserInfo', Ext.JSON.decode(window.localStorage.getItem('user')));
      }
      
       Ext.Viewport.setActiveItem(this.getPersonalSetting());
       this.getPersonalSetting().setRecord(this.personal_info);
    },

    backSetting: function() {
      Ext.Viewport.setActiveItem(this.showClientInterface);
      this.showClientInterface.setActiveItem(2);
      Ext.getCmp('user_setting').deselectAll();
    },

    savePersonalSetting: function() {
      this.getPersonalSetting().updateRecord(this.personal_info, true);
      Ext.data.JsonP.request({
        url:  Ext.ip  +'/update_setting',
        callbackKey: 'callback',
        params: {
         info: JSON.stringify(this.getPersonalSetting().getRecord().data)
        },
        scope: this,
        success: function(result) {
          console.log(5555)
        },
        failure: function() {
          console.log('aaa');
        }
      });
    },
    
    openMessagePage: function(self,index,target, record, e) {
       if (e.getTarget('.x-list-disclosure')) {
         Ext.Msg.confirm('提示', "确定要删除与该用户的聊天纪录吗?", function(btn){
            if (btn == 'yes') {
              Ext.data.JsonP.request({
              url:  Ext.ip  +'/deleteMessage',
              callbackKey: 'callback',
              params: {
                user_id: window.localStorage.getItem('user_id'),
                chat_object_id: record.data.user_id
              },
              scope: this,
              success: function(result) {
                this.getShowMessageList().getStore().remove(record);
              },
              failure: function() {
                Ext.Msg.alert('提示','连接失败!');
              }
              });
            }
         }, this);
        } else if (Ext.getCmp('finish_message_edit').isHidden() == true) {
          if (!this.getShowMessage()) {
             Ext.create('JiaoYou.view.Message');
           }
           chat_user.id = record.getData().user_id;
           chat_user.id_name = record.getData().user_id + '_' + record.getData().name;
           chat_user.avatar = record.getData().photo_url;
           Ext.Viewport.setActiveItem(this.getShowMessage(),{type: 'slide', cover: 'true', direction: 'left'});
           this.getShowMessage().getStore().load({
             params: {
               from_user_id: window.localStorage.getItem('user_id'),
               to_user_id: record.data.user_id
             },
             scope: this
           });
        }
     
    },
    openChatPage: function() {
      if (!this.showChat) {
        this.showChat = Ext.create('JiaoYou.view.Chat');
      }
       Ext.Viewport.setActiveItem(this.showChat,{type: 'slide', cover: 'true', direction: 'left'});
       Ext.getCmp("chat_page").getStore().load({
         params:{
           friend_id: chat_user.id,
           user_id: current_user.id
          },
          callback: function() {
            Ext.each(Ext.DomQuery.select('#chat_page .play-audio'), function(item) {
                    Ext.get(item).on('tap', function(t) {
                        Ext.get(item.id).parent().query('audio')[0].play()
                    });
            });
          }
        });
      
     },
    openUserListPage: function() {
      Ext.Viewport.setActiveItem(this.showUserInfo,{type: 'slide', cover: 'true', direction: 'left'});
    },
    
    onLoginButtonTap: function() {
       /*
       window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
          alert(333)
          alert(fileSystem.root.name)
           var fileTransfer = new FileTransfer();
          
            fileTransfer.download(
                'http://192.168.1.100:3000/1.mp3',
                 'Documents/1.mp3',
                function(entry) {
                    alert("download complete: " + entry.fullPath);
                },
                function(error) {
                    alert("download error source " + error.source);
                    alert("download error target " + error.target);
                    alert("down error code" + error.code);
                    }
           );
         }, function(e){
          alert('333')
          alert(e)
         });

       return false;
      */
      Ext.data.JsonP.request({
            url: Ext.ip  +'/login',
            callbackKey: 'callback',
            params: {
                name: Ext.getCmp('username').getValue(),
                password: Ext.getCmp('passowrd').getValue(),
                location: window.localStorage.getItem('location'),
                city:  window.localStorage.getItem('city'),
                province:  window.localStorage.getItem('province'),
                latitude: window.localStorage.getItem('latitude'),
                longitude: window.localStorage.getItem('longitude')
            },
            scope: this,
            success: function(result) {
               if (result.success == 'false') {
                Ext.Msg.alert('提示','用户名或密码错误');
                return;
               }
              window.localStorage.setItem('signup_id', result.user.id);
              if (result.photo_url == "null") {
                Ext.Viewport.setActiveItem(this.getPersonalInfo());
                return;
              }
              if (!this.showClientInterface) {
                this.showClientInterface = Ext.create('JiaoYou.view.ClientInterface');
              }
  
              window.localStorage.setItem('user', JSON.stringify(result.user));
              window.localStorage.setItem('avatar', result.user.photo_url);
              window.localStorage.setItem('user_id' , result.user.id);
              window.localStorage.setItem('uid' , result.user.id + '_' + result.user.name);
              window.localStorage.setItem('name' , result.user.name);
              current_user.id = result.user.id;
              current_user.id_name = result.user.id + '_' + result.user.name;
              this.initSocket();
              this.getShowUserList().getStore().load({
                params: {
                  name: Ext.getCmp('username').getValue(),
                  latitude: window.localStorage.getItem('latitude'),
                  longitude: window.localStorage.getItem('longitude')
                },callback: function(records) {
                Ext.each(records,function(r) {
                    /*
                    if ( r.data.profile_image_url != "null" || r.data.profile_image_url != null) {
                          var fileTransfer = new FileTransfer();
                    
                    fileTransfer.download(
                        'http://localhost:3000/get_photo',
                        "/public/images" +r.data.profile_image_url,
                        function(entry) {
                            console.log("download complete: " + entry.fullPath);
                        },
                        function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code" + error.code);
                        }
                    ); 
                    }
                    */
                 
                })
                }
              });
              this.getShowMessageList().getStore().load({
                params: {
                  user_id: result.user.id
                },
                callback: function(records) {
                  Ext.each(Ext.DomQuery.select('#message_list .x-list-disclosure'), function(item) {
                    Ext.get(item).hide();
                  });
                  Ext.getCmp('message_list').show();
                }
              });

              Ext.Viewport.setActiveItem(this.showClientInterface,{type: 'slide', cover: 'true', direction: 'left'});
             
            },
            failure: function() {
              Ext.Msg.alert('提示','登陆失败');
            }
        });
    },
    
    //////////////setup connect//////////////////////
    
   initSocket: function() {
      this.userStore = Ext.create('JiaoYou.store.Users');
      this.chatStore = Ext.create('JiaoYou.store.Chats');
      this.messgesStore = Ext.create('JiaoYou.store.Messages');

      this.socket = Ext.data.ChatClient.create({
        uid: window.localStorage.getItem('uid'),
        users_store: this.userStore,
        chat_store: this.chatStore});

        this.socket.on(
          'connect',
          this.registerUser,
          this
        );
      
        this.socket.on(
          'message',
          this.addMessageToChatStore,
          this
        );
        
   },
   
   
   ////////////////////send message//////////////
    
     addMessageToChatStore: function(message) {
      this.getMessagesStore().add(message);
     },

     registerUser: function() {
        alert('reggsss')
        var settings = this.configStore.getAt(0);
        var user = {
                nickname: alan,
                gravatar: ''
        };
        this.socket.send(user);
        
     },


    sendMessage: function(button) {
      var id = 'message_field';
      if (button.id == 'send_message_button') {
         id = 'chat_field';
      }
      var msg = Ext.getCmp(id).getValue();
     // var store = this.messgesStore;
       var self = this;
       console.log(chat_user.avatar)
       this.socket.emit('private message', {from: current_user.id_name,to: chat_user.id_name, photo_url: window.localStorage.getItem('avatar')}, msg, function(ok){
       //  if (ok) {
          if (Ext.getCmp("chat_page")) {
             Ext.getCmp("chat_page").getStore().add({content: msg, is_client: false, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' ), photo_url: window.localStorage.getItem('avatar')});
          }
          console.log('alrede send')
          if (Ext.getCmp('message_info')) {
             Ext.getCmp('message_info').getStore().add({comment: msg, is_from_client: false, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' ), photo_url: window.localStorage.getItem('avatar')});
          }
          Ext.getCmp(id).reset();
       },this);
    },
   
   /////////////////////////////////////////////

    onBackUserList: function() {
      Ext.Viewport.setActiveItem(this.showClientInterface);
      this.showClientInterface.setActiveItem(0);
      this.getShowUserList().deselectAll();
    },
    
    onUserInfoPop: function(list, index, node, record) {
      if (!this.showUserInfo) {
        this.showUserInfo = Ext.create('JiaoYou.view.UserInfo');
        
      }
        Ext.data.JsonP.request({
            url: Ext.ip  +'/user_info',
            callbackKey: 'callback',
            params: {
                user_id:  record.getData().id,
                client_id: window.localStorage.getItem("user_id"),
            },
            scope: this,
            success: function(result) {
                Ext.each(['search_purpose', 'income','degree','martial_status','constellation','figure', 'status'], function(d){
                 if (result[0][d]) {
                    result[0][d] = GenenrelData[d][result[0][d]];
                 }
                 });
                console.log(result)
                Ext.getCmp('user_info_header').setHtml(['<div id="personal style="width:320px;"><div id="personal-photo"><img src=' +Ext.ip + result[0].photo_url +' /></div>',
                  '<div id="personal-info" style="width:175px;"><span id="personal-name">' + result[0].age + " " +result[0].name + '</span>',
                  '<span style="margin-left:10px">21</span><span style="margin-left:10px">' + result[0].province + " " +result[0].city + '</span>',
                  '<div id="base-info" style="margin-top:30px"><span>' +result[0].purpose +'</span></div>',
                  '</div></div>'].join('') )
               // Ext.getCmp('user_info_header').getStore().setData({age:result[0].age, province: result[0].province, city: result[0].city,name:result[0].name, photo_url: Ext.ip + result[0].photo_url});
                var user_info = Ext.ModelManager.create(result[0], 'JiaoYou.model.UserInfo');
                this.showUserInfo.setRecord(user_info);
               
            },
            failure: function() {
                
            }
         });

      var c_id = record.getData().id + '_' + record.getData().name;
      chat_user.id = record.getData().id;
      chat_user.avatar = record.getData().photo_url;
      chat_user.id_name = c_id;
      Ext.Viewport.setActiveItem(this.showUserInfo),{type: 'slide', cover: 'true', direction: 'left'};
    },
    
    onForgotPasswordButtonTap: function() {
      var forgot_password = this.getForgotPassword() || Ext.create('JiaoYou.view.ForgotPassword');
      Ext.Viewport.setActiveItem(forgot_password);     
    },   
    
    onSignupButtonTap: function() {
     this.showSignup = this.showSignup || Ext.create('JiaoYou.view.Signup');
      Ext.Viewport.setActiveItem(this.showSignup);
    },
    
    onForgotPasswordBackTap: function() {
        Ext.Viewport.setActiveItem(this.getLogin());
    }
});
