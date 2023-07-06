$(function(){
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

    // email validation
    isEmailValidated = function(_this) {
        let emailRegExp = /^[a-z0-9A-Z._-]+@[a-z0-9A-Z_-]+\.[a-zA-Z.]*$/i;
        $(_this).val($(_this).val().trim());

        let element = $(_this);
        let email = $(_this).val();
        let inputWrap = element.closest('.input_wrap');

        var chkB = email.replace(/[^A-Za-z0-9@._-]/gi, '');
        $(_this).val(chkB);

        if (email == "" || email.length < 1) {
            $(_this).siblings("p").text("이메일 양식에 맞춰 입력해주세요.");
			return false;
		}
		else if (email.length > 64) {
            $(_this).siblings("p").text("이메일은 64자가 넘을 수 없습니다 .");
		}
		else if (!emailRegExp.test(email)) {
			$(_this).siblings("p").text("이메일 양식에 맞춰 입력해주세요.");
		}
		else {
			$(_this).siblings("p").text("");
			return true;
		}
    }

	// name validation
	isNameValidated = function(_this){
		let element = $(_this);
		let inputWrap = element.closest('.input_wrap');
		let name = $(_this).val();
		var chkB = name.replace(/[^a-zA-Zㄱ-힣._-]/gi, '');
		$(_this).val(chkB);
		
		if (name == "" || name.length <= 1) {
			$(_this).siblings("p").text("이름을 입력해주세요.");
			return false;
		} else if (name.length > 4) {
            $(_this).siblings("p").text("이름은 최대 4자까지 입력해주세요.");
			return false;
		} else {
			$(_this).siblings("p").text("");
			return true;
		}
	}

    // password validation
	isPwValidated = function(_this){
		$(_this).val($(_this).val().trim());
		var userPw = $(_this).val();
		let element = $(_this);
		let inputWrap = element.closest('.input_wrap');
		let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

		let checkAsterisk = userPw.search(/[!@#$%^*+=-]/g);
		let checkNumber = userPw.search(/[0-9]/g);
		let checkEnglish = userPw.search(/[a-z]/ig);
	
		if (userPw.length > 32) {
            $(_this).siblings("p").text("비밀번호는 최대 32자까지 입력해주세요.");
			return false;
		}
		else if(checkAsterisk <0 || checkNumber <0|| checkEnglish<0){
            $(_this).siblings("p").text("비밀번호는 8~32자 이며 1개 이상의 특수문자 입력이 필요합니다.");
			return false;
		}
		else {
			$(_this).siblings("p").text("");
		}

        //password check
        const chkPw = $(".chkPw");
        const chkNewPw = $(".chkNewPw");
        const newPw = chkPw.val();
        const newCheck = chkNewPw.val();

        if(newPw != newCheck){
            $(chkNewPw).siblings("p").text("비밀번호가 불일치합니다.");
            return false;
        }
        $(chkNewPw).siblings("p").text("");
		return true;
    
	}

    //phone validation
    isPhoneValidated = function(_this) {
        let phoneRegExp = /^(010{1})[0-9]{3,4}[0-9]{4}$/i;
        $(_this).val($(_this).val().trim());

        let element = $(_this);
        let phone = $(_this).val();
        let inputWrap = element.closest('.input_wrap');

        if (phone == "" || phone.length < 1) {
            $(_this).siblings("p").text("연락처는 '-'를 제외하고 입력해 주세요.");
			return false;
		}
		else if (phone.length > 11) {
            $(_this).siblings("p").text("번호는 11자가 넘을 수 없습니다.");
		}
		else if (!phoneRegExp.test(phone)) {
			$(_this).siblings("p").text("연락처는 '-'를 제외하고 입력해 주세요.");
		}
		else {
			$(_this).siblings("p").text("");
			return true;
		}
    }

    // password eye    
    const eye = $(".eye_img");
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


    //header active
    pageUrl = window.location.href;
    $(document).ready(function(){
        let depth1A = $(".gnb > li");
        let hD = $(".header");

       //active
        if (pageUrl.indexOf('index') > -1){
            $(hD).addClass("ver1")
            $(depth1A).eq(0).addClass("active");
            $(depth1A).eq(0).find(".depth2_wrap").addClass("active");
        } 
        else if (pageUrl.indexOf('big_data') > -1) {
            $(hD).addClass("ver1")
            $(depth1A).eq(1).addClass("active");
            $(depth1A).eq(1).find(".depth2_wrap").addClass("active");
        } 
        else if (pageUrl.indexOf('system') > -1) {
            $(hD).addClass("ver2")
            $(depth1A).eq(2).addClass("active");
            $(depth1A).eq(2).find(".depth2_wrap").addClass("active");
        } 
        else if (pageUrl.indexOf('basic') > -1) {
            $(hD).addClass("ver2")
            $(depth1A).eq(3).addClass("active");
            $(depth1A).eq(3).find(".depth2_wrap").addClass("active");
        }
        else if (pageUrl.indexOf('facility') > -1) {
            $(hD).addClass("ver2")
            $(depth1A).eq(4).addClass("active");
            $(depth1A).eq(4).find(".depth2_wrap").addClass("active");
        }
        else if (pageUrl.indexOf('record') > -1) {
            $(hD).addClass("ver2")
            $(depth1A).eq(5).addClass("active");
            $(depth1A).eq(5).find(".depth2_wrap").addClass("active");
        }
        else if (pageUrl.indexOf('stats') > -1) {
            $(hD).addClass("ver2")
            $(depth1A).eq(6).addClass("active");
            $(depth1A).eq(6).find(".depth2_wrap").addClass("active");
        }

    })
    
    //depth2 open, close
    $(".depth2_open_btn").click(function(){
        $(this).toggleClass("open");
        $(".depth2_wrap").toggleClass("close");
    })

})


