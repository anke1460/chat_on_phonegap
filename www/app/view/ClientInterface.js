Ext.define('JiaoYou.view.ClientInterface', {
    extend: 'Ext.tab.Panel',
    xtype: 'client_interface',
    requires: [
       'JiaoYou.view.DisplayInfo'
    ],
    config: {
        fullscreen : true,
        activeTab: 0,
        tabBar: {
         docked: 'bottom',
         cls: 'tubeTweetTabBar',
         layout: {
             pack: 'center'
         }
        },

        defaults: {
            scrollable: true
        },
        layout: {
            animation: {
                type: 'slide',
                duration: 200
            }
        },
        items: [
             {
                title: '同城',
                iconCls: 'team',
                layout: 'fit',
                items: [
                  {
                    
                    xtype: 'user_main'
                  }
                ]
             },
             {
                title: '消息',
                iconCls: 'home',
                layout: 'fit',
                items: [
                  {
                    xtype: 'message_list',
                    id: 'message_list'
                  }
                ]
             },
             {
                title: '设置',
                iconCls: 'settings',
                layout: 'fit',
                items: [
                   {
                       xtype: 'toolbar',
                       docked: 'top',
                       items: [
                           {
                               xtype: 'spacer'
                           },
                           {
                               text: '退出',
                               id: 'login_out'
                           }
                       ]
                    },
                    {
                      xtype: 'panel',
                      layout: 'fit',
                      items: [
                        {

                          xtype: 'list',
                          store: 'UserModifys',
                          allowDeselect: true,
                          id: 'user_setting',
                          itemTpl: '<div>{name}</div>',
                          onItemDisclosure: function(data) {
                            console.log(this)
                            console.log(data)
                          }
                        }
                      ]
                    }

                ]
             },
             {
                title: '位置',
                iconCls: 'mapTab',
                layout: 'fit',
                items: 
                   {
                    xtype: 'panel',
                    layout: 'fit',
                    items: [
                     {
                       xtype: 'toolbar',
                       docked: 'top',
                       items: [
                           {
                                xtype: 'searchfield',
                                label: '起点',
                                name: 'start',
                                id: 'start'
                            },
                           {
                               xtype: 'spacer'
                           },
                           {
                              xtype: 'searchfield',
                              label: '终点',
                              name: 'end',
                              id: 'end'
                          },
                          {
                            xtype: 'button',
                            text: '搜索',
                            handler: function() {
                               var start = Ext.getCmp('start').getValue();
                                var end = Ext.getCmp('end').getValue();
                                var request = {
                                    origin:start, 
                                    destination:end,
                                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                                };
                                directionsService.route(request, function(response, status) {
                                  if (status == google.maps.DirectionsStatus.OK) {
                                    directionsDisplay.setDirections(response);
                                  }
                                });
                            }
                          }
                       ]
                    },
                    map =  new Ext.Map({
                            title: "Map",
                            iconCls: 'user',

                           // useCurrentLocation: true,
                            mapOptions : {
                                zoom: 12,
                                center: new google.maps.LatLng(window.localStorage.getItem('latitude'), window.localStorage.getItem('longitude')),
                                navigationControlOptions: {
                                    style: google.maps.NavigationControlStyle.DEFAULT
                                }
                            },
                            listeners: {
                              maprender: function(comq, map) {
                              //  infowindow = new google.maps.InfoWindow();  
                                directionsService = new google.maps.DirectionsService();
                                 directionsDisplay = new google.maps.DirectionsRenderer();
                                 directionsDisplay.setMap(map);

                                 console.log(33333)
                                 Ext.data.JsonP.request({
                                    url:  Ext.ip  +'/nearPeople',
                                    callbackKey: 'callback',
                                    params: {
                                      latitude: window.localStorage.getItem('latitude'),
                                      longitude: window.localStorage.getItem('longitude'),
                                      user_id: window.localStorage.getItem('user_id')
                                    },
                                    scope: this,
                                    success: function(result) {
                                      function attachSecretMessage(marker, content) {
                                        var infowindow = new google.maps.InfoWindow({
                                           content: content
                                        });
                                        google.maps.event.addListener(marker, 'click', function() {
                                          infowindow.open(map,marker);
                                        });
                                      }
                                      Ext.each(result, function(data, index){
                                        var marker = new google.maps.Marker({
                                        position: new google.maps.LatLng(data.latitude, data.longitude),
                                        map: map,
                                        title: data.name,
                                        zIndex: index
                                        });
                                       attachSecretMessage(marker, data.name)
                                      })
                                    },
                                    failure: function() {
                                      console.log('aaa');
                                    }
                                  });
    
                           
                              },scope: this
                            }
                         })]
                       
                    
                  }
             }
        ]                
    }
});


/*
function distance(lat1,lon1,lat2,lon2) {
  var R = 6371; // km (change this constant to get miles)
  var dLat = (lat2-lat1) * Math.PI / 180;
  var dLon = (lon2-lon1) * Math.PI / 180; 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  if (d>1) return Math.round(d)+"km";
  else if (d<=1) return Math.round(d*1000)+"m";
  return d;
}
*/
        