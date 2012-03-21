/**
 * This is chat client based on socket.io
 * Copyright(c) 2012 zuoyonghui <jobs@zuoyonghui.com>
 * 
 */


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

Ext.define('Ext.data.ChatClient', {
	extend: 'Ext.util.Observable',

  constructor: function(config) {
		config = config || {};
		this.socket = new io.connect(Ext.ip ,{port:3000});
		
		var socket = this.socket;
		socket.on('connect', function() {
		var name = config.uid;
		socket.emit('user login',  name);
		});
		
		
		socket.on('public message', function(from, msg){
			console.log(form)
			console.log(msg)
		});
		
		socket.on('private message', function(meta, msg){
			console.log("9999999")
			if (meta.from != chat_user.id_name) {
				console.log('from other user')
			} else {
				console.log('user user')
				console.log(meta)
				if (Ext.getCmp('message_info')) {
					Ext.getCmp('message_info').getStore().add({photo_url:meta.photo_url, comment: msg, is_from_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )});
				}
				if (Ext.getCmp('chat_page')) {
					Ext.getCmp('chat_page').getStore().add({photo_url:meta.photo_url, content: msg, is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )});
				}
				
			}
	//		config.chat_store.add({content: msg, is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )});

;		});
		
		socket.on('system message', function(msg){
			console.log('ststem')
			console.log(msg)
		});
		
		socket.on('online users', function(n){
		//	Ext.each(ns, function(n) {
			var record = { name: n, location: '武汉', province: '湖北', last_login_at: Ext.Date.format(new Date, 'Y-m-d H:i' ), profile_image_url:"./../../www/resources/images/user1.jpg" };
			config.users_store.add(record);
		//	});
		});

		socket.on('audio', function(meta, data) {

	 	   Ext.getCmp('chat_page').getStore().add({audio_id: Ext.id(), photo_url:meta.photo_url, content: data, is_client: true, datetime: Ext.Date.format(new Date, 'Y-m-d H:i' )});
           var playBtn = Ext.DomQuery.select('#chat_page .play-audio');
           Ext.get(playBtn(playBtn.length - 1)).on('tap', function(t) {
              Ext.get(playBtn(playBtn.length - 1)).parent().query('audio')[0].play();
           });
           playBtn(playBtn.length - 1).play();
		});
		
		socket.on('disconnect', function(n){
		  var record = { name: n, location: '武汉', province: '湖北', last_login_at: Ext.Date.format(new Date, 'Y-m-d H:i' ), profile_image_url:"./../../www/resources/images/user1.jpg" };
		  config.users_store.add(record);
		});
		
		
		socket.on('message error', function(to, msg){
			console.log('message error')
			console.log(to)
			console.log(msg)
		});	

				
		this.callParent([config]);
  },
	emit: function(options,meta,msg,fn) {
   console.log(options)
	 this.socket.emit(options,meta,msg,fn);
  }
});
