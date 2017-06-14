#### Check if next.js is running on server or client.

[![Greenkeeper badge](https://badges.greenkeeper.io/aranajhonny/is-next-server.svg)](https://greenkeeper.io/)

#### usage:

```javascript

const isServer = require("is-next-server");

export default () => (
  if (isServer) {
    // server code.
  } else {
    // browser code.
  }
)
```
