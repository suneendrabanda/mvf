Ext.define('MVF.view.ProviderOrder', {
    extend: 'Ext.navigation.View',
    xtype: 'ProviderOrder',
    id:'ProviderOrder',
    requires : [
	'Ext.ux.AccordionList'
    ],
    config:{
        navigationBar:{
           hidden: true
         },
        items:[
            {
                xtype:'panel',
                height:'100%',
                width:'100%',
                style:{
                    'background-color': '#FFFFFF'
                },
                items:[
                    {
                        xtype: 'panel',
                        itemId: 'infoBar',
                        width: '100%',
                        height: '70px',
                        style: {
                            'background-color': '#DFD9CF'
                        },
                        items: [{
                            xtype: 'panel',
                            width: '95%',
                            height: '65px',
                            layout: 'hbox',
                            margin: 'auto',
                            padding: '15px 0',
                            items: [{
                                xtype: 'panel',
                                html: '<div style="overflow: hidden; height:45px;width:45px;border-radius:50%; background-color: gray; position:relative; float:left; margin-right:5px;"><img style="max-width:100%" src="resources/patient_images/Sandra.png" alt=""/></div><p style="font-size: 20px; margin-top: -5px;">MAVERICK, SANDRA</p> Allergies: No Known Allergies',
                                flex: 1.1,
                                style: {
                                    'font-size': '14px'
                                }
                            }, {
                                xtype: 'panel',
                                html: '<b>MRN: 0011200</b> <br/> Inpatient FIN: 3019558',
                                flex: 0.65,
                                padding: '0 0 0 10px',
                                style: {
                                    'border-left': '1px solid',
                                    'font-size': '14px',
                                    'padding': '20px'
                                }
                            }, {
                                xtype: 'panel',
                                html: 'Admit Dt: 07/30/2014 5:00 <br/>Discharge Dt: <No - Discharge Date>',
                                flex: 1,
                                padding: '0 0 0 10px',
                                style: {
                                    'border-left': '1px solid',
                                    'font-size': '14px'
                                }
                            }, {
                                xtype: 'panel',
                                html: 'Location: EULH Neur/Ped B; 415 <br/>PCP: CASPER, RANDALL J',
                                padding: '0 0 0 10px',
                                flex: 1,
                                style: {
                                    'border-left': '1px solid',
                                    'font-size': '14px'
                                }
                            }]
                        }]

                    },
                    {
                        xtype:'container',
                        width:'100%',
                        height:'10%',
                        layout:'hbox',
                        style:{
                            //'border': '1px #9E9D8B solid',
                        },
                        items:[
                            {
                                xtype:'image',
                                src:'resources/custom_images/Provider_Orders.png',
                                height:'85px',
                                width:'60px',
                                style:{
                                    'margin-left':'3%',
                                    //'margin-top':'1%'
                                }
                            },
                            {
                                xtype:'label',
                                html:'Provider Orders',
                                style:{
                                        'margin-top': '2%',
                                        //'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSansLight'
                                    }
                            },
                            {
                                xtype:'button',
                                ui:'plain',
                                html: '<div style="text-align: center; border: 1px solid black; padding: 5px">REQUEST ORDER</div>',
                                itemid:'requestorder',
                                width:'170px',
                                height:'30px',
                                style:{
                                       'margin-left':'33%',
                                       'margin-top':'2.5%',
                                       'font-size':'12px'
                                    }
                            },
                            {
                                xtype:'button',
                                ui:'plain',
                                html: '<div style="text-align: center; border: 1px solid black; padding: 5px">PATIENT SUMMARY</div>',
                                itemid:'BackToPatientsummary',
                                width:'170px',
                                height:'30px',
                                style:{
                                       //'margin-left':'2%',
                                       'margin-top':'2.5%',
                                       'font-size':'12px'
                                    }
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        width:'92%',
                        height:'81%',
                        scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
                        style:{
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                //'margin': 'auto',
                                'margin-left': '4%',
                                'margin-top': '',
                                'background-color': '#FFFFFF'
                        },
                        items:[
                            //medication 
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'POMedications',
                                html: '<div style="text-align: left;padding: 5px">Medications</div>',
                                style:{
                                         'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'MedRecords',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '12px',
                                    //'margin-left': '3%',
                                }
                            },
                            //NurseOrders
                            
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'NurseOrders',
                                html: '<div style="text-align: left;padding: 5px">Nursing Orders</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'NurseRecords',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '12px',
                                    //'margin-left': '3%',
                                }
                            },
                            //Activities of daily lving
                            
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'ActDailyLiving',
                                html: '<div style="text-align: left;padding: 5px">Activities of Daily Living</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'ActDailyLivingOrder',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                            //Dietorder
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'DietOrderbt',
                                html: '<div style="text-align: left;padding: 5px">Diet Order</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'DietOrder',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                            //Lab orders
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'LabOrderbt',
                                html: '<div style="text-align: left;padding: 5px">Lab Orders</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'LabOrders',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                            //imaging orders
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'ImagingOrderbt',
                                html: '<div style="text-align: left;padding: 5px">Imaging Orders</div>',
                                style:{
                                        // 'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'ImagingOrder',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                            //respiratory orders
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'RespOrderbt',
                                html: '<div style="text-align: left;padding: 5px">Respiratory Orders</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'RespOrder',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                            //other orders
                            {
                                xtype:'button',
                                ui:'plain',
                                itemid:'OtherOrderbt',
                                html: '<div style="text-align: left;padding: 5px">Other Orders</div>',
                                style:{
                                         //'margin-top': '1%',
                                         'margin-left': '1%',
                                         'font-family': 'openSansSemiBold',
                                         'color': 'rgb(145, 86, 145)',
                                         'font-size': '18px',
                                }
                            },
                            {
                                html:'<hr>'
                            },
                            {
                                xtype:'panel',
                                width:'100%',
                                html:'',
                                itemid:'OtherOrder',
                                hidden:true,
                                style:{
                                    'font-family': 'openSansRegular',
                                    'font-size': '16px',
                                    'margin-left': '3%',
                                }
                            },
                        ]
                    },
                     {
                        xtype: 'toolbar',
                        docked:'bottom',
                        height: '50px',
                        layout: {
                            pack: 'center',
                            type: 'hbox',
                           },
                        items: [

                             {
                              xtype: 'button',
                              cls:'taskButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'noteButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'calcButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'fileButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'bookButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              itemid:'CameraButton',
                              cls:'cameraButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'printButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'searchButtonToolbar'
                             },
                             {
                              xtype: 'button',
                              cls:'helpButtonToolbar'

                             }
                        ]
                    }
                ]
            }
        ]
    }
});