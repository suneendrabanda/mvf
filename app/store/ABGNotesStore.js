Ext.define('MVP.store.ABGNotesStore', {
	extend: 'Ext.data.TreeStore',
	requires : ['Ext.data.reader.Json','MVF.model.ABGNotesModel'],      
    
    config: {
    	model: 'MVP.model.ABGNotesModel',
        storeId : 'ABGNotesStore',
        proxy: {
            type: 'ajax',
            //noCache: true,        
            url: 'resources/data/ABGNotesJson.json' //proxy url
//            headers: { 'Content-Type': 'application/json' }, 
//                reader: Ext.create('Ext.data.reader.Json', {
//                    type: 'json',
//                    rootProperty: 'items'            
//                })
        }
            //autoLoad: false //Autoload this list on initialization of the app
	}
});