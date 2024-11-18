const { app } = require('@azure/functions');

app.timer('OAuthTokenRefresh', {
    schedule: '0 */5 * * * *', // This runs every 5 minutes
    runOnStartup: true // Optional: ensures it runs on function startup as well
}, (myTimer, context) => {
    context.log('Timer function processed request.');
});
