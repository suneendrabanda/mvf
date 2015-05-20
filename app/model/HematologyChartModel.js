Ext.define("MVF.model.HematologyChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "hematologyname", type: "string" },
            { name: "time", type: "string" },
            { name: "minimunvalue", type: "string" },
            { name: "maximumvalue", type: "string" },
            { name: "date", type: "srting" }
        ]
    }
});