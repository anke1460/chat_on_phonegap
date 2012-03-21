Ext.define('JiaoYou.view.GalleryView', {
    extend: 'Ext.DataView',
    xtype: 'gallery_view',
    config: {
        fullscreen : true,
        store: 'Images',
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="gallery" style="background:url({thumb});">',
                '</div>',
            '</tpl>'
        ),
        items: [
          {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    id: 'back_from_gallery_view',
                    ui: 'back',
                    text: '返回'
                }
            ]
          }
       ]
    }
});
        