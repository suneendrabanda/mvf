Ext.define('MVF.view.pageselect', {
    extend: 'Ext.navigation.View',
    xtype: 'pageselect',
    
    config: {
        items:[
                              {
                                        xtype: 'selectfield',
                                        width:'120px',
                                        itemid:'pageid',
                                        options: [
                                            {text: 'MAIN',  value: 'main'},
                                            {text: 'Chemistry',  value: 'chemistrylabs'},
                                            {text: 'Microbiology',  value: 'microbiologyview'}
                                            
                                        ],
                                        style:{
                                            'margin-left':'50%',
                                            'margin-top':'2%',
                                            'fontFamily':'openSansRegular',
                                            'font-size':'small'

                                        }
                                 }
        ]
    }
});