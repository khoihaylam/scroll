let demo=document.querySelectorAll('.demo-1')
// console.log(demo)
window.addEventListener('scroll',checkbox)
checkbox()
function checkbox(){
    let a=window.innerHeight/5*4
    // console.log(a)
    for(let i=0;i<demo.length;i++){
        let boxtop=demo[i].getBoundingClientRect().top
        // console.log(boxtop)
        if(boxtop<a){
            demo[i].classList.add('show')
        }
        else{
            demo[i].classList.remove('show')
        }
    }
}
//getBoundingClientRect() là gì ta:
// 