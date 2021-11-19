//COUNTRY API  -- XMLHTTP
/*
var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(this.response);
        //console.log(data);
        for(let x of data){
            console.log(`
                Country name : ${x.name}
                Country sub-region: ${x.subregion}
                Country population :${x.population}
            `)
        }
    }else{
        console.log("Data not found");
    }
};
*/

//CHECKING IF TWO json objects are same even if in different order
//USING LODASH -includes lodash.js in index.html also








//////////////////








//


/*


    //combine 2 array and sort them
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];
        function dataHandling3(input1,input2){
            input1= input1.concat(input2);
            input1 = input1.sort()
            return input1;
        }
       var friends =  dataHandling3(friends1,friends2);
       console.log(friends);

       console.log(`
       
       first item: ${friends[0]} 
       Middle item: ${friends[Math.floor(friends.length/2)]}
       last item: ${friends[friends.length-1]}
       `)

       //adding elements to end and beginning of array
       friends.push("Sivani");
       friends.unshift("Ash");
       console.log(friends)

       // adding Mr. to all names 
       for(let x in friends){
           friends[x] = "Mr."+friends[x];
       }
       console.log(friends)

       //comcat all name with comma(,)
       console.log(friends.join(","));

       //retrurn list of names which ha 'a'
       let arr=[];
        for(let x of friends){
            if(x.indexOf('a')!=-1 || x.indexOf('A')!=-1){
                arr.push(x);
            }
        }
        console.log(arr)

        //Average length of friends name:
        let len=0;
        friends.forEach(x => len+=x.length);
        let avg =parseInt( len/friends.length);
        console.log(avg)


*///

//

















//  console.log("CONSOLE")

// window.localStorage.setItem("todolist","initianext-item");
var todo=[];
//console.log(typeof(window.localStorage.getItem("todolist")));
console.log(window.localStorage.getItem("todolist"))
 
todo=window.localStorage.getItem("todolist").split("next-item");
console.log(todo)

if(todo.length>0){
    for(x of todo){
        if(x.trim()!="" && x!="initia"){
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

   if(todo.length>0){
    window.localStorage.setItem("todolist",window.localStorage.getItem("todolist")+item+"next-item");
   }else{
       window.localStorage.setItem("todol)ist"+item+"next-item")
   }
  
    console.log(window.localStorage.getItem("todolist"));


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
}


//Clearing local storage
// window.localStorage.removeItem("todolist");
// console.log(window.localStorage.getItem("todolist"))