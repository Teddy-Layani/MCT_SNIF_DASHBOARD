/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zcrm_moked_dash/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
