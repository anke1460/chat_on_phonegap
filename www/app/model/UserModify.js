Ext.define('JiaoYou.model.UserModify', {
    extend: 'Ext.data.Model',
    config: {
       fields: [
                {name: "id",    type: "int"},
                {name: "name",  type: "string"},
                'title'
            ]
    }
});
