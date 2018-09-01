import React from 'react'
import webConfig from '../../webConfig'
import {Helmet} from 'react-helmet'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from './../client/Routes';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript'

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic();

	return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${helmet.title.toString()}
        <!--<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet">-->
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="${webConfig.siteURL}/assets/css/main.min.css" rel="stylesheet" type="text/css" />
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script>
			window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="${webConfig.siteURL}/client_bundle.js"></script>
    </body>
</html>`;
}