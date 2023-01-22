var inputdate =document.getElementById('inputdate');

// console.log(inputdate.value);
var Addtesk = document.getElementById('AddTesk');
var  allTesk =document.getElementById('allTesk')
var Nodate = document.getElementById('Nodate')
// console.log(Addtesk);

// add now tesk


function addnewtesk(){
 var deta =   inputdate.value;

 if(deta.length >=3 && deta.length<=20){
    var nowdiv = document.createElement('div')

    //  nowdiv.classList.add('alert')
    //  nowdiv.classList.add('alert-info')
    //  nowdiv.append(deta);
    //  console.log(nowdiv);     
    //  allTesk.append(nowdiv)
    var nowdiv = `<div class="alert  alert-info checked">  ${deta}   <button class= "btn btn-danger float-right  delete " style="margin: -7px;"> Delete          </button>
       </div> `
    allTesk.innerHTML   += nowdiv
    checkTask();
    inputdate.value ='';
 }
 else{
    window.alert("tesk Should be more then 3 charcter and   Less then 20 charcter")

}
}
Addtesk.addEventListener('click' , addnewtesk)  

// add delete tesk
document.addEventListener ( 'click' , (e)=>{


    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();   
        checkTask();
    }
    else{

    }
    // console.log(e.target);  
} )

//check tesk 

document.addEventListener ( 'click' , (e)=>{


    if(e.target.classList.contains('checked'))
    {
        e.target.classList.toggle('checkstyle');

    }
    else{

    }
    // console.log(e.target);  
} )



function checkTask(){
if(allTesk.children.length ==0){
    Nodate.style.display="block";
}    
else{
    Nodate.style.display="none";
}
}








