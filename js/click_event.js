var king = document.getElementById("context-menus");

                /* 마우스 메뉴 on & off */
function toggleOnOff(num) {
   	num === 1 ? king.classList.add("active") : king.classList.remove("active");
  	//num에 1이면 메뉴창 화면에 출력,num이 0이면 메뉴창 화면에서 제거 
}

$("*").click(function(){
    toggleOnOff(0);
});