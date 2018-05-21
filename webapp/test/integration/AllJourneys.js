jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

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
		"manageproducts/test/integration/MasterJourney",
		"manageproducts/test/integration/NavigationJourney",
		"manageproducts/test/integration/NotFoundJourney",
		"manageproducts/test/integration/BusyJourney",
		"manageproducts/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});