Ext.define("MVF.model.chemistrychartmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "chemistryname", type: "string" },
            { name: "time", type: "string" },
            { name: "minimunvalue", type: "string" },
            { name: "maximumvalue", type: "string" },
            { name: "date", type: "srting" }
        ]
    }
});