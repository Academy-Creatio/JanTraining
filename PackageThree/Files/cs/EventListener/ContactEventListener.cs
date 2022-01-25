
using Common.Logging;
using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace PackageThree.EventListener
{

	/// <summary>
	/// Listener for 'EntityName' entity events.
	/// </summary>
	/// <seealso cref="Terrasoft.Core.Entities.Events.BaseEntityEventListener" />
	//[EntityEventListener(IsGlobal = true)]
	[EntityEventListener(SchemaName = "Contact")]
	internal class ContactEventListener : BaseEntityEventListener
	{

		public override void OnSaving(object sender, EntityBeforeEventArgs e)
		{
			base.OnSaving(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
			ILog logger = LogManager.GetLogger("GuidedLearningLogger");
			logger.InfoFormat("Executing OnSaving in PackageThree {0}", DateTime.UtcNow);
			var cols = entity.GetChangedColumnValues();
				
			//from value
			var oldEmail = entity.GetTypedOldColumnValue<string>("Email");

			//to value
			var newEmail = entity.GetTypedColumnValue<string>("Email");
			
			//Event subscribtion
			entity.Validating += Entity_Validating;
			
		}

		private void Entity_Validating(object sender, EntityValidationEventArgs e)
		{
			ILog logger = LogManager.GetLogger("GuidedLearningLogger");
			logger.InfoFormat("Executing Entity_Validating in PackageThree {0}", DateTime.UtcNow);
			logger.InfoFormat("Error: {0}", "Phone contains 444");
			
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;

			string phone = entity.GetTypedColumnValue<string>("Phone");
			//if (phone.Contains("555"))
			//{
			//	EntityValidationMessage evm = new EntityValidationMessage
			//	{
			//		Text = "Phone may not contain 444",
			//		MassageType = Terrasoft.Common.MessageType.Error,
			//		Column = entity.Schema.Columns.FindByName("Email")
			//	};
			//	entity.ValidationMessages.Add(evm);
			//}
		}

		public override void OnSaved(object sender, EntityAfterEventArgs e)
		{
			base.OnSaved(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
			//var email = entity.GetTypedColumnValue<string>("Email");
		}
		
	}
}
