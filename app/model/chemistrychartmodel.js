Ext.define("MVF.model.chemistrychartmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "chemistryname", type: "int" },
            { name: "time", type: "string" },
            { name: "minimunvalue", type: "int" },
            { name: "maximumvalue", type: "int" },
            { name: "date", type: "srting" }
        ]
    }
});