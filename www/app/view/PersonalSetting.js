Ext.define('JiaoYou.view.PersonalSetting', {
    extend: 'Ext.form.Panel',
    xtype: 'personal_setting',
    id: 'se',
    config: {
      fullscreen : true,
      url: Ext.ip + '/update_personal_setting',
      items  : [
        {
         xtype: 'toolbar',
         docked: 'top',
         items: [
             {
                 text: '设置',
                 ui: 'back',
                 id: 'personal_setting_back'
             },
             {
                 xtype: 'spacer'
             },
             {
                 text: '保存',
                 id: 'personal_setting_save'
             }
           ]
          },
          {
              xtype       : 'textfield',
              name        : 'hobby',
              label       : '爱好'
          },
          {
              xtype: 'datepickerfield',
              label: '出生日期',
              name: 'borth',
              dateFormat: 'Y-m-d',
              required    : true,
              picker: { yearFrom: 1950 },
              value: new Date('1990/01/01')
          }, 
          {   
              xtype       : 'selectfield',
              name        : 'martial_status',
              label       : '婚姻',
              required    : true,
              options: [
                {text: '单身',  value: '1'},
                {text: '恋爱中', value: '2'},
                {text: '已婚',  value: '3' }
                ]
          },
            {   
              xtype       : 'selectfield',
              name        : 'income',
              label       : '收入',
              required    : true,
              options: [
                {text: '未填',  value: '1'},
                {text: '>3k/月', value: '2'},
                {text: '>5k/月',  value: '3'},
                {text: '>7k/月',  value: '4'},
                {text: '>1w/月', value: '5'},
                {text: '>2w/月',  value: '6'},
                {text: '>50w/年', value: '7'},
                {text: '>100w/年', value: '8'},
                {text: '保密', value: '9'}
                ]
          },
         {   
              xtype       : 'selectfield',
              name        : 'constellation',
              label       : '星座',
              required    : true,
              options: [
                {text: '未填',  value: '1'},
                {text: '水瓶座', value: '2'},
                {text: '双鱼座',  value: '3'},
                {text: '白羊座',  value: '4'},
                {text: '金牛座', value: '5'},
                {text: '双子座',  value: '6'},
                {text: '巨蟹座',  value: '7'},
                {text: '狮子座', value: '8'},
                {text: '处女座',  value: '9'},
                {text: '天枰座',  value: '10'},
                {text: '天蝎座', value: '11'},
                {text: '射手座',  value: '12'},
                {text: '魔蝎座',  value: '13'}
                ]
          },
          {   
              xtype       : 'selectfield',
              name        : 'search_purpose',
              label       : '交友目的',
              required    : true,
              options: [
                {text: '随缘',  value: '1'},
                {text: '找男友', value: '2'},
                {text: '找女友',  value: '3'},
                {text: '征婚',  value: '4'},
                {text: '与恋人交流', value: '5'},
                {text: '聊天',  value: '6'}
                ]
          },
          {   
              xtype       : 'selectfield',
              name        : 'degree',
              label       : '学历',
              required    : true,
              options: [
                {text: '初中',  value: '1'},
                {text: '高中', value: '2'},
                {text: '中专',  value: '3'},
                {text: '本科',  value: '4'},
                {text: '双学士', value: '5'},
                {text: '硕士',  value: '6'},
                {text: '博士',  value: '7'},
                {text: '博士后', value: '8'}
             ]
          },
           {   
              xtype       : 'selectfield',
              name        : 'profession',
              label       : '职业',
              required    : true,
              options: [
                {text: '在校学生',  value: '1'},
                {text: '求职中', value: '2'},
                {text: '白领',  value: '3'},
                {text: '研发人员',  value: '4'},
                {text: '销售',  value: '5'},
                {text: '老板', value: '6'},
                {text: '自由职业',  value: '7'},
                {text: '无业游民',  value: '8'},
                {text: '创业者', value: '9'},
                {text: '教师',  value: '10'},
                {text: '公务员', value: '11'}
             ]
          }, 
          {
              xtype       : 'numberfield',
              name        : 'height',
              label       : '身高',
              minValue: 100,
              maxValue: 290,
              required    : true
          },
         {
          xtype: 'selectfield',
          label: '身材',
          name: 'figure',
          required    : true,
          options: [
              {text: '标准',  value: '1'},
              {text: '均匀', value: '2'},
              {text: '丰满',  value: '3'},
              {text: '性感',  value: '4'},
              {text: '苗条', value: '5'},
              {text: '高挑',  value: '6'},
              {text: '小鸟依人',  value: '7'},
              {text: '偏瘦', value: '8'},
              {text: '偏胖',  value: '9'},
              {text: '健壮',  value: '10'},
              {text: '肌肉男',  value: '11'}
          ]
        },
        {
          xtype       : 'textareafield',
          name        : 'introduction',
          label       : '自我介绍',
          maxLength   : 250
        }
      ]                                          
     
    }
});
