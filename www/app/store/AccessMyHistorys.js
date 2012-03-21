Ext.define('JiaoYou.store.AccessMyHistorys', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.AccessMyHistory',
        pageSize: 10,
        proxy: {
          type: 'jsonp',
          url : Ext.ip  +'/access_my_history'
        }
    }

});