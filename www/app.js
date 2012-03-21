function mainLaunch(){
    Ext.Loader.setConfig({ enabled: true });
    current_user = {};
    chat_user = {};
    navigator.geolocation.getCurrentPosition(onSuccess, onError);  
    function onError(error) {
        console.log(error);
    }
    Ext.MessageBox.YESNO[0].text='取消';
    Ext.MessageBox.YESNO[1].text='确定 ';

    function onSuccess(position) {
      var  geocoder = new google.maps.Geocoder();
      console.log(position.coords.latitude)
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
           var country = '', city = '', province = '';
           if (results[0]) {
             Ext.each(results[0].address_components, function(d){
                switch (d.types[0])
                {
                    case 'country':
                        country = d.long_name;
                        break

                    case 'administrative_area_level_1':
                        province = d.long_name;
                        break
                    case 'locality':
                       city = d.long_name;
                    default:
                      
                }
             });
           }
           window.localStorage.setItem('latitude', position.coords.latitude);
           window.localStorage.setItem('longitude', position.coords.longitude);
           window.localStorage.setItem('location', results[0].formatted_address);
           window.localStorage.setItem('province', province);
           window.localStorage.setItem('city', city);

        } else {
          alert("Geocoder failed due to: " + status);
        }
      });
    }

     Ext.application({
          name: 'JiaoYou',
          controllers: ['Login','Signup','User', 'Gallery'],
          appFolder: 'app',
          stores: ['Messages','Users', 'Chats', 'MessageList',
                 'DisplayInfos', 'UserModifys', 'AccessMyHistorys', 'Galleries', 'Images'],
          views: ['Login'],
          models : ['User', 'Message', 'Chat', 'MessageList',
                   'DisplayInfo', 'UserInfo', 'UserModify', 'AccessMyHistory', 'Gallery', 'Image'],
          launch: function(){
          }
   });
   
}

