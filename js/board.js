let num = 1;
let title = [];
let con = [];
let number = [];

// 
write_Btn10.onclick= function(){
    document.querySelectorAll(".main_content")[0].style.display = "none"
    document.querySelectorAll(".main_content")[1].style. display = "block"
    document.querySelectorAll(".main_content")[2].style. display = "none"
}
register.onclick = function(){
    // 날짜
    let today = new Date();
    // let year = today.getFullYear();
    // let month = ('0' + (today.getMonth() + 1)).slice(-2);
    // let day = ('0' + today.getDate()).slice(-2);
    let Hours = today.getHours()
    let Minutes = "0"+today.getMinutes()
    let dateString = Hours  + '-' + Minutes;
    // 게시글 틀 만들기
    let a =document.createElement('div')
    document.querySelector(".main_content").appendChild(a)
    a.classList.add("t2")
    let content = document.querySelectorAll(".t2")[document.querySelectorAll(".t2").length-1]
    content.classList.add(num)
    content.appendChild(document.createElement("div")).classList.add("title-number")
    content.appendChild(document.createElement("div")).classList.add("title")
    content.appendChild(document.createElement("div")).classList.add("name")
    content.appendChild(document.createElement("div")).classList.add("date")
    content.querySelectorAll("div")[0].innerHTML = num;
    content.querySelectorAll("div")[1].innerHTML = titl.value;
    content.querySelectorAll("div")[2].innerHTML = "익명";
    content.querySelectorAll("div")[3].innerHTML = dateString;
    title.push(titl.value)
    con.push(cont.value)
    number.push(num)
    num++
    document.querySelectorAll(".main_content")[1].style.display = "none"
    document.querySelectorAll(".main_content")[0].style.display = "block"
    titl.value =null;
    cont.value = null;
    console.log(a.classList)
    // 게시글 찾아서 게시글 보여주기
    a.onclick = () => {

        for(let i = 1;i <= title.length ;i++){
            if(number.includes(Number(a.classList[1]))){
                document.querySelectorAll(".main_content")[0].style.display = "none"
                document.querySelectorAll(".main_content")[1].style.display = "none"
                document.querySelectorAll(".main_content")[2].style.display = "block"
                document.querySelectorAll(".t1 h1")[2].innerHTML = title[i-1]
                document.querySelector(".inner_content").innerHTML = con[i-1]
            }

        }
         // 게시글 삭제
        list_delete.onclick = function(){
            document.querySelectorAll(".main_content")[0].style.display = "block";
            document.querySelectorAll(".main_content")[1].style.display = "none";
            document.querySelectorAll(".main_content")[2].style.display = "none";
            document.querySelectorAll(".main_content")[0].removeChild(a)
            let _length = document.querySelectorAll(".title-number").length;
            if(_length > 1)
            {
                for(let i = 1;i <= _length;i++){
                    if(i == _length) continue
                    document.querySelectorAll(".title-number")[i].innerHTML = i
                }
            }
            title.splice(title.indexOf())
            con.slice(a.classList[1]-1)
            num = document.querySelectorAll(".title-number").length;
        
        }  
    }

}
// 게시글작성에서 목록으로 돌아가기
list_btn1.onclick = function(){
    document.querySelectorAll(".main_content")[0].style.display = "block"
    document.querySelectorAll(".main_content")[1].style.display = "none"
    document.querySelectorAll(".main_content")[2].style.display = "none"
    titl.value = null;
    cont.value = null;
}
// 게시글에서 목록으로 돌아가기
list_btn2.onclick = function(){
    document.querySelectorAll(".main_content")[0].style.display = "block"
    document.querySelectorAll(".main_content")[1].style.display = "none"
    document.querySelectorAll(".main_content")[2].style.display = "none"
}
<<<<<<< HEAD:write.js
// 게시글 삭제
list_delete.onclick = function(){
=======
>>>>>>> 35824dafa970f1c1f1305a90bc3cd8f31f9d189e:js/board.js

}







