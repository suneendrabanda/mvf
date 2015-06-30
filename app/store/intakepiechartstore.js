/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("MVF.store.intakepiechartstore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.piechartmodel',
	    storeId : 'intakepiechartstore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/intakepiechart.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});