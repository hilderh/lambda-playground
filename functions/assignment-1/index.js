const https = require('https')

exports.handler = async (event, context) => {
    const hackernoonPosts  = await requestHackernoon();
    const response = {
        data: JSON.parse(hackernoonPosts)
    }
    return response
};

const requestHackernoon = () => {
    return new Promise((resolve,reject)=>{
        let dataString = '';
        const req = https.get("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (res)=> {
            res.on('data', chunk => {
                dataString += chunk
            })
            res.on('end', ()=>{
                resolve(dataString)
            })
        }).on('error', (e)=>{
            reject(`error: ${e}`)
        });
    });
}