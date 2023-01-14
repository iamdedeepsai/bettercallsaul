const  appid = "H4L68G-75H7XKWLU2";

function request(query){
    query = encodeURIComponent(query)
    let text;
    fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
        .then(res => {text = res.text();});
    return text;
}

export default request();