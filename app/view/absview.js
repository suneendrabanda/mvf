Ext.define('MVF.view.absview', {
    extend: 'Ext.navigation.View',
    xtype: 'absview',
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
              width:'100%',
              height:'100%',
              style:{
                    'background-color': '#FFFFFF'
                }, 
                items:[
                    {// patient info bar
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
                    },// end of patient info bar
                    {
                        xtype:'container',
                        layout:'hbox',
                      
                        items:[
                         
                                {
                                    xtype:'label',
                                    html:'Labs - Arterial Blood Gas',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSansLight'
                                    }
                                },

                                 {
                                        xtype: 'selectfield',
                                        width:'120px',
                                        border:'1 1 1 1',
                                        itemid:'pageid',
                                        
                                        options: [
                                            {text: 'MAIN',  value: 'main'},
                                            {text: 'Chemistry',  value: 'chemistrylabs'},
                                            {text: 'Microbiology',  value: 'microbiologyview'}
                                            
                                        ],

                                        style:{
                                            'margin-left':'30%',
                                            'margin-top':'2%',
                                            'fontFamily':'openSansRegular',
                                            'font-size':'small'

                                        }
                                 },
                                 {
                                    xtype:'button',
                                    text:'BACK',
                                    itemid:'back',
                                    width:'170px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'2%',
                                       'font-size':'12px'
                                    }

                            }
                      ]
                    },
                    {
                       xtype:'container',
                        width: '950px',
                        height: '600px',
                        layout:'vbox',
                        scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
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
                                  xtype:'container',
                                 layout:'hbox',
                                 
                                 items:[
                                     {
                                         xtype:'label',
                                         html:'Arterial Blood Gas',
                                         style:{
                                               'margin-top': '2.6%',
                                                'margin-left': '1%',
                                                /* font-family: -webkit-pictograph; */
                                                'font-weight': '900',
                                                'color': 'rgb(145, 86, 145)',
                                                'font-size': 'larger'
                                              }
                                      },
                                      {
                                          xtype: 'selectfield',
                                          width:'140px',
                                          store: 'ABSDropDownStore',
                                          itemid:'absdropdownvalueid',
                                           name:'absdropdownvalueid',
                                           valueField:'value',
                                           displayField:'text',

                                        style:{
                                            'margin-top': '2.2%',
                                            'margin-left':'24px',
                                             'fontFamily':'openSansRegular',
                                            'font-size':'small'
                                        }   
                                      },
                                      {
                                          xtype:'label',
                                          html:' start:',
                                         style:{
                                             'margin-top':'3%',
                                             'margin-left':'1.5%',
                                             'fontFamily':'openSansRegular',
                                            'font-size':'small'
                                         }
                                      },
                                      {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'absstartdate',
                                            width:'100px',
                                            value: new Date(),
                                            style:{
                                                 'margin-top': '2%',
                                                 'fontFamily':'openSansRegular',
                                                'font-size':'small'
                                            }
                                      },
                                      {
                                         xtype:'label',
                                         html:' end:',
                                         style:{
                                             'margin-top':'3%',
                                             'fontFamily':'openSansRegular',
                                            'font-size':'small',
                                            'margin-left':'1.5%',
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'absenddate',
                                            width:'100px',
                                            value: new Date(),
                                             style:{
                                                 'margin-top': '2%',
                                                 'fontFamily':'openSansRegular',
                                                 'font-size':'small'
                                            }
                                            
                                     },
                                      {
                                         xtype:'label',
                                         html:' shift:',
                                         style:{
                                             'margin-top':'3%',
                                             'fontFamily':'openSansRegular',
                                            'font-size':'small',
                                            'margin-left':'1.5%',
                                         }
                                     },
                                     {
                                         xtype: 'selectfield',
                                        width:'120px',
                                        border:'1 1 1 1',
                                        itemid:'absshift',
                                        
                                        options: [
                                            {text: 'day',  value: 'day'},
                                            {text: 'evening',  value: 'evening'},
                                            {text: 'night',  value: 'night'}
                                            
                                        ],

                                        style:{
                                            'margin-left':'',
                                            'margin-top':'2%',
                                            'fontFamily':'openSansRegular',
                                            'font-size':'small'

                                        }
                                     },
                                      {
                                         xtype:'image',
                                         itemid:'absviewbuttonid',
                                         src:'resources/custom_images/buttons/view.png',
                                         height:'35px',
                                         width:'150px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'-3%',
                                                'margin-top':'2%'
                                            }
                                           
                                     },
                                     {
                                         xtype:'image',
                                         itemid:'absedittableicon',
                                         id:'absedittableicon',
                                         src:'resources/images/edit.png',
                                         height:'20px',
                                         width:'25px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'-2%',
                                                'margin-top':'3%'
                                            }
                                           
                                     }
                                          
                                      
                                    
                                  ]
                            },// end of content above hr line
                            {
                                  html:'<hr>',
                                  style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px',
                                        'margin-top':'0.5%',
                                        'margin-bottom':'0.5%'
                                    }
                            },
                            // start of content with in the box
                            {
                                xtype:'container',
                                 layout:'hbox',
                                  
                                 items:[
                                     //text container
                                     {
                                        xtype:'container',
                                        //layout:'vbox',
                                        width:'320px',
                                        height:'500px',
                                        style:{
                                            'border': '1px #9E9D8B solid',
                                            'margin-left': '10px',
                                            'borderRightColor':'#9E9D8B',
                                            'borderTopColor': '#AC9C65',
                                            'borderTopWidth': '4px'
                                        },
                                        items:[
                                            // content in the notes container here
                                            {// start of notes label hbox
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Notes',
                                                        style:{
                                                            'margin-top': '4%',
                                                            'margin-left': '10px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        itemid:'absalerticon2',
                                                        src:'resources/images/alert-red.png',
                                                        height:'20px',
                                                        width:'20px',
                                                        style:{
                                                                  'margin-left':'30px',
                                                                   'margin-top':'20px'
                                                               }

                                                    },
                                                    {
                                                            xtype:'panel',
                                                            html:'0',
                                                            itemid:'NoOfAlerts',
                                                             style:{
                                                                      'margin-left':'5px',
                                                                      'margin-top': '20px',
                                                                      'font-size': 'medium',

                                                                      }
                                                        },
                                                    {
                                                        xtype:'image',
                                                        itemid:'abscautionicon',
                                                        src:'resources/images/caution-gray.png',
                                                        height:'20px',
                                                        width:'20px',
                                                        style:{
                                                                  'margin-left':'10px',
                                                                   'margin-top':'20px'
                                                               }

                                                    },
                                                    {
                                                            xtype:'panel',
                                                            html:'0',
                                                            itemid:'NoOfCautions',
                                                             style:{
                                                                      'margin-left':'5px',
                                                                      'margin-top': '20px',
                                                                      'font-size': 'medium',

                                                                      }
                                                        },
                                                    {
                                                        xtype:'image',
                                                        itemid:'absnotificationicon',
                                                        src:'resources/images/notification-gray.png',
                                                        height:'20px',
                                                        width:'20px',
                                                        style:{
                                                                  'margin-left':'10px',
                                                                   'margin-top':'20px'
                                                               }

                                                    },
                                                    {
                                                            xtype:'panel',
                                                            html:'0',
                                                            itemid:'NoOfNotifications',
                                                             style:{
                                                                      'margin-left':'5px',
                                                                      'margin-top': '20px',
                                                                      'font-size': 'medium',

                                                                      }
                                                        },
                                                ]
                                            },// end of notes label hbox
                                            {// start of filter and add new button container hbox
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'selectfield',
                                                        width:'140px',
                                                        itemid:'absfilternotesid',
                                                         name:'absfilternotesid',
                                                         options:[
                                                             {text:'FILTER NOTES',value:'filternotes'}
                                                         ],
                                                         style:{
                                                             'fontFamily':'openSansRegular',
                                                             'font-size':'small',
                                                             'margin-left':'10px',
                                                             'margin-top':'2px'
                                                         }
                                                    },
                                                    {
                                                        xtype:'button',
                                                        text:'NEW NOTES',
                                                        itemid:'absAddNewNotes',
                                                        width:'120px',
                                                        height:'30px',
                                                        style:{
                                                            'font-size':'12px',
                                                            'margin-left':'14px',
                                                            'margin-top':'2px'
                                                        }
                                                    }
                                                ]
                                            },// start of filter and add new button container hbox
                                            {
                                                html:'<hr>'
                                            },
                                            {
                                                xtype:'accordionlist',
                                                store: Ext.create('MVF.store.ABGNotesStore'),
                                                flex: 1,
                                                indent: true,
                                                listeners: {
                                                        initialize: function() {
                                                            this.load();
                                                        }
                                                    }
                                                
                                            }
                                            
                                        ]
                                        
                                     },
                                     {
                                         //charts and box container
                                         xtype:'container',
                                         layout:'vbox',
                                         items:[
                                             {
                                                 //chart contaianer
                                                 xtype:'container',
                                                 width: '580px',
                                                 height: '300px',
                                                 layout:'vbox',
                                                 style: {
                                                            'border': '1px #9E9D8B solid',
                                                            'borderRightColor':'#9E9D8B',
                                                            'borderTopColor': '#AC9C65',
                                                            'borderTopWidth': '4px',
                                                            'margin': 'auto',
                                                            'margin-left': '3%',
                                                            'margin-top': '',
                                                            'background-color': '#FFFFFF'

                                                        },
                                                 items:[
                                                     //items for box1 here
                                                     {
                                                         xtype:'container',
                                                         layout:'hbox',
                                                         items:[
                                                             {
                                                          xtype:'label',
                                                          html:'Graph View',
                                                            style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     }
                                                     
                                                    ]
                                                     },//end of items above  hr in line chart
                                                     {
                                                    html:'<hr>',
                                                       style:{
                                                           'margin-left':'10px',
                                                           'margin-right':'10px',
                                                           'margin-top':''
                                                       }
                                                },
                                                {
                                                    xtype:'abschartview',
                                                    style:{
                                                        'margin-top':'2%'
                                                    }
                                                }
                                                // chart item
                                                 ]       
                                                 
                                             },
                                             {
                                                 //table container
                                                  xtype:'container',
                                                 width: '580px',
                                                 height: '400px',
                                                 layout:'vbox',
                                                 style: {
                                                            'border': '1px #9E9D8B solid',
                                                            'borderRightColor':'#9E9D8B',
                                                            'borderTopColor': '#AC9C65',
                                                            'borderTopWidth': '4px',
                                                            'margin': 'auto',
                                                            'margin-left': '3%',
                                                            'margin-top': '17px',
                                                            'background-color': '#FFFFFF'

                                                        },
                                                    items:[
                                                        //items in box2
                                                         {
                                                         xtype:'container',
                                                         layout:'hbox',
                                                         items:[
                                                             {
                                                          xtype:'label',
                                                          html:'Table View',
                                                            style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     },
                                                     
                                                     
                                                         ]
                                                     },//end of items above  hr in line chart
                                                     {
                                                    html:'<hr>',
                                                       style:{
                                                           'margin-left':'10px',
                                                           'margin-right':'10px',
                                                           'margin-top':''
                                                       }
                                                },
                                                //table container
                                                {
                                                    xtype:'container',
                                                    width:'580px',
                                                    height:'300px',
                                                    layout:'vbox',
                                                    scrollable: {
                                                                direction: 'both',
                                                                directionLock: true
                                                            },
                                                            items:[
                                                                //table goes here
                                                                {
                                                                    xtype:'panel',
                                                                    itemid:'ABSTablePanel',
                                                                    style:{
                                                                        'fontFamily':'openSansRegular',
                                                                        'font-size':'small',
                                                                        'margin-left':'20px'
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