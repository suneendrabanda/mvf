Ext.define('MVF.store.HematologyNotesStore', {
	extend: 'Ext.data.TreeStore',
	requires : ['MVF.model.LabsNotesModel'],      
    
    config: {
    	model: 'MVF.model.LabsNotesModel',
        storeId : 'HematologyNotesStore',
        proxy: {
            type: 'ajax',
            url: 'php/HematologyNotes.php', //proxy url
            headers: { 'Content-Type': 'application/json' }, 
                reader: Ext.create('Ext.data.reader.Json', {
                    type: 'json',
                    rootProperty: 'items'            
                })
            },
            autoLoad: false //Autoload this list on initialization of the app
	}
});