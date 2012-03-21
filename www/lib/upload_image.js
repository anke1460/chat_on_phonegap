 Ext.define('Ext.uploadImage', {
  getPicture: function(config) {
     navigator.camera.getPicture(this.onSuccess, this.onError, {
       quality: config.quality,
       destinationType: config.destinationType,
       sourceType: config.sourceType
     });
  },
  onSuccess: function(imageURI) {
      var options = new FileUploadOptions();
      var ft = new FileTransfer();
      
      options.fileKey= 'file';   
      options.fileName= imageURI.substr(imageURI.lastIndexOf('/')+1);;
      options.mimeType= "image/jpeg";
      options.chunkedMode = false;
      options.params = {
      user_id: window.localStorage.getItem('signup_id')
      };                         

      ft.upload( imageURI, Ext.ip  +'/updatePhoto', success, error, options );
      function success( result ){
        if (eval(result["response"])["success"] == "false") {
          Ext.Msg.alert('提示', eval(result["response"])["msg"]);
          take_photo.hide();
          return;
        }
        Ext.getDom('personal_photo').src = imageURI + "?timestamp=" + Date();
        take_photo.hide();
      }
      
      function error( fileTransferError ){
        Ext.Msg.alert('提示', '照片上传失败');
        take_photo.hide();
      }
  },
  onError: function() {
    Ext.Msg.alert('提示', '照片获取失败');
     take_photo.hide();
  }
 });
 
