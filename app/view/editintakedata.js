Ext.define('MVF.view.editintakedata', {
    extend: 'Ext.Container',

    xtype: 'editintakedata',
    config:{
        items:[
            {
                xtype:'container',
                 items:[
                                   {
                                          xtype: 'selectfield',
                                          width:'100%',
                                          height:'40px',
                                          itemid:'editintakename',
                                           name:'editintakename',
                                           
                                           options: [
                                                   {text: 'PO',  value: 'PO'},
                                                   {text: 'IV',  value: 'IV'},
                                                   {text: 'Blood', value: 'Blood'},
                                                   {text: 'IVPB',  value: 'IVPB'},
                                                   {text: 'Tube Fdg',  value: 'Tube Fdg'},
                                                   {text: 'TPN',  value: 'TPN'},
                                                   {text: 'Lipids',  value: 'Lipids'},
                                                   {text: 'Breast Feed',  value: 'Breast Feed'},
                                                   {text: 'Total In',  value: 'Total In'},
                                                   {text: 'Others',  value: 'Others'}
                                               ],
                                               style:{
                                                   'border-width':'2px',
                                                   'border-color':'black'
                                               }
                                           
                                     },
                                     {
                                         xtype:'datepickerfield',
                                         itemid:'editintakedate',
                                          width:'100%',
                                            name:'intakedate',
                                            //height:'px',
                                            
                                           // border:2,
                                            //style: 'border-color: black; border-style: solid;',
                                            value: new Date()
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'editintaketime',
                                         itemid:'editintaketime',
                                         placeHolder:'Enter Time like "1000" for 10:00 AM'
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'editintakeresult',
                                         itemid:'editintakeresult',
                                         placeHolder:'Enter Result'
                                     },
                                      {
				    xtype: 'button',
				    //id: 'SaveButton',
                                    itemid:'intakeupdatebutton',
				    ui: 'action',
				    //margin: 1,
				    text: 'Update'
			    }	
                           
        ]
            }
        ]
        
    }
});