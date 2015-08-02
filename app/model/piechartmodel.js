Ext.define("MVF.model.piechartmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "intakename", type: "string" },
            { name: "result", type: "int" },
            { name: "date", type: "string" },
            { name: "time", type: "string" }
        ]
    }
});