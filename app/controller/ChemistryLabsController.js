Ext.define("MVF.controller.ChemistryLabsController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=chemistryviewbuttonid]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            }
        }
    },
    OnViewClickFunction:function(){
        alert('controller working');
    }
    });