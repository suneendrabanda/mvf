Ext.define("MVF.store.SerologyTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.TableModel',
	    storeId : 'SerologyTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/SerologyTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});