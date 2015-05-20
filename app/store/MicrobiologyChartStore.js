Ext.define("MVF.store.MicrobiologyChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.MicrobiologyChartModel',
	    storeId : 'MicrobiologyChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/MicrobiologyChart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});