Ext.define("MVF.store.ChemistryTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.TableModel',
	    storeId : 'ChemistryTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ChemistryTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});