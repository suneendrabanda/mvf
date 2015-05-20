Ext.define("MVF.model.ABSChartModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "absvalue", type: "string" },
            { name: "time", type: "string" },
            { name: "minimunvalue", type: "string" },
            { name: "maximumvalue", type: "string" },
            { name: "date", type: "srting" },
            { name: "shift", type: "srting" },
        ]
    }
});