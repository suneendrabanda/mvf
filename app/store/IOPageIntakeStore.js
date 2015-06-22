Ext.define("MVF.store.IOPageIntakeStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.IOPageDropDownModel',
	    storeId : 'IOPageIntakeStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/IOPageIntakeDropDown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});