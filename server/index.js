const path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: path.join(__dirname, '..', 'dist')
            }
        }
    }
});

server.connection({
    port: process.env.PORT || 8080
});

server.register(Inert);

server.route({
    handler: {
        directory: {
            index: true,
            path: '.',
            redirectToSlash: true
        }
    },
    method: 'GET',
    path: '/{param*}'
});

server.start((err) => {

    if (err) {

        throw err;

    }

    console.log('Server running at:', server.info.uri);

});
