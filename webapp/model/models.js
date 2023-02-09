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
                            busyChar01: true, 
                            busyChar02: true, 
                            busyChar03: true, 
                            busyChar04: true, 
                            busyChar05: true, 
                            busyChar06: true, 
                            busyChar07: true, 
                            date:   new Date(),
                            selectedBrand: "",
                            selectedTeam: "1",
                            comboBoxTeam: [ { key: "1", text: "Display as me"},
                                            { key: "2", text: "Display as Teams"}],
                            chart01: {
                                interaction: {
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: false
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title: {
                                    text:       this.getText("COORDINATION"),
                                    // alignment:  "right",
                                    visible:    true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ['#3F88C5'],//["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }//,
                                    // dataPointStyle:{
                                    //     "rules":
                                    //         [
                                    //             {
                                    //                 "dataContext": {"Revenue": {"max": 1500000}},
                                    //                 "properties": {
                                    //                     "color":"sapUiChartPaletteSemanticBad"
                                    //                 },
                                    //                 "displayName":"Revenue < 1.5M"
                                    //             }
                                    //         ],
                                    //         "others":
                                    //         {
                                    //             "properties": {
                                    //                 "color": "sapUiChartPaletteSemanticGood"
                                    //             },
                                    //             "displayName": "Revenue > 1.5M"
                                    //         }
                                    // }
                                }
                            },
                            chart02: {
                                title:{ 
                                    text: this.getText("SLA_EXCEPTIONS")
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  true}, 
                                categoryAxis:{
                                    title: {visible: false}
                                }//,
                                // plotArea: { 
                                //     colorPalette: ['green', 'red', '#711e82', '#40c7a1', '#969696'] 
                                // }
                            },
                            chart03: {
                                title:{ 
                                    text:       this.getText("NEW_LEADS_BRAND_LEVEL")
                                },
                                dataLabel:{
                                    visible:    true,
                                    showTotal:  false
                                }
                            },
                            chart04: {
                                interaction: {
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: false
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title:{ 
                                    text:       this.getText("TRANSFER_SALESMAN"),
                                    visible:    true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ['#FFBA08'],//["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }
                                }
                            },
                            chart05: {
                                interaction: {
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: false
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title:{ 
                                    text:       this.getText("HOT_TRANSFER"),
                                    visible:    true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ['#C11111'],//["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }
                                }
                            },
                            chart06: {
                                interaction: {
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: false
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title:{ 
                                    text:       this.getText("PROCESS_SALESMAN"),
                                    visible:    true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ['#52D668'], //["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }
                                }



                                //     legend: {
                                //     visible: false
                                // },
                                // plotArea: {
                                //     colorPalette: ["#007181"],
                                //     gridline: {
                                //         visible: false
                                //     },
                                //     dataLabel: {
                                //         visible: true,
                                //         style: {
                                //             fontWeight: 'bold'
                                //         },
                                //         hideWhenOverlap: false
                                //     },
                                //     dataPointStyleMode: "update",
                                //     dataPointStyle: {
                                //         "rules": [{
                                //             "dataContext": {
                                //                 "Type": {
                                //                     equal: "cost"
                                //                 }
                                //             },
                                //             //"dataContext":  { Category: "Revenue" },
                                //             "properties": {
                                //                 "color": "#cdcdcd"
                                //             },
                                //             displayName: "Cost"
                                //         },
                                //         {
                                //             "dataContext": {
                                //                 "Type": {
                                //                     equal: "revenue"
                                //                 }
                                //             },
                                //             "properties": {
                                //                 "color": "#cdcdcd"
                                //             },
                                //             displayName: "Revenue"
                                //         },
                                //         {
                                //             "dataContext": {
                                //                 "Type": {
                                //                     equal: "subtotal:2"
                                //                 }
                                //             },
                                //             "properties": {
                                //                 "color": "#666666"
                                //             },
                                //             displayName: "Subtotal"
                                //         },
                                //         {
                                //             "dataContext": {
                                //                 "Type": {
                                //                     equal: "total"
                                //                 }
                                //             },
                                //             "properties": {
                                //                 "color": "#000000"
                                //             },
                                //             displayName: "Total"
                                //         }]
                                //     }
                                // }
                            },
                            chart07: {
                                interaction: {
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 30,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: false
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title: {
                                    text:       this.getText("STATUS_LEADS"),
                                    visible:    true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ['#087E8B'], //["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }
                                }
                            },

                            chart077: {
                                interaction: {
                                    zoom: {
                                        enablement: "disabled"
                                    },
                                    selectability: {
                                        mode: "EXCLUSIVE"
                                    }
                                },
                                valueAxis: {
                                    title: {
                                        visible: false
                                    },
                                    visible: true,
                                    axisLine: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        visible: false,
                                        style: {
                                            fontSize: "10px"
                                        }
                                    }
                                },
                                categoryAxis: {
                                    title: {
                                        visible: false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    },
                                    axisLine: {
                                        visible: true
                                    },
                                    axisTick: {
                                        shortTickVisible: false
                                    }
                                },
                                title: {
                                    text: this.getText("STATUS_LEADS"),
                                    visible: true
                                },
                                legend: {
                                    visible: false
                                },
                                plotArea: {
                                    colorPalette: ["#007181"],
                                    gridline: {
                                        visible: false
                                    },
                                    dataPointSize: {
                                        max: 96,
                                        min: 40
                                    },
                                    dataLabel: {
                                        visible: true,
                                        style: {
                                            fontWeight: 'bold'
                                        },
                                        hideWhenOverlap: false
                                    }
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