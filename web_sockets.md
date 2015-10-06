# Web Sockets

Open a WebSocket by calling the WebSocket constructor:

    var connection = new WebSocket('ws://html5rocks.websocket.org/echo', ['soap', 'xmpp']);

`ws:` is the URL schema; there's also `wss:` for secure WebSocket connections just like there is `https:` for `http:`.

The second argument accepts optional subprotocols. It can be a string or an array of strings. Each string should represent a subprotocol name and server accepts only one of passed subprotocols in the array. Accepted subprotocol can be determined by accessing protocol property of WebSocket object.

The subprotocol names must be one of registered subprotocol names in IANA registry. There is currently only one subprotocol name (soap) registered as of February 2012.

    // When the connection is open, send some data to the server
    connection.onopen = function () {
      // send strings, or binary data using `Blob` or `ArrayBuffer` objects
      connection.send('Ping');
    };

    // Log errors
    connection.onerror = function (error) {
      console.log('WebSocket Error ' + error);
    };

    // Log messages from the server
    connection.onmessage = function (e) {
      console.log('Server: ' + e.data);
    };

__Cross Origin Communication???__

## Resources

+ [HTML5 Rocks - Introducing WebSockets: Bringing Sockets to the Web](http://www.html5rocks.com/en/tutorials/websockets/basics/#toc-usecases)
