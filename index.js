// javascript

// 1) let var const 

// 2) prompt console.log //IN ra man hinh

// 3) if else 

// 4) for while 

// 5) array ==> [1 ,2 , 3 , 5, 6]

// 6) object ==> {
//      address: "vietnam", name: "Duong"
// }

// 7) function function() 


// let myDiv = document.createElement("div"); // create div tag
// myDiv.innerHTML = " have included my div";
// myDiv.id = "main";
// {/* <div id="main"> main </div> */}



// let biggerDiv = document.getElementById("biggerDiv");
// // console.log(biggerDiv);


// biggerDiv.appendChild(myDiv);
// // console.log(biggerDiv);



// let myButton = document.createElement("button");
// myButton.innerHTML = "Click me";
// myButton.addEventListener("click", clickHandle)
// {/* <button> click me </button> */}

// function clickHandle(){
//     console.log("clicked");
//     let myButton = document.createElement("button");
//     myButton.innerHTML = "Click me";
//     myButton.addEventListener("click", clickHandle)
//     biggerDiv.appendChild(myButton);
// }

// biggerDiv.appendChild(myButton);


// {/* <div id="main"> main </div> */}


let form = document.getElementById("main");

let taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Insert your task";

let submitButton = document.createElement("button");
submitButton.innerHTML = "Add task";
submitButton.addEventListener("click", submitHandler);
// submitButton.style.backgroundColor = "red";

let container = document.createElement("div");

let taskList = [];

function submitHandler(){
    taskList.push(taskInput.value);
    taskDisplay(taskList);
    console.log(taskList);
}

function taskDisplay(list){
    container.innerHTML = "";
    for(let i = 0; i < list.length; i++){
        let answer = document.createElement("div");
        answer.classList.add("answer")
        answer.index = i;
        answer.innerHTML = taskList[i];
        answer.style.cursor = "pointer";
        answer.addEventListener("click",function(){
            taskList.splice(answer.index, 1)
            console.log(taskList);
            taskDisplay(taskList);

        });
        container.appendChild(answer);
    } 
}

form.appendChild(taskInput);
form.appendChild(submitButton);
form.appendChild(container);

