Ext.define("MVF.controller.ABSLabController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=absviewbuttonid]',
            ABSUpdateButton:'[itemid=AbsUpdateButton]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            ABSUpdateButton:{
                tap:'OnABSUpdateButton'
            }
        }
    },
    init:function(){
        this.EditABSValuesPopUp();
    },
    OnViewClickFunction:function(){
        //alert('abs viewl click working');
        var absSelectedValue=Ext.ComponentQuery.query('[itemid=absdropdownvalueid]')[0].getValue();
        var AbsStartDate=Ext.ComponentQuery.query('[itemid=absstartdate]')[0].getFormattedValue();
        var AbsEndDate=Ext.ComponentQuery.query('[itemid=absenddate]')[0].getFormattedValue();
        var ShiftValue=Ext.ComponentQuery.query('[itemid=absshift]')[0].getValue();
        console.log(absSelectedValue);console.log(AbsStartDate);console.log(AbsEndDate);
        console.log(ShiftValue);
        var store=Ext.getStore('ABSChartStore');
        store.load({
            params:{
                absSelectedValue:absSelectedValue,
                StartDate:AbsStartDate,
                EndDate:AbsEndDate,
                shiftvalue:ShiftValue
                },
                scope:this,
                callback:function(records,success){
                    if(success){
                    var values=records;
                    var result=values[0].data.absvalue;
                    var time=values[0].data.time;
                    var min=values[0].data.minimunvalue;
                    var max=values[0].data.maximumvalue;
                    var date=values[0].data.date;
                    console.log(result);
                    console.log(time);
                    console.log(min); console.log(max);console.log(date);
                    
                }
            }
        });
    },
    EditABSValuesPopUp:function(){
        console.log('in EditABSValuesPopUp function');
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditABSvaluesOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  '460px',//Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: '400px',//Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
            items: [
                                    {
                                        xtype: 'selectfield',
                                        width:'100%',
                                        //store: 'absdropdownstore',
                                        itemid:'AbsEditValueId',
                                        name:'AbsEditValueId',
                                        options: [
                                                {text: 'pH',  value: 'ABGs1'},
                                                {text: 'PaCO2',  value: 'ABGs2'},
                                                {text: 'Pao2',  value: 'ABGs3'},
                                                {text: 'HCO3',  value: 'ABGs4'},
                                                {text: 'BE',  value: 'ABGs5'},
                                                {text: 'Oxygen Saturation',  value: 'ABGs6'}
                                         ],
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Absdateedit',
                                         width:'100%',
                                         name:'Abddateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Absedittimevalue',
                                          options: [
                                                   {text: '0100',  value: '0100'},
                                                   {text: '0200',  value: '0200'},
                                                   {text: '0300',  value: '0300'},
                                                   {text: '0400',  value: '0400'},
                                                   {text: '0500',  value: '0500'},
                                                   {text: '0600',  value: '0600'},
                                                   {text: '0700',  value: '0700'},
                                                   {text: '0800',  value: '0800'},
                                                   {text: '0900',  value: '0900'},
                                                   {text: '1000',  value: '1000'},
                                                   {text: '1100',  value: '1100'},
                                                   {text: '1200',  value: '1200'},
                                                   {text: '1300',  value: '1300'},
                                                   {text: '1400',  value: '1400'},
                                                   {text: '1500',  value: '1500'},
                                                   {text: '1600',  value: '1600'},
                                                   {text: '1700',  value: '1700'},
                                                   {text: '1800',  value: '1800'},
                                                   {text: '1900',  value: '1900'},
                                                   {text: '2000',  value: '2000'},
                                                   {text: '2100',  value: '2100'},
                                                   {text: '2200',  value: '2200'},
                                                   {text: '2300',  value: '2300'},
                                                   {text: '2400',  value: '2400'}
                                               ],
                                               style:{
                                                    'margin-top':'10px'
                                                }
                                        },
                                      {
                                         xtype:'textfield',
                                         name:'Absresultedit',
                                         itemid:'Absresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'AbsUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
        });
	
	Ext.Viewport.on({
            delegate: '#absedittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OnABSUpdateButton:function(){
        var ABSEditValue=Ext.ComponentQuery.query('[itemid=AbsEditValueId]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=Absdateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=Absedittimevalue]')[0].getValue();
        var Result=Ext.ComponentQuery.query('[itemid=Absresultedit]')[0].getValue();
        var store=Ext.getStore('ABSResultUpdateStore');
        store.load({
            params:{
                ABSEditValue:ABSEditValue,
                date:EditDate,
                time:EditTime,
                result:Result
            },
            scope:this,
            callback:function(records){
                
                alert(records[0].data.information);
                
            }
        });
    }
});