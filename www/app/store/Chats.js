Ext.define('JiaoYou.store.Chats', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.Chat',
        pageSize: 20,
        proxy: {
          type: 'jsonp',
          url : Ext.ip  +'/getChat'
        }
    }

});