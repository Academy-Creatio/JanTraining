define("DlbDemoSectionSection", [], function() {
	return {
		entitySchemaName: "DlbDemoSection",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "send",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"caption": "TEST BUTTON",
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"click": {"bindTo": "onCardAction"},
					"tag": "checkSenderBeforeSend",
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "OpenButton",
				"parentName": "SeparateModeActionButtonsLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": "OPEN buttin",
					"classes": {
						"textClass": ["actions-button-margin-right"]
					},
					"visible":true,
					"click": {"bindTo": "openItem"}
				}
			},
			{
				"operation": "insert",
				"name": "PrimaryContactButtonRed",
				"parentName": "CombinedModeActionButtonsCardLeftContainer", //INVISIBLE in section, visible on the page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.RED,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "Section Red Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "CombinedModeActionButtonsCardLeftContainer_Red"
				}
			},
			{
				"operation": "insert",
				"name": "PrimaryContactButtonGreen",
				"parentName": "ActionButtonsContainer", //visible in section and on a page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "Section Green Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "ActionButtonsContainer_Red"
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionSave",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "save",
					"markerValue": "save",
					caption: "TEST BUTN"
				}
			},
			
		]/**SCHEMA_DIFF*/,
		methods: {}
	};
});
