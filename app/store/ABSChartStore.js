Ext.define("MVF.store.ABSChartStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ABSChartModel',
	    storeId : 'ABSChartStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ABSChartData.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});