import getVoice from "./saul";
const FakeYou = require('fakeyou.js');

const fy = new FakeYou.Client({
    usernameOrEmail: 'saidedeepsai@gmail.com',
    password: '^P0Q64%Z'
});


const appid = "H4L68G-75H7XKWLU2";

function requestText(query){
    query = encodeURIComponent(query)


    fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
        .then(res => {
            res.text().then(r => {
                alert(r);
                fy.start().then(r => {
                    let model = fy.searchModel('Saul Goodman').first();
                    const result = model.request(r);
                    const link = result.audioURL();
                    console.log(link);
                }).then(() => {return r});
            })
        });
}

export default requestText;