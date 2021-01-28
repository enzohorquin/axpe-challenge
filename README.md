# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Ejercicio 1 Comentarios. 
Mi solucion se encuentra en el file ejercicio1.js

Los problemas que detecto en la implementación son: 
1. El uso de typeof retorna el tipo que posee una variable, y al ser una instancia de una clase retornaria el valor 'object'.

2. Uso de forEach. Con las nuevas funcionalidades de JS, se puede utilizar funciones como [reduce] que hacen que el codigo sea mucho más legible. 

3. Muchos if's dentro del codigo hace que sea dificil de entender y mantener el codigo.

4. Se intentó aplicar uno de los principios de SOLID es el de Single Responsibility Principle que dice que una clase debe estar encargada de realizar una tarea. 
 Se eliminaron los If's ya que se vuelve más complejo poder agregar nuevos servicios en caso de que en un futuro se agreguen. (Open Closed principle)
 Hay consistencia entre las clases Streaming Service y Download Service, ya que ambas tienen implementado su forma de calcular el precio del servicio.(Liskov Substitution).