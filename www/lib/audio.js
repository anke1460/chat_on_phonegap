Ext.define('Ext.Audio',{
  uploadAudio: function() {
       function captureSuccess(mediaFiles) {
          var i, len;
          for (i = 0, len = mediaFiles.length; i < len; i += 1) {
              uploadFile(mediaFiles[i]);
          }       
        }
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        function captureAudio() {
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1, duration: 10});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var options = new FileUploadOptions();
            options.fileKey= 'file';
            options.fileName= mediaFile.name;
            options.params = {
            avatar: window.localStorage.getItem('avatar'),
            user_id: chat_user.id_name
            };      
            alert( mediaFile.name)
            alert(mediaFile.fullPath)
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                Ext.ip + '/uploadAudio',
                function(result) {
                    alert(result)
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    alert(error)
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                options);   
        }
        captureAudio();
  }
})