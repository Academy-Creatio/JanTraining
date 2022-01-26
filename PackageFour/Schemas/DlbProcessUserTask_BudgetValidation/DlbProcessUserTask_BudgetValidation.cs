namespace Terrasoft.Core.Process.Configuration
{

	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using PackageTwo.Interfaces;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.UI.WebControls.Controls;

	#region Class: DlbProcessUserTask_BudgetValidation

	/// <exclude/>
	public partial class DlbProcessUserTask_BudgetValidation
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {

			var schema = UserConnection.EntitySchemaManager.GetInstanceByName("DlbDemoSection");
			var entity = schema.CreateEntity(UserConnection);
			entity.FetchFromDB(RecordId);
			
			string name = entity.GetTypedColumnValue<string>("DlbName");


			//if(name.Length > 5)
			//{
			//	Result = true;
			//}
			//else
			//{
			//	Result = false;
			//}

			Result = name.Length > 5 ? true : false;

			//ALWAYS RETURN TRUE
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}

