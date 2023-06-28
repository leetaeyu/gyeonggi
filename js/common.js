$(function(){
    const body = $("body");
    const modalClose = $(".modal_title_box .is-close");
    
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

})