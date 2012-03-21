Ext.define('JiaoYou.model.User', {
    extend: 'Ext.data.Model',
    config: {
       fields: [
                {name: "id",                type: "int"},
                {name: "name",              type: "string"},
                {name: "location",          type: "string"},
                {name: "login_at",         type: "time"},
                {name: 'photo_url',       type: "string"},
                'distance'
            ]
    }
    
});
