using Terrasoft.Core;

namespace PackageTwo.Interfaces
{
	public interface IConfToClio
	{
		void PostMessageToAll(string sender, string message);
		void PostMessage(UserConnection userconnection, string sender, string message);
	}
}
