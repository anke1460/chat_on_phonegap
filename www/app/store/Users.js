Ext.define('JiaoYou.store.Users', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.User',
        pageSize: 10,
        proxy: {
          type: 'jsonp',
          extraParams: {
            name:  window.localStorage.getItem('name')
            },
          url :  Ext.ip  +'/users'
        }
    }

});
