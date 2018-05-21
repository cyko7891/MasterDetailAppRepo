jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"manageproducts/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"manageproducts/test/integration/pages/App",
	"manageproducts/test/integration/pages/Browser",
	"manageproducts/test/integration/pages/Master",
	"manageproducts/test/integration/pages/Detail",
	"manageproducts/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "manageproducts.view."
	});

	sap.ui.require([
		"manageproducts/test/integration/NavigationJourneyPhone",
		"manageproducts/test/integration/NotFoundJourneyPhone",
		"manageproducts/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});