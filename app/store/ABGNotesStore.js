Ext.define('MVF.store.ABGNotesStore', {
	extend: 'Ext.data.TreeStore',
	requires : ['MVF.model.LabsNotesModel'],      
    
    config: {
    	model: 'MVF.model.LabsNotesModel',
        storeId : 'ABGNotesStore',
        proxy: {
            type: 'ajax',
            url: 'php/ABGNotes.php', //proxy url
            headers: { 'Content-Type': 'application/json' }, 
                reader: Ext.create('Ext.data.reader.Json', {
                    type: 'json',
                    rootProperty: 'items'            
                })
            }
            //autoLoad: false //Autoload this list on initialization of the app
	}
});