Ext.define('MVF.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    
    config: {
       navigationBar:{
           hidden: true
       },
        items:[
           
            {
                xtype:'panel',
                width:'100%',
                height:'100%',
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
			    			items:[
			    				{
					    			xtype: 'panel',
					    			html: '<div style="overflow: hidden; height:45px;width:45px;border-radius:50%; background-color: gray; position:relative; float:left; margin-right:5px;"><img style="max-width:100%" src="resources/patient_images/Sandra.png" alt=""/></div><p style="font-size: 20px; margin-top: -5px;">MAVERICK, SANDRA</p> Allergies: No Known Allergies',
					    			flex: 1.1,
					    			style:{
					    				'font-size': '14px'
					    			}
				    			},
					    		{
					    			xtype: 'panel',
					    			html: '<b>MRN: 0011200</b> <br/> Inpatient FIN: 3019558',
					    			flex: 0.65,
					    			padding: '0 0 0 10px',
					    			style: {
					    				'border-left' : '1px solid',
					    				'font-size': '14px',
					    				'padding': '20px'
					    			}
					    		},
					    		{
					    			xtype: 'panel',
					    			html: 'Admit Dt: 07/30/2014 5:00 <br/>Discharge Dt: <No - Discharge Date>',
					    			flex: 1,
					    			padding: '0 0 0 10px',
					    			style: {
					    				'border-left' : '1px solid',
										'font-size': '14px'
					    			}
					    		},
					    		{
					    			xtype: 'panel',
					    			html: 'Location: EULH Neur/Ped B; 415 <br/>PCP: CASPER, RANDALL J',
					    			padding: '0 0 0 10px',
					    			flex: 1,
					    			style: {
					    				'border-left' : '1px solid',
					    				'font-size': '14px'
					    			}
					    		}
			    			]
			    		}]

	    			},
                    {
                      xtype:'container',
                      layout:'hbox',
                      
                      items:[
                         
                                {
                                    xtype:'label',
                                    html:'Vital Signs / Input & Output',
                                    //styleHtmlContent:true,
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'OpenSans'
                                    }
                                },

                                 {
                                        xtype: 'selectfield',
                                        width:'200px',
                                        border:'1 1 1 1',
                                        itemid:'shiftname',
                                        id:'shiftname',
                                        options: [
                                            {text: 'DAY SHIFT',  value: 'day'},
                                            {text: 'EVENING SHIFT ', value: 'evening'},
                                            {text: 'NIGHT SHIFT ',  value: 'night'}
                                        ],

                                        style:{
                                            'margin-left':'19%',
                                            'margin-top':'2%'


                                        }
                                 },
                                 {
                                    xtype:'button',
                                    text:'PATIENT SUMMARY',
                                    itemid:'patientsummarybutton',
                                    id:'patientsummarybutton',
                                    width:'170px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'46px',
                                       'margin-top':'2%',
                                       'font-size':'12px'
                                    }

                            }
                      ]
            },
                    {   
                        xtype:'container',
                        
                        items:[
                        {
                            xtype: 'container',
                            width: '490px',
                            height: '300px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '4%',
                                'margin-top': '',
                                'background-color': '#FFFFFF'
                                
                            },
                              items:[
                                {
                                    layout:'hbox',
                                     items:[
                                         {
                                          xtype: 'selectfield',
                                          width:'100px',
                                          itemid:'vitalname',
                                          id:'vitalname',
                                          name:'vitalname',
                                           options: [
                                                   {text: '-select-',  value: ''},
                                                   {text: 'Pulse',  value: 'pulse'},
                                                   {text: 'BP', value: 'bp'},
                                                   {text: 'Resp',  value: 'resp'},
                                                   {text: 'Temp',  value: 'temp'},
                                                   {text: 'SaO2',  value: 'sao2'},
                                                   {text: 'Pain',  value: 'pain'}
                                               ],
                                        style:{
                                            'margin-left':'10px'
                                        }   
                                     },
                                     {
                                         xtype:'label',
                                         html:' start:',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                            xtype: 'datepickerfield',
                                            label: '',
                                           // dateFormat: 'd/M',
                                            itemid:'startdate',
                                            id:'startdate',
                                            width:'130px',
                                            name:'startdate',
                                            //height:'px',
                                            
                                           // border:2,
                                            //style: 'border-color: black; border-style: solid;',
                                            value: new Date()
                                     },
                                     {
                                         xtype:'label',
                                         html:' end:',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'enddate',
                                           // dateFormat: 'd/M',
                                            id:'enddate',
                                            width:'130px',
                                            name: 'birthday',
                                            value: new Date()
                                     },
                                     
                                     
                                 ]
                                        
                                },
                                {
                                    html:'<hr>',
                                    style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px',
                                        'margin-top':'0px'
                                    }
                                },
                                {
                                    xtype:'linechart',
                                    itemid:'linechartid',
                                    id:'linechartid',
                                    
                                    name:'linechartid'
                                    //hidden:'true'
                                },
                                {
                                     xtype:'bplinechart',
                                    itemid:'bplinechartid',
                                    id:'bplinechartid',
                                    hidden:'true',
                                    name:'bplinechartid'
                                }
                            ]
                           
                        },
                        
                        
                        {
                            xtype: 'container',
                            width: '230px',
                            height: '300px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '52.71%',
                                'margin-top': '-300px',
                                //'float': 'right',
                                'background-color': '#FFFFFF',
                                'position': 'relative'
                            },
                            items:[
                                {
                                    xtype:'container',
                                    layout:'hbox',
                                    items:[
                                        {
                                            xtype:'label',
                                            html:'INTAKE',
                                            style:{
                                                'margin-top':'6px',
                                                'margin-left':'20px',
                                                'font-size':'14px',
                                                 'font-weight':'bolder'
                                            }
                                        },
                                        {
                                             xtype:'panel',
                                                html:'<img src="resources/custom_images/icons/buttons9.png" height="20px", width="20px">',
                                                style:{
                                                    'margin-top':'6px',
                                                    'margin-left':'115px'
                                                }
                                        }
                                    ]
                                },
                                {
                                    html:'<hr>',
                                    style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px'
                                    }
                                },
                                //container for intake pie chart 
                                {
                                    xtype:'container',
                                    width:'222px',
                                    height:'242px',
                                    layout:'fit',
                                    items:[
                                         {
                                           xtype:'intakepiechart'
                                         }
                                    ]
                                }
                                //end of container for intake pie chart
//                                {
//                                    xtype:'intakepiechart'
//                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '230px',
                            height: '300px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderTopColor': '#AC9C65',
                                
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '770px',
                                'margin-top': '-300px',
                                //'float': 'right',
                                'background-color': '#FFFFFF',
                                'position': 'relative'
                            },
                            items:[
                                {
                                   xtype:'container',
                                   layout:'hbox',
                                   items:[
                                       {
                                           
                                           xtype:'label',
                                            html:'OUTPUT',
                                            style:{
                                                'margin-top':'6px',
                                                 'margin-left':'20px',
                                                  'font-size':'14px',
                                                 'font-weight':'bolder'
                                             }     
                                       },
                                       {
                                            xtype:'panel',
                                            html:'<img src="resources/custom_images/icons/buttons9.png" height="20px", width="20px">',
                                            style:{
                                                'margin-top':'6px',
                                                'margin-left':'105px'
                                            }
                                            
                                       }
                                   ]
                                 },
                                 {
                                    html:'<hr>',
                                    style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px'
                                    }
                                },
                                 {
                                    xtype:'outputpiechart'
                                }
                        ]
                        },
                        {
                            xtype: 'container',
                            width: '954px',
                            height: '300px',
                            layout:'vbox',
                            
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderTopColor': '#AC9C65',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '4%',
                                'margin-top': '20px',
                                //'float': 'right',
                                'background-color': '#FFFFFF',
                                'position': 'relative'
                            },
                            items:[
                                {
                                    xtype:'container',
                                    layout:'hbox',
                                    
                                    items:[
                                        {
                                            xtype:'label',
                                            html:'VITALS',
                                            style:{
                                                'margin-left':'20px',
                                                'margin-top':'15px',
                                                'font-size':'18px',
                                                'font-weight':'600'
                                            }
                                        },
                                         {
                                          xtype: 'selectfield',
                                          width:'100px',
                                          itemid:'tablevitalname',
                                          id:'tablevitalname',
                                          name:'tablevitalname',
                                           options: [
                                                   {text: 'All',  value: 'all'},
                                                   {text: 'Pulse',  value: 'pulse'},
                                                   {text: 'BP', value: 'bp'},
                                                   {text: 'Resp',  value: 'resp'},
                                                   {text: 'Temp',  value: 'temp'},
                                                   {text: 'SaO2',  value: 'sao2'},
                                                   {text: 'Pain',  value: 'pain'}
                                               ],
                                        style:{
                                            'margin-left':'20px'
                                        }   
                                     },
                                     {
                                         xtype:'label',
                                         html:' start:',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'tablestartdate',
                                          //  dateFormat: 'd/M',
                                            id:'tablestartdate',
                                            width:'130px',
                                            value: new Date()
                                            
                                     },
                                     {
                                         xtype:'label',
                                         html:' end:',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'tableenddate',
                                          //  dateFormat: 'd/M',
                                            id:'tableenddate',
                                            width:'130px',
                                            value: new Date()
                                            
                                     },
                                     {
                                         xtype:'image',
                                         itemid:'edittableicon',
                                         id:'edittableicon',
                                         src:'resources/images/edit.png',
                                         height:'20px',
                                         width:'25px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'300px',
                                                'margin-top':'10px'
                                            }
                                           
                                     },
                                                                                       
                                        {
                                            xtype:'panel',
                                            html:'<img src="resources/custom_images/icons/buttons9.png" height="20px", width="20px">',
                                            style:{
                                                'margin-left':'20px',
                                                'margin-top':'10px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype:'container',
                                    width: '954px',
                                    height: '300px',
                                    layout:'vbox',
                                    scrollable: {
                                                            direction: 'vertical',
                                                            directionLock: true
                                                        },
                                    items:[
                                        {
                                                xtype:'panel',
                                                itemid:'vitaltablepanel',
                                                id:'vitaltablepanel',
                                                name:'vitaltablepanel',

                                                 style:{
                                                        'margin-left':'28px',
                                                        'margin-top':'20px',
                                                        'font-family':'sarif'


                                                    }
                                            }
                                    ]
                                }
                            ]
                            
                        }
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
