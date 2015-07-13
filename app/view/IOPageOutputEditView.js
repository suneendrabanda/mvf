Ext.define('MVF.view.IOPageOutputEditView', {
    extend: 'Ext.Container',
    xtype: 'IOPageOutputEditView',
    config:{
              items:[
                  {
                      xtype:'label',
                      html:'Edit Output values',
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
                            name : 'IOOutputCheck',
                            label: 'Select All',
                            itemid:'IOOutputSelectAll',
                            labelWidth:'80%',
                            value: 'IOOutputCheck',
                            width:'96px',
                            checked: false
                        },
                      ]
                  },
                  {
                      xtype:'container',
                      layout:'hbox',
                      width:'100%',
                      height:'88%',
                      style:{
                          'margin-top':''
                      },
                      items:[
                            {
                                xtype:'list',
                                title: 'Select items',
                                store: 'IOPageOutputStore',
                                itemid:'IOOutputValues',
                                itemTpl: '<div style="height:5px; margin-bottom:5px;">{name}</div>',
                                styleHtmlContent: false,
                                mode: 'MULTI',
                                disableSelection: false,
                                onItemDisclosure: false,
                                scrollable: true,
                                margin: 0,
                                padding: 0,
                                width:'31%',
                                height:'90%',
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
                                height:'90%',
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
                                                itemid:'IOOutputEditBlood',
                                                //id:'OutputEditBlood',
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
                                                itemid:'IOOutputEditCRRT',
                                                //id:'OutputEditCRRT',
                                                //hidden:'true',
                                                placeHolder:'Enter CRRT result',
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
                                                itemid:'IOOutputEditDrains',
                                                //id:'OutputEditDrains',
                                                //hidden:'true',
                                                placeHolder:'Enter Drains result',
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
                                                itemid:'IOOutputEditEmesis',
                                                //id:'OutputEditEmesis',
                                                //hidden:'true',
                                                placeHolder:'Enter Emesis result',
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
                                                itemid:'IOOutputEditIncontinent',
                                                //id:'OutputEditIncontinent',
                                                //hidden:'true',
                                                placeHolder:'Enter Incontinent result',
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
                                                itemid:'IOOutputEditOstomy',
                                                //id:'OutputEditOstomy',
                                                //hidden:'true',
                                                placeHolder:'Enter Ostomy result',
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
                                                itemid:'IOOutputEditOther',
                                                //id:'OutputEditOther',
                                                //hidden:'true',
                                                placeHolder:'Enter Other result',
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
                                                itemid:'IOOutputEditStool',
                                                //id:'OutputEditStool',
                                                //hidden:'true',
                                                placeHolder:'Enter Stool result',
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
                                                itemid:'IOOutputEditUnmeasured',
                                                //id:'OutputEditUnmeasured',
                                                //hidden:'true',
                                                placeHolder:'Enter Unmeasured result',
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
                                                itemid:'IOOutputEditUrine',
                                                //id:'OutputEditUrine',
                                                //hidden:'true',
                                                placeHolder:'Enter Urine result',
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
                                width:'40%',
                                height:'100%',
                                items:[
                                        {
                                            xtype: 'fieldset',
                                            height:'95px',
                                            width:'97%',
                                            style:{
                                                'margin-top':'1px'
                                            },
                                            items: [{
                                                        xtype: 'datepickerfield',
                                                        label: 'Date:',
                                                        labelAlign:'left',
                                                        itemid:'IOOutputeditDate',
                                                        name: 'Date',
                                                        picker: { yearFrom: new Date().getFullYear(), yearTo: new Date().getFullYear() + 5},
                                                        value : { day: new Date().getDate(), month: (new Date().getMonth()+1), year : new Date().getFullYear()}
                                                    },
                                                    {
                                                     xtype:'selectfield',
                                                     label: 'Time:',
                                                     labelAlign:'left',
                                                     name: 'Time',
                                                     itemid:'IOOutputtime',
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
                                            itemid:'IOsaveOutputbutton',
                                            //id:'patientsummarybutton',
                                            html: '<div style="text-align: center; border: 1px solid black; padding: 5px">SAVE</div>',
                                            width:'170px',
                                            height:'30px',
                                            style:{
                                                   'margin-left':'131px',
                                                   'margin-top':'74%',
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