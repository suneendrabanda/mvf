Ext.define("MVF.store.ABSTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ABSTableModel',
	    storeId : 'ABSTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ABSTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});