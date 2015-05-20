Ext.define("MVF.model.MicrobiologyChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "microbiologyname", type: "string" },
            { name: "time", type: "string" },
            { name: "minimunvalue", type: "string" },
            { name: "maximumvalue", type: "string" },
            { name: "date", type: "srting" }
        ]
    }
});