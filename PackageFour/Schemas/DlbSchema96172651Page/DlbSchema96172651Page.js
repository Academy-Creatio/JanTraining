define("DlbSchema96172651Page", [], function() {
	return {
		entitySchemaName: "DlbTimeTracking",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "TabTimeTrackingTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabTimeTrackingTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTimeTrackingTabLabelGroup467019e6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabTimeTrackingTabLabelGroup467019e6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabTimeTrackingTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabTimeTrackingTabLabelGroup467019e6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME70c5b22f-f6eb-4147-98fe-3b2c5c007b45",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6"
					},
					"bindTo": "DlbStartTime",
					"enabled": true
				},
				"parentName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIMEcc60bb49-cb65-4612-bc53-8645ee9b935f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6"
					},
					"bindTo": "DlbEndTime",
					"enabled": true
				},
				"parentName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER6108f42f-869f-422d-84ed-bebec8122e8b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6"
					},
					"bindTo": "DlbDurationInSeconds",
					"enabled": false
				},
				"parentName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP25a7096d-be97-4de3-8597-47d1d49be348",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6"
					},
					"bindTo": "DlbContact",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING7c039d4e-36af-493b-8b30-9287498c6ff2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6"
					},
					"bindTo": "DlbDurationFormated",
					"enabled": false
				},
				"parentName": "TabTimeTrackingTabLabelGridLayoutbd14ddf6",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_DIFF*/
	};
});
