
Ext.define("MVF.model.vitalsignsupdatemodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "vitalsign", type: "string" },
            { name: "date", type: "string" },
            { name: "time", type: "string" },
            { name: "result", type: "string" }
        ]
    }
});
