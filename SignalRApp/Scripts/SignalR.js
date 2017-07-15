﻿(function () {
    var Chat = $.connection.chatHub;
    $.connection.hub.start()
    .done(function () {
        console.log("Worked1");
        $.connection.chatHub.server.announce("Connected!");
        Chat.server.getServerDateTime()
            .done(function (data) {
                writeToPage(data);
            })
            .fail(function (e) {
                writeToPage(e);
            });
    })
    .fail(function () { writeToPage("uh oh!"); });

    Chat.client.announce = function (message) {
        $("#welcome-messages").append(message+"<br/>");
    }

    var writeToPage = function (message) {

        $("#welcome-messages").append(message + "<br/>");
    }



})()