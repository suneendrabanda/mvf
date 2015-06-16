Ext.define("MVF.model.ABGNotesModel", {
    extend: "Ext.data.Model",
    xtype:"ABGNotesModel",
    config: {
        id_property: "id",
        fields: [
            { name: 'text', type: 'string' }
//            { name: "title", type: "string" },
//            { name: "date", type: "string" },
//            { name: "notes", type: "string" },
//            { name:"emp_id",type:"string"},
//            { name:"emp_name",type:"string"}
            
        ]
    }
});