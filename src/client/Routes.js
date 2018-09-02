import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Posts from './pages/blog/postsPage'
import Post from './pages/blog/postPage'
import Cases from './pages/CasePage'
import Services from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import TermsAndConditions from './pages/policies/termsAndConditions'
import Privacy from './pages/policies/privacy'
import CookiesPolicy from './pages/policies/cookiesPolicy'
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
		routes: [
			{
				...Cases
			}
		]
	},
	{
		path: '/services',
		...App,
		routes: [
			{
				...Services
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
		path: '/policies/terms',
		...App,
		routes: [
			{
				...TermsAndConditions
			}
		]
	},
	{
		path: '/policies/privacy',
		...App,
		routes: [
			{
				...Privacy
			}
		]
	},
	{
		path: '/policies/cookies',
		...App,
		routes: [
			{
				...CookiesPolicy
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