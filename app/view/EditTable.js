Ext.define('MVF.view.EditTable', {
    extend: 'Ext.Container',

    xtype: 'EditTable',
    config:{
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
                                    xtype:'fieldset',
//                                    layout:'vbox',
                                    style:{
                                        'margin-top':'100px'
                                    },
                                    items:[
                                        {
                                          xtype: 'selectfield',
                                          label:'Select Vital Sign',
                                          itemid:'vitalname',
                                          //id:'vitalname',
                                          name:'vitalname',
                                           options: [
                                                   
                                                   {text: 'Pulse',  value: 'pulse'},
                                                   {text: 'BP', value: 'bp'},
                                                   {text: 'Resp',  value: 'resp'},
                                                   {text: 'Temp',  value: 'temp'},
                                                   {text: 'SaO2',  value: 'sao2'},
                                                   {text: 'Pain',  value: 'pain'}
                                               ]
                                          
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                            label: 'Select Date',
                                            itemid:'editdatevalue',
                                           // dateFormat: 'd/M',
                                            //id:'editdatevalue',
                                            
                                            
                                            value: new Date()
                                     },
                                     {
                                         xtype:'selectfield',
                                         label:'Select Time',
                                         itemid:'edittimevalue',
                                         //id:'edittimevalue',
                                         options: [
                                                   
                                                   {text: '0100',  value: '0100'},
                                                   {text: '0200',  value: '0200'},
                                                   {text: '0300',  value: '0300'},
                                                   {text: '0400',  value: '0400'},
                                                   {text: '0500',  value: '0500'},
                                                   {text: '0600',  value: '0600'},
                                                   {text: '0700',  value: '0700'},
                                                   {text: '0800',  value: '0800'},
                                                   {text: '0900',  value: '0900'},
                                                   {text: '1000',  value: '1000'},
                                                   {text: '1100',  value: '1100'},
                                                   {text: '1200',  value: '1200'},
                                                   {text: '1300',  value: '1300'},
                                                   {text: '1400',  value: '1400'},
                                                   {text: '1500',  value: '1500'},
                                                   {text: '1600',  value: '1600'},
                                                   {text: '1700',  value: '1700'},
                                                   {text: '1800',  value: '1800'},
                                                   {text: '1900',  value: '1900'},
                                                   {text: '2000',  value: '2000'},
                                                   {text: '2100',  value: '2100'},
                                                   {text: '2200',  value: '2200'},
                                                   {text: '2300',  value: '2300'},
                                                   {text: '2400',  value: '2400'}
                                               ]
                                        },
                                      {
                                          xtype:'textfield',
                                          label:'Enter value',
                                          itemid:'vitalsignvalue',
                                          //id:'vitalsignvalue'
                                                  
                                      },
                                      {
                                          xtype:'container',
                                          layout:'hbox',
                                          items:[
                                                        {
                                                    xtype:'button',
                                                    width:'100px',
                                                    itemid:'updatebutton',
                                                    ui:'action',
                                                    text:'update',
                                                    style:{
                                                        'margin-left':'40%'
                                                    }
                                                },
                                                {
                                                    xtype:'button',
                                                    width:'100px',
                                                    itemid:'cancelbutton',
                                                    ui:'action',
                                                    text:'cancel',
                                                    style:{
                                                        'margin-left':'10px'
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