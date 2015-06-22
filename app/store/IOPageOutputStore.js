Ext.define("MVF.store.IOPageOutputStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.IOPageDropDownModel',
	    storeId : 'IOPageOutputStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/IOPageOutputDropDown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});