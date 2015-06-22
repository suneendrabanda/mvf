Ext.define("MVF.model.MicrobiologyTableModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "Name", type: "string" },
            { name: "result", type: "string" },
            { name: "date", type: "srting" },
            { name: "time", type: "srting" },
            { name: "range", type: "srting" },
        ]
    }
});