let url=localStorage.getItem('base64Url');
console.log(document.body)
document.body.innerHTML=`<img width='100%' height='100%'src='${url}'/>`