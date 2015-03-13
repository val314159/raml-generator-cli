Implementation Notes
====================

the return value from the clients is basically the response object
 - Downside: you have to "know" the way to get status code, output, etc.
 - Upside  : if you chose the client library, you probably already know how to do this.

what this means is that the output isn't validated against json schema.

### future:
 - make an adapter to process output from each of the client libs
 - add output validation against schema

### What's next?

Testing is abysmal at the moment.

OAuth1 doesn't really exist.

OAuth2 support is weak.  (it only works if you already have a token)

