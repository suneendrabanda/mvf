Ext.define('MVF.view.chemistrylabs', {
    extend: 'Ext.navigation.View',
    xtype: 'chemistrylabs',
    
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
                                        'fontFamily':'openSansLight'
                                    }
                                },
                                {
                                    xtype:'image',
                                    itemid:'chemistryalerticon',
                                    src:'resources/images/alert.png',
                                    height:'10px',
                                    width:'10px',
                                    style:{
                                              'margin-left':'10px',
                                               'margin-top':'40px'
                                           }

                                },
                                {
                                      xtype:'panel',
                                      html:'(0)',
                                      itemid:'NoOfAlerts',
                                       style:{
                                                'margin-left':'5px',
                                                'margin-top': '35px',
                                                'font-size': 'small',
                                                 
                                                }
                                  },

                                 {
                                        xtype: 'selectfield',
                                        width:'120px',
                                        border:'1 1 1 1',
                                        itemid:'chemistrypageid',
                                        
                                        options: [
                                            {text: 'Chemistry',  value: 'chemistrylabs'},
                                            {text: 'Main',  value: 'main'},
                                            {text: 'Microbiology',  value: 'microbiologyview'}
                                            
                                        ],

                                        style:{
                                            'margin-left':'50%',
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
                                       'margin-left':'4%',
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
                                          width:'140px',
                                          store: 'chemistrydropdownstore',
                                          itemid:'chemisrtydropdownvalueid',
                                           name:'chemisrtydropdownvalueid',
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
                                             'margin-left':'18%',
                                             'fontFamily':'openSansRegular',
                                            'font-size':'small'
                                         }
                                      },
                                      {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'chemistrystartdate',
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
                                            'margin-left':'2%',
                                         }
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: '',
                                            itemid:'chemistryenddate',
                                            width:'100px',
                                            value: new Date(),
                                             style:{
                                                 'margin-top': '2%',
                                                 'fontFamily':'openSansRegular',
                                                 'font-size':'small'
                                            }
                                            
                                     },
                                      {
                                         xtype:'image',
                                         itemid:'chemistryviewbuttonid',
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
                                         itemid:'chemistryedittableicon',
                                         id:'chemistryedittableicon',
                                         src:'resources/images/edit.png',
                                         height:'20px',
                                         width:'25px',
                                           // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                            style:{
                                                'margin-left':'3%',
                                                'margin-top':'3%'
                                            }
                                           
                                     }
                                        //end of content here to display above horizontal line
                                    ]
                             },
                             {
                                 html:'<hr>',
                                    style:{
                                        'margin-left':'10px',
                                        'margin-right':'10px',
                                        'margin-top':'0.5%',
                                        'margin-bottom':'0.5%'
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
                                                html:'',
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
                                                html:'',
                                                itemid:'chemistryalertinfo',
                                                style:{
                                                    'margin-left':'40px',
                                                     'margin-top': '12px',
                                                     'font-size': 'initial',
                                                     'font-weight': '500',
                                                     'color':'#ff0000'
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
                                                                 xtype:'container',
                                                                 width:'400px',
                                                                 height:'35px',
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
                                                                        html:'',
                                                                        itemid:'chartviewingid',
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
                                                             },
                                                        
                                                        {
                                                            xtype:'image',
                                                            itemid:'chemistrychartzoomouticon',
                                                            src:'resources/images/zoomout.png',
                                                            height:'20px',
                                                            width:'25px',
                                                              // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                               style:{
                                                                   'margin-left':'130px',
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
                                                           'margin-top':''
                                                       }
                                                },
                                                {
                                                    xtype:'chemistrychartview',
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
                                                                 xtype:'container',
                                                                 layout:'hbox',
                                                                 height:'35px',
                                                                 width:'400px',
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
                                                                 ]
                                                             },
                                                             {
                                                                xtype:'image',
                                                                itemid:'chemistrychartzoomouticon',
                                                                src:'resources/images/zoomout.png',
                                                                height:'20px',
                                                                width:'25px',
                                                                  // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                                   style:{
                                                                       'margin-left':'130px',
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
                                                                  'margin-top':''
                                                              }
                                                       },
                                                       //table container
                                                       {
                                                           xtype:'container',
                                                           width:'580px',
                                                           height:'300px',
                                                           layout:'hbox',
                                                           scrollable: {
                                                                       direction: 'both',
                                                                       directionLock: true
                                                                   },
                                                                   items:[
                                                                       //table goes here
                                                                       {
                                                                            xtype:'panel',
                                                                            itemid:'ChemistryResultsTable',
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
                    //
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