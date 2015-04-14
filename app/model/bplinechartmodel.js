/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.model.bplinechartmodel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "vitalnum", type: "int" },
            { name: "vitaldeno", type: "int" },
            { name: "time", type: "string" }
        ]
    }
});
