Ext.define('MVF.view.RequestOrderView', {
    extend: 'Ext.Container',
    xtype: 'RequestOrderView',
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
                        width:'68%',
                        height:'100%',
                        style:{
//                            //'border':'2px #DFD9CF solid',
//                            'background-color': '#F3F5E9',
//                            'margin-left':'2%',
//                            'margin-top':'2%'
                        },
                        items:[
                            {
                                xtype:'container',
                                width:'96%',
                                height:'88%',
                                style:{
                                            'border':'2px #DFD9CF solid',
                                            'background-color': '#F3F5E9',
                                            'margin-left':'2%',
                                            'margin-top':'4%'
                                        },
                                items:[
                                    {
                                        xtype:'label',
                                        html:'Order Type:',
                                        style:{
                                                 'margin-left':'2%',
                                                 'font-size':'18px',
                                                 'margin-top':'10px',
                                                 'font-family':'openSansRegular'
                                               }
                                    },
                                    {
                                        xtype:'selectfield',
                                        border:'1 1 1 1',
                                        itemid:'OrderType',
                                        style:{
                                                'margin-left':'2%',
                                                'margin-top':'0.5%',
                                                'width': '95%',
                                                'height': '39px',
                                                'border':'2px #DFD9CF solid',
                                                'font-size':'15px'
                                        }
                                    },
                                    {
                                        xtype:'label',
                                        html:'Request:',
                                        style:{
                                                 'margin-left':'2%',
                                                 'font-size':'18px',
                                                 'margin-top':'7px',
                                                 'font-family':'openSansRegular'
                                               }
                                    },
                                    {
                                        xtype:'textareafield',
                                        maxRows:8,
                                        height:'46%',
                                        width:'96%',
                                        itemid:'RequestText',
                                        style:{
                                            'border':'2px #DFD9CF solid',
                                            'margin-left':'2%'
                                        }
                                    },
                                    {
                                        xtype:'label',
                                        html:'Recipient:',
                                        style:{
                                                 'margin-left':'2%',
                                                 'font-size':'18px',
                                                 'margin-top':'6px',
                                                 'font-family':'openSansRegular'
                                               }
                                    },
                                    {
                                        xtype:'selectfield',
                                        border:'1 1 1 1',
                                        itemid:'RecipientType',
                                        style:{
                                                'margin-left':'2%',
                                                'margin-top':'2%',
                                                'width': '95%',
                                                'height': '39px',
                                                'border':'2px #DFD9CF solid',
                                                'font-size':'15px'
                                        }
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        width:'33%',
                        height:'100%',
                        items:[
                            {
                                xtype:'button',
                                ui: 'plain',
                                itemid:'SaveRequestOrder',
                                html: '<div style="text-align: center; border: 1px solid black; padding: 5px">SAVE</div>',
                                width:'45%',
                                height:'30px',
                                style:{
                                         'margin-left':'42%',
                                         'margin-top':'134%',
                                         'font-size':'12px'
                                       }
                            }
                        ]
                        
                    }
                ]
            }
        ]
    }
});