define("AtfDemoApp_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "AtfName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AtfName",
					"control": "$AtfName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$AttachmentList",
					"primaryColumnName": "AttachmentListDS_Id",
					"columns": [
						{
							"id": "1d58ad9e-8b2c-406a-934d-a6eaa9d8704d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					],
					"viewType": "gallery",
					"tileSize": "small"
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"type": "crt.Feed",
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"dataSourceName": "PDS",
					"entitySchemaName": "AtfDemoApp"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"AtfName": {
					"modelConfig": {
						"path": "PDS.AtfName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "AtfDemoApp"
					},
					"scope": "page"
				},
				"AttachmentListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
