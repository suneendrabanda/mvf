Ext.define("MVF.model.ABSTableModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "date", type: "string" },
            { name: "time", type: "string" },
            { name: "be", type: "string" },
            { name: "hco3", type: "string" },
            { name: "OS", type: "string" },
            { name: "paco3", type: "string" },
            { name: "pao2", type: "string" },
            { name: "ph", type: "string" }
        ]
    }
});