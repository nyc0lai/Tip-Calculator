let TotalBillAmount = document.getElementById("totalBill").innerHTML;
const ServiceLevel = document.getElementsByName("stage");
const NumberOfPersons = document.getElementById("persNr").v;
let x = document.getElementById("pid");

document.getElementById("da").innerHTML = ServiceLevel;


document.getElementById("submit").addEventListener("click", calculate);

function calculate() {
    document.getElementById("out").innerHTML = (TotalBillAmount * ServiceLevel)/NumberOfPersons;
}

