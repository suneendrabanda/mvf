Ext.define("MVF.model.ResultUpdateModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "itemName", type: "string" },
            { name: "date", type: "string" },
            { name: "time", type: "string" },
            { name: "result", type: "string" },
            { name: "information", type: "string"}
        ]
    }
});