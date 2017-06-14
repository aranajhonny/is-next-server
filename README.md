check if next.js is running on server or client.

usage:

```javascript

const isServer = require('is-next-server')

let styletron

export default function getStyletron () {
  if (isServer) {
    // server code.
  }else{
  	// browser code.
  }

```
