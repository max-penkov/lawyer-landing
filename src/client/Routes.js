import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Posts from './pages/blog/postsPage'
import NotFound404 from './pages/NotFound404'
export default [
	{
		path: '/blog',
		...App,
		routes: [
			{
				...Posts
			}
		]
	},
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
	},
	{
		path: '/',
		...App,
		routes: [
			{
				...NotFound404
			}
		]
	}
]