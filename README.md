# MERN - Mongo + Express + React + Nginx (Qisqa url manzil yaratuvchi)

### O&#8216;rnatish

`npm i -D <package-name>` - yaratuvchi rejimida o'rnatish

## Configurations

* Run Server and Client simultaneously with one command
  package.json:

```
    "devDependencies": {
        "concurrently": "*",
        "cross-env": "*"
    },
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "server": "nodemon app",
        "client": "npm run start --prefix client",
        "dev": "cross-env NODE_ENV=development concurrently \"npm run server\" \"npm run client\""
  },
```

* client/package.json:

```
    "proxy": "http://localhost:5000",
```

## References
Server
- [Express](http://expressjs.com) - Fast, un-opinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/docs/) - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program
- [mongoose](https://mongoosejs.com/docs/guide.html) - elegant mongodb object modeling for node.js
- [JWT (JSON Web Token)](https://github.com/auth0/node-jsonwebtoken) - An implementation of JSON Web Signatures.
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - Optimized bcrypt in JavaScript with zero dependencies.
- [config](https://github.com/node-config/node-config) - Node-config organizes hierarchical configurations for your app deployments.
- [CORS](https://github.com/expressjs/cors) - CORS (Cross-Origin Resource Sharing) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Nodemon](https://nodemon.io/) - Nodemon is a utility depended on about 3 million projects, that will monitor for any changes in your source and automatically restart your server.

Client
- [React 17](https://legacy.reactjs.org/docs/getting-started.html) A JavaScript library for building user interfaces.

### Links
- [Prototyping for all](https://proto.io)
- [JWT](https://jwt.io/)
