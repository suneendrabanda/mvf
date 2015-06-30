Ext.define("MVF.store.SerologyChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ChartModel',
	    storeId : 'SerologyChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/SerologyChart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});