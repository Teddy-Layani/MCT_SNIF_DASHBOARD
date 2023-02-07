sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/viz/ui5/format/ChartFormatter',
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ChartFormatter, Filter) {
        "use strict";

        return Controller.extend("zcrmmokeddash.controller.Main", {
            onInit: function () {
                let i = 0;

                do {
                    i++;
                    this["oVizFrame" + i]     = this.getView().byId("idChar0" + i );
                    
                    let oPopOver      = this.getView().byId("idPopOverChar0" + i);
                    oPopOver.connect(this["oVizFrame" + i].getVizUid());

                }
                while (i < 7);

            },                        

            onFilterChange: function(oEvent) {
                let i           = 0,
                    aFilter     = [],
                    oModelData  = this.getOwnerComponent().getModel("mainView").getData();
                
                aFilter.push(
                    new Filter("Brand", "EQ",oModelData.selectedBrand)
                );
               
                do {
                    i++;

                    this["oVizFrame" + i].getDataset().getBinding("data").filter(aFilter);
                }
                while (i < 7);

            }
            
            // renderComplete: function(oEvent) {
            //     debugger;
            // }
        });
    });
