
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
			logger.InfoFormat("Executing OnSaving in PackageTwo {0}", DateTime.UtcNow);
			var email = entity.GetTypedColumnValue<string>("Email");

			entity.SetColumnValue("Phone", "444-444-4444");


		}
		public override void OnSaved(object sender, EntityAfterEventArgs e)
		{
			base.OnSaved(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}

	}
}
