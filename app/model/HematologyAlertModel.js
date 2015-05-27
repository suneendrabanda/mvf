Ext.define("MVF.model.HematologyAlertModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: "Name", type: "string"},
            {name: "Result", type: "string"},
            {name: "Min_Value", type: "string"},
            {name: "Max_Value", type: "string"},
            {name: "Exact_Range", type: "string"},
            {name: "date", type: "string"}
        ]
    }
});