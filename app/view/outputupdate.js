Ext.define('MVF.view.outputupdate', {
    extend: 'Ext.Container',

    xtype: 'outputupdate',
    config:{
        
        items:[
            {
                xtype:'fieldset',
                items:[
                    {
                                          xtype: 'selectfield',
                                          width:'100%',
                                          height:'40px',
                                          itemid:'outputname',
                                           name:'outputname',
                                           
                                           options: [
                                                   {text: 'Urine',  value: 'Urine'},
                                                   {text: 'Emesis',  value: 'Emesis'},
                                                   {text: 'Drains', value: 'Drains'},
                                                   {text: 'Stool',  value: 'Stool'},
                                                   {text: 'Ostomy',  value: 'Ostomy'},
                                                   {text: 'Unmeasured',  value: 'Unmeasured'},
                                                   {text: 'Incontinent',  value: 'Incontinent'},
                                                   {text: 'Blood',  value: 'Blood'},
                                                   {text: 'CRRT',  value: 'CRRT'},
                                                   {text: 'Other',  value: 'Other'},
                                                   {text: 'Total Out',  value: 'Total Out'}
                                               ],
                                               style:{
                                                   'border-width':'2px',
                                                   'border-color':'black'
                                               }
                                           
                                     },
                                     {
                                         xtype:'datepickerfield',
                                         itemid:'outputdate',
                                          width:'100%',
                                            name:'outputdate',
                                            //height:'px',
                                            
                                           // border:2,
                                            //style: 'border-color: black; border-style: solid;',
                                            value: new Date()
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'outputtime',
                                         itemid:'outputtime',
                                         placeHolder:'Enter Time like "1000" for 10:00 AM'
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'outputresult',
                                         itemid:'outputresult',
                                         
                                         placeHolder:'Enter Result'
                                     },
                                      {
				    xtype: 'button',
				    //id: 'SaveButton',
                                    itemid:'outputupdatebutton',
				    ui: 'action',
				    //margin: ,
				    text: 'Update',
                                    
			    }
                                      
                ]
            }	
        ]
    }
});