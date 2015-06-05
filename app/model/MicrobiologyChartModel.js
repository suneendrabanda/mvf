Ext.define("MVF.model.MicrobiologyChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "result", type: "string" },
            { name: "exact", type: "string" },
            { name: "min", type: "string" },
            { name: "max", type: "string" },
            { name: "date", type: "srting" },
            { name: "time", type: "string" }
         ]
    }
});