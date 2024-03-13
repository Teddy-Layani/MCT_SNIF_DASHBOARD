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
            getDataFromEntity: function (path,filters) {
                debugger;
                if(!filters)
                    filters = [];
                let oModel = this.getModel();
                return new Promise(function (resolve, reject) {
                    that.getModel().read(path,{
                        filters: filters,
                        success: function (oData) {
                            resolve(oData);
                        },
                        error: function (oResult) {
                            reject(oResult);
                        }
                    });
                });


            },
            viewModel: function (sViewName) {
                let oDefault = {};

                switch (sViewName) {
                    case "main":
                        oDefault = {
                            busy: true,
                            sumChar01: 0,
                            sumChar02: 0,
                            sumChar03: 0,
                            sumChar04: 0,
                            sumChar05: 0,
                            sumChar06: 0,
                            busyChar01: true,
                            busyChar02: true,
                            busyChar03: true,
                            busyChar04: true,
                            busyChar05: true,
                            busyChar06: true,
                            date: null,
                            selectedBrand: "",
                            selectedTeam: "1",
                            comboBoxTeam: [
                                { key: "", text: this.getText("Display_as_Teams") },
                                { key: "1", text: this.getText("Display_as_me") }
                            ],
                            chart01: {
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
                                    }
                                },
                                title: {
                                    text:       "",
                                    visible:    false
                                },
                                dataLabel: {
                                    line: {
                                        visible: false
                                    },
                                    positionPreference: true,
                                    automaticInOutside: false,
                                    outsideVisible: true,
                                    position: 'inside',
                                    visible: true,
                                    type: 'value',
                                    linesOfWrap: 2,
                                    hideWhenOverlap: false
                                },
                                legend: {
                                    isScrollable: true,
                                    showFullLabel: true
                                },
                                // Legend:{
                                //     layout: {
                                //     position: "Top",
                                //     alignment: "left"
                                //     }
                                // },
                                legendGroup: {
                                    layout: {
                                        maxWidth: 0.35,
                                        position: "right"
                                    }
                                }
                            },
                            chart02: {
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
                                    }
                                },
                                title: {
                                    text: this.getText("STATUS_LEADS_BY_SLA"),
                                    visible: false
                                },
                                dataLabel: {
                                    visible: false,
                                    showTotal: true
                                },
                                plotArea: {
                                    dataLabel: {
                                        showTotal: true, type: 'value'
                                    }
                                }
                                // plotArea: { 
                                //     colorPalette: ['green', 'red', '#711e82', '#40c7a1', '#969696'] 
                                // }
                            },
                            chart03: {//ZSNIF_LEAD_STATUS_COUNTSSet
                                // title: {
                                //     text: this.getText("STATUS_OPEN_LEADS")
                                // },
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
                                    }
                                },
                                title: {
                                    text:       "",
                                    visible:    false
                                },
                                dataLabel: {
                                    line: {
                                        visible: false
                                    },
                                    positionPreference: true,
                                    automaticInOutside: false,
                                    outsideVisible: true,
                                    position: 'inside',
                                    visible: true,
                                    type: 'value',
                                    linesOfWrap: 2,
                                    hideWhenOverlap: false
                                },
                                legend: {
                                    isScrollable: true,
                                    showFullLabel: true
                                },
                                // Legend:{
                                //     layout: {
                                //     position: "Top",
                                //     alignment: "left"
                                //     }
                                // },
                                legendGroup: {
                                    layout: {
                                        maxWidth: 0.35,
                                        position: "right"
                                    }
                                }
                            },
                            chart04: {
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
                                    }
                                },
                                title: {
                                    text:       "",
                                    visible:    false
                                },
                                legend: {
                                    visible: false
                                },
                                dataLabel: {
                                    line: {
                                        visible: false
                                    },
                                    positionPreference: false,
                                    automaticInOutside: false,
                                    outsideVisible: false,
                                    position: 'inside',
                                    visible: true,
                                    type: 'value',
                                    linesOfWrap: 2,
                                    hideWhenOverlap: false
                                },                                
                                plotArea: {
                                    gridline: {
                                        visible: false
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
                                    title: {
                                        text:       "",
                                        visible:    false
                                    },
                                    label: {
                                        linesOfWrap: 2,
                                        rotation: "fixed",
                                        angle: 0,
                                        style: {
                                            fontSize: "12px"
                                        }
                                    }//,
                                    // axisLine: {
                                    //     visible: false
                                    // },
                                    // axisTick: {
                                    //     shortTickVisible: false
                                    // }
                                }
                            },
                            chart05: {
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
                                    }
                                },
                                title: {
                                    text: this.getText("TEST_DRIVE_TODAY"),
                                    visible: false
                                },
                                dataLabel: {
                                    line: {
                                        visible: false
                                    },
                                    positionPreference: true,
                                    automaticInOutside: false,
                                    outsideVisible: true,
                                    position: 'inside',
                                    visible: true,
                                    type: 'value',
                                    linesOfWrap: 2,
                                    hideWhenOverlap: false
                                },
                                legend: {
                                    isScrollable: true,
                                    showFullLabel: true
                                },
                                // Legend:{
                                //     layout: {
                                //     position: "Top",
                                //     alignment: "left"
                                //     }
                                // },
                                legendGroup: {
                                    layout: {
                                        maxWidth: 0.35,
                                        position: "right"
                                    }
                                }
                            },
                            chart06: {
                                interaction: {
                                    selectability: {
                                        mode: "SINGLE"
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
                                        visible: true,
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
                                    text: this.getText("COORDINATION"),
                                    // alignment:  "right",
                                    visible: false
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
                                    }
                                }
                            }//,
                            // chart07: {
                            //     interaction: {
                            //     selectability: {
                            //         mode: "SINGLE"
                            //     }
                            // },
                            //     valueAxis: {
                            //         title: {
                            //             visible: false
                            //         },
                            //         visible: true,
                            //         axisLine: {
                            //             visible: false
                            //         },
                            //         label: {
                            //             linesOfWrap: 2,
                            //             visible: false,
                            //             style: {
                            //                 fontSize: "10px"
                            //             }
                            //         }
                            //     },
                            //     categoryAxis: {
                            //         title: {
                            //             visible: false
                            //         },
                            //         label: {
                            //             linesOfWrap: 2,
                            //             rotation: "fixed",
                            //             angle: 30,
                            //             style: {
                            //                 fontSize: "12px"
                            //             }
                            //         },
                            //         axisLine: {
                            //             visible: false
                            //         },
                            //         axisTick: {
                            //             shortTickVisible: false
                            //         }
                            //     },
                            //     title: {
                            //         text:       this.getText("STATUS_LEADS"),
                            //         visible:    true
                            //     },
                            //     legend: {
                            //         visible: false
                            //     },
                            //     plotArea: {
                            //         colorPalette: ['#087E8B'], //["#" + Math.floor(Math.random()*16777215).toString(16)],//["#007181"],
                            //         gridline: {
                            //             visible: false
                            //         },
                            //         dataLabel: {
                            //             visible: true,
                            //             style: {
                            //                 fontWeight: 'bold'
                            //             },
                            //             hideWhenOverlap: false
                            //         }
                            //     }
                            // },

                            // chart077: {
                            //     interaction: {
                            //         zoom: {
                            //             enablement: "disabled"
                            //         },
                            //         selectability: {
                            //             mode: "EXCLUSIVE"
                            //         }
                            //     },
                            //     valueAxis: {
                            //         title: {
                            //             visible: false
                            //         },
                            //         visible: true,
                            //         axisLine: {
                            //             visible: false
                            //         },
                            //         label: {
                            //             linesOfWrap: 2,
                            //             visible: false,
                            //             style: {
                            //                 fontSize: "10px"
                            //             }
                            //         }
                            //     },
                            //     categoryAxis: {
                            //         title: {
                            //             visible: false
                            //         },
                            //         label: {
                            //             linesOfWrap: 2,
                            //             rotation: "fixed",
                            //             angle: 0,
                            //             style: {
                            //                 fontSize: "12px"
                            //             }
                            //         },
                            //         axisLine: {
                            //             visible: true
                            //         },
                            //         axisTick: {
                            //             shortTickVisible: false
                            //         }
                            //     },
                            //     title: {
                            //         text: this.getText("STATUS_LEADS"),
                            //         visible: true
                            //     },
                            //     legend: {
                            //         visible: false
                            //     },
                            //     plotArea: {
                            //         colorPalette: ["#007181"],
                            //         gridline: {
                            //             visible: false
                            //         },
                            //         dataPointSize: {
                            //             max: 96,
                            //             min: 40
                            //         },
                            //         dataLabel: {
                            //             visible: true,
                            //             style: {
                            //                 fontWeight: 'bold'
                            //             },
                            //             hideWhenOverlap: false
                            //         }
                            //     }
                            // }

                        };

                        break;

                    default:
                        break;
                }

                return new JSONModel(oDefault);
            }

        };
    });