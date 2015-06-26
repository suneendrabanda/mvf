
Ext.define("MVF.model.vitaltablemodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "date", type: "string" },
            { name: "time", type: "string" },
            { name: "BP", type: "string" },
            { name: "Height", type: "string" },
            { name: "Pain", type: "string" },
            { name: "Pulse", type: "string" },
            { name: "Resp", type: "string" },
            { name: "SaO2", type: "string" },
            { name: "Temp", type: "string" },
            { name: "Weight", type: "string" }
            
        ]
    }
});
