Ext.define('MVF.view.AddLabNotesView', {
    extend: 'Ext.Container',

    xtype: 'AddLabNotesView',
    config:{
              items:[
                  {
                      xtype:'container',
                      width:'100%',
                      height:'100%',
                      layout:'hbox',
                      items:[
                           {
			xtype:'container',
			width: '65%',
			height: '90%',
			style: {
			    'margin-top':'2.5%',
			    'float':'left',
			    'border':'2px #DFD9CF solid',
			    'overflow':'hidden',
			    'margin-left': '2%'
			},
			items:[
                            // text style 
			    {
                                xtype: 'container',
                                width: '100%',
                                height: '14%',
                                layout:'hbox',
                                style: {
                                   'border': '1px #9E9D8B solid',
                                    'borderRightColor':'#9E9D8B',
                                    'borderTopWidth': '1px',
                                    'margin': 'auto',
                                    'background-color': '#4D3462',
                                    //'float': 'left',
                            },
                            items:[
                                {
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                        itemid:'opensans',
                                      //  id:'opensans',
                                        options: [
                                            {text: 'Open Sans',  value: 'opensans'}                                            
                                        ],
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'2%',
                                       'width': '195px',
                                       'height': '5px',
				       'font-size':'11px'
                                    }

                            },
                             {
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                    itemid:'fontsize',
                                   // id:'fontsize',
				    options: [
					{text: '12 pt',  value: 'pt12'}                                            
				    ],
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'2%',
                                       'width': '55px',
                                       'height': '5px',
				       'font-size':'11px'
                                    }

                            },
                             {
                                    xtype:'button',
                                    text:'B',
                                    ui:'plain',
                                    itemid:'bold',
                                    width:'6%',
                                    height:'35%',
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'2.5%',
                                       'font-size':'20px',
                                       'color':'white'
                                    }

                            },
                             {
                                    xtype:'button',
                                    text:'I',
                                    ui:'plain',
                                    itemid:'italic',
                                    width:'6%',
                                    height:'35%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'2.5%',
                                       'font-size':'20px',
                                       'color':'white'
                                    }

                            },
                             {
                                    xtype:'button',
                                    text:'U',
                                    ui:'plain',
                                    itemid:'underline',
                                    width:'6%',
                                    height:'35%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'2.5%',
                                       'font-size':'20px',
                                       'color':'white'
                                    }

                            },
                             {
                                    xtype:'button',
                                    text:'=',
                                    ui:'plain',
                                    itemid:'bullets',
                                    width:'6%',
                                    height:'35%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'2.5%',
                                       'font-size':'20px',
                                       'color':'white'
                                    }

                            },
                             {
                                    xtype:'button',
                                    text:'123',
                                    ui:'plain',
                                    itemid:'numbers',
                                    width:'8%',
                                    height:'35%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'2.5%',
                                       'font-size':'20px',
                                       'color':'white'
                                    }

                            },
//                             {
//                                    xtype:'button',
//                                    text:'123',
//                                    itemid:'square',
//                                    width:'6%',
//                                    height:'30%',
//                                    style:{
//                                       'margin-left':'1%',
//                                       'margin-top':'2%',
//                                       'font-size':'15px'
//                                    }
//
//                            }
                            ]
                           },
			    // text container
                            {
                                xtype:'container',
                                width:'100%',
                                height:'84%',
                               // layout:'fit',
                                style:{
                                   'margin-top':'2%',
                                   //'border':'2px #DFD9CF solid'
                                },
                                items:[
                                    {
                                        xtype:'textareafield',
                                        maxRows:12,
                                        height:'87%',
                                        width:'96%',
                                        itemid:'LabNotesId',
                                        style:{
                                            'border':'2px #DFD9CF solid',
                                            'margin-left':'2%'
                                        }
                                    },
                                    {
                                        xtype:'label',
                                        html:'add category and tags',
                                        style:{
                                            'margin-left':'2.5%',
                                            'margin-top':'1%'
                                        }
                                    }
                                ]
                            },
                            
			]
		    },
                            {
                                xtype:'container',
                                layout:'vbox',
                                width:'31%',
                                height:'90%',
                                style:{
                                    //'border':'3px #DFD9CF solid',
                                    'margin-top':'2.5%',
                                    'margin-left':'2%'
                                },
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'vbox',
                                        width:'100%',
                                        height:'42%',
                                        style:{
                                             'border':'2px #DFD9CF solid',
                                             'background-color': '#F3F5E9',
                                        },
                                        items:[
                                            {
                                                xtype:'label',
                                                html:'Subject:',
                                                style:{
                                                    'margin-left':'3%',
                                                    'font-size':'22px'
                                                }
                                            },
                                            {
                                                xtype:'textfield',
                                                itemid:'NotesSubject',
                                                width:'95%',
                                                style:{
                                                    'border':'2px #DFD9CF solid',
                                                    'margin-left':'2%'
                                                }
                                            },
                                            
                                            {
                                                xtype:'label',
                                                html:'Lab Page:',
                                                style:{
                                                    'margin-left':'3%',
                                                    'font-size':'22px'
                                                }
                                            },
                                            {
                                                    xtype:'selectfield',
                                                    border:'1 1 1 1',
                                                    itemid:'LabName',
                                                    
                                                   // id:'fontsize',
                                                    options: [
                                                        {text: 'MAIN',  value: 'main'},
                                                        {text: 'CHEMISTRY',  value: 'Chemistry'},
                                                        {text: 'HEMATOLOGY',  value: 'Hematology'},
                                                        {text: 'MICROBIOLOGY',  value: 'Microbiology'},
                                                        {text: 'SEROLOGY',  value: 'SEROLOGY'},
                                                        {text: 'ARTERIAL BLOOD',  value: 'Arterial Blood Gas'},
                                                    ],
                                                    style:{
                                                       'margin-left':'2%',
                                                       'margin-top':'2%',
                                                       'width': '95%',
                                                       'height': '39px',
                                                       'border':'2px #DFD9CF solid',
                                                       'font-size':'11px'
                                                    }

                                            },
                                            
                                                {
                                                    xtype:'button',
                                                    ui: 'plain',
                                                    itemid:'LabNotesSave',
                                                    //id:'patientsummarybutton',
                                                    html: '<div style="text-align: center; border: 1px solid black; padding: 5px">SAVE</div>',
                                                    width:'45%',
                                                    height:'30px',
                                                    style:{
                                                           'margin-left':'54%',
                                                           'margin-top':'88%',
                                                           'font-size':'12px'
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