let inp = document.querySelector(".inp");
let add = document.querySelector(".add");
let strike = document.querySelector(".strike");
let list = document.querySelector(".list");
let ls = document.querySelector(".list-section")
let ul = document.querySelector("ul");

add.addEventListener("click",()=>{
    
    if(inp.value !== ""){
        let task = `
        <li><span class="strike"><i class="fa-solid fa-circle"></i></span> <p class="list">${inp.value}</p> <span class="delete"><i class="fa-solid fa-trash"></i></span></li>
        `;
        ul.insertAdjacentHTML("beforeend",task);
        inp.value = "";

        let li = document.querySelector('li');
        let dlt = document.querySelectorAll(".delete");
        dlt.forEach((e)=>{
            e.addEventListener('click',()=>{
                e.parentElement.parentElement.removeChild(e.parentElement)

            });
        });

        let strk = document.querySelectorAll(".strike");

        strk.forEach((a)=>{
            a.addEventListener('click',()=>{
                console.log();
                a.parentElement.style.textDecoration = "line-through";
                a.parentElement.style.color = "Red";
            })
        })
    }else{          
        alert("Enter your task first");
    }
    
    
});

