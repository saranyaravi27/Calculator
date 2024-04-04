const input = document.getElementsByClassName('input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (d)=>{
        if (d.target.innerHTML == "="){
            firstValue= eval(firstValue);
            document.querySelector('input').value = firstValue;
        }else if(d.target.innerHTML=="C"){
            firstValue= ""
            document.querySelector("input").value = firstValue;
        }else if (d.target.innerHTML == "CE") {
            // Add to memory
            firstValue = firstValue.slice(0, -1);
            document.querySelector('input').value = firstValue;
        }        
        else{
            console.log(d.target)
            firstValue= firstValue + d.target.innerHTML;
            document.querySelector('input').value = firstValue;
        }
    })

})