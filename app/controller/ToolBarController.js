Ext.define("MVF.controller.ToolBarController", {
    extend: "Ext.app.Controller",
    requires: [
          'Ext.device.Camera',
          'Ext.device.Communicator',
        'Ext.device.camera.PhoneGap',
        'Ext.device.camera.Sencha',
        'Ext.device.camera.Simulator'
	],
    config:{
        refs:{
            TakePicture:'[itemid=TakePicture]',
            CapturedPicture:'[itemid=CapturedPicture]'
        },
        control:{
            TakePicture:{
                tap:'OnTakePictureTap'
            }
        }
    },
    init:function(){
        this.CameraOverlay();
    },
    CameraOverlay:function(){
       var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid:'CameraOverlay',
            modal: true,
            hideOnMaskTap: true,
	    centered: true,           
	    width:  Ext.os.deviceType ==='Phone' ? 933 : 933,//'500px',
	    height: Ext.os.deviceType ==='Phone' ? 580 : 580,
            styleHtmlContent: true,
	    hidden: true,
	    items: [
                        {
                            xtype:'titlebar',
                            docked:'top',
                            height:'66px',
                              html:'<div style="font-size:30px;float:left;padding:10px;color:white">Camera</div>',
                              style:{
                                  'background-color': '#4D3462',
                                  'font-family':'openSansLight'
                              }
                        },
                        {
                            xtype: 'CameraView',
			    width: '100%',
			    height: '100%',
                        },
			   
	    ],
	    
        });
       Ext.Viewport.on({
            delegate: '[itemid=CameraButton]',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
                
		//console.log('yes button');
            }
        });     
    },
    OnTakePictureTap:function(){
        console.log('working');
        var picture=this.getCapturedPicture();
        Ext.device.Camera.capture({
            source: 'camera',
            quality: 75,
            width: 200,
            height: 200,
            destination: 'file',
            //scope:this,
            success: function(url) {
                console.log('image');
                
                var htmlTag='<input type="file" capture="camera" accept="image/*" />';
                picture.setHtml(htmlTag);
            }
        });
    }
});