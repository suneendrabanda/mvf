Ext.define("MVF.model.ABSChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "result", type: "string" },
            { name: "time", type: "string" },
            { name: "exact", type: "string" },
            { name: "minimunvalue", type: "string" },
            { name: "maximumvalue", type: "string" },
            { name: "date", type: "string" },
            { name: "shift", type: "string" }
        ]
    }
});