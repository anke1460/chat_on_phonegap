Ext.define('JiaoYou.store.UserModifys', {
  extend: 'Ext.data.Store',
  config: {
    model: 'JiaoYou.model.UserModify',
    data: [
      {id: '1', name: '修改个人信息'},
      {id: '2', name: '查看最近访问我的人'},
      {id: '3', name: '我关注的人'},
      {id: '4', name: '相册管理'},
      {id: '5', name: '提出建议'}
    ],
    /*
    grouper: {
      groupFn: function(record) {
      	console.log(record)
      	console.log(record.get('title'))
        return record.get('title');
      }
    },
    */
    autoLoad: true
  }

});

/*

    {id: '1', name: '爱好', title:'修改个人信息'},
      {id: '2', name: '年龄', title:'修改个人信息'},
      {id: '3', name: '交友目的', title:'修改个人信息'},
      {id: '4', name: '婚姻状态', title:'修改个人信息'},
      {id: '5', name: '星座', title:'修改个人信息'},
      {id: '6', name: '学位', title:'修改个人信息'},
      {id: '7', name: '收入', title:'修改个人信息'},
      {id: '8', name: '职业', title:'修改个人信息'},
      {id: '9', name: '身高', title:'修改个人信息'},
      {id: '10', name: '体型', title:'修改个人信息'},
      {id: '10', name: '自我介绍', title:'修改个人信息'}
      */