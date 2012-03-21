Ext.define('JiaoYou.view.MessageList', {
    extend: 'Ext.List',
    xtype: 'message_list',
    require :['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
    config: {
       // baseCls: 'user-list',
        cls: 'custom-list',
        onItemDisclosure:true,
        selectedCls: '',
        fullscreen : true,
        store: 'MessageList',
        itemTpl: new Ext.XTemplate(
            '<img src="' + Ext.ip + '{photo_url} " />',
            '<div class="message-list-title"><span>{name}   {age} 岁   {city}</span>',
            '<div class="message-list-anthor {is_from_client:this.add_css}"></div>',
            '<div class="message-list-content">{comment}</div>',
            '</div>',
            '<div class="message-total">有{total}条</div>',
            {
                add_css: function(value) {
                    console.log(value)
                    return value == false ? 'message_list_anthor_right' : '';
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
                    hidden: true,
                    id: 'finish_message_edit',
                    text: '完成'
                },
                {
                    xtype: 'button',
                    id: 'edit_message_list',
                    text: '编辑'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: '刷新',
                    id: 'refresh_message_list'
                }
            ]
          }
       ]
       
    }
});
        