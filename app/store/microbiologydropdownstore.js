Ext.define("MVF.store.microbiologydropdownstore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.DropDownmodel',
	    storeId : 'microbiologydropdownstore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/microbiologydropdown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});