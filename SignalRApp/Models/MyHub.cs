using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
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

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}