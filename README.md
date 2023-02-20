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

```
<script crossorigin src="/assets/index.js" type="module"></script>
```

## Создайте первый модуль 
Также в папке assets создайте файл 

export default function calculator(a, b) {
  return a + b;
}

в файле index.js вызовите код. Теперь при подключении 
```
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

## Установите eslint 
npm init @eslint/config
## Пропишите настройки для eslint 
## Подключите mocha 
## Напишите первый тест 
## Создайте комануду для запуска тестов
## Создайте конфигрурацию проверки синтакиса 
## Сделайте action github
