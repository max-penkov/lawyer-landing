import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import config from '../webpack.client.js'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var compiler = webpack(config);
//
// app.use(webpackDevMiddleware(compiler, {
// 	stats: { colors: true },
// 	noInfo: true,
// 	publicPath: config.output.publicPath
// }));
//
// app.use(webpackHotMiddleware(compiler));

app.get(['/*/:param', '*'], (req, res) => {

	const ParamValue = req.params.param ? req.params.param : null;

	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store, ParamValue) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, context);

		if(context.url){
			return res.redirect(301, context.url);
		}

		// check if 404
		if(context.notFound){
			res.status(404);
		}
		res.send(content);
	}).catch(error => {
		console.log(error);
	});
});

app.listen(port, () => {
	console.log(`Running on Port ${port}`);
});