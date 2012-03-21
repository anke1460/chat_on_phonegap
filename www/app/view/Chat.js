Ext.define('JiaoYou.view.Chat', {
    extend: 'Ext.DataView',
    xtype: 'chat',
    require :['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
    config: {
        baseCls: 'message',
        fullscreen : true,
        store: 'Chats',
        id: 'chat_page',
        itemTpl: new Ext.XTemplate(
            '<div class="message-time">{datetime}</div><div class={is_client:this.message}> <div class={is_client:this.customCss} ><img src="'+Ext.ip + '{photo_url} "/>',
            '<div class="message-anthor"></div>',
            '<div class="profile_info">',
                '<div class="message-content">',
                    '<p>{content:this.content}</p>',
                '</div>',
            '</div></div></div>',
            {
             content: function(value) {
                if (value != '') {
                    return value;
                } else {
                   
                   return '<span><audio src="'+Ext.ip + '/audio/' + value + '" preload="auto"></audio><img class="play-audio" style="width:24px;height:24px;background:transparent;" src="' +Ext.ip + '/images/output.png"/></span>';
                }
             },
             
             customCss: function(value) {
                console.log(4444)
               return value === true ? 'client-info' : 'my-info';
             },
             
             message: function(value) {
              return value === true ? 'client-message' : 'my-message';
            }
            }
        ),
        listeners: {
            'show': function() {
                console.log(4422)
                console.log(this)
            }
        },
        items: [
          {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'open_user_button',
                    ui: 'back',
                    text: '用户'
                }
            ]
          },
          {
            xtype : 'toolbar',
            docked: 'bottom',
            ui: 'gray',
            layout: 'hbox',
            items: [
            {
                xtype: 'button',
                text: '语音',
                width: 50,
                height: 28,
                style: 'margin-top:8px',
                handler: function() {
                    console.log(this)
                    this.parent.items.items[1].show();
                    this.hide();
                    this.parent.items.items[2].show();
                    this.parent.items.items[3].hide();
                 // Ext.create('Ext.Audio').uploadAudio();
                }
            },
             {
                xtype: 'button',
                text: '文字',
                hidden: true,
                width: 50,
                height: 28,
                style: 'margin-top:8px',
                handler: function() {
                    this.parent.items.items[0].show();
                    this.hide();
                    this.parent.items.items[2].hide();
                    this.parent.items.items[3].show();
                }
             },
             {
                xtype: 'button',
                flex: 1,
                hidden: true,
                height: 28,
                style: 'margin-top:8px',
                text: '请按住说话'
            },
            {
                xtype: 'textfield',
                flex: 1,
                id: 'chat_field',
                placeHolder: 'Message'
            },
           // { xtype: 'spacer' },
            {
                xtype: 'button',
                text: '发送',
                style: 'margin-top:8px',
                width: 50,
                height: 28,
                id: 'send_message_button'
            }
            ]
        }
       ]
    }
});
        