const FakeYou = require('fakeyou.js');

const fy = new FakeYou.Client({
    usernameOrEmail: 'saidedeepsai@gmail.com',
    password: '^P0Q64%Z'
});

fy.start().then(async r => {
    console.log("started")
    let model = fy.searchModel('saul goodman').first();
    const result = await model.request("Hi! Did you know you have rights? Well, the constitution says you do! And so do I. I believe that until proven guilty every man, woman and child in this country are innocent. That's why I fight for you Albuquerque! Better call Saul!");
    const link = result.audioURL();
    console.log(link);
});