/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("MVF.model.linechart", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "vital", type: "int" },
           // { name: "deno", type: "int" },
            { name: "time", type: "string" }
        ]
    }
});