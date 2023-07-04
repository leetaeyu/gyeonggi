$(function(){
    
    // $(document).ready(function(){
        //     $(".input_item").attr("required", false);
        // })
        
    // modal
    const body = $("body");
    const modalClose = $(".modal_title_box .is-close");

    $(".terms_btn").click(function(){
        $(body).addClass("hidden");
        $(".terms").addClass("active");
    })
    $(".information_btn").click(function(){
        $(body).addClass("hidden");
        $(".information").addClass("active");
    })
    $(modalClose).click(function(){
        $(body).removeClass("hidden");
        $(".terms").removeClass("active");
        $(".information").removeClass("active");
    })

    // validation
    const chkEmail = $(".chkEmail");
    const chkName = $(".chkName");
    const chkPw = $(".chkPw");
    const chkPhone = $(".chkPhone");
    const chkNewPw = $(".chkNewPw");

    let emailReg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    let nameReg = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    let phoneReg = /^(010{1})[0-9]{3,4}[0-9]{4}$/;

    //email
    chkEmail.keyup(function(){
        if(!this.value.match(emailReg)) {
            $(this).siblings("p").text("이메일 양식에 맞춰 입력해주세요.");
            return false;
        } 
        $(this).siblings("p").text("");
        return true;
    })
    //password
    chkPw.keyup(function(){
        if(!this.value.match(pwReg)) {
            $(this).siblings("p").text("비밀번호는 8~32자 이며 1개 이상의 특수문자 입력이 필요합니다.");
            return false;
        }
        $(this).siblings("p").text("");
        return true;
    })
    //pw reset
    chkNewPw.keyup(function(){
        const newPw = chkPw.val();
        const newCheck = chkNewPw.val();
        if(newPw != newCheck){
            $(this).siblings("p").text("비밀번호가 불일치합니다.");
            return false;
        }
        $(this).siblings("p").text("");
        return true;
    })
    //name
    chkName.keyup(function(){
        if(!this.value.match(nameReg)) {
            $(this).siblings("p").text("이름을 입력해주세요.");
            return false;
        }
        $(this).siblings("p").text("");
        return true;
    })
    //phone
    chkPhone.keyup(function(){
        if(!this.value.match(phoneReg)) {
            $(this).siblings("p").text("연락처는 '-'를 제외하고 입력해 주세요.");
            return false;
        }
        $(this).siblings("p").text("");
        return true;
    })

    //비밀번호 재설정
    const eye = $(".eye_img");
    const eyeImg = $(".eye_img img")

    eye.on("click", function(e){
        $(this).find("img").attr("src", function (index, attr) {
            if (attr.match("_on")){
                return attr.replace("_on.png", "_off.png");
            } else {
                return attr.replace("_off.png", "_on.png");
            }
        });
        if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr("type", "text");
        } else {
            $(this).siblings("input").attr("type", "password");
        }
    })
})


