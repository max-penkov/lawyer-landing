import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'

export default [
	{
		path: '/about',
		...App,
		routes: [
			{
				...About
			}
		]
	},
	{
		path: '/',
		exact: true,
		...App,
		routes: [
			{
				...HomePage
			}
		]
	}
]