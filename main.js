const TotalBillAmount = document.getElementById("totalBill");
const ServiceLevel = document.getElementsByName("stage");
const NumberOfPersons = document.getElementById("persNr");

document.getElementById("calcul").addEventListener("click", tipCalculator);

function tipCalculator() {
    for(let i=0; i < ServiceLevel.length; i++){
    if(ServiceLevel[i].checked)
    document.getElementById("out").innerHTML = "$"+((TotalBillAmount.value * ServiceLevel[i].value)/NumberOfPersons.value).toFixed(2);
    }
};

