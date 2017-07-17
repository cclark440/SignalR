(function () {
    var Chat = $.connection.chatHub;
    $.connection.hub.start()
    .done(function () {
        console.log("Worked1");
        $.connection.chatHub.server.announce("Connected!");
        $("#loginLink").css({'background-color':'green', 'color':'black'});
        Chat.server.getServerDateTime()
            .done(function (data) {
                writeToPage(data);
            })
            .fail(function (e) {
                $("#loginLink").css({ 'background-color': 'red', 'color': 'black' });
                writeToPage(e);
            });
    })
    .fail(function () { writeToPage("uh oh!"); });

    Chat.client.announce = function (message) {
        writeToPage(message);
    }
    
    var writeToPage = function (message) {

        $("#postList").append("<li>" + message + "</li>");

    }



})()