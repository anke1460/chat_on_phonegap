Ext.define('JiaoYou.store.MessageList', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.MessageList',
        pageSize: 10,
        proxy: {
          type: 'jsonp',
          extraParams: {
            name:  window.localStorage.getItem('name')
            },
          url : Ext.ip  +'/message_list'
        }
    }

});
