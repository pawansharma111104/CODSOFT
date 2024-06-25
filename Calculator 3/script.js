let str="";
let buttons=document.querySelectorAll('.but');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
console.log(e.target);
if(e.target.innerHTML== '='){
    str=eval(str);
    document.querySelector('#inp').value=str;
}
else if(e.target.innerHTML== 'X'){
    str=str+'*';
    document.querySelector('#inp').value=str;
}
else if(e.target.innerHTML== 'AC'){
    str=""
    document.querySelector('#inp').value=str;
}
else if(e.target.innerHTML== '←'){
    str=str.slice(0, -1);

    document.querySelector('#inp').value=str;
}
else{
    str=str+e.target.innerHTML;
    document.querySelector('#inp').value=str;
}
})
})