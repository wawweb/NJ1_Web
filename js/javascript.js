//topGameList 滑入彈出效果
$(function() {
    $(".topGameList").mouseleave(function(){
        $(".topGameList").removeClass("display");
    })

    $(".gameNav li").hover(function(){
        var n = $(this).index();

        $(".topGameList,.topGameList ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".gameNav li:eq(6),.gameNav li:eq(7)").hover(function(){
        $(".topGameList")
        .removeClass("display");
    })

    $(".gameNav li.liveBtn,.gameNav li.slotBtn").hover(function(){
        $(".topGameList .prev,.topGameList .next")
        .addClass("display");
        $(".topGameList .container")
        .addClass("scroll");
    })
    $(".gameNav li.hotBtn,.gameNav li.sportBtn,.gameNav li.fishBtn,.gameNav li.boardBtn").hover(function(){
        $(".topGameList .prev,.topGameList .next")
        .removeClass("display");
        $(".topGameList .container")
        .removeClass("scroll");
    })
})

//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//live下拉選單寬度+點擊滑動
$(function(){
    var live = $('.listWrap .live li');
    var livel = live.length;
    var liwp = $('.topGameList .live');
    $(liwp).css("width",""+195 * livel+"");

    var n = 0;
    var nt = $('.listWrap .next');
    var pv = $('.listWrap .prev');
    $(nt).click(function(){
        n ++;
        $(liwp).css("transform","translateX("+(-195 * n)+"px)");

        if(n == 3){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(liwp).css("transform","translateX("+(-195 * n)+"px)");

        if(n == -1){
            $(liwp).css("transform","translateX(0px)");
            n ++;
        }
    })
})
//slot下拉選單寬度+點擊滑動
$(function(){
    var slot = $('.listWrap .slot li');
    var slotl = slot.length;
    var slwp = $('.topGameList .slot');
    $(slwp).css("width",""+195 * slotl+"");

    var n = 0;
    var nt = $('.listWrap .next');
    var pv = $('.listWrap .prev');
    $(nt).click(function(){
        n ++;
        $(slwp).css("transform","translateX("+(-195 * n)+"px)");

        if(n == 16){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(slwp).css("transform","translateX("+(-195 * n)+"px)");

        if(n == -1){
            $(slwp).css("transform","translateX(0px)");
            n ++;
        }
    })
})

//.vipWrap .detailCardBox內選單滑動
$(function(){
    var vipCard = $('.detailCardBox ul');

    var n = 0;
    var nt = $('.detailCardBox .next');
    var pv = $('.detailCardBox .prev');
    $(nt).click(function(){
        n ++;
        $(vipCard).css("transform","translateX("+(-300 * n)+"px)");

        if(n == 2){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(vipCard).css("transform","translateX("+(-300 * n)+"px)");

        if(n == -1){
            $(vipCard).css("transform","translateX(0px)");
            n ++;
        }
    })
})

//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user')
        .toggleClass('display');
        
        $('header .sportBtn')
        .attr("onclick","window.location.href='./html/sportPage.html'");
        $('header .liveBtn')
        .attr("onclick","window.location.href='./html/livePage.html'");
        $('header .slotBtn,.topGameList .slot li,.typeList .slot')
        .attr("onclick","window.location.href='./html/slotPage.html'");
        $('header .fishBtn,.topGameList .fish li,.typeList .fish')
        .attr("onclick","window.location.href='./html/fishPage.html'");
        $('header .boardBtn,.topGameList .board li,.typeList .board')
        .attr("onclick","window.location.href='./html/boardPage.html'");
        $('header .event')
        .attr("onclick","window.location.href='./html/event.html'");
        $('header .vip,footer .vip button')
        .attr("onclick","window.location.href='./html/vip.html'");

        $('.topGameList .sport li,.typeList .sport')
        .attr("onclick","openSportGame()");
        $('.topGameList .live li,.typeList .live')
        .attr("onclick","openLiveGame()");
        $('.topGameList .lottery li,.typeList .lottery')
        .attr("onclick","openLotteryGame()");

        $("footer .news button")
        .attr("onclick","openNews()");

        $(".sideBar .inviteBtn")
        .addClass("display");

        $(".quickBox .love")
        .addClass("display");
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//mainWrap
$(function(){
    $(".quickBox .love").click(function(){
        $(".typeList")
        .toggleClass("display")
    })
    $(".loveGame .love").click(function(){
        $(this)
        .toggleClass("active");
    })

    $(".quickBox .sport").click(function(){
        $(".typeList li")
        .removeClass("display");
        
        $(".typeList .forSport")
        .addClass("display")
    })

    $(".quickBox .live").click(function(){
        $(".typeList li")
        .removeClass("display");
        
        $(".typeList .forLive")
        .addClass("display")
    })

    $(".quickBox .slot").click(function(){
        $(".typeList li")
        .removeClass("display");
        
        $(".typeList .forSlot")
        .addClass("display")
    })

    $(".quickBox .fish").click(function(){
        $(".typeList li")
        .removeClass("display");
        
        $(".typeList .forFish")
        .addClass("display")
    })

    $(".quickBox .board").click(function(){
        $(".typeList li")
        .removeClass("display");
        
        $(".typeList .forBoard")
        .addClass("display")
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
    $(".jumpWindow.betWindow .enterGame button").click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".login .forget").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetPassword')
        .addClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.news').addClass('display');
    })

    $('.changePassword button').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.changePhone').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.phoneWindow').addClass('display');
    })

    $(".waterBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.listWindow').addClass('display');
    })

    $('.eventBox .check,.eventBoxAl .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkEvent').addClass('display');
    })
    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $('.sportPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.sportGame').addClass('display');
    })
    $('.livePage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.liveGame').addClass('display');
    })
    $('.lotteryPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.lotteryGame').addClass('display');
    })

    $(".pointWrap .open").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.pointWindow').addClass('display');
    })

    $(".registerWrap .send").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".registerWrap .checkBox span").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })
    $(".agentSignup").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.agRegist').addClass('display');
    })
    //同意條款checkbox
    $(".agRegist .btnBox .readBtn").click(function(){
        $(this).toggleClass('active');
    })
    $(".agRegist .btnBox .openAGterms").click(function(){
        $('.agTerms').addClass('display');
        $(".agRegist").addClass("darkness");
    })
    $(".closeTerms,.close_ic.back").click(function(){
        $(".filter").addClass("display");
        $('.agTerms').removeClass('display');
        $(".agRegist").removeClass("darkness");
    })
})

function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}
function openSportGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.sportGame').addClass('display');
}
function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame').addClass('display');
}
function openSlotGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.slotGame').addClass('display');
}
function openLotteryGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.lotteryGame').addClass('display');
}
function openFishGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.fishGame').addClass('display');
}
function openBoardGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.boardGame').addClass('display');
}
function openNews(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.news').addClass('display');
}
function loading(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loading').addClass('display');

    setTimeout(function(){
        $(".filter")
        .removeClass("display");
    },2000);
}
function openAGterms(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.agTerms').addClass('display');
}

//gameWrap小遊戲格hover切換左大圖
$(function(){
    $(".livePage .btnBox li").hover(function(){
        var n = $(this).index() + 1;

        $(".livePage .mainImg")
        .attr("src","../images/partner/live/liveBG_"+ n +".png");
    })
})

//jumpWindow .new .content
$(function(){
    $('.news .nav .hot').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forHot').addClass('display');
        $('.forHot').siblings().removeClass('display');
    })
    $('.news .nav .normal').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forNormal').addClass('display');
        $('.forNormal').siblings().removeClass('display');
    })
    $('.news .nav .deposit').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forDeposit').addClass('display');
        $('.forDeposit').siblings().removeClass('display');
    })
})

//.gameList .love
$(function(){
    $('.gameList .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotBody li 切換
$(function(){
    $('.slotBody .nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})
//slotPage 遊戲展開
$(function(){
    $('.pfName .all').click(function(){
        $('.platforms').removeClass('display');
        $($(this).closest('.platforms')).addClass('display');
        $($(this).closest('.pfName').next('.gameList')).addClass('active');
        $($(this).closest('.pfName')).addClass('active');
    })

    $('.pfName .back').click(function(){
        $('.platforms').addClass('display');
        $('.pfName.active,.gameList.active').removeClass('active');
    })
})

//eventList+eventDetail 切換
$(function(){
    $('.eventBox .btnBox button.forEvent_1').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_1').addClass('display');
    })
    $('.eventBox .btnBox button.forEvent_2').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_2').addClass('display');
    })
    $('.eventBox .btnBox button.forEvent_3').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_3').addClass('display');
    })

    $('.eventDetail .back').click(function(){
        $('.eventList').addClass('display');
        $('.eventDetail').removeClass('display');
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more').click(function(){
        $('.outMode').removeClass('display');
        $('.innerMode').addClass('display');
    })

    $('.detailTitle .back').click(function(){
        $('.outMode').addClass('display');
        $('.innerMode').removeClass('display');
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.dataWrap').addClass('display');
        $('.dataWrap').siblings().removeClass('display');
    })

    $('.memberWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.platformWrap').addClass('display');
        $('.platformWrap').siblings().removeClass('display');
    })
})

//dealWrap
$(function(){
    $(".dealWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".dealWrap .tabs li:eq(0)").click(function(){
        $(".dealBox").addClass("display");
        $(".dealBox").siblings().removeClass("display");
    })
    $(".dealWrap .tabs li:eq(1)").click(function(){
        $(".waterBox").addClass("display");
        $(".waterBox").siblings().removeClass("display");
    })

    $(".dealWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".dealWrap .inputBox select").change(function(){
        var n = $(".dealWrap .inputBox select").val();

        if(n == 1) {
            $(".dealWrap .fakeTable.deposit")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 2) {
            $(".dealWrap .fakeTable.withdrawal")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 3) {
            $(".dealWrap .fakeTable.transfer")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 4) {
            $(".dealWrap .fakeTable.water")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 5) {
            $(".dealWrap .fakeTable.active")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 6) {
            $(".dealWrap .fakeTable.event")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 7) {
            $(".dealWrap .fakeTable.else")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top a:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').addClass('display');
        $('.mailWrap .bottom.ann').removeClass('display');
    })
    $('.mailWrap .top a:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').removeClass('display');
        $('.mailWrap .bottom.ann').addClass('display');
    })

    $('.mailWrap .tabs li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.mailWrap .btnBox .edit').click(function(){
        $('.mailWrap .btnBox.nor').removeClass('display');
        $('.mailWrap .btnBox.edit').addClass('display');

        $(".mailWrap .list li").addClass("editing");
    })
    $('.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox.nor').addClass('display');
        $('.mailWrap .btnBox.edit').removeClass('display');

        $(".mailWrap .list li").removeClass("editing");
    })

    $('.mailWrap.outMode .list li').click(function(){
        $('.mailWrap.outMode').removeClass('display');
        $('.mailWrap.innerMode').addClass('display');
    })
    $('.mailWrap.innerMode .title button').click(function(){
        $('.mailWrap.outMode').addClass('display');
        $('.mailWrap.innerMode').removeClass('display');
    })

    $(".mailWrap .active .tabs li:eq(0)").click(function(){
        $(".mailWrap .active .system").addClass("display");
        $(".mailWrap .active .system").siblings("ul").removeClass("display");
    })
    $(".mailWrap .active .tabs li:eq(1)").click(function(){
        $(".mailWrap .active .personal").addClass("display");
        $(".mailWrap .active .personal").siblings("ul").removeClass("display");
    })

    $(".mailWrap .ann .tabs li:eq(0)").click(function(){
        $(".mailWrap .ann .hot").addClass("display");
        $(".mailWrap .ann .hot").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(1)").click(function(){
        $(".mailWrap .ann .nor").addClass("display");
        $(".mailWrap .ann .nor").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(2)").click(function(){
        $(".mailWrap .ann .dep").addClass("display");
        $(".mailWrap .ann .dep").siblings("ul").removeClass("display");
    })
})

//eventWrap 切換
$(function(){
    $(".eventWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $('.eventWrap .tabs li:nth-of-type(1)').click(function(){
        $('.eventMiddle .eventBox').addClass('display');
        $('.eventMiddle .eventBox').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(2)').click(function(){
        $('.eventMiddle .eventBoxAl').addClass('display');
        $('.eventMiddle .eventBoxAl').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(3)').click(function(){
        $('.eventMiddle .eventRecord').addClass('display');
        $('.eventMiddle .eventRecord').siblings().removeClass('display');
    })
})

//betWrap 搜尋開關
$(function(){
    $('.betWrap .fakeTable .arrow_ic').click(function(){
        $($(this).closest('li')).toggleClass('active');
    })

    $(".betWrap .timeGroup .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//deposit切換
$(function(){
    $(".depositWrap .list li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".depositWrap .bottom .title,.depositWrap .bottom .fakeTable").removeClass("display");
    })

    $(".depositWrap .list li:eq(0)").click(function(){
        $(".depositWrap .bottom .card").addClass("display");
    })
    $(".depositWrap .list li:eq(1)").click(function(){
        $(".depositWrap .bottom .tiger").addClass("display");
    })
    $(".depositWrap .list li:eq(2)").click(function(){
        $(".depositWrap .bottom .wallet").addClass("display");
    })
    $(".depositWrap .list li:eq(3)").click(function(){
        $(".depositWrap .bottom .usdt").addClass("display");
    })
    $(".depositWrap .list li:eq(4)").click(function(){
        $(".depositWrap .bottom .venus").addClass("display");
    })
    $(".depositWrap .list li:eq(5)").click(function(){
        $(".depositWrap .bottom .buybe").addClass("display");
    })

    $(".depositWrap .bottom .check").click(function(){
        $(".depositWrap .bottom .title,.depositWrap .bottom .fakeTable").removeClass("display");
        $(".depositWrap .bottom .cardCheck,.depositWrap .bottom .title.card").addClass("display");
    })
})

//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
    $('.transferWrap .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
})

//helpPage .nav列切換
$(function(){
    $('.nav .title').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.nav .box').removeClass('display');
        $($(this).next('.box')).addClass('display');
    })

    $('.nav .box li').click(function(){
        $('.nav .box li').removeClass('active');
        $(this).addClass('active');
    })
})
//helpPage .nav 連動切換
$(function(){
    $(".forNew").click(function(){
        var n = $(this).index();

        $(".helpWrap .new:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".forQues").click(function(){
        var n = $(this).index();

        $(".helpWrap .ques:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".forUs").click(function(){
        var n = $(this).index();

        $(".helpWrap .us:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop")
                .addClass("display")
        } else{
                $(".goTop")
                .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },500)
    })
})

//transfer切換
$(function(){
    $(".withdrawalWrap .bottom form select").change(function(){
        var n = $(".withdrawalWrap .bottom form select").val();

        if(n == 1) {
            $(".withdrawalWrap .bottom form.bankcard")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//point
$(function(){
    $(".pointWrap .tabs li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
    $(".pointWrap .tabs li:eq(0)").click(function(){
        $(".pointWrap .fakeTable")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".pointWrap .tabs li:eq(1)").click(function(){
        $(".pointWrap .recordTable")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".pointWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".pointWrap .fakeTable .arrow_ic").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })
})

//register
$(function(){
    var phone = $(".registerWrap .phone")
    var btn = $(".registerWrap .codeBtn");

    $(phone).focus(function(){
        $(btn)
        .attr("disabled",false);
    })
    $(phone).blur(function(){
        $(btn)
        .attr("disabled",true);
    })
})
//退傭代理QA-leftArea
$(function(){
	$(".qaOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 200){
            $(".leftArea li:eq(0)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 900){
            $(".leftArea li:eq(2)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 200){
            $(".leftArea li:eq(1)")
            .addClass("active")
            .siblings().removeClass("active");
        }
	})
})
//退傭代理Rule-leftArea
$(function(){
	$(".ruleOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 100){
            $(".leftArea li:nth-of-type(1)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 6000){
            $(".leftArea li:nth-of-type(11)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5600){
            $(".leftArea li:nth-of-type(10)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5500){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5400){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".leftArea li:nth-of-type(8)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 4600){
            $(".leftArea li:nth-of-type(7)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 3400){
            $(".leftArea li:nth-of-type(6)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 2200){
            $(".leftArea li:nth-of-type(5)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 1300){
            $(".leftArea li:nth-of-type(4)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 800){
            $(".leftArea li:nth-of-type(3)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 100){
            $(".leftArea li:nth-of-type(2)")
            .addClass("active")
            .siblings().removeClass("active");
        }

        console.log(scrollVal);
	})
})

//排行榜表單切換
$(document).on("click",".center.rank .content .data",function(){
    $(this)
    .addClass('active')
    .find('.titleic')
    .text("─")
    .css("font-size","23px")
    .css("margin-left","25px");
})
$(document).on("click",".center.rank .content .data.active",function(){
    $(this)
    .removeClass('active')
    .find('.titleic')
    .text("+")
    .css("font-size","37px")
    .css("margin-left","20px");
})

//sendBtn
$(function(){
    $(".sendBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.plsGo")
        .addClass("display");
    })
})