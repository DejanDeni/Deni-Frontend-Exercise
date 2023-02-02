function Num(vol){
document.getElementById('result').value += vol;
}
function equal(){
    let input=document.getElementById('result').value;
    let output=eval(input);
    document.getElementById('result').value=output;
}

function clr(){
    document.getElementById('result').value=''
}