Ext.define("MVF.model.LabsNotesModel", {
    extend: "Ext.data.Model",
    
    config: {
        fields: [
            { name: "title", type: "string" },
            { name: "date", type: "string" },
            { name: "notes", type: "string" },
//            { name: "notes", type: "string" },
//            { name:"emp_id",type:"string"},
//            { name:"emp_name",type:"string"}
            
        ]
    }
});