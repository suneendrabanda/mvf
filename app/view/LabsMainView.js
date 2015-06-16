Ext.define('MVF.view.LabsMainView', {
    extend: 'Ext.navigation.View',
    xtype: 'LabsMainView',
    
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
                    //Patient Information Bar
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
                    },//end of Patient Info bar
                    //page title,page select field container
                    {
                        xtype:'container',
                        layout:'hbox',
                        items:[
                            {
                                xtype:'label',
                                html:'Labs-Main',
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
                                src:'resources/images/buttons.png',
                                height:'20px',
                                width:'15px',
                                style:{
                                          'margin-left':'10px',
                                           'margin-top':'33px'
                                       }
                            },
                            {
                                 xtype:'panel',
                                 html:'(0)',
                                 itemid:'LabsMainAlertsCount',
                                  style:{
                                            'margin-left':'5px',
                                            'margin-top': '35px',
                                            'font-size': 'small',
                                             'color':'red'
                                        }
                            },
                            {
                                xtype: 'selectfield',
                                width:'150px',
                                border:'1 1 1 1',
                                itemid:'labsPageId',
                                id:'labsPageId',
                                options: [
                                            {text: 'Main',  value: 'main'}
                                            
                                         ],
                                style:{
                                        'margin-left':'40%',
                                        'margin-top':'2%',
                                        'fontFamily':'openSansRegular',
                                        'font-size':'small'

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
                                       'margin-left':'28px',
                                       'margin-top':'2%',
                                       'font-size':'12px'
                                    }

                            }
                        ]
                    },//end of title container
                    // main box
                    {
                        xtype:'container',
                        width: '100%',
                        height: '100%',
                        layout:'hbox',
                        items:[
                            //pages details box
                            {
                                xtype:'container',
                                width:'330px',
                                height:'600px',
                                scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
                                style: {
                                            'border': '1px #9E9D8B solid',
                                            'borderRightColor':'#9E9D8B',
                                            'borderTopColor': '#AC9C65',
                                            'borderTopWidth': '4px',
                                            'margin-left': '4%',
                                            'margin-top': '10px',
                                            'background-color': '#FFFFFF'

                                        },
                                        //contents in labs
                                        items:[
                                            //chemistry hbox container
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Chemistry',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons9.png',
                                                        itemid:'labsChemistrypage',
                                                        width:'80px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'130px',
                                                            'margin-top':'10px'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'margin-left':'10px',
                                                    'margin-right':'20px'
                                                }
                                            },
                                            {
                                               xtype:'container',
                                               layout:'hbox',
                                               items:[
                                                   {
                                                       xtype:'label',
                                                       html:'last update',
                                                       style:{
                                                           'margin-left':'20px',
                                                           'font-size':'15px'
                                                       }
                                                   },
                                                   {
                                                       xtype:'label',
                                                       html:'alerts',
                                                       style:{
                                                           'margin-left':'40px',
                                                           'font-size':'15px'
                                                       }
                                                   }
                                               ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:'06/15/2015',
                                                        itemid:'chemistrylastupdate',
                                                        style:{
                                                            'margin-left':'20px',
                                                            'font-size':'12px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons2.png',
                                                        width:'20px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'65px',
                                                            'margin-top':'-3px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabchemistryalertID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/caution-gray.png',
                                                        width:'40px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'0px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabchemistrycautionID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/notification-gray.png',
                                                        width:'30px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'5px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabchemistrynotificationID',
                                                        style:{
                                                            
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>'
                                            },//end of chemistry details
                                            //hematology content
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Hematology',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons9.png',
                                                        itemid:'labhematologypage',
                                                        width:'80px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'110px',
                                                            'margin-top':'10px'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'margin-left':'10px',
                                                    'margin-right':'20px'
                                                }
                                            },
                                            {
                                               xtype:'container',
                                               layout:'hbox',
                                               items:[
                                                   {
                                                       xtype:'label',
                                                       html:'last update',
                                                       style:{
                                                           'margin-left':'20px',
                                                           'font-size':'15px'
                                                       }
                                                   },
                                                   {
                                                       xtype:'label',
                                                       html:'alerts',
                                                       style:{
                                                           'margin-left':'40px',
                                                           'font-size':'15px'
                                                       }
                                                   }
                                               ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:'06/15/2015',
                                                        itemid:'hematologylastupdate',
                                                        style:{
                                                            'margin-left':'20px',
                                                            'font-size':'12px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons2.png',
                                                        width:'20px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'65px',
                                                            'margin-top':'-3px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabhematologyalertID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/caution-gray.png',
                                                        width:'40px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'0px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabhematologycautionID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/notification-gray.png',
                                                        width:'30px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'5px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabhematologynotificationID',
                                                        style:{
                                                            
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>'
                                            },// end of hematology content
                                            //Microbilogy content
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Microbiology',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons9.png',
                                                        itemid:'labmicrobiologypage',
                                                        width:'80px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'100px',
                                                            'margin-top':'10px'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'margin-left':'10px',
                                                    'margin-right':'20px'
                                                }
                                            },
                                            {
                                               xtype:'container',
                                               layout:'hbox',
                                               items:[
                                                   {
                                                       xtype:'label',
                                                       html:'last update',
                                                       style:{
                                                           'margin-left':'20px',
                                                           'font-size':'15px'
                                                       }
                                                   },
                                                   {
                                                       xtype:'label',
                                                       html:'alerts',
                                                       style:{
                                                           'margin-left':'40px',
                                                           'font-size':'15px'
                                                       }
                                                   }
                                               ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:'06/15/2015',
                                                        itemid:'microbiologylastupdate',
                                                        style:{
                                                            'margin-left':'20px',
                                                            'font-size':'12px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons2.png',
                                                        width:'20px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'65px',
                                                            'margin-top':'-3px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'microbiologyalertID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/caution-gray.png',
                                                        width:'40px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'0px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabmicrobiologycautionID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/notification-gray.png',
                                                        width:'30px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'5px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabmicrobiologynotificationID',
                                                        style:{
                                                            
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>'
                                            },//end of microbiology content
                                            //Serology content
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Serology',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons9.png',
                                                        width:'80px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'144px',
                                                            'margin-top':'10px'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'margin-left':'10px',
                                                    'margin-right':'20px'
                                                }
                                            },
                                            {
                                               xtype:'container',
                                               layout:'hbox',
                                               items:[
                                                   {
                                                       xtype:'label',
                                                       html:'last update',
                                                       style:{
                                                           'margin-left':'20px',
                                                           'font-size':'15px'
                                                       }
                                                   },
                                                   {
                                                       xtype:'label',
                                                       html:'alerts',
                                                       style:{
                                                           'margin-left':'40px',
                                                           'font-size':'15px'
                                                       }
                                                   }
                                               ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:'06/15/2015',
                                                        itemid:'serologylastupdate',
                                                        style:{
                                                            'margin-left':'20px',
                                                            'font-size':'12px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons2.png',
                                                        width:'20px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'65px',
                                                            'margin-top':'-3px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'serologyalertID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/caution-gray.png',
                                                        width:'40px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'0px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabserologycautionID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/notification-gray.png',
                                                        width:'30px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'5px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LabserologynotificationID',
                                                        style:{
                                                            
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>'
                                            },// end of serology content
                                            //Aterial blood gas
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Aterial Blood Gas',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons9.png',
                                                        itemid:'lababgpage',
                                                        width:'80px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'58px',
                                                            'margin-top':'10px'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'margin-left':'10px',
                                                    'margin-right':'20px'
                                                }
                                            },
                                            {
                                               xtype:'container',
                                               layout:'hbox',
                                               items:[
                                                   {
                                                       xtype:'label',
                                                       html:'last update',
                                                       style:{
                                                           'margin-left':'20px',
                                                           'font-size':'15px'
                                                       }
                                                   },
                                                   {
                                                       xtype:'label',
                                                       html:'alerts',
                                                       style:{
                                                           'margin-left':'40px',
                                                           'font-size':'15px'
                                                       }
                                                   }
                                               ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                style:{
                                                    'margin-top':'15px'
                                                },
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:'06/15/2015',
                                                        itemid:'abglastupdate',
                                                        style:{
                                                            'margin-left':'20px',
                                                            'font-size':'12px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons2.png',
                                                        width:'20px',
                                                        height:'30px',
                                                        style:{
                                                            'margin-left':'65px',
                                                            'margin-top':'-3px'
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'abgalertID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/caution-gray.png',
                                                        width:'40px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'0px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LababgcautionID',
                                                        style:{
                                                            
                                                        }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/notification-gray.png',
                                                        width:'30px',
                                                        height:'20px',
                                                        style:{
                                                            'margin-left':'5px',
                                                            'margin-top':''
                                                        }
                                                    },
                                                    {
                                                        xtype:'panel',
                                                        html:'0',
                                                        itemid:'LababgnotificationID',
                                                        style:{
                                                            
                                                        }
                                                    }
                                                ]
                                            },
                                            // end on aterial blood group
                                        ]//end of contents in labs
                            },//end of pages details
                            //lab details box
                            {
                                xtype:'container',
                                width:'600px',
                                height:'600px',
                                style: {
                                            'border': '1px #9E9D8B solid',
                                            'borderRightColor':'#9E9D8B',
                                            'borderTopColor': '#AC9C65',
                                            'borderTopWidth': '4px',
                                            //'margin': 'auto',
                                            'margin-left': '10px',
                                            'margin-top': '10px',
                                            'background-color': '#FFFFFF'

                                        },
                                        items:[
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'label',
                                                        html:'Most Recent Values',
                                                        style:{
                                                             'margin-top': '10px',
                                                             'margin-left': '20px',
                                                             'font-weight': '900',
                                                             'color': 'rgb(145, 86, 145)',
                                                             'font-size': 'larger'
                                                           }
                                                    },
                                                    {
                                                        xtype:'image',
                                                        src:'resources/images/buttons.png',
                                                        height:'20px',
                                                        width:'15px',
                                                        style:{
                                                                  'margin-left':'10px',
                                                                   'margin-top':'18px'
                                                               }
                                                    },
                                                    {
                                                         xtype:'panel',
                                                         html:'(0)',
                                                         itemid:'LabsMainAlertsCount',
                                                          style:{
                                                                    'margin-left':'5px',
                                                                    'margin-top': '18px',
                                                                    'font-size': 'small',
                                                                     'color':'red'
                                                                }
                                                    },
                                                    {
                                                        xtype:'label',
                                                        html:'Date:',
                                                        style:{
                                                            'margin-left':'112px',
                                                            'margin-top':'18px',
                                                            'font-size':'14px'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'datepickerfield',
                                                          label: '',
                                                          itemid:'LabsMainDate',
                                                          width:'100px',
                                                          value: new Date(),
                                                          style:{
                                                               'margin-top': '2%',
                                                               'margin-left':'10px',
                                                               'fontFamily':'openSansRegular',
                                                              'font-size':'small'
                                                          }
                                                    },
                                                ]
                                            },
                                            {
                                                html:'<hr>',
                                                style:{
                                                    'padding-left':'10px',
                                                    'padding-right':'10px'
                                                }
                                            },
                                            {
                                                xtype:'container',
                                                layout:'vbox',
                                                items:[
                                                    {
                                                        xtype:'panel',
                                                        html:''
                                                    }
                                                 ]           
                                            }
                                        ]
                            }//end of lab detail box
                        ]
                    },//end of main box
                    //bottom tab bar
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
                ]//end of contents
            }
        ]
    }
});
    