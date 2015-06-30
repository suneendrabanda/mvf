Ext.define('MVF.view.EditTable', {
    extend: 'Ext.Container',

    xtype: 'EditTable',
    config:{
              items:[
                  {
                      xtype:'container',
                      items:[
                            {
                                          xtype: 'selectfield',
                                          itemid:'editvitalnameid',
                                          name:'vitalname',
                                          store: 'VitalSignsDropDownStore',
                                          valueField:'value',
                                          displayField:'text',
                                          style:{
                                              'margin-top':'10px'
                                          }
                                        },
                                     {
                                          xtype: 'datepickerfield',
                                          itemid:'editdatevalue',
                                          value: new Date(),
                                          style:{
                                              'margin-top':'10px'
                                          }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'edittimevalue',
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
                                      {
                                          xtype:'textfield',
                                          itemid:'vitalsignvalue',
                                          placeHolder:'Enter result here',
                                          //id:'vitalsignvalue',
                                          style:{
                                              'margin-top':'10px'
                                          }
                                                  
                                      },
                                           {
                                                    xtype:'button',
                                                    width:'400px',
                                                    itemid:'updatebutton',
                                                    ui:'action',
                                                    text:'update',
                                                    style:{
                                                        'margin-top':'20px'
                                                    }
                                                    
                                                },
                      ]
                  }
                                            
                                            
                                        
                                    ]
        
       
    }
});