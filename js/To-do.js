//query selectors
var sldno = [];
var todoname=document.querySelector("#name"); 
var tododate=document.querySelector("#date");
var todotime=document.querySelector("#time");
var todocategory=document.querySelector("#category");
var todoactive=document.querySelector("#active");
var todoinactive=document.querySelector("#inactive");
var todolevel= document.querySelector("#level");
var tododescription=document.querySelector("#description");
var todotable=document.querySelector("#details"); 
var save=document.querySelector("#save");
var PopNotify = document.querySelector("#pop-notification");
var PopNotifytwo = document.querySelector("#pop-notification-two");

save.addEventListener("click",function(event){
    event.preventDefault();
    // var _analyze = validation();
    // if (_analyze === false){
    //     return false;
    // }
    var _outvalue = null;
    if (todoactive.checked === true){
        _outvalue = "Active";
    }else {
        _outvalue = "Not-Active"
    }
//objects for assigning values
    var _inside = {
        intodoname: todoname.value,
        intododate: tododate.value,
        intodotime: todotime.value,
        intodocategory:todocategory.value,
        intodolevel: todolevel.value,
        intododescription: tododescription.value,
        intooutvalue: _outvalue.value,
    
    }
    sldno.push( _inside);
    console.log(sldno);
    PopNotify.style.display = "flex";
    //calling the print funtion
    printSldno();

})
function  printSldno(){
    var _count ="";
    sldno.forEach(function (value,i){//for each method 
        var show = "green";
        if(value.intooutvalue == "Active"){
            show = "green";
        }
        else{
            show = "red";
        }
        _count += `<tr>
            <td>${i + 1}</td>
                    <td>${value.intodoname}</td>
                    <td>${value.intododate}</td>
                    <td>${value.intodotime}</td>
                    <td>${value.intodocategory}</td>
                    <td><span class= "${show}">${value.intooutvalue}</span></td>
                    <td>${value.intodolevel}</td>
                    <td>${value.intododescription}</td>
                    <td>
                    <button class="btn btn-outline-danger" 
                    onclick="deleteitem(${i})">Delete</button></td>
            
        </tr> `
    }
       
    );
        document.querySelector("#details").innerHTML =   _count;
}
function deleteitem(i){
    sldno.splice(i,1);
    PopNotifytwo.style.display = "flex";
    printSldno()


}
function  removepop(){
    PopNotify.style.display = "none";
    PopNotifytwo.style.display = "none";


}

// function validation(){
//     var _content = true;
//     if(_intodoname.value===""){
//       
//         























