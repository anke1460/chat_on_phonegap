Ext.define('JiaoYou.store.DisplayInfos', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.DisplayInfo',
       data: [
        {name: '海洋', photo: 'sss'}
        ],
       autoLoad: true
    }

});