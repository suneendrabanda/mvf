Ext.define("MVF.store.timedropdownstore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.timedropdown',
	 storeId : 'timedropdownstore',
         autoLoad: true,
         data:[
             {
                 'text':'0100',
                 'value':'0100'
             },
             {
                 'text':'0200',
                 'value':'0200'
             },
             {
                 'text':'0300',
                 'value':'0300'
             },
             {
                 'text':'0400',
                 'value':'0400'
             },
             {
                 'text':'0500',
                 'value':'0500'
             }
             
         ]
    }
});