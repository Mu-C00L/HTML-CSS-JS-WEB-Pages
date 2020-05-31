let slider = document.getElementById("tip-perc");
let tipAmount = document.getElementById("tipamt");
let totalAmount = document.getElementById("total");
let billValue = document.getElementById("billamt");

let sliderValueDisplay = document.getElementById("tip-val");

let reset=()=>{
    billValue.value = 0;
    slider.value = 0
    sliderValueDisplay.textContent = slider.value + " %"; 
}

slider.addEventListener ("input", ()=> {
    sliderValueDisplay.textContent = slider.value + " %";
    let billAmount = +billValue.value;
    let tipPercentage = +slider.value;

    if(billAmount >= 0){
        let tipValue = billAmount * (tipPercentage/100);
        let totalValue = billAmount + tipValue;
        tipAmount.value = tipValue.toFixed(2);
        totalAmount.value = totalValue.toFixed(2);
    }

    else{
        alert("Please Enter Correct Bill Value");
        reset();
    }
});