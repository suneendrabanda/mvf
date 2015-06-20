Ext.define("MVF.model.LabsMainLabResultsModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "name", type: "string" },
            { name: "result", type: "string" },
            { name: "min", type: "string" },
            { name: "max", type: "string" },
            { name: "exact", type: "string" },
            { name: "range", type: "string" },
            { name: "time", type: "string" }
        ]
    }
});