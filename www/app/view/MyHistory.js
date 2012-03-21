Ext.define('JiaoYou.view.MyHistory', {
    extend: 'Ext.List',
    xtype: 'my_history',
    require :['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
    config: {
       // baseCls: 'user-list',
        cls: 'custom-list',
        onItemDisclosure:true,
        selectedCls: '',
        fullscreen : true,
        id: 'my_history_list',
        store: 'AccessMyHistorys',
        itemTpl: new Ext.XTemplate(
            '<img src="' + Ext.ip + '{photo_url} " />',
            '<div class="message-list-title"><span>{name}   {age} 岁   {city}</span>',
            '<div class="message-list-anthor message_list_anthor_right"></div>',
            '<div class="message-list-content">{updated_at}</div>',
            '</div>'
        ),
        items: [
          {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    ui: 'back',
                    id: 'back_from_myhistory',
                    text: '设置'
                }
            ]
          }
       ]
       
    }
});