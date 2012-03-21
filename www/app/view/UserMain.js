Ext.define('JiaoYou.view.UserMain', {
    extend: 'Ext.Container',
    xtype: 'user_main',
    requires: [
      'JiaoYou.view.UserList'
    ],
    config: {
      //layout: 'fit',
      layout: 'card',
      activeItem: 1,
      /*
        autoDestroy: false,

        navigationBar: {
            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Edit',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true
                }
            ]
        },
      */
        items: [
          { xtype: 'user_list'}
          
            
        ]
    }
});
