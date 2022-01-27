define("DlbDemoSectionPage", [], function() {
	return {
		entitySchemaName: "DlbDemoSection",
		attributes: {

			"CreatedBy": {
				lookupListConfig: {
					columns: ["Email", "Phone", "Account.Name"]
				}
			},

			"MyEvents": {
				dependencies: [
					{
						columns: ["DlbName"],
						methodName: "onDlbNameChanged"
					},
					{
						columns: ["DlbStatus"],
						methodName: "onDlbStatusChanged"
					}
				]
			},


			/**
			 * Object with current account information.
			*/
			"MyVirtualColumn": {
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"dataValueType": Terrasoft.DataValueType.TEXT,
				"caption": "My Virtual Column",
				"value": "Unset value"
			},

		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "DlbDemoSectionFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "DlbDemoSection"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#init
			 * @overridden
			 */
			 init: function() {
				this.callParent(arguments);
				debugger;
			 },


			/**
			 * @inheritdoc Terrasoft.BasePageV2#onEntityInitialized
			 * @overridden
			 * @protected
			 */
			 onEntityInitialized: function() {
				this.callParent(arguments);
				debugger;
				var name = this.get("DlbName");
			},
			

			onDlbNameChanged: function(a, columnChanged){
				this.set(
					"MyVirtualColumn",
					Ext.String.format("The length is {0}", this.$DlbName.length)
				);
			},
			
			onDlbStatusChanged: function(a, columnChanged){
				var dv = this.$DlbStatus.displayValue;
				this.set("MyVirtualColumn",dv);
			},



			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#setValidationConfig
			 * @override
			 */
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("DlbName", this.dlbNameValidator);
			},


			/**
			 * Validates Name, no less than 7 characters
			 * @protected
			 * @return {Object} Validation result info.
			 */
			 dlbNameValidator: function() {
				var invalidMessage = "";
				if (this.$DlbName.length < 7){
					//invalidMessage = "Name has to be 7 characters long or longer";
					invalidMessage = this.get("Resources.Strings.InvalidNameMessage");
				}else{
					invalidMessage="";
				}
				
				return {
					invalidMessage: invalidMessage
				};
			},
			
			/**
			 * Checks, DlbName contacins more than 5 symbols
			 * @return {Boolean} Menu item enabled.
			 */
			 isDlbNameTwoEnabled: function() {
				// debugger;
				// //var name = this.get("DlbName");
				// var name = this.$DlbName;
				
				// if(name & name.length>5){
				// 	return true;
				// }else{
				// 	return false;
				// }
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "DlbName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DlbStatus",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabMyTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMyTabLabelTabCaption"
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
				"name": "TabMyTabLabelMyFieldGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMyTabLabelMyFieldGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabMyTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMyTabLabelGridLayoutefc637bc",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabMyTabLabelMyFieldGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DlbNameTwo",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "TabMyTabLabelGridLayoutefc637bc"
					},
					"visible": true,
					"enabled": {
						bindTo: 'isDlbNameTwoEnabled'
					},
					"bindTo": "DlbName"
				},
				"parentName": "TabMyTabLabelGridLayoutefc637bc",
				"propertyName": "items",
				"index": 1
			},

			{
				"operation": "insert",
				"name": "VirtualColumn",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "TabMyTabLabelGridLayoutefc637bc"
					},
					"bindTo": "MyVirtualColumn"
				},
				"parentName": "TabMyTabLabelGridLayoutefc637bc",
				"propertyName": "items",
				"index": 0
			},


			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "DlbNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
