const FakeYou = require('fakeyou.js');
const fy = new FakeYou.Client({
    usernameOrEmail: 'saidedeepsai@gmail.com',
    password: '^P0Q64%Z'
});
const appid = "H4L68G-75H7XKWLU2";


async function requestText(query){
    query = encodeURIComponent(query)
    let getText = new Promise((resolve) => {
        fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
            .then(async res => {
                await res.text().then(r => {
                    resolve(r);
                })
            })
    });
    return (await getText);
}

export default requestText;