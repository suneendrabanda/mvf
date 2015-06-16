Ext.define('MVF.store.ABGNotesStore', {
	extend: 'Ext.data.TreeStore',
	requires : ['MVF.model.ABGNotesModel'],      
    
    config: {
    	model: 'MVF.model.ABGNotesModel',
        storeId : 'ABGNotesStore',
        proxy: {
            type: 'ajax',
            url: 'resources/data/ABGNotesJson.json' //proxy url
            }
            //autoLoad: false //Autoload this list on initialization of the app
	}
});