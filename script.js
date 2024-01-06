let Change=()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    document.body.style.background=randomCode;
    document.querySelector('h2').innerText=randomCode;
}