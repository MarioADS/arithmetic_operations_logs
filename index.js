const app = require('./src/app');

app.listen( app.get('PORT'), () => console.info(`Server listen on port: ${app.get('PORT')}`) );