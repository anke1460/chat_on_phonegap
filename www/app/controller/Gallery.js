Ext.define('JiaoYou.controller.Gallery', {
    extend: 'Ext.app.Controller',
    config: {
      refs:
      {
          galleryList: 'gallery_list',
          clientInterface: 'client_interface',
          galleryView: 'gallery_view',
          imageView: 'image_view'
      },
      
      control: {
          '#back_from_gallery': {
            tap: 'onBackPersional'
          },
           galleryList: {
             itemtap: 'onGalleryList'
          },

          galleryView: {
            select: 'onSelectImage'
          },

          '#from_image_view': {
            tap: 'onBackGalleryView'
          },

          '#back_from_gallery_view': {
            tap: 'onBackGalleryList'
          }
      }
    },

    onBackGalleryList: function() {
      Ext.Viewport.setActiveItem(this.getGalleryList());
    },
    
    onBackGalleryView: function() {
       Ext.Viewport.setActiveItem(this.getGalleryView());
    },

    onSelectImage: function(self, record ,opts) {
      if (!this.getImageView()) {
        Ext.create('JiaoYou.view.ImageView')
      }
       Ext.Viewport.setActiveItem(this.getImageView());
       for (var i=0; i <record.stores[0].data.items.length; i++) {
        this.getImageView().items.items[1].add({
         html: '<div class="galler-img" style="background: url(' + record.stores[0].data.items[i].data.path +');"></div>'
        });
        this.getImageView().items.items[1].items.items[i].on('pinch', function(e){
          console.log(4444)
          console.log(e)
        })
       }

       
    },

    onBackPersional: function(){
        console.log(this)
        Ext.Viewport.setActiveItem(this.getClientInterface());
    },

    onGalleryList: function() {
        if (!this.getGalleryView()) {
          Ext.create('JiaoYou.view.GalleryView');
        }
        Ext.Viewport.setActiveItem(this.getGalleryView());
    }
  
});