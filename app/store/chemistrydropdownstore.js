Ext.define("MVF.store.chemistrydropdownstore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.chemistrydropdownmodel',
	    storeId : 'chemistrydropdownstore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/chemistrydropdown.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});