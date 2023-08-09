## Переименуйте 

public\index.js -> public\main.js ->

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
Создайте на render.com веб-сервис(а не статический сайт)