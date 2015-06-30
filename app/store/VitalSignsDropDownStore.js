Ext.define("MVF.store.VitalSignsDropDownStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.DropDownmodel',
	    storeId : 'VitalSignsDropDownStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/VitalSignsDropDown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});