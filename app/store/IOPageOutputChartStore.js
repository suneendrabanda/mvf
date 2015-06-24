Ext.define("MVF.store.IOPageOutputChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.outputpiechartmodel',
	    storeId : 'IOPageOutputChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/IOPageOutputChart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});