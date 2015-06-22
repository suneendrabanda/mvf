Ext.define("MVF.store.IntakeTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.TableModel',
	    storeId : 'IntakeTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/IntakeTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});