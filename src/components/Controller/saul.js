const FakeYou = require('fakeyou.js');

const fy = new FakeYou.Client({
    usernameOrEmail: 'saidedeepsai@gmail.com',
    password: '^P0Q64%Z'
});


const getVoice = (person, text) => {
    fy.start().then(async r => {
        let model = fy.searchModel('person').first();
        const result = await model.request(text);
        const link = result.audioURL();
        const audio = new Audio(link);
        await audio.play().then(() => console.log("Playing sound"));
    });
}

export default getVoice;