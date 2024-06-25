// variables
const d1=document.getElementById('d1');
const m1=document.getElementById('m1');
const y1=document.getElementById('y1');
const dashYears=document.getElementById('dash-years');
const dashMonths=document.getElementById('dash-months');
const dashDays=document.getElementById('dash-days');
const btn=document.getElementById('btn');

const date=new Date();
let d2=date.getDate();
let m2=1+date.getMonth();
let y2=date.getFullYear();

const months=[31,28,31,30,31,30,31,31,30,31,30,31];



btn.addEventListener("click",function(e){
    e.preventDefault();

    if(validateInput()){
        if(d1.value>d2){
            d2=d2+months[m2-1];
            m2=m2-1
        }
        if(m1.value>m2){
            m2=m2+12;
            y2=y2-1
        }


        const d=d2-d1.value;
        const m=m2-m1.value;
        const y=y2-y1.value;

        dashDays.innerHTML=d;
        dashMonths.innerHTML=m;
        dashYears.innerHTML=y;

    }

    
})



const validateInput=()=>{
    const inputs=document.querySelectorAll('input');
    let validate=true;
    inputs.forEach((i)=>{
        const parent=i.parentElement;
        if(i.value===""){
            i.style.borderColor="red";
            parent.querySelector('small').innerText="This field required";
            parent.querySelector('label').style.color="red";
            validate=false;
        }
        else if(d1.value>31){
            d1.style.borderColor="red";
            d1.parentElement.querySelector('small').innerText="Must be a day";
            d1.parentElement.querySelector('label').style.color="red";
            validate=false;
        }
        else if(m1.value>12){
            m1.style.borderColor="red";
            m1.parentElement.querySelector('small').innerText="Must be a month";
            m1.parentElement.querySelector('label').style.color="red";
            validate=false;
        }
        else if (y1.value>=2024){
            y1.style.borderColor="red";
            y1.parentElement.querySelector('small').innerText="Must be in the past";
            y1.parentElement.querySelector('label').style.color="red";
            validate=false;
        }
        else{
            i.style.borderColor="grey";
            parent.querySelector('small').innerText="";
            parent.querySelector('label').style.color="grey";
            validate=true;
        }

    })
    return validate;
}