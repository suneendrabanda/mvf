Ext.define('MVF.view.CameraView', {
    extend: 'Ext.Container',
    xtype: 'CameraView',
    config:{
        items:[
            {
                xtype:'container',
                width:'100%',
                height:'100%',
                layout:'hbox',
                items:[
                    {
                        xtype:'container',
                        width:'32%',
                        height:'98%',
                        layout:'vbox',
                        style:{
                            'border':'2.5px #DFD9CF solid',
                            'borderTopWidth': 'thick',
                            'borderTopColor': '#AC9C65',
                            'background-color': '#FFFFFF',
                            'margin-left':'2%',
                            //'margin-top':'2%'
                        },
                        items:[
                            {
                                xtype:'label',
                                html:'Take New Picture',
                                style:{
                                    'margin-top': '4.5%',
                                    'margin-left': '5%',
                                    'font-size': '16px',
                                    'font-weight':'600',
                                    'color':'#615F5F',
                                    'fontFamily':'openSansLight'
                                }
                            },
                            {
                                html:'<hr>',
                                style:{
                                        'padding-left': '5%',
                                        'padding-right': '5%'
                                }
                            },
                            {
                                xtype:'container',
                                height:'19%',
                                width:'50%',
                                style:{
                                    'background-color': '#4D3462',
                                    'margin-left':'5%',
                                    'margin-top':'5%'
                                },
                                items:[
                                    {
                                        xtype: 'image',
                                        src:'resources/custom_images/icons/06.png',
                                        height:'51px',
                                        itemid:'TakePicture',
                                       // cls:'cameraButtonToolbar',
                                        style:{
                                            'margin-top':'11px',
                                            'width':'inherit !important'
                                        }
                                    }
                                ]
                            },
                            {
                                xtype:'textfield',
                                width:'90%',
                                height:'35px',
                                itemid:'NameCam',
                                placeHolder:'Name',
                                style:{
                                         'border':'1px #615F5F solid',
                                         'margin-left':'5%',
                                         'margin-top':'5%',
                                         'overflow':'hidden'
                                      },
                            },
                            {
                                xtype:'textfield',
                                width:'90%',
                                height:'35px',
                                itemid:'NameCam',
                                placeHolder:'Description',
                                style:{
                                         'border':'1px #615F5F solid',
                                         'margin-left':'5%',
                                         'margin-top':'4%',
                                         'overflow':'hidden'
                                      },
                            },
                            {
                                xtype:'textfield',
                                width:'90%',
                                height:'35px',
                                itemid:'NameCam',
                                placeHolder:'Keywords',
                                style:{
                                         'border':'1px #615F5F solid',
                                         'margin-left':'5%',
                                         'margin-top':'4%',
                                         'overflow':'hidden'
                                      },
                            },
                            {
                                xtype:'textareafield',
                                maxRows:3,
                                height:'22%',
                                placeHolder:'Note',
                                width:'90%',
                                itemid:'RequestText',
                                style:{
                                        'border':'1px #615F5F solid',
                                        'margin-left':'5%',
                                        'margin-top':'4%',
                                        'overflow':'hidden'
                                      }
                            },
                            {
                                xtype:'container',
                                layout:'hbox',
                                height:'12%',
                                width:'100%',
                                items:[
                                    {
                                        xtype:'label',
                                        html:'Patient:',
                                        style:{
                                            'margin-top': '5.5%',
                                            'margin-left': '5%',
                                            'font-size': '16px',
                                            'font-weight':'600',
                                            'color':'#615F5F',
                                            'fontFamily':'openSansLight'
                                        }
                                    },
                                    {
                                        xtype:'selectfield',
                                        border:'1 1 1 1',
                                        itemid:'PatientName',
                                        style:{
                                                'margin-left':'2%',
                                                'margin-top':'4%',
                                                'width': '65%',
                                                'height': '39px',
                                                'border':'2px #615F5F solid',
                                                'font-size':'15px',
                                                'overflow':'hidden'
                                        }
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        width:'62%',
                        height:'98%',
                        style:{
                            'border':'2px #DFD9CF solid',
                            'borderTopWidth': 'thick',
                            'borderTopColor': '#AC9C65',
                            'background-color': '#FFFFFF',
                            'margin-left':'1.5%',
                            //'margin-top':'2%'
                        },
                        items:[
                            {
                                xtype:'panel',
                                itemid:'CapturedPicture',
                                height:'82%',
                                width:'96%',
                                style:{
                                    'border':'2px #DFD9CF solid',
                                    'margin-left':'2%',
                                    'margin-top':'4%'
                                }
                            },
                            {
                                xtype:'container',
                                layout:'hbox',
                                height:'12%',
                                width:'100%',
                                items:[
                                    {
                                        xtype:'label',
                                        html:'Page:',
                                        style:{
                                            'margin-top': '2.5%',
                                            'margin-left': '5%',
                                            'font-size': '16px',
                                            'font-weight':'600',
                                            'color':'#615F5F',
                                            'fontFamily':'openSansLight'
                                        }
                                    },
                                    {
                                        xtype:'selectfield',
                                        border:'1 1 1 1',
                                        itemid:'PageField',
                                        style:{
                                                'margin-left':'2%',
                                                'margin-top':'2%',
                                                'width': '29%',
                                                'height': '39px',
                                                'border':'2px #615F5F solid',
                                                'font-size':'15px',
                                                'overflow':'hidden'
                                        }
                                    },
                                    {
                                        xtype:'button',
                                        ui: 'plain',
                                        itemid:'SavePicture',
                                        html: '<div style="text-align: center; border: 1px solid black; padding: 5px">SAVE</div>',
                                        width:'23%',
                                        height:'30px',
                                        style:{
                                                 'margin-left':'33%',
                                                 'margin-top':'3%',
                                                 'font-size':'12px'
                                               }
                                    }
                                ]
                            }
                        ]
                        
                    }
                ]
            }
        ]
    }
});