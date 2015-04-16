Ext.define('MVF.view.labs', {
    extend: 'Ext.navigation.View',
    xtype: 'labs',
    
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
                                    html:'Labs',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSans'
                                    }
                                },

                                 {
                                        xtype: 'selectfield',
                                        width:'200px',
                                        border:'1 1 1 1',
                                        itemid:'shiftname',
                                        
                                        options: [
                                            {text: 'CHEMISTRY',  value: 'day'},
                                            
                                        ],

                                        style:{
                                            'margin-left':'50%',
                                            'margin-top':'2%'


                                        }
                                 },
                                 {
                                    xtype:'button',
                                    text:'BACK',
                                    itemid:'back',
                                    width:'170px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'2%',
                                       'font-size':'12px'
                                    }

                            }
                      ]
                   },
                   // content panel
                    {
                        xtype:'container',
                        width: '950px',
                        height: '900px',
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
                                         html:' Chemistry',
                                         style:{
                                               'margin-top': '2.6%',
                                                'margin-left': '3%',
                                                /* font-family: -webkit-pictograph; */
                                                'font-weight': '900',
                                                'color': 'rgb(145, 86, 145)',
                                                'font-size': 'larger'
                                              }
                                      },
                                      {
                                          xtype: 'selectfield',
                                          width:'100px',
                                          itemid:'chemisrtydropdownvalueid',
                                           name:'chemisrtydropdownvalueid',
                                           options: [
                                                   {text: 'MCHC',  value: 'mchc'},
                                                   
                                               ],
                                        style:{
                                            'margin-top': '2.2%',
                                            'margin-left':'20px'
                                        }   
                                      },
                                      {
                                          xtype:'label',
                                          html:' start:',
                                         style:{
                                             'margin-top':'3%',
                                             'margin-left':'14%'
                                         }
                                      },
                                      {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'chemistrystartdate',
                                            width:'130px',
                                            value: new Date(),
                                            style:{
                                                 'margin-top': '2%',
                                            }
                                      },
                                      {
                                         xtype:'label',
                                         html:' end:',
                                         style:{
                                             'margin-top':'3%'
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'chemistryenddate',
                                            width:'130px',
                                            value: new Date(),
                                             style:{
                                                 'margin-top': '2%',
                                            }
                                            
                                     },
                                      {
                                         xtype:'image',
                                         itemid:'viewbuttonid',
                                         src:'resources/custom_images/buttons/view.png',
                                         height:'25px',
                                         width:'150px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'-5%',
                                                'margin-top':'3%'
                                            }
                                           
                                     },
                                     {
                                         xtype:'image',
                                         itemid:'chemistryedittableicon',
                                        
                                         src:'resources/images/edit.png',
                                         height:'20px',
                                         width:'25px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'1%',
                                                'margin-top':'3%'
                                            }
                                           
                                     },
                                          
                                      //add content here to display above horizontal line
                                    
                                  ]
                             },
                             {
                                 html:'<hr>',
                                    style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px',
                                        'margin-top':''
                                    }
                             },
                             {
                                 xtype:'container',
                                 layout:'hbox',
                                  
                                 items:[
                                     //text container
                                     {
                                        xtype:'container',
                                        layout:'vbox',
                                        items:[
                                            //6 containers here
                                            {
                                                   xtype:'label',
                                                    html:' Notes',
                                                    style:{
                                                          'margin-top': '6%',
                                                           'margin-left': '25px',
                                                           /* font-family: -webkit-pictograph; */
                                                           'font-weight': '900',
                                                           'color': 'rgb(145, 86, 145)',
                                                           'font-size': 'larger'
                                                         }
                                            },
                                            {
                                                xtype:'label',
                                                html:'VIEWING:',
                                                style:{
                                                   'margin-left': '25px',
                                                    'margin-top': '10%',
                                                    'font-weight': '600',
                                                    'font-size': 'initial',
                                                }
                                            },
                                            {
                                                xtype:'panel',
                                                html:'MCHC',
                                                itemid:'viewingitem',
                                                style:{
                                                    'margin-left':'40px',
                                                      'margin-top': '12px',
                                                        'font-size': 'initial',
                                                        'font-weight': '500'
                                                }
                                            },
                                            {
                                                xtype:'panel',
                                                html:'Alerts:',
                                                style:{
                                                     'margin-left': '25px',
                                                    'margin-top': '10%',
                                                    'font-weight': '600',
                                                    'font-size': 'initial'
                                                }
                                            },
                                            {
                                                xtype:'panel',
                                                html:'01/06/2015',
                                                itemid:'alertItems',
                                                style:{
                                                    'margin-left':'40px',
                                                      'margin-top': '12px',
                                                        'font-size': 'initial',
                                                        'font-weight': '500'
                                                }
                                            },
                                            {
                                                html:'Hign MCV Count',
                                                style:{
                                                    'margin-left':'40px',
                                                      'margin-top': '12px',
                                                        'font-size': 'initial',
                                                        'font-weight': '500',
                                                        'color':'red'
                                                }
                                            },
                                            {
                                                xtype:'panel',
                                                width:'300px',
                                                html:'Notes',
                                                style:{
                                                   'margin-left': '25px',
                                                    'margin-top': '8%',
                                                    'font-weight': '600',
                                                    'font-size': 'initial'
                                                   
                                                }
                                            },
                                            {
                                                xtype:'panel',
                                                width:'280px',
                                                height:'100px',
                                                html:'<p>The mean corpuscular volume, or MCV, is a measure of the average red blood cell volume (i.e. size)\n\
                                                         that is reported as part of a standard complete blood count.\n\
                                                            It can be calculated (in litres) by dividing the hematocrit by the red blood cell count (number of red blood cells per litre). The result is typically reported in femtolitres.</p>',
                                                style:{
                                                    'margin-left':'40px',
                                                    'margin-top':'4%',
                                                    'font-weight':'normal',
                                                    'font-size':'smaller'
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
                                                            'margin-left': '5%',
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
                                                          html:'Graph View - ',
                                                            style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     },
                                                     {
                                                         xtype:'label',
                                                         html:'MCHC',
                                                         itemid:'chartviewingid',
                                                         style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     },
                                                     {
                                                            xtype:'image',
                                                            itemid:'chemistrychartedittableicon',

                                                            src:'resources/images/edit.png',
                                                            height:'20px',
                                                            width:'25px',
                                                              // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                               style:{
                                                                   'margin-left':'52%',
                                                                   'margin-top':'3%'
                                                               }

                                                        }
                                                         ]
                                                     },//end of items above  hr in line chart
                                                     {
                                                    html:'<hr>',
                                                       style:{
                                                           'margin-left':'10px',
                                                           'margin-right':'10px',
                                                           'margin-top':'-1%'
                                                       }
                                                },
                                                // chart item
                                                 ]       
                                                 
                                             },
                                             {
                                                 //table container
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
                                                            'margin-left': '5%',
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
                                                          html:'Table View - ',
                                                            style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     },
                                                     {
                                                         xtype:'label',
                                                         html:'ALL',
                                                         itemid:'tableviewingid',
                                                         style:{
                                                                  'margin-top': '3%',
                                                                   'margin-left': '3%',
                                                                   /* font-family: -webkit-pictograph; */
                                                                   'font-weight': '800',
                                                                   'color': 'rgb(145, 86, 145)',
                                                                   'font-size': 'medium'
                                                                 }
                                                     },
                                                     {
                                                            xtype:'image',
                                                            itemid:'chemistrytableedittableicon',

                                                            src:'resources/images/edit.png',
                                                            height:'20px',
                                                            width:'25px',
                                                              // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                               style:{
                                                                   'margin-left':'56%',
                                                                   'margin-top':'3%'
                                                               }

                                                        }
                                                         ]
                                                     },//end of items above  hr in line chart
                                                     {
                                                    html:'<hr>',
                                                       style:{
                                                           'margin-left':'10px',
                                                           'margin-right':'10px',
                                                           'margin-top':'-1%'
                                                       }
                                                },
                                                    ]    
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
    }
});