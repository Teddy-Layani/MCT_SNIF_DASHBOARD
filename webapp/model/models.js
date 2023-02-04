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

            getText: function (sKey, aParameters=[]) {
                this.getView().getModel("i18n").getResourceBundle().getText(sKey, aParameters);
            },

            viewModel: function(sViewName) {
                let oDefault = {};

                switch (sViewName) {
                    case "main":
                        oDefault    = {
                            busy: true,
                            date:   new Date(),
                            selectedBrand: "",
                            selectedTeam: "1",
                            comboBoxTeam: [ { key: "1", text: "Display as me"},
                                            { key: "2", text: "Display as Teams"}],
                            chart01: {
                                title:{ 
                                    text:       "Chart 01"//this.getText("SLA_EXCEPTIONS")
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                },
                                categoryAxis: {
                                    axisLine: {
                                        visible: false
                                    }
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
                            },
                            chart03: {
                                title:{ 
                                    text:       'Test 03'
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                }
                            },
                            chart04: {
                                title:{ 
                                    text:       'Test 04'
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                }
                            },
                            chart05: {
                                title:{ 
                                    text:       'Test 05'
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                }
                            },
                            chart06: {
                                title:{ 
                                    text:       'Test 06'
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                }
                            },
                            chart07: {
                                title:{ 
                                    text:       'Test 07'
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
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