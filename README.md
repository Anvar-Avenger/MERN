# MERN

1. Server va Mijoz tomonlarni birgalikda ishlatish
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

2. client/package.json:
```
    "proxy": "http://localhost:5000",
```

### O'rnatish

`npm i -D <package-name>` - yaratuvchi rejimida o'rnatish