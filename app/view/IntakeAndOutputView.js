Ext.define('MVF.view.IntakeAndOutputView', {
    extend: 'Ext.navigation.View',
    xtype: 'IntakeAndOutputView',
    
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
                    {// label container information
                       xtype:'container',
                       layout:'hbox',
                       items:[
                           {
                               xtype:'label',
                               html:'Vitals / Intake & Output',
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
                    },// end of label container
                    {//  start of main container
                        xtype:'container',
                        width: '950px',
                        height: '100%',
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
                                {//start of header in  main container
                                    xtype:'container',
                                    layout:'hbox',
                                    items:[
                                        {
                                             xtype:'label',
                                             html:'Intake & Output',
                                             style:{
                                                      'margin-top': '2.6%',
                                                       'margin-left': '2%',
                                                       /* font-family: -webkit-pictograph; */
                                                       'font-weight': '900',
                                                       'color': 'rgb(145, 86, 145)',
                                                       'font-size': 'larger'
                                                     }
                                        },
                                        {
                                            xtype:'label',
                                            html:' shift:',
                                            style:{
                                                'margin-top':'3%',
                                                'fontFamily':'openSansRegular',
                                               'font-size':'small',
                                               'margin-left':'18%',
                                            }
                                        },
                                        {
                                            xtype: 'selectfield',
                                            width:'120px',
                                            border:'1 1 1 1',
                                            itemid:'IOshift',

                                            options: [
                                                {text: 'day',  value: 'day'},
                                                {text: 'evening',  value: 'evening'},
                                                {text: 'night',  value: 'night'}

                                            ],

                                            style:{
                                                'margin-left':'0.5%',
                                                'margin-top':'2%',
                                                'fontFamily':'openSansRegular',
                                                'font-size':'small'

                                            }
                                        },
                                        {
                                            xtype:'label',
                                            html:' start:',
                                            style:{
                                                'margin-top':'3%',
                                                'margin-left':'0.5%',
                                                'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }
                                         },
                                         {
                                             xtype: 'datepickerfield',
                                               label: '',
                                               itemid:'IOstartdate',
                                               width:'100px',
                                               value: new Date(),
                                               style:{
                                                    'margin-top': '2%',
                                                    'margin-left':'0.5%',
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
                                                   itemid:'IOenddate',
                                                   width:'100px',
                                                   value: new Date(),
                                                    style:{
                                                        'margin-top': '2%',
                                                         'margin-left':'0.5%',
                                                        'fontFamily':'openSansRegular',
                                                        'font-size':'small'
                                                   }

                                            },
                                            {
                                                xtype:'image',
                                                itemid:'IOviewbuttonid',
                                                src:'resources/custom_images/buttons/view.png',
                                                height:'35px',
                                                width:'150px',
                                                   style:{
                                                       'margin-left':'-3%',
                                                       'margin-top':'2%'
                                                   }

                                            },
                                            {
                                                xtype:'image',
                                                itemid:'IOedittableicon',

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
                                },// end of header in main container
                                {
                                        html:'<hr>',
                                        style:{
                                              'margin-left':'10px',
                                              'margin-right':'10px',
                                              'margin-top':'0.5%',
                                              'margin-bottom':'0.5%'
                                          }
                                  },
                                  {// start of content with in the container
                                     xtype:'container',
                                     layout:'hbox',  
                                     items:[
                                         {// notes container
                                               xtype:'container',
                                                layout:'vbox',
                                                width:'280px',
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

                                                ]
                                         },// end of notes container
                                         {// charts and table contianer
                                             xtype:'container',
                                             layout:'vbox',
                                             items:[
                                                 {// start of chart container for hbox
                                                     xtype:'container',
                                                     layout:'hbox',
                                                     items:[
                                                               {// INTAKE CHART  CONTAINER
                                                                       xtype:'container',
                                                                       width: '305px',
                                                                       height: '320px',
                                                                       layout:'vbox',
                                                                       style: {
                                                                                  'border': '1px #9E9D8B solid',
                                                                                  'borderRightColor':'#9E9D8B',
                                                                                  'borderTopColor': '#AC9C65',
                                                                                  'borderTopWidth': '4px',
                                                                                  'margin-left':'2%',
                                                                                  'background-color': '#FFFFFF'

                                                                              },
                                                                              items:[
                                                                                  {//start of container for Intake label and selectfield
                                                                                      xtype:'container',
                                                                                      layout:'hbox',
                                                                                      items:[
                                                                                          {
                                                                                              xtype:'label',
                                                                                              html:'Intake',
                                                                                              style:{
                                                                                                  'margin-left':'10px',
                                                                                                  'margin-top':'5px',
                                                                                                  'font-weight': '900',
                                                                                                  'color': 'rgb(145, 86, 145)',
                                                                                              }
                                                                                          },
                                                                                          {
                                                                                              xtype:'selectfield',
                                                                                              width:'120px',
                                                                                              border:'1 1 1 1',
                                                                                              itemid:'IntakeSelectID',
                                                                                              name:'IntakeSelectID',
                                                                                              options:[
                                                                                                  {text: 'All',  value: 'all'},
                                                                                                  {text: 'PO',  value: 'IN101'},
                                                                                                  {text: 'IV',  value: 'IN102'},
                                                                                                  {text: 'Blood',  value: 'IN103'},
                                                                                                  {text: 'IVPB',  value: 'IN105'},
                                                                                                  {text: 'Tube Fdg',  value: 'IN106'},
                                                                                                  {text: 'TPN',  value: 'IN107'},
                                                                                                  {text: 'Lipids',  value: 'IN108'},
                                                                                                  {text: 'Breast Feed',  value: 'IN109'},
                                                                                                  {text: 'Other',  value: 'IN104'},
                                                                                                  {text: 'Total In',  value: 'IN110'},
                                                                                              ],
                                                                                              style:{
                                                                                                             'margin-left':'30%',
                                                                                                             'margin-top':'2%',
                                                                                                             'fontFamily':'openSansRegular',
                                                                                                             'font-size':'small'

                                                                                                         }
                                                                                          }
                                                                                      ]
                                                                                  },//end of container for Intake label and selectfield
                                                                                  {
                                                                                      html:'<hr>',
                                                                                      style:{
                                                                                                 'margin-left':'10px',
                                                                                                 'margin-right':'10px'
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      xtype:'container',
                                                                                      layout:'fit',
                                                                                      width:'222px',
                                                                                      height:'242px',
                                                                                      style:{
                                                                                          'margin-left':'10px'
                                                                                      },
                                                                                      items:[
                                                                                          {
                                                                                              xtype:'IOPageIntakeChartView'
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                },// END OF INTAKE CHARTT CONTAINER
                                                                {// OUTPUT CHART CONTAINER
                                                                       xtype:'container',
                                                                       width: '305px',
                                                                       height: '320px',
                                                                       layout:'vbox',
                                                                       style: {
                                                                                  'border': '1px #9E9D8B solid',
                                                                                  'borderRightColor':'#9E9D8B',
                                                                                  'borderTopColor': '#AC9C65',
                                                                                  'borderTopWidth': '4px',
                                                                                  'margin-left':'2%',
                                                                                  'background-color': '#FFFFFF'

                                                                              },
                                                                              items:[
                                                                                  {//START container of label and selectfiels
                                                                                      xtype:'container',
                                                                                      layout:'hbox',
                                                                                      items:[
                                                                                          {
                                                                                              xtype:'label',
                                                                                              html:'Output',
                                                                                              style:{
                                                                                                  'margin-left':'10px',
                                                                                                  'margin-top':'5px',
                                                                                                  'font-weight': '900',
                                                                                                  'color': 'rgb(145, 86, 145)',
                                                                                              }
                                                                                          },
                                                                                          {
                                                                                              xtype:'selectfield',
                                                                                              width:'120px',
                                                                                              border:'1 1 1 1',
                                                                                              itemid:'OutputSelectID',
                                                                                              name:'OutputSelectID',
                                                                                                 options: [
                                                                                                             {text: 'All',  value: 'all'},
                                                                                                             {text: 'Urine',  value: 'OUT101'},
                                                                                                             {text: 'Emesis',  value: 'OUT102'},
                                                                                                             {text: 'Drains',  value: 'OUT103'},
                                                                                                             {text: 'Stool',  value: 'OUT105'},
                                                                                                             {text: 'Ostomy',  value: 'OUT106'},
                                                                                                             {text: 'Unmeasured',  value: 'OUT107'},
                                                                                                             {text: 'Incontinent',  value: 'OUT108'},
                                                                                                             {text: 'Blood',  value: 'OUT109'},
                                                                                                             {text: 'CRRT',  value: 'OUT110'},
                                                                                                             {text: 'Other',  value: 'OUT104'},
                                                                                                             {text: 'Total Out',  value: 'OUT111'},
                                                                                                         ],

                                                                                                  style:{
                                                                                                             'margin-left':'30%',
                                                                                                             'margin-top':'2%',
                                                                                                             'fontFamily':'openSansRegular',
                                                                                                             'font-size':'small'

                                                                                                         }
                                                                                              
                                                                                          }
                                                                                      ]
                                                                                  },//END container of label and selectfiels
                                                                                  {
                                                                                      html:'<hr>',
                                                                                      style:{
                                                                                          'margin-left':'10px',
                                                                                          'margin-right':'10px'
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      xtype:'container',
                                                                                      layout:'fit',
                                                                                      width:'222px',
                                                                                      height:'242px',
                                                                                      cls:'IOPageOutputChart',
                                                                                      style:{
                                                                                          'margin-left':'10px'
                                                                                      },
                                                                                      items:[
                                                                                          //Output pie chart
                                                                                          {
                                                                                              xtype:'IOPageOutputChartView'
                                                                                              
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                }// END OF OUTPUT CHART CONTIANER
                                                     ]
                                                 },// end of chart container
                                                 {// start of intake table
                                                        xtype:'container',
                                                        width: '620px',
                                                        height: '360px',
                                                        layout:'vbox',
                                                        style: {                                                                       'border': '1px #9E9D8B solid',
                                                                'border ':'1px #9E9D8B solid',  
                                                                'borderRightColor':'#9E9D8B',
                                                                'borderTopColor': '#AC9C65',
                                                                'borderTopWidth': '4px',
                                                                'background-color': '#FFFFFF',
                                                                'margin-left':'2%',
                                                                'margin-top':'2%'
                                                               },  
                                                        items:[
                                                           //items for intake table 
                                                           {
                                                               xtype:'container',
                                                               layout:'hbox',
                                                               items:[
                                                                   {
                                                                       xtype:'label',
                                                                       html:'Intake',
                                                                       style:{
                                                                                'margin-top': '10px',
                                                                                'margin-left': '20px',
                                                                                'font-weight': '900',
                                                                                'color': 'rgb(145, 86, 145)',
                                                                                'font-size': 'large'
                                                                              }
                                                                   },
                                                                   {
                                                                        xtype:'image',
                                                                        itemid:'IOPageIntakeEditID',
                                                                        id:'IOPageIntakeEditID',
                                                                        src:'resources/images/edit.png',
                                                                        height:'25px',
                                                                        width:'45px',
                                                                          // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                                           style:{
                                                                               'margin-left':'78%',
                                                                               'margin-top':'2%'
                                                                           }

                                                                    },
                                                               ]
                                                           },
                                                           {
                                                               html:'<hr>',
                                                               style:{
                                                                   padding:'10px',
                                                                   'margin-top':'-10px'
                                                               }
                                                           },
                                                           {
                                                               xtype:'container',
                                                               width:'580px',
                                                               height:'300px',
                                                                //layout:'hbox',
                                                               scrollable: {
                                                                            direction: 'both',
                                                                            directionLock: true
                                                                        },
                                                                items:[
                                                                    {
                                                                        xtype:'panel',
                                                                        itemid:'IntakeTablePanel',
                                                                        style:{
                                                                                    'fontFamily':'openSansRegular',
                                                                                    'font-size':'small',
                                                                                     'margin-left':'20px'
                                                                               }
                                                                    }
                                                                ] 
                                                            }
                                                        ]
                                                 },// end of intake table
                                                 {//start of output table
                                                        xtype:'container',
                                                        width: '620px',
                                                        height: '360px',
                                                        layout:'vbox',
                                                        style: {                                                                       'border': '1px #9E9D8B solid',
                                                                    'border ':'1px #9E9D8B solid',  
                                                                   'borderRightColor':'#9E9D8B',
                                                                   'borderTopColor': '#AC9C65',
                                                                   'borderTopWidth': '4px',
                                                                   'background-color': '#FFFFFF',
                                                                   'margin-left':'2%',
                                                                   'margin-top':'2%'  

                                                                  },  
                                                        items:[
                                                           //items for output table 
                                                           {
                                                               xtype:'container',
                                                               layout:'hbox',
                                                               items:[
                                                                   {
                                                                       xtype:'label',
                                                                       html:'Output',
                                                                       style:{
                                                                                'margin-top': '10px',
                                                                                'margin-left': '20px',
                                                                                'font-weight': '900',
                                                                                'color': 'rgb(145, 86, 145)',
                                                                                'font-size': 'large'
                                                                              }
                                                                   },
                                                                   {
                                                                        xtype:'image',
                                                                        itemid:'IOPageOutputEditID',
                                                                        id:'IOPageOutputEditID',
                                                                        src:'resources/images/edit.png',
                                                                        height:'25px',
                                                                        width:'45px',
                                                                          // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                                           style:{
                                                                               'margin-left':'78%',
                                                                               'margin-top':'2%'
                                                                           }

                                                                    },
                                                               ]
                                                           },
                                                           {
                                                               html:'<hr>',
                                                               style:{
                                                                   padding:'10px',
                                                                   'margin-top':'-10px'
                                                               }
                                                           },
                                                           {
                                                               xtype:'container',
                                                               width:'580px',
                                                               height:'300px',
                                                                //layout:'hbox',
                                                               scrollable: {
                                                                            direction: 'both',
                                                                            directionLock: true
                                                                        },
                                                                items:[
                                                                    {
                                                                        xtype:'panel',
                                                                        itemid:'OutputTablePanel',
                                                                        style:{
                                                                                    'fontFamily':'openSansRegular',
                                                                                    'font-size':'small',
                                                                                     'margin-left':'20px'
                                                                               }
                                                                    }
                                                                ] 
                                                            }
                                                        ]
                                                 }// end of output table
                                             ]
                                         }// end of charts and table container
                                     ]
                                  }// end of content with in the container
                            ]
                    },// end of main container
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