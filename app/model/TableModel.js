Ext.define("MVF.model.TableModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "Name", type: "string" },
            { name: "result", type: "string" },
            { name: "date", type: "srting" },
            { name: "time", type: "srting" },
            { name: "min", type: "srting" },
            { name: "max", type: "srting" },
            { name: "exact", type: "srting" },
            { name: "range", type: "srting" },
        ]
    }
});