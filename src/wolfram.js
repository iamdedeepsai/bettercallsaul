const  appid = "H4L68G-75H7XKWLU2";

function request(query){
	query = encodeURIComponent(query)
	console.log('?i=' + query + '&appid=' + appid);
	fetch("https://api.wolframalpha.com/v1/spoken?i=" + query + '&appid=' + appid)
	.then(res => res.text());
	return text;
}
