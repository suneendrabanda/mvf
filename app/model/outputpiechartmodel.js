Ext.define("MVF.model.outputpiechartmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "outputname", type: "string" },
            { name: "result", type: "int" },
            { name: "date", type: "string" },
            { name: "time", type: "string" }
        ]
    }
});