Ext.define("MVF.store.IOPageIntakeChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.piechartmodel',
	    storeId : 'IOPageIntakeChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/IOPageIntakeChart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});