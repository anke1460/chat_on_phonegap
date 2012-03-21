Ext.define('JiaoYou.view.DisplayInfo', {
    extend: 'Ext.DataView',
    xtype: 'display_info',
    config: {
       //layout: 'fit',
       // fullscreen : true,
       // fullscreen : true,
        store: 'DisplayInfos',
        itemTpl: new Ext.XTemplate(
            '<div class="personal-photo"><img src="./../www/resources/images/user3.jpg" /></div>',
            '<div class="personal-info"><div class="personal-name">海洋</div>',
            '<div>个人信息</div>',
            '<div class="base-info"><span>nihao</span></div>',
            '</div>'
        )
    }
});
        