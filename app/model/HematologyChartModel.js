Ext.define("MVF.model.HematologyChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "InRange", type: "string" },
            { name: "time", type: "string" },
            { name: "AboveRange", type: "string" },
            { name: "BelowRange", type: "string" },
            { name: "date", type: "srting" }
        ]
    }
});