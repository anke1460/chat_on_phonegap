Ext.define('JiaoYou.store.Images', {
    extend: 'Ext.data.Store',
    config: {
        model: 'JiaoYou.model.Image',
        data: [
         {thumb: Ext.ip + '/images/gallery/personal/thumbs/1.jpg',path: Ext.ip + '/images/gallery/personal/1.jpg'},
         {thumb: Ext.ip + '/images/gallery/personal/thumbs/2.jpg',path: Ext.ip + '/images/gallery/personal/2.jpg'},
         {thumb: Ext.ip + '/images/gallery/personal/thumbs/3.jpg',path: Ext.ip + '/images/gallery/personal/3.jpg'},
         {thumb: Ext.ip + '/images/gallery/personal/thumbs/4.jpg',path: Ext.ip + '/images/gallery/personal/4.jpg'}
        ],
       autoLoad: true
    }

});