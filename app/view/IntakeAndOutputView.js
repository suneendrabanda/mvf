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
                               height:'35px',
                               border:'1 1 1 1',
                               itemid:'IOpageid',
                               cls:'borderstyle',        
                                options: [
                                            {text: 'I&O',  value: 'IntakeAndOutputView'},
                                            {text: 'Main',  value: 'LabsMainView'},
                                            //{text: 'Vitals',  value: 'VitalsView'},
                                            
                                            
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
                               ui: 'plain',
                               itemid:'patientsummarybutton',
                               //id:'patientsummarybutton',
                               html: '<div style="text-align: center; border: 1px solid black; padding: 5px">Patient Summary</div>',
                               width:'170px',
                               height:'30px',
                               style:{
                                       'margin-left':'4%',
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
//                        scrollable: {
//                                        direction: 'vertical',
//                                        directionLock: true
//                                    },
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
                                               'margin-left':'23%',
                                            }
                                        },
                                        {
                                            xtype: 'selectfield',
                                            width:'120px',
                                            border:'1 1 1 1',
                                            itemid:'IOshift',
                                            height:'35px',
                                            cls:'borderstyle',
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
                                               height:'35px',
                                               border:'1 1 1 1',
                                               cls:'borderstyle', 
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
                                                   height:'35px',
                                                 border:'1 1 1 1',
                                                 cls:'borderstyle', 
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
                                  {
                                      xtype:'container',
                                      width:'950px',
                                      height:'637px',
                                      layout:'vbox',
                                        scrollable: {
                                                        direction: 'vertical',
                                                        directionLock: true
                                                    },
                                        items:[
                                             {// start of content with in the container
                                                xtype:'container',
                                                layout:'hbox',  
                                                items:[
                                                    {// notes container
                                                          xtype:'container',
                                                           layout:'vbox',
                                                           width:'295px',
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
                                                               {
                                                                   xtype:'label',
                                                                   html:'Notes',
                                                                   style:{
                                                                       'margin-top': '10px',
                                                                       'margin-left': '20px',
                                                                       'font-weight': '900',
                                                                       'color': 'rgb(145, 86, 145)',
                                                                       'font-size': 'large',
                                                                       'fontFamily':'openSansRegular',
                                                                   }
                                                               },
                                                               {
                                                                   html:'<hr>',
                                                                   style:{
                                                                       'margin-top':'6px'
                                                                   }
                                                               },
                                                               {
                                                                xtype:'accordionlist',
                                                                store: Ext.create('MVF.store.IONotesStore'),
                                                                flex: 1,
                                                                height:'77%',
                                                                width:'99%',
                                                                indent: true,
                                                                singleMode: true,
                                                                headerItemTpl: [
                                                                        '<div style="margin-top:-8px;padding-bottom:4px;font-size:14px">{title}</div><div style="padding-bottom:0px;font-size:11px">{date}</div>'
                                                                    ].join(''),
                                                                contentItemTpl: [
                                                                        '<div style="height:100%; margin-bottom:15px; width:99%; font-size:14px; align:justify">{notes}</div>'
                                                                        ].join(''),
                                                                listeners: {
                                                                    initialize: function() {
                                                                        this.load();
                                                                    },
                                                                },
                                                                style:{
                                                                    'margin-left':'1px'
                                                                }
                                                            }
                                                           ]
                                                    },// end of notes container
                                                    {// charts and table contianer
                                                        xtype:'container',
                                                        layout:'vbox',
                                                        height:'1210px',
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
                                                                                                         cls:'borderstyle',
                                                                                                         height:'35px',
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
                                                                                                             {text: 'Total In',  value: 'Total_In'},
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
                                                                                                 width:'305px',
                                                                                                 height:'242px',
                                                                                                 style:{
                                                                                                     //'margin-left':'40px'
                                                                                                 },
                                                                                                 items:[
                                                                                                     {
                                                                                                         xtype:'IOPageIntakeChartView',
                                                                                                         itemid:'IOPageIntakeChartView'
                                                                                                     },
                                                                                                     {
                                                                                                        xtype:'panel',
                                                                                                        html:'No records',
                                                                                                        itemid:'IOPageIntakechartNOrecords',
                                                                                                        id:'IOPageIntakechartNOrecords',
                                                                                                        hidden:'true',
                                                                                                        style:{
                                                                                                            'margin-left':'44px',
                                                                                                            'margin-top':'40%',
                                                                                                            'text-align': '-webkit-center',
                                                                                                            'fontFamily':'openSansRegular',
                                                                                                            'font-size':'smaller',
                                                                                                            'border': '1px #9E9D8B solid',
                                                                                                            'height':'30px',
                                                                                                            'width':'122px'
                                                                                                        }
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
                                                                                                         height:'35px',
                                                                                                         border:'1 1 1 1',
                                                                                                         cls:'borderstyle',
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
                                                                                                                        {text: 'Total Out',  value: 'Total_out'},
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
                                                                                                 width:'305px',
                                                                                                 height:'242px',
                                                                                                 cls:'IOPageOutputChart',
                                                                                                 style:{
                                                                                                     //'margin-left':'10px'
                                                                                                 },
                                                                                                 items:[
                                                                                                     //Output pie chart
                                                                                                     {
                                                                                                         xtype:'IOPageOutputChartView',
                                                                                                         itemid:'IOPageOutputChartView'
                                                                                                     },
                                                                                                     {
                                                                                                        xtype:'panel',
                                                                                                        html:'No records',
                                                                                                        itemid:'IOPageOutputchartNOrecords',
                                                                                                        id:'IOPageOutputchartNOrecords',
                                                                                                        hidden:'true',
                                                                                                        style:{
                                                                                                            'margin-left':'44px',
                                                                                                            'margin-top':'40%',
                                                                                                            'text-align': '-webkit-center',
                                                                                                            'fontFamily':'openSansRegular',
                                                                                                            'font-size':'smaller',
                                                                                                            'border': '1px #9E9D8B solid',
                                                                                                            'height':'30px',
                                                                                                            'width':'117px'
                                                                                                        }
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
                                                                   style: {   'border': '1px #9E9D8B solid',
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
                                                                          height:'280px',
                                                                          style:{
                                                                              'margin-left':'15px'
                                                                          },
                                                                           //layout:'hbox',
                                                                          scrollable: {
                                                                                       direction: 'vertical',
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
                                                                          height:'280px',
                                                                          style:{
                                                                              'margin-left':'15px'
                                                                          },
                                                                           //layout:'hbox',
                                                                          scrollable: {
                                                                                       direction: 'vertical',
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
                                  },
                                 
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