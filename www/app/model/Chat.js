Ext.define('JiaoYou.model.Chat', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        {name: "id",                type: "int"},
        {name: "user_id",           type: "int"},
         'content',
        {name: "datetime",          type: "time"},
        {name: 'is_client',         type: 'boolean'},
        {name: 'photo_url',         type: 'string'},
        'name',
        'audio_id'
       ]/*,
   
      proxy: {
        type : 'localstorage',
        id   : 'message-model'
      }   */
    }
});
