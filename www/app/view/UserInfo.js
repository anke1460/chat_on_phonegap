Ext.define('JiaoYou.view.UserInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'user_info',
    id: 'user_info_',
    config: {
        title: '用户信息',
        //layout: 'vbox',

        items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                    {
                        text: '同城',
                        ui: 'back',
                        id: 'back_user_list'
                    }
                ]  
        },
        {
            xtype: 'container',

            items: [
              {
                xtype: 'container',
                height: 100,
                id: 'user_info_header',
                html:''               
              },
              {
                xtype: 'container',
                layout: 'hbox',
                style: 'margin-top:10px;',
                defaults: {
                    xtype: 'button',
                    align: 'middle',
                    flex: 1,
                    margin: 10
                },
                items: [
                    {
                        text: '约她'
                    },
                    {
                        text: '聊天',
                        id: 'chat_button'
                    },
                    {
                        text: '闪她'
                    }
                ]
              }
            ]
            
        },
        {
               xtype: 'fieldset',
               title: '个人信息',
              // instructions: 'Please enter the information above.',
               defaults: {
                   required: true,
                   labelAlign: 'left',
                   xtype: 'textfield',
                   readOnly: true,
                   labelWidth: '40%'
               },
               items: [
                   {
                       name: 'id',
                       label: '用户ID'
                   },
                   {
                       xtype: 'textfield',
                       name: 'name',
                       label: '昵称'
                   },
                   {
                       xtype: 'textfield',
                       name: 'search_purpose',
                       label: '交友目的'
                   },
                   {
                       xtype: 'textfield',
                       name: 'age',
                       label: '年龄'
                   },
                   {
                       xtype: 'textfield',
                       name: 'location',
                       label: '位置'
                   },
                   {
                       xtype: 'textfield',
                       name: 'login_at',
                       label: '最近登录'
                   },
                      {
                       xtype: 'textfield',
                       name: 'hobby',
                       label: '爱好',
                       required: false
                   },
                   {
                       xtype: 'textfield',
                       name: 'income',
                       label: '收入'
                   },
                   {
                       xtype: 'textfield',
                       name: 'degree',
                       label: '学历'
                   },
                   {
                       xtype: 'textfield',
                       name: 'profession',
                       label: '职业'
                   },
                   {
                       xtype: 'textfield',
                       name: 'martial_status',
                       label: '婚姻状况'
                   },
                    {
                       xtype: 'textfield',
                       name: 'constellation',
                       label: '星座'
                   },
                   {
                       xtype: 'textfield',
                       name: 'status',
                       label: '状态'
                   },
                     {
                       xtype: 'textfield',
                       name: 'figure',
                       label: '身材'
                   },
                   {
                       xtype: 'textfield',
                       name: 'height',
                       label: '身高'
                   },
                   {
                       xtype: 'textareafield',
                       name: 'introduction',
                       label: '自我介绍',
                       required: false
                   }
               ]
           }
        ]
    }
});
