let btns = document.querySelectorAll('button') ;
for(btn of btns){
    btn.addEventListener('mouseover',()=>{
        btn.style.backgroundColor = "grey"
    })
}