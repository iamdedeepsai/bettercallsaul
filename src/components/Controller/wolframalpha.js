const  appid = "H4L68G-75H7XKWLU2";

function requestText(query){
    query = encodeURIComponent(query)
    let text;
    fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
        .then(res => {res.text().then(r => text = r)});
    return text;
}

export default requestText;
