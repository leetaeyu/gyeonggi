$(function(){
    const body = $("body");
    const modalClose = $(".modal_title_box .is-close");

    // $(document).ready(function(){
    //     $(".input_item").attr("required", false);
    // })
    
    // modal
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

    // var emailCheck = document.getElementById("email_check");
    // var emailError = document.getElementById("email_error");
    // var emailCheck = $("#email_check");
    // var emailError = $(".email_Error");

    // function validateEmail(){
    //     if(!emailCheck.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    //         emailError.innerHTML = "테스트" ;
    //         return false;
    //     }
    //     emailError.innerHTML = "";
    //     return true;
    // }


    // $("#email_check").keyup(function(){
    //     if(!this.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    //         emailError.innerHTML = "이메일 양식에 맞춰 입력해주세요." ;
    //         return false;
    //     }
    //     emailError.innerHTML = "";
    //     return true;
    // })




    // 관리자신청
    $("#email_check, #login_email_check, #pw_find_email").keyup(function(){
        if(!this.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            $(".email_error").html("이메일 양식에 맞춰 입력해주세요.")
            return false;
        }
        $(".email_error").html("");
        return true;
    })
    $("#password_check, #login_pw_check, #new_pw").keyup(function(){
        if(!this.value.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/)) {
            $(".password_error").html("비밀번호는 최소 8자 이상이며 1개 이상의 특수문자 입력이 필요합니다.");
            return false;
        }
        $(".password_error").html("");
        return true;
    })
    $("#name_check, #pw_find_name").keyup(function(){
        if(!this.value.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/)) {
            $(".name_error").html("이름을 입력해주세요.");
            return false;
        }
        $(".name_error").html("");
        return true;
    })
    $("#phone_check").keyup(function(){
        if(!this.value.match(/^(010{1})[0-9]{3,4}[0-9]{4}$/)) {
            $(".phone_error").html("연락처를 입력해주세요.");
            return false;
        }
        $(".phone_error").html("");
        return true;
    })
    $("#new_pw_check").keyup(function(){
        const newPw = $("#new_pw").val();
        const newCheck = $("#new_pw_check").val();
        if(newPw != newCheck){
            $(".password_newcheck").html("비밀번호가 불일치합니다.");
            return false;
        }
        $(".password_newcheck").html("");
        return true;
        console.log(newPw);
    })
})


