## Создайте html файл
Начнем того что создаем папку public. Далее в этой папке создадим обычный [html файл](https://github.com/burtovoy/template/blob/master/public/index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twitter</title>
</head>
<body>
  <h1>Привет</h1>
</body>
</html>
```

## Создайте js файл и подключите его
Рядом только что созданным html файл, создадим папку assets и создаим файл index.js. Подклюим этот файл в нашем html

```html
<script crossorigin src="/assets/index.js" type="module"></script>
```

## Создайте первый модуль 
Также в папке assets создайте файл 

```js
export default function calculator(a, b) {
  return a + b;
}
```

в файле index.js вызовите код. Теперь при подключении 
```js
import calculator from './calc.js';
alert(calculator(1, 3));
```

## Создайте package.json
С помощью команды
```
npm init 
```
создайте файл package.json

## Настроки модуля для package.json
Добавьте 
```json
"type": "module",
```

## Установите eslint 
Далее установим 
```
npm init @eslint/config
```
ESLint статически анализирует ваш код, чтобы быстро найти проблемы.
## Пропишите настройки для eslint 
В корне проекта создайте .eslintrc.json и пропишите в нем настройки. Настрйоки можно взять из (файла)[https://github.com/burtovoy/template/blob/master/.eslintrc.json], в настройки можно не вникать. Они созданы для этого проекта, для друго проекта могут быть другие настройки
## Подключите mocha 
Установите mocha 
```
npm install --save-dev mocha
```

## Напишите первый тест 
Создайте папку tests, в ней создате calc.test.js

## Создайте комануду для запуска тестов
```json
  "scripts": {
    "test": "mocha ./tests/*.test.js",
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
  ```

## Сделайте action github
GitHub умеет выполнять задачи для вашего кода. Мы будем выполнять 2 задачи: запускать тесты и проверять стиль кода. 
https://github.com/burtovoy/template/blob/master/.github/workflows/tasks.yml