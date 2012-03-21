Ext.define('JiaoYou.view.UserList', {
    extend: 'Ext.List',
    xtype: 'user_list',
    config: {
        cls: 'user-list custom-list',
        title: '同城',
        allowDeselect: true,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging'
            },
            { 
                xclass: 'Ext.plugin.PullRefresh',
                refreshFn: function(self) {
                    self.getList().getStore().currentPage = 1;
                    self.getList().getStore().load({params:{
                       name:  window.localStorage.getItem('name'),
                       start: 0,
                       page: 1}
                    });
            }
            }
        ],
        store: 'Users',
        items: {
            xtype: 'toolbar',
            items: [
                { text: '地区', id: 'location_search_button'},
                { xtype: 'spacer' },
                { text: '按距离排序', id: 'by_distance_sort'},
                { html: '同城', xtype:'label', style: 'color:#fff'},
                { text: '按时间排序', id: 'by_time_sort'},
                { xtype: 'spacer' }
            ]
        },
        itemTpl: new Ext.XTemplate(
            '<img src="'+ Ext.ip +'/{photo_url}" />',
            '<div class="user-anthor"></div>',
            '<div class="profile_info">',
                '<div class="profile-content">',
                    '<h2>昵称: {name}</h2>',
                    '<span class="login_at">最近登陆时间: {login_at:this.time_format}</span>',
                    '<p>位置: {location:ellipsis(15)}</p>',
                    '<p>距离: {distance:this.distance}</p>',
                '</div>',
            '</div>',
            {   
               distance: function(value) {
                return distance(value.split("_")[0],value.split("_")[1],window.localStorage.getItem('latitude'),window.localStorage.getItem('longitude'));
               },
                time_format: function(value) {
                   return Ext.Date.format(new Date(value), 'Y-m-d H:i' );
                },
    		    linkify: function(value) {
                   return value.replace(/(http:\/\/[^\s]*)/g, "<a target=\"_blank\" href=\"$1\">$1</a>");
    			}
            }
        )
    }
});
        