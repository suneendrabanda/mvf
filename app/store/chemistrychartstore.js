Ext.define("MVF.store.chemistrychartstore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ChartModel',
	    storeId : 'chemistrychartstore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/chemistrychart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});