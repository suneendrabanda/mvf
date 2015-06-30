Ext.define("MVF.store.SerologyDropdownStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.DropDownmodel',
	    storeId : 'SerologyDropdownStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/SerologyDropdown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});