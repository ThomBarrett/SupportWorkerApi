# SupportWorkerApi

Run the typescript file supportWorkerVisitApi.ts (I was running it via Jetbrains webstorm)

In a terminal run: curl "http://localhost:3000/getSupportWorkerVisits?supportWorkerId=1"

You should get the result:

StatusCode        : 200
StatusDescription : OK
Content           : [{"visitId":1,"startDateTime":1663405200000,"endDateTime":1663408800000,"supportWorkerId":1,"name":"Andrew","contractedHours":15},{"visitId":4,"startDateTime":
                    1663405200000,"endDateTime":1663408800000...
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 388
                    Content-Type: application/json; charset=utf-8
                    Date: Thu, 05 Dec 2024 13:27:59 GMT
                    ETag: W/"184-bOCDMKTHqo6pNNkXSO...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 388], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 388

