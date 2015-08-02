Ext.define('MVF.store.SerologyLabNotesStore', {
	extend: 'Ext.data.TreeStore',
	requires : ['MVF.model.LabsNotesModel'],      
    
    config: {
    	model: 'MVF.model.LabsNotesModel',
        storeId : 'SerologyLabNotesStore',
        proxy: {
            type: 'ajax',
            url: 'php/SerologyLabNotes.php', //proxy url
            headers: { 'Content-Type': 'application/json' }, 
                reader: Ext.create('Ext.data.reader.Json', {
                    type: 'json',
                    rootProperty: 'items'            
                })
            }
            //autoLoad: false //Autoload this list on initialization of the app
	}
});