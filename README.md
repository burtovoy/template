## Переименуйте 

public\index.js -> public\main.js

На самом деле можно оставить и public\index.js, но в дальнейшем 

## Установите express

```
npm install express --save
```

## Добавьте app.js

```js
import express from 'express';
import fs from 'fs';

const app = express()
const port = 3000

const html = fs.readFileSync('public/main.html', 'utf8');

app.use(express.static('public'));

app.get('/', (req, res) => res.type('html').send(html));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Запустите 
```
node app.js
```

## Задеплойте
Создайте на render.com 

1. Создайте новый Web Service
2. В Build Command укажите npm install
3. В Start Command укажите node app.js

