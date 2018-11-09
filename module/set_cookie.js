// set cookie to my account

const crypto = require('crypto')

module.exports = (query, request) => {
    console.log("Setting cookies")
    const ans = {status: 500, body: {}, cookie: []}
    ans.cookie = [ 'MUSIC_U=',
      '__remember_me=',
      '__csrf=' ]

    ans.status = 200
    ans.body = {'oh': 'fuck!'}
    return new Promise((resolve, reject) => {
      resolve(ans);
    });
}
