var a = document.querySelector("#add")
var b = document.querySelector("h5")

flag = 1

a.addEventListener("click",function(){
    if (flag == 1) {
        b.innerHTML = "Friends"
        b.style.color = "green"
        a.innerHTML = "Remove Friend"
        flag = 0
    }
    else{
        b.innerHTML = "Stranger"
        b.style.color = "red"
        a.innerHTML = "Add Friend"
        flag = 1
    }
})
    
    
