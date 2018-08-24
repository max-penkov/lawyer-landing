import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'

export default [
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