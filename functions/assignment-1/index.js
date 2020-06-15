const https = require('https')

exports.handler = async (event, context) => {
    console.log("Event", event)
    const response = 'i recieved request';
    return response;
}