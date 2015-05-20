Ext.define("MVF.store.hematologyDropDownStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.hematologyDropDownModel',
	    storeId : 'hematologyDropDownStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/hematologyDropDown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});