Ext.define("MVF.store.HematologyChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ChartModel',
	    storeId : 'HematologyChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/HematologyChart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});