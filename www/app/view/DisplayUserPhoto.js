Ext.define('JiaoYout.view.DisplayUserPhoto', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'display_user_photo',
 
    config: {
        image: true,
 
        name: {
            cls: 'x-name',
            flex: 1
        },
 
        slider: {
            flex: 2
        },
 
        layout: {
            type: 'hbox',
            align: 'center'
        }
    }
});