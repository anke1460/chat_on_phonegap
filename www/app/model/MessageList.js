Ext.define('JiaoYou.model.MessageList', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
         'photo_url',
         'city',
         'name',
         'age',
         'comment',
         'user_id',
         'is_from_client',
         'total',
         'type'
       ]
    }
});