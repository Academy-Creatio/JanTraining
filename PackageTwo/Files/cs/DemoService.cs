﻿using System;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Web.Common;

namespace PackageTwo
{
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class CreatioWsTemplate : BaseService
	{
		#region Properties
		private SystemUserConnection _systemUserConnection;
		private SystemUserConnection SystemUserConnection
		{
			get
			{
				return _systemUserConnection ?? (_systemUserConnection = (SystemUserConnection)AppConnection.SystemUserConnection);
			}
		}
		#endregion


		// http://<hostName>:<port>/0/rest/className/MethodName
		// http://k_ktylov_n:7070/0/rest/CreatioWsTemplate/PostMethodName
		// http://k_ktylov_n:7070/0/rest/CreatioWsTemplate/PostMethodName
		#region Methods : REST
		
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
		public string PostMethodName(Guid bankLineId)
		{
			UserConnection userConnection = UserConnection ?? SystemUserConnection;
			return "Ok";
		}

		// http://k_ktylov_n:7070/0/rest/CreatioWsTemplate/GetMethodName
		[OperationContract]
		[WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
		public string GetMethodname(int a, int b)
		{
			UserConnection userConnection = UserConnection ?? SystemUserConnection;

			var c = new Calculator(UserConnection);


			return $"Ok {c.Add(a, b)}";
		}

		#endregion

		#region Methods : Private

		#endregion
	}
}



