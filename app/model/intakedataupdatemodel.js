Ext.define("MVF.model.intakedataupdatemodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "vital", type: "string" },
            { name: "date", type: "string" },
            { name: "time", type: "string" },
            { name: "result", type: "string" }
        ]
    }
});