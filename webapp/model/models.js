sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },

        viewModel: function(sViewName) {
            let oDefault = {};

            switch (sViewName) {
                case "main":
                    oDefault    = {
                        busy: true,
                        chart01: {
                            title:{ 
                                text:       'SLA לידים בחריגה'
                            },
                            dataLabel:{
                                visible:    true,
                                showTotal:  false
                            }
                        },
                        chart02: {
                            title:{ 
                                text: 'Test 01'
                            },
                            dataLabel:{
                                visible:    true,
                                showTotal:  true}, 
                            categoryAxis:{
                                title: {visible: false}
                            },
                            plotArea: { 
                                colorPalette: ['green', 'red', '#711e82', '#40c7a1', '#969696'] 
                            }
                        }
                    };

                    break;
            
                default:
                    break;
            }

            return new JSONModel(oDefault);    
        }

    };
});