


//  console.log("CONSOLE")

// window.localStorage.setItem("todolist","initianext-item");
var todo=[];
//console.log(typeof(window.localStorage.getItem("todolist")));


//check if previous items in localStorage
 if(window.localStorage.getItem("todolist")!=null){
     console.log("has previous items")
   // console.log(window.localStorage.getItem("todolist"));
    todo=window.localStorage.getItem("todolist").split("next-item");
    console.log(todo)
 }else{
    console.log("NO previous items")
 }


 //add existing items from localStorage to list.
if(todo.length>0){
       //making button display block
       document.querySelector("#btn-clr").style.display="block";
    for(x of todo){
        console.log(x);
        if(x.trim()!=""){
            let list = document.querySelector("#list");

    let li = document.createElement("li");

    let text = document.createTextNode(x);
    li.appendChild(text);

    li.setAttribute("class","text-break")
    li.setAttribute("class","text-white")
    li.style.border="2px solid white";
    li.style.padding="10px";
    li.style.width="300px"
    li.style.marginLeft="50px";

    let br = document.createElement("br");
    list.appendChild(br);
    list.appendChild(br);

    list.appendChild(li);
        }
    }
}

let additem = () => {
    let item = document.querySelector("#item").value;

    //console.log(window.localStorage.getItem("todolist"))
   if(todo.length>0){
       //console.log("adding second item");
    window.localStorage.setItem("todolist",window.localStorage.getItem("todolist")+item+"next-item");
   }else{
       window.localStorage.setItem("todolist",item+"next-item");
       todo.push(item);
       //console.log(window.localStorage.getItem("todolist"))
   }
  //console.log("to%do",todo);
    //console.log(window.localStorage.getItem("todolist"));


    let list = document.querySelector("#list");

    let li = document.createElement("li");

    let text = document.createTextNode(item);
    li.appendChild(text);

    li.setAttribute("class","text-break")
    li.setAttribute("class","text-white")
    li.style.border="2px solid white";
    li.style.padding="10px";
    li.style.width="300px"
    li.style.marginLeft="50px";

    let br = document.createElement("br");
    list.appendChild(br);
    list.appendChild(br);

    list.appendChild(li);


   
    document.querySelector("#item").value="";

    //making button display block
    document.querySelector("#btn-clr").style.display="block"
}



let clearitem = () => {
    //Clearing local storage
window.localStorage.removeItem("todolist");
console.log(window.localStorage.getItem("todolist"));
todo=[];
document.querySelector("#list").innerHTML="";
document.querySelector("#btn-clr").style.display="none"
}


////////////////////////////////////////////////////////////


