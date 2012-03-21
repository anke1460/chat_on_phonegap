Ext.define('JiaoYou.model.Search', {
    extend: 'Ext.data.Model',
    config: {
       fields: [
                {name: "id",    type: "int"},
                {name: "query", type: "string"}
        ]
    }
    
});