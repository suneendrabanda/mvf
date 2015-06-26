Ext.define('MVF.view.VitalsView', {
    extend: 'Ext.navigation.View',
    xtype: 'VitalsView',
    
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
                   //info bar
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
                   // end of info bar  
                   //header and pageselect
                    {
                      xtype:'container',
                      layout:'hbox',
                      
                      items:[
                          {
                              xtype:'image',
                              height:'90px',
                              width:'140px',
                              src:'resources/images/Vitals.png',
                              style:{
                                  'margin-left':'-8px',
                                  'margin-top':'10px'
                              }
                          },
                          {
                              xtype:'label',
                              html:'Vital Signs / I&O',
                              style:{
                                        'margin-top': '34px',
                                        'margin-left': '-35px',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSansLight'
                                    }
                          },
                          {
                              xtype:'label',
                              html:'Page',
                              style:{
                                  'font-size': '15px',
                                  'fontFamily':'openSansLight',
                                  'margin-top': '45px',
                                  'margin-left': '30%',
                              }
                          },
                          {
                               xtype: 'selectfield',
                               width:'120px',
                               border:'1 1 1 1',
                               itemid:'pageid',
                               options: [
                                            {text: 'Vitals',  value: 'VitalsView'},
                                            {text: 'I&O',  value: 'IntakeAndOutputView'},
                                            {text: 'Main',  value: 'LabsMainView'},
                                            
                                        ],
                                 style:{
                                            'margin-left':'1.5%',
                                            'margin-top':'4%',
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
                                       'margin-left':'3%',
                                       'margin-top':'4%',
                                       'font-size':'12px'
                                    }
                           }
                                
                      ]
                    },
                    {
                        xtype:'container',
                        width:'1000px',
                        height:'600px',
                        //layout:'vbox',
                        scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
                            items:[
                                //box 1
                                    {
                                        xtype:'container',
                                        width: '940px',
                                        height: '500px',
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
                                                    xtype:'container',
                                                    layout:'hbox',
                                                    items:[
                                                        {
                                                            xtype:'label',
                                                            html:'Vital Signs',
                                                            style:{
                                                                'margin-top': '2.6%',
                                                                'margin-left': '3%',
                                                                'font-weight': '900',
                                                                'color': 'rgb(145, 86, 145)',
                                                                'font-size': 'larger'
                                                            }
                                                        },
                                                        {
                                                            xtype:'label',
                                                            html:' Shift :',
                                                            style:{
                                                                'margin-top':'3%',
                                                                'fontFamily':'openSansRegular',
                                                                'font-size':'15px',
                                                                'margin-left':'20%',
                                                            }
                                                        },
                                                        {
                                                            xtype: 'selectfield',
                                                           width:'120px',
                                                           border:'1 1 1 1',
                                                           itemid:'Vitalshift',

                                                           options: [
                                                               {text: 'day',  value: 'day'},
                                                               {text: 'evening',  value: 'evening'},
                                                               {text: 'night',  value: 'night'}

                                                           ],

                                                           style:{
                                                               'margin-left':'10px',
                                                               'margin-top':'2%',
                                                               'fontFamily':'openSansRegular',
                                                               'font-size':'small'

                                                           }
                                                        },
                                                        {
                                                            xtype:'label',
                                                            html:' Start :',
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
                                                              itemid:'Vitalstartdate',
                                                              width:'100px',
                                                              value: new Date(),
                                                              style:{
                                                                   'margin-top': '2%',
                                                                   'margin-left':'10px',
                                                                   'fontFamily':'openSansRegular',
                                                                  'font-size':'small'
                                                              }
                                                        },
                                                        {
                                                           xtype:'label',
                                                           html:' End  :',
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
                                                              itemid:'Vitalenddate',
                                                              width:'100px',
                                                              value: new Date(),
                                                               style:{
                                                                   'margin-top': '2%',
                                                                   'margin-left':'10px',
                                                                   'fontFamily':'openSansRegular',
                                                                   'font-size':'small'
                                                              }

                                                       },
                                                       {
                                                            xtype:'image',
                                                            itemid:'Vitalviewbuttonid',
                                                            src:'resources/custom_images/buttons/view.png',
                                                            height:'35px',
                                                            width:'150px',
                                                              // html:'<img src="resources/images/edit.png" height="25px", width="25px">',
                                                               style:{
                                                                   'margin-left':'-1%',
                                                                   'margin-top':'2%'
                                                               }

                                                        },
                                                    ]
                                                          
                                                },
                                                {
                                                    html:'<hr>',
                                                    style:{
                                                        'padding':'10px',
                                                        'margin-top':'8px'
                                                    }
                                                },
                                            ]
                                    },
                                    //box2
                                    {
                                         xtype:'container',
                                        width: '940px',
                                        height: '400px',
                                        layout:'vbox',
                                        style: {
                                                'border': '1px #9E9D8B solid',
                                                'borderRightColor':'#9E9D8B',
                                                'borderTopColor': '#AC9C65',
                                                'borderTopWidth': '4px',
                                                'margin': 'auto',
                                                'margin-left': '4%',
                                                'margin-top': '15px',
                                                'background-color': '#FFFFFF'

                                            },
                                            items:[]
                                    }
                            ]
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
});
