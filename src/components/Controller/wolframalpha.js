const appid = "H4L68G-75H7XKWLU2";

function requestText(query){
    query = encodeURIComponent(query)
    fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
        .then(res => {
            res.text().then(r => {
                alert(r);
                return r;
            })
        });
}

export default requestText;