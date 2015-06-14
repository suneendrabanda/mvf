Ext.define("MVF.store.ABSDropDownStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ABSDropDownModel',
	    storeId : 'ABSDropDownStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ABSDropDown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});