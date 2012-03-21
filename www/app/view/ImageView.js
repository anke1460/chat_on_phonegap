Ext.define('JiaoYou.view.ImageView', {
    extend: 'Ext.Container',
    xtype: 'image_view',
    config: {
        fullscreen : true,
        layout: 'fit',
        id: 'image_view',
        items: [
           {            
              xtype  : 'toolbar',
              docked : 'top',                
              items  : [
                {
                  id: 'from_image_view',
                  text  : '返回',
                  ui    : 'back'  
                }
              ]            
          },
          {
            xtype: 'carousel',
            indicator: false,
            defaults: {
                scroll: 'vertical'
            },
            listeners: {
              afterrender: function(e,s) {
                console.log(45)
                console.log(e)
                console.log(s)
              },
              pinch:  function(e, node, options, eOpts) {
                console.log('pinch')
                console.log(node)
              },
              doubletap: function(e, node) {
                console.log('dou')
                console.log(node)
              } ,
              itemdoubletap: function(self, item) {
                console.log('items tap')
                console.log(item)
              },
              tap: function() {
                console.log(tap)
              }

            }
          }
        ],
           listeners: {
              pinch:  function(e, node, options, eOpts) {
                console.log('1111pinch')
                console.log(node)
              },
              doubletap: function(e, node) {
                console.log('1111dou')
                console.log(node)
              } ,
              itemdoubletap: function(self, item) {
                console.log('1111items tap')
                console.log(item)
              }
            }                
    }
});