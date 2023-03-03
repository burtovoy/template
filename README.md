## Что уже есть
1. Вы создали в папке файл public/index.html
2. Вы написали первый код на JavaScript в public/assets/post_size.js


## Создайте js файл и подключите его
Cоздаим файл index.js в папке public/assets. Подклюим этот файл в нашем html

```html
<script crossorigin src="/assets/index.js" type="module"></script>
```

## Вы уже создали первый модуль
Также в папке assets создайте файл 

```js
export default function postSize(post) {
  return post.length;
}
```

в файле index.js вызовите код. 
```js
import postSize from './post_size.js';
alert(postSize('Всем привет!'));
```
Так как файл index.js подключен в index.html, при открытие index.html сработает alert и выведет результат

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
Далее установим 
```
npm init @eslint/config
```
ESLint статически анализирует ваш код, чтобы найти проблемы со стилем кода.

## Пропишите настройки для eslint 
В корне проекта создайте .eslintrc.json и пропишите в нем настройки. Взять их можно из [файла](https://github.com/burtovoy/template/blob/master/.eslintrc.json), В настройки можно сильно не вникать. Они созданы для этого проекта, для другого проекта могут быть другие настройки.
## Подключите mocha 
Установите mocha и chai
```
npm install --save-dev mocha
npm i -S chai
```

## Напишите первый тест 
Создайте папку tests, в ней создате calc.test.js

```js
import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('перемножает 2 числа', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
});
```

## Создайте комануду для запуска тестов и проверки кода
```json
  "scripts": {
    "test": "mocha ./tests/*.test.js",
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
  ```
Теперь команда npm run test запустит тесты, а команда npm run lint проверит код на стандарты стиля

## Сделайте action для github
GitHub умеет выполнять задачи для вашего кода. 
Создайте [файл](https://github.com/burtovoy/template/blob/master/.github/workflows/tasks.yml) и github выполнит тесты и сделает провреку кода после каждой команды push или pr. 

