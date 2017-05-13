# RemotePersonServer
Simple http-server

## Run
Run `node server.js` in command line. For UNIX-like systems use `sudo`, 'cause `server` listens `TCP-port 80` and for using ports lower then `1024` root permisions are required. 

## Get data
Send `GET` request to `http://localhost/person`. Response will contain JSON person representation.
