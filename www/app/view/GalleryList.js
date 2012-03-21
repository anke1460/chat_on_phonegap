Ext.define('JiaoYou.view.GalleryList', {
    extend: 'Ext.List',
    xtype: 'gallery_list',
    config: {
        id: 'gallery_list',
        onItemDisclosure:true,
        selectedCls: '',
        fullscreen : true,
        title: '相册',
        allowDeselect: true,
        store: 'Galleries',
        items: {
            xtype: 'toolbar',
            items: [
                { text: '返回', id: 'back_from_gallery'}
            ]
        },
        itemTpl: '{name}'
    }
});