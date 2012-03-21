Ext.define('JiaoYou.model.Message', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        'comment',
        'is_from_client',
        'datetime',
        'photo_url'
       ]
    }
});
