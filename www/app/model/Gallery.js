Ext.define('JiaoYou.model.Gallery', {
    extend: 'Ext.data.Model',
    config: {
       fields: [
            {name: "name", type: "string"},
            {name: "path", type: "string"},
            {name: "last_modified", type: "string"}
        ]
    }
    
});