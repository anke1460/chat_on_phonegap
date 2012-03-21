Ext.define('JiaoYou.controller.User', {
    extend: 'Ext.app.Controller',
    config: {
      refs:
      {
          login: 'login',
          userMain: 'user_main',
          clientInterface: 'client_interface',
       //   message: 'message',
          userList: 'user_list',
         // userInfo: 'user_info',
          locationSearchButton: '#location_search_button',
          sendMessage: '#send_message',
          loginOut: '#login_out',
          chatButton: '#chat_button'
          
          
      },
      
      control: {
          
          
          locationSearchButton: {
            tap: 'onDisplayLocation'
          },
          /*
          sendMessage: {
            tap: 'sendMessage'
          },*/
          
          loginOut: {
            tap: 'login_out'
          }
          
      }
    },

    lanuch: function() {
      console.log('lanuch')      
    },
    
    init: function() {
       // aa=this.getSearchesStore()
      //  this.getSearchesStore().load()
      /*
       this.userStore = Ext.create('JiaoYou.store.Users');
       this.chatStore = Ext.create('JiaoYou.store.Chats');
       console.log(9999999)
       console.log(window.localStorage.getItem('name'))
        this.socket = Ext.data.ChatClient.create({
          name: window.localStorage.getItem('name'),
          users_store: this.userStore,
          chat_store: this.chatStore});
      */

	//this.socket.connect();

		// Event Listener
   
		/*
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
		*/

    },

    sendMessageToServer: function(msg){
        this.socket.send(msg);
     },

     addMessageToChatStore: function(message) {
        console.log(message)
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


    sendMessage: function() {
        /*
        var msgfield = this.getMessageFile().items.items[1].items.items[0];
        var msg = msgfield.getValue();
        var store = this.getMessagesStore();
        console.log(Ext.get('user_title').dom.innerText )
        this.socket.emit('private message', Ext.get('user_title').dom.innerText, msg, function(ok){
	      if (ok) {
          store.add({content: msg, is_client: false, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )})
          msgfield.reset();
        }
          
    },this);
        
        */
    },
    
    login_out: function() {
      Ext.Viewport.setActiveItem(this.getLogin());
    },
    
    
    onLoginResult: function(request, success, response) {
        console.log('login result callback')
    },
    


    
  onDisplayLocation: function() {
    var pick =  Ext.create('Ext.Picker', {
      doneButton: '选择',
      cancelButton: '取消',
      slots: [
        {
            name : 'province',
            title: '省份',
            data : GenenrelData.province
        },
        {
            name : 'city',
            title: '城市',
            data : [
                {text: '北京', value: '北京'}
            ]
        }
      ],
       listeners: {
          pick: function(self, value, slots, op) {
            console.log(self)
            console.log(value)
            console.log(slots)
            console.log(op)
           var data = GenenrelData.city[value.province]
            var city = [];
            Ext.each(data, function(d){
              city.push({text: d, value: d});
            });
            console.log( pick.getItems().items[2])
            console.log(city)
            pick.getItems().items[2].setData(city);
            pick.getDoneButton().enable();
            
          }
      },
      onDoneButtonTap: function(e){
          console.log(pick.getValue())
      }
  });
  
  Ext.Viewport.add(pick);
  pick.show();

   pick.getItems().items[1].on('itemtouchstart',function(value, node, opt){
      pick.getDoneButton().disable();
   });
    
   pick.getItems().items[2].on('itemtouchstart',function(value, node, opt){
     pick.getDoneButton().disable();
   });
  }    
});
