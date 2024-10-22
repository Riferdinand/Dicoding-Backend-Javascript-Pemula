const dotenv = require('dotenv');
dotenv.config();

const Hapi = require('@hapi/hapi');
const routes = require('./books-api/books-routes');

const init = async () => {
    const server = Hapi.server({
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 9000,
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

init();


