let yearsValue = document.getElementById('years');
let monthsValue = document.getElementById('months');
let daysValue = parseInt(document.getElementById('days').value);
let BTN = document.querySelector("#circleBTN");
var date = new Date();

let finYear = document.getElementById('finYear');

BTN.addEventListener('click', function CalculateAge(){
    if(!yearsValue || !monthsValue || !daysValue){ // returns info whether there are inputs
        console.log('no values provided');
    }else{
        finYear.innerHTML = yearsValue.value
    }
    
    if(yearsValue > date.getFullYear){
        console.log("incorrect year");
    }
})