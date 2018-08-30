import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Posts from './pages/blog/postsPage'
import Post from './pages/blog/postPage'
import Cases from './pages/CasePage'
import ContactPage from './pages/ContactPage'
import NotFound404 from './pages/NotFound404'

export default [
	{
		path: '/blog',
		...App,
		routes: [
			{
				path: '/blog/:id',
				...Post
			},
			{
				...Posts
			}
		]
	},
	{
		path: '/cases',
		...App,
		routes:[
			{
				...Cases
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
		path: '/contact',
		...App,
		routes: [
			{
				...ContactPage
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