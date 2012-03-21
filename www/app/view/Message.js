Ext.define('JiaoYou.view.Message', {
    extend: 'Ext.DataView',
    xtype: 'message',
    id: 'message_info',
    require :['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
    config: {
        baseCls: 'message',
        fullscreen : true,
        store: 'Messages',
        itemTpl: new Ext.XTemplate(
            '<div class="message-time">{datetime}</div><div class={is_from_client:this.message}> <div class={is_from_client:this.customCss} ><img src=" ' + Ext.ip + '{photo_url}" />',
            '<div class="message-anthor"></div>',
            '<div class="profile_info">',
                '<div class="message-content">',
                    '<div>{comment}</div>',
                '</div>',
            '</div></div></div>',
            {
             customCss: function(value) {
               return value === true ? 'client-info' : 'my-info';
             },
             message: function(value) {
              return value === true ? 'client-message' : 'my-message';
            }
            }
        ),
        items: [
          {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'back_message_list_button',
                    ui: 'back',
                    text: '信息'
                }
            ]
          },
          {
            xtype : 'toolbar',
            docked: 'bottom',
            ui: 'gray',
            items: [
            {
                xtype: 'textfield',
                width: '80%',
                id: 'message_field',
                placeHolder: 'Message'
            },
            { xtype: 'spacer' },
            {
                xtype: 'button',
                text: '发送',
                width: 50,
                height: 30,
                id: 'send_message'
            }
            ]
        }
       ]
    }
});
        