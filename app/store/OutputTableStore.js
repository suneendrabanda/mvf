Ext.define("MVF.store.OutputTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.TableModel',
	    storeId : 'OutputTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/OutputTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});