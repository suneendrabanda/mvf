Ext.define("MVF.model.chemistrydropdownmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "text", type: "string" },
            { name: "value", type: "string" },
            { name: "range", type: "string" },
            { name: "min", type: "string" },
            { name: "max", type: "string" },
            { name: "exact", type: "string" }
        ]
    }
});