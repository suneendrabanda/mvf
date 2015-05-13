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
                                           options: [
                                                   
                                                   {text: 'Pulse',  value: 'Pulse'},
                                                   {text: 'BP', value: 'BP'},
                                                   {text: 'Resp',  value: 'Resp'},
                                                   {text: 'Temp',  value: 'Temp'},
                                                   {text: 'SaO2',  value: 'SaO2'},
                                                   {text: 'Pain',  value: 'Pain'},
                                                   {text: 'Weight',  value: 'Weight'}
                                               ]
                                          
                                     },
                                     {
                                          xtype: 'datepickerfield',
                                          itemid:'editdatevalue',
                                          value: new Date()
                                     },
                                     {
                                         xtype:'selectfield',
                                        // label:'Select Time',
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
                                          itemid:'vitalsignvalue',
                                          placeHolder:'Enter result here'
                                          //id:'vitalsignvalue'
                                                  
                                      },
                                           {
                                                    xtype:'button',
                                                    width:'100px',
                                                    itemid:'updatebutton',
                                                    ui:'action',
                                                    text:'update',
                                                    
                                                },
                      ]
                  }
                                            
                                            
                                        
                                    ]
        
       
    }
});