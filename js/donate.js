//스크롤에 따라 글씨 나오도록
let Text = document.querySelector('.text_pack')
window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log(value);
    if(value > 6200){
        Text.style.visibility = 'visible'
    }
    else if(value < 7129){
        Text.style.visibility = 'hidden'
    }
})

//후원하기 누르면 숫자 랜덤으로 증가
document.querySelector(".dnBtn").onclick = function(){
    let a = document.querySelector(".donatedMoney")
    a.innerHTML = Number(a.innerHTML) + 1
}