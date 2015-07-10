Ext.define('MVF.view.IntakeEditView', {
    extend: 'Ext.Container',

    xtype: 'IntakeEditView',
    config:{
              items:[
                  {
                      xtype:'label',
                      html:'Edit Intake values',
                      style:{
                          'color':'#4D3462',
			  'text-align':'left',
			  'font-size':'20px',
			  'font-weight': 'bold',
			  'padding-top': '10px',
			  'padding-left':'2%'
                      }
                  },
                  {
                      xtype:'container',
                      layout:'hbox',
                      items:[
                          {
                            xtype: 'checkboxfield',
                            name : 'IntakeCheck',
                            label: 'Select All',
                            itemid:'IntakeSelectAll',
                            labelWidth:'80%',
                            value: 'IntakeCheck',
                            width:'96px',
                            checked: false
                        },
                      ]
                  },
                  {
                      xtype:'container',
                      layout:'hbox',
                      width:'100%',
                      height:'100%',
                      style:{
                          'margin-top':''
                      },
                      items:[
                            {
                                xtype:'list',
                                title: 'Select items',
                                store: 'IOPageIntakeStore',
                                cls:    'VitalSignsDropDownStore',
                                itemid:'IntakeValues',
                                itemTpl: '<div style="height:5px; margin-bottom:5px;">{name}</div>',
                                styleHtmlContent: false,
                                mode: 'MULTI',
                                disableSelection: false,
                                onItemDisclosure: false,
                                scrollable: true,
                                margin: 0,
                                padding: 0,
                                width:'31%',
                                height:'69%',
                                style:{
                                    'margin-top':'2%',
                                    'margin-left':'2%',
                                    'border':'1px #DDDDDD solid',
                                    'border-top': '5px #AC9C65 solid'
                                },
                              
                            },
                            {
                                xtype:'container',
                                width:'31%',
                                height:'69%',
                                scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
                                style:{
                                    'margin-top':'',
                                    'margin-left':'1%',
                                    'border':'1px #DDDDDD solid',
                                    'border-top': '5px #AC9C65 solid',

                                },
                                items:[
                                    //text fields
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditBlood',
                                                //id:'IntakeEditBlood',
                                                //hidden:'true',
                                                placeHolder:'Enter Blood result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditBreastFeed',
                                                //id:'IntakeEditBreastFeed',
                                                //hidden:'true',
                                                placeHolder:'Enter Breast Feed result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditIV',
                                                //id:'IntakeEditIV',
                                                //hidden:'true',
                                                placeHolder:'Enter IV result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditIVPB',
                                               // id:'IntakeEditIVPB',
                                                //hidden:'true',
                                                placeHolder:'Enter IVPB result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditLipids',
                                                //id:'IntakeEditLipids',
                                                //hidden:'true',
                                                placeHolder:'Enter Lipids result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditOther',
                                                //id:'IntakeEditOther',
                                                //hidden:'true',
                                                placeHolder:'Enter Others result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditPO',
                                                //id:'IntakeEditPO',
                                                //hidden:'true',
                                                placeHolder:'Enter PO result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditTPN',
                                                //id:'IntakeEditTPN',
                                                //hidden:'true',
                                                placeHolder:'Enter TPN result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                    {
                                        xtype:'container',
                                        width:'100%',
                                        height:'41px',
                                        items:[
                                              {
                                                xtype:'textfield',
                                                width:'100%',
                                                height:'41px',
                                                itemid:'IntakeEditTubeFDG',
                                                //id:'IntakeEditTubeFDG',
                                                //hidden:'true',
                                                placeHolder:'Enter Tube Fdg result',
                                                style:{
                                                    'border':'1px #DDDDDD solid',
                                                },
                                              },
                                          ]
                                    },
                                ]
                            },
                            {
                                xtype:'container',
                                layout:'vbox',
                                width:'100%',
                                height:'100%',
                                items:[
                                        {
                                            xtype: 'fieldset',
                                            height:'95px',
                                            width:'37%',
                                            style:{
                                                'margin-top':'1px'
                                            },
                                            items: [{
                                                        xtype: 'datepickerfield',
                                                        label: 'Date:',
                                                        labelAlign:'left',
                                                        itemid:'IntakeeditDate',
                                                        name: 'Date',
                                                        picker: { yearFrom: new Date().getFullYear(), yearTo: new Date().getFullYear() + 5},
                                                        value : { day: new Date().getDate(), month: (new Date().getMonth()+1), year : new Date().getFullYear()}
                                                    },
                                                    {
                                                     xtype:'selectfield',
                                                     label: 'Time:',
                                                     labelAlign:'left',
                                                     name: 'Time',
                                                     itemid:'Intaketime',
                                                      options: [
                                                               {text: '01:00',  value: '01:00'},
                                                               {text: '01:30',  value: '01:30'},
                                                               {text: '02:00',  value: '02:00'},
                                                               {text: '02:30',  value: '02:30'},
                                                               {text: '03:00',  value: '03:00'},
                                                               {text: '03:30',  value: '03:30'},
                                                               {text: '04:00',  value: '04:00'},
                                                               {text: '04:30',  value: '04:30'},
                                                               {text: '05:00',  value: '05:00'},
                                                               {text: '05:30',  value: '05:30'},
                                                               {text: '06:00',  value: '06:00'},
                                                               {text: '06:30',  value: '06:30'},
                                                               {text: '07:00',  value: '07:00'},
                                                               {text: '07:30',  value: '07:30'},
                                                               {text: '08:00',  value: '08:00'},
                                                               {text: '08:30',  value: '08:30'},
                                                               {text: '09:00',  value: '09:00'},
                                                               {text: '09:30',  value: '09:30'},
                                                               {text: '10:00',  value: '10:00'},
                                                               {text: '10:30',  value: '10:30'},
                                                               {text: '11:00',  value: '11:00'},
                                                               {text: '11:30',  value: '11:30'},
                                                               {text: '12:00',  value: '12:00'},
                                                               {text: '12:30',  value: '12:30'},
                                                               {text: '13:00',  value: '13:00'},
                                                               {text: '13:30',  value: '13:30'},
                                                               {text: '14:00',  value: '14:00'},
                                                               {text: '14:30',  value: '14:30'},
                                                               {text: '15:00',  value: '15:00'},
                                                               {text: '15:30',  value: '15:30'},
                                                               {text: '16:00',  value: '16:00'},
                                                               {text: '16:30',  value: '16:30'},
                                                               {text: '17:00',  value: '17:00'},
                                                               {text: '17:30',  value: '17:30'},
                                                               {text: '18:00',  value: '18:00'},
                                                               {text: '18:30',  value: '18:30'},
                                                               {text: '19:00',  value: '19:00'},
                                                               {text: '19:30',  value: '19:30'},
                                                               {text: '20:00',  value: '20:00'},
                                                               {text: '20:30',  value: '20:30'},
                                                               {text: '21:00',  value: '21:00'},
                                                               {text: '21:30',  value: '21:30'},
                                                               {text: '22:00',  value: '22:00'},
                                                               {text: '22:30',  value: '22:30'},
                                                               {text: '23:00',  value: '23:00'},
                                                               {text: '23:30',  value: '23:30'},
                                                               {text: '24:00',  value: '24:00'},
                                                               {text: '24:30',  value: '24:30'}
                                                           ],
                                                           style:{
                                                                'margin-top':'10px'
                                                            }
                                                    },
                                                ]
                                        },
                                        {
                                            xtype:'button',
                                            ui: 'plain',
                                            itemid:'saveIntakebutton',
                                            //id:'patientsummarybutton',
                                            html: '<div style="text-align: center; border: 1px solid black; padding: 5px">SAVE</div>',
                                            width:'170px',
                                            height:'30px',
                                            style:{
                                                   'margin-left':'131px',
                                                   'margin-top':'24%',
                                                   'font-size':'12px'
                                                }
                                        }
                                ]
                            },
                            
                      ]
                  }
                ]
            }
});