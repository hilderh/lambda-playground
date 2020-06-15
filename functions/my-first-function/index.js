exports.handler = async () => {
    var response = {
        statusCode:200,
        body: JSON.stringify('Response from functions')
    }
    return response
}