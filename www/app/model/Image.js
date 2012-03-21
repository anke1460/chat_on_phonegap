Ext.define('JiaoYou.model.Image', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        {name: "name", type: "string"},
        {name: "size", type: "string"},
        {name: "date", type: "string"},
        {name: "path", type: "string"},
        {name: "thumb", type: "string"}
       ]
    }
});