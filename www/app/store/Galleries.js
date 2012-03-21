Ext.define('JiaoYou.store.Galleries', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.Gallery',
        pageSize: 20,
        proxy: {
          type: 'jsonp',
          url : Ext.ip  +'/gallery'
        }
    }

});