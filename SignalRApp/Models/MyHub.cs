using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace SignalRApp.Models
{
    
    public class ChatHub : Hub
    {
        public void Announce(string msg)
        {
            Clients.All.Announce(msg);
        }

        public string GetServerDateTime()
        {

            return DateTime.Now.ToString(new CultureInfo("en-US"));
        }
    }
}