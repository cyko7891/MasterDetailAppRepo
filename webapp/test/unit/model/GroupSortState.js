sap.ui.define([
		"manageproducts/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("ProductID").length, 1, "The sorting by ProductID returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("ProductName").length, 1, "The sorting by ProductName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("ProductID").length, 1, "The group by ProductID returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to ProductID if the user groupes by ProductID", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("ProductID");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "ProductID", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by ProductName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "ProductID");

		this.oGroupSortState.sort("ProductName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});