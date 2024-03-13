sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/viz/ui5/format/ChartFormatter',
    "sap/ui/model/Filter",
    "zcrmsnifdash/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ChartFormatter, Filter,models) {
        "use strict";

        return Controller.extend("zcrmsnifdash.controller.Main", {
            onInit: async function () {
                let i = 0;
                let that = this;
                let oModelView = this.getOwnerComponent().getModel("mainView");
                let oModelCrossUtil = this.getOwnerComponent().getModel("crossUtil");

                if (this.getView().byId("selectedTeamSelect"))
                    this.getView().byId("selectedTeamSelect").setSelectedKey("");
                // models.checkOtherFilter(oModelCrossUtil,oModelView);
                oModelView.setProperty("/selectedTeam", "");
                var oModel = this.getOwnerComponent().getModel();      
                
                


    
                // oModel.attachRequestCompleted(function(oEvent) {         
                //   //debugger;

                //   that.updateGraphData(1,oEvent.getSource().getBindings());
                //   that.updateGraphData(2,oEvent.getSource().getBindings());
                //   that.updateGraphData(3,oEvent.getSource().getBindings());
                //   that.updateGraphData(4,oEvent.getSource().getBindings());
                //   that.updateGraphData(5,oEvent.getSource().getBindings());
                //   that.updateGraphData(6,oEvent.getSource().getBindings());
                // }); 

                try {
                    this.crmUrl =  await this.loadCrmUrl(oModel);
                    
                } catch(error){
                    console.log(error.message);
                }

                do {
                    i++;
                    if (i == 2 || i == 6) {
                        this["oVizFrame" + i] = this.getView().byId("idChar0" + i);
                        // let oPopOver = this.getView().byId("idPopOverChar0" + i);
                        // oPopOver.connect(this["oVizFrame" + i].getVizUid());
                    }
                    else {

                        this["oVizFrame" + i] = this.getView().byId("idChar0" + i);

                        let oPopOver = this.getView().byId("idPopOverChar0" + i);
                        oPopOver.connect(this["oVizFrame" + i].getVizUid());
                    }
                }
                while (i < 6);

                debugger;
                this.byId("TITLE_MEETINGS_FOR_DELIEVERIES").setText(this.getView().getModel("i18n").getResourceBundle().getText("MEETINGS_FOR_DELIEVERIES_TODAY"));
                this.byId("TITLE_TEST_DRIVE").setText(this.getView().getModel("i18n").getResourceBundle().getText("TEST_DRIVE_TODAY"));

            },
           
            loadCrmUrl: async function(oModel) {
                return new Promise((resolve, reject) => {
                    oModel.read("/UrlDiscoverySet",{
                        success:function(data){
                            if (data && data.results && data.results.length){
                                resolve(data.results[0].Url);    
                            }
                            
                        },
                        error: function(error){
                            reject(error);
                        }
                    });
                });
            },   

            onChart1DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar01", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar01").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar01", sum);      

            }   ,              
            onChart2DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar02", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar02").mBindingInfos.data.binding;
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar02", sum);                      
            }   ,  
            onChart3DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar03", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar03").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar03", sum);                      
            }   ,          
            onChart4DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar04", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar04").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar04", sum);                      
            }   ,   
            onChart5DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar05", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar05").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar05", sum);                      
            }   ,    
            onChart6DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar06", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar06").mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar06", sum);                      
            }   ,   

            // updateGraphData(numGraph,modelBindings){
            //     let bindingObjects;
            //     switch (numGraph) {
            //         case 1:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_OPP_STATUS_COUNTSSet"));
            //             break;
            //         case 2:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_LEAD_SLA_COUNTSSet"));
            //             break;
            //         case 3:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_LEAD_STATUS_COUNTSSet"));
            //             break;
            //         case 4:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_APP_PARTNER_COUNTSSet"));
            //             break;
            //         case 5:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_ZMTD_STATUS_COUNTSSet"));
            //             break;
            //         case 6:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSNIF_OPP_SLA_COUNTSSet"));
            //             break;
            //     }


            //     // var that =this;               
            //     // if(    bindingObjects 
            //     //     && bindingObjects.aKeys
            //     //     && bindingObjects.aKeys.length > 0)
            //     // bindingObjects.aKeys.forEach(nameProperty => {
            //     //     var entity = that.getView().getModel().getProperty("/"+nameProperty);
            //     //     try{
            //     //     sum += Number.parseInt(entity.CountTotal);
            //     //     }catch(e){}
            //     // });
            //     // let oModelView = this.getOwnerComponent().getModel("mainView");
            //     // oModelView.setProperty("/sumChar0" + numGraph, sum);             
                
            // },

            
            onAfterRendering: function() {

                var that = this;

            },
            
            onSelectedData: function(oEvent) {
                //let sServiceName = oEvent.getSource().getDataset().getBinding("data").getPath();
                var index = oEvent.mParameters.data[0].data._context_row_number;
                var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
                var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/"+sEntityKey);
                if(oBinding.ObjIdsStr){
                    var client = oEvent.getSource().getDataset().getBinding("data").getModel().aUrlParams.find((o)=>o.includes("sap-client"));
                    var url = "/sap/bc/ui5_ui5/sap/zcrm_leads_list/index.html?sap-ui-language=HE&LEADID=" + oBinding.ObjIdsStr;
                    if(client)
                        url+="&" + client;
                    window.open(window.location.origin + url,"_blank");
                }
            },

            onNavToLeads: function () {
            },

            onFilterChange: function (oEvent) {
                
                let i = 0,
                    aFilter = [],
                    oModel = this.getOwnerComponent().getModel("mainView"),
                    oModelData = oModel.getData();

                this.byId("TITLE_MEETINGS_FOR_DELIEVERIES").setText(this.getView().getModel("i18n").getResourceBundle().getText("MEETINGS_FOR_DELIEVERIES"));
                this.byId("TITLE_TEST_DRIVE").setText(this.getView().getModel("i18n").getResourceBundle().getText("TEST_DRIVE"));
    
                if (oModelData.selectedBrand) {
                    aFilter.push(
                        new Filter("Brand", "EQ", oModelData.selectedBrand)
                    );
                }

                if (oModelData.PeriodType) {
                    aFilter.push(
                        new Filter("PeriodType", "EQ", oModelData.PeriodType)
                    );
                }

                if (oModelData.beginDate && oModelData.endDate) {      
                    oModelData.endDate.setHours(23,59,59,0);         
                    aFilter.push(new Filter({
                        path: "SelectedDate",
                        operator: "BT",
                        value1: oModelData.beginDate,
                        value2: oModelData.endDate
                    }));
                }
                // if (oModelData.date) {
                //     aFilter.push(
                //         new Filter("SelectedDate", "EQ", oModelData.date)
                //     );
                // }

                if (oModelData.selectedTeam) {
                    aFilter.push(
                        new Filter("AssignedTo", "EQ", oModelData.selectedTeam)
                    );
                }

                var oFilter = new Filter({
                    filters: aFilter,
                    and: true
                });

                do {
                    i++;
                    {
                        //  Apply Filter
                        oModel.setProperty("/busyChar0" + i, true);
                        if(i==2 || i==6)
                        {
                            this["oVizFrame" + i].getBinding("data").filter(oFilter);
                        }
                        else{
                            this["oVizFrame" + i].getDataset().getBinding("data").filter(oFilter);
                        }
                    }

                }
                while (i < 6);

            },

            resetFilters: function (bSegmentedButton) {
                let oModelView = this.getOwnerComponent().getModel("mainView");

                //  Date
                oModelView.setProperty("/beginDate", "");
                oModelView.setProperty("/beginDate", "");

                //  ComboBox Filters
                oModelView.setProperty("/selectedBrand", "");
                oModelView.setProperty("/PeriodType", "");
                oModelView.setProperty("/selectedTeam", "");
                if (this.getView().byId("selectedTeamSelect"))
                    this.getView().byId("selectedTeamSelect").setSelectedKey("");
            },

            onFilterReset: function (oEvent) {
                this.resetFilters();
                this.onFilterChange();
                this.byId("TITLE_MEETINGS_FOR_DELIEVERIES").setText(this.getView().getModel("i18n").getResourceBundle().getText("MEETINGS_FOR_DELIEVERIES_TODAY"));
                this.byId("TITLE_TEST_DRIVE").setText(this.getView().getModel("i18n").getResourceBundle().getText("TEST_DRIVE_TODAY"));

            },
            onMicroPress: function(oEvent) {
                var oBinding = oEvent.getSource().getBindingContext().getObject();
                if( oBinding.ObjIdsStr && oBinding.ProcessTypeStr){
                    const url = `${this.crmUrl}?objecttype=${oBinding.Objtype}&processtype=${oBinding.ProcessTypeStr}&objidstring=${oBinding.ObjIdsStr}`.substring(0,2000);
                    // var url = this.crmUrl + "?objecttype=LEAD&processtype=" + oBinding.ProcessTypeStr + "&objidstring=" + oBinding.ObjIdsStr;
                    // if(client)
                        // url+="&" + client;
                    window.open(url,"_blank");
                }
            },            
            onSelectedData: function(oEvent) {
                //let sServiceName = oEvent.getSource().getDataset().getBinding("data").getPath();
                var index = oEvent.mParameters.data[0].data._context_row_number;
                var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
                var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/"+sEntityKey);
                if( oBinding.ObjIdsStr && oBinding.ProcessTypeStr){
                    const url = `${this.crmUrl}?objecttype=${oBinding.Objtype}&processtype=${oBinding.ProcessTypeStr}&objidstring=${oBinding.ObjIdsStr}`.substring(0,2000);
                    // var url = this.crmUrl + "?objecttype=LEAD&processtype=" + oBinding.ProcessTypeStr + "&objidstring=" + oBinding.ObjIdsStr;
                    // if(client)
                    // url+="&" + client;
                    window.open(url,"_blank");
                }
            },

            // onSelectedData: function(oEvent) {
            //     debugger;
            //     var index = oEvent.mParameters.data[0].data._context_row_number;
            //     var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
            //     var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/" + sEntityKey);
            //     if (oBinding.ObjIdsStr) {
            //         var sClient = oEvent.getSource().getDataset().getBinding("data").getModel().aUrlParams.find(oEvent => oEvent.includes("sap-client"));
            //         var sUrl =  `/sap/bc/ui5_ui5/sap/zcrm_leads_list/index.html?sap-ui-language=HE&LEADID=${oBinding.ObjIdsStr}`.substring(0,2000);
            //         if (sClient) 
            //             sUrl += "&" + sClient;
            //         window.open(window.location.origin + sUrl, "_blank");
            //     }
            //     debugger;
            // },

            renderComplete: function (oEvent) {
                // var that = this;
                oEvent.getSource().setBusy(false);
                let oModelView = this.getOwnerComponent().getModel("mainView");
                var vizFrame = oEvent.getSource();
                var bindingObjects;

                // var that =this;               
                // if(    bindingObjects 
                //     && bindingObjects.aKeys
                //     && bindingObjects.aKeys.length > 0)
                // bindingObjects.aKeys.forEach(nameProperty => {
                //     var entity = that.getView().getModel().getProperty("/"+nameProperty);
                //     try{
                //     sum += Number.parseInt(entity.CountTotal);
                //     }catch(e){}
                // });

                // oModelView.setProperty("/sumChar0" + numGraph, sum);      


                //// oModelView.setProperty("/busyChar0" + 6, false);
                // var vizFrameNumber = vizFrame.getId().replace(this.getView().getId(), "").replace("--idChar0", "");
                // switch (vizFrameNumber) {
                //     case "1":
                //         bindingObjects = this.getView().getModel().getBindings().find((obj)=>( obj.sPath == "/ZSNIF_LEAD_STATUS_COUNTSSet"));
                //         break;
                //     case "2":
                //         bindingObjects = this.getView().getModel().getBindings().find((obj)=>( obj.sPath == "/ZSNIF_LEAD_SLA_COUNTSSet"));
                //         break;
                //     case "3":

                //         break;
                //     case "4":

                //         break;
                //     case "5":

                //         break;
                //     case "6":
                //         // this.getView().byId("idChar2").setBusy(false);
                //         break;
                // }
                // var that =this;
                // var sum = 0;
                // if(bindingObjects && bindingObjects.length > 0)
                // bindingObjects.forEach(nameProperty => {
                //     var count = that.getView().getModel().getProperty(nameProperty);
                //     try{
                //     sum += Number.parseInt(count);
                //     }catch(e){}
                // });
                // oModelView.setProperty("/sumChar0" + vizFrameNumber, sum);
                

            }
        });
    });
