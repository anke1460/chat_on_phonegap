Ext.define('JiaoYou.store.Messages', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.Message',
        pageSize: 10,
        proxy: {
            type: 'jsonp',
            url :  Ext.ip  +'/message'
          }
          /*
       data: [
        
        {content: ' hello', is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )},
        {content: ' hello', is_client: false, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )},
        {content: 'who are you', is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )},
        {content: 'who are you', is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )}
        
        ],
       autoLoad: true*/
    }

});
