import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './css/styles.css'

const divRoot = document.querySelector('#app')

//ReactDOM.render(<PrimeraApp saludo='Hola soy Camilo' />, divRoot)
ReactDOM.render(<CounterApp value={0} />, divRoot)
