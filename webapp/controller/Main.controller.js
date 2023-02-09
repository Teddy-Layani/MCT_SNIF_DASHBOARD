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
                    oModel      = this.getOwnerComponent().getModel("mainView"),
                    oModelData  = oModel.getData();

                if(oModelData.selectedBrand)    
                {
                    aFilter.push(
                        new Filter("Brand", "EQ",oModelData.selectedBrand)
                    );
                }

                if(oModelData.PeriodType)    
                {
                    aFilter.push(
                        new Filter("PeriodType", "EQ",oModelData.PeriodType)
                    );
                }   


                if(oModelData.date)    
                {
                    aFilter.push(
                        new Filter("SelectedDate", "EQ",oModelData.date)
                    );
                }   

                var oFilter =  new Filter({
                    filters: aFilter,
                    and: true
                  });
                
                do {
                    i++;

                    //  Apply Filter
                    this["oVizFrame" + i].getDataset().getBinding("data").filter(oFilter);
                    
                    //  Set Busy
                    oModel.setProperty("/busyChar0" + i, true);
                
                }
                while (i < 7);

            },
            
            renderComplete: function(oEvent) {
                oEvent.getSource().setBusy(false);
            }
        });
    });
