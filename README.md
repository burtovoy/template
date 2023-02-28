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

в файле index.js вызовите код. 
```js
import calculator from './calc.js';
alert(calculator(1, 3));
```
Так как файл index.js подключен в index.html, при открытие index.html сработает alert и выведет 4

## Создайте package.json
С помощью команды
```
npm init 
```
создайте файл package.json. После этого мы сможем подключать разные модули для нашего проекта

## Настройки модуля для package.json
Добавьте 
```json
"type": "module",
```
чтобы использовать современную систему модулей в нашем проекте.

## Создайте .gitignore 
Чтобы папка node_modules не попала в репозиторий создайте файл .gitignore и поместите туда:
```
node_modules
```

## Установите eslint 
Далее установим и несколько модулей
```
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb
npm install --save-dev eslint-plugin-mocha
```
ESLint статически анализирует ваш код, чтобы найти проблемы со стилем кода.

## Пропишите настройки для eslint 
В корне проекта создайте .eslintrc.json и пропишите в нем настройки. Взять их можно из [файла](https://github.com/burtovoy/template/blob/master/.eslintrc.json), В настройки можно сильно не вникать. Они созданы для этого проекта, для другого проекта могут быть другие настройки.

## Запустите команду проверки кода
```
npx eslint .
```

## Подключите mocha 
Установите mocha и chai
```
npm install --save-dev mocha
npm install --save-dev chai
```

## Напишите первый тест 
Создайте папку tests, в ней создате calc.test.js

```js
import calculator from '../public/assets/calc.js';
import { assert } from 'chai';

describe('Функция калькулятор', function () {
  it('перемножает 2 числа', function () {
    const expectedResult = 8;
    const result = calculator(3, 5);
    assert.equal(expectedResult, result);
  });
});
```

Запустите тесты 
С помощью команды
```
npx mocha tests
```

## Создайте комануду для запуска тестов и проверки кода
```json
  "scripts": {
    "test": "npx mocha tests",
    "lint": "npx eslint ."
  },
  ```
Теперь команда npm run test запустит тесты, а команда npm run lint проверит код на стандарты стиля

## Сделайте action для github
GitHub умеет выполнять задачи для вашего кода. 
Создайте [файл](https://github.com/burtovoy/template/blob/master/.github/workflows/tasks.yml) и github выполнит тесты и сделает провреку кода после каждой команды push или pr. 

## Ошибка Expected linebreaks to be 'LF' but found 'CRLF'
Возникает на windows. Зайдите в настройки 

File -> Preferences -> Settings. "eol" выставите в \r\n – затем создайте файлы заново (код можно просто скопировать)

