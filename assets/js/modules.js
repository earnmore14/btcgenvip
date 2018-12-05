$(function() {
    paymentAddress();
    setInterval(onlineUsers,30000);
    initOnlineUsers();
    count1();
    setInterval(loadAddresses,5000);
    initLoadAddresses();
    setInterval(loadComments,9000);
    initLoadComments();
    
});

function onlineUsers(){

    var onlinenow = Math.floor((Math.random() * 120) + 500);
    localStorage.setItem('users_online', onlinenow);
    $(".online-users").fadeOut(function() {
        $(this).text(onlinenow+ "  Users Online ").fadeIn();
    });
}
function initOnlineUsers(){
    if(localStorage.getItem("users_online") != null){
        $(".online-users").fadeOut(function() {
            $(this).text(localStorage.getItem("users_online")+ "  Users Online ").fadeIn();
        });
    }else onlineUsers();
}

function count1(){
    $( ".seconds" ).each(function() {
        var self = $(this);
        setInterval(function () {
            var bitcoinAddressTimeValue = $(".bitcoinAddressTime").data("value");
            var bitcoinAddressTime = $(".bitcoinAddressTime").text();
            if(self.hasClass("comment-count")){
                commentsArray[self.data("id")]["seconds"] = self.data("value");
            }
            localStorage.setItem('bitcoin_address_time_value', bitcoinAddressTimeValue);
            localStorage.setItem('bitcoin_address_time', bitcoinAddressTime);
            var current = self.data("value");
            var next = current+1;
            self.data("value",next);
            if(next >= 60 && next < 120)
                next = "1 minute";
            else if(next >= 120 && next < 180)
            next = "2 minutes";
            else if(next >= 180)
                next = "3 minutes";
            else
                next = next + " seconds";
            self.text(next);
        },1000)
    });
}

function paymentAddress(){
    $.getJSON( "assets/content/btc.json", function( data ) {
        var pay = data[Math.floor(Math.random() * Object.keys(data).length)];
        $(".pay-address").html("<a href='bitcoin:"+pay+"'><span class='fa fa-link'></span> "+pay+"</a>");
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: "bitcoin:"+pay,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    });
}
var addressCount = 0;
function loadAddresses(){
    var luck = Math.floor(Math.random() * 10) + 1;
    if(luck != 1 && localStorage.getItem("bitcoin_address_count") != null) return;
    $.getJSON( "assets/content/address-earnings.json", function( data ) {
        var i = 0;
        $.each( data, function( key, val ) {
            if(i == addressCount){
                $(".bitcoinAddressEarning").fadeOut(function() {
                    $(".bitcoinAddress").text(key);
                    $(".bitcoinAddress").attr("href","https://blockchain.info/tx/"+val["tx"]);
                    $(".bitcoinAddressAmount").text(val["money"] + " BTC");
                    if(localStorage.getItem("bitcoin_address_time_value") == null){
                        $(".bitcoinAddressTime").text("2 minutes");
                        $(".bitcoinAddressTime").data("value", 134);
                    } else {
                        $(".bitcoinAddressTime").text("1 seconds");
                        $(".bitcoinAddressTime").data("value", 1);
                    }
                    var paidBTC = $(".bitcoinPaid").data("value");
                    paidBTC = parseFloat(paidBTC) + parseFloat(val["money"]);
                    paidBTC = paidBTC.toFixed(3);
                    $(".bitcoinPaid").fadeOut(function() {
                        $(this).data("value", paidBTC);
                        $(this).text(paidBTC);
                        $(this).fadeIn();
                    });
                    localStorage.setItem('bitcoin_paid',paidBTC);
                    localStorage.setItem('bitcoin_address_amount', val["money"] + " BTC");
                    localStorage.setItem('bitcoin_address_count', addressCount);
                    localStorage.setItem('bitcoin_address',key);
                    localStorage.setItem('bitcoin_address_tx',val["tx"]);
                    $(this).fadeIn();
                });
            }
            i++;
        });
        addressCount++;
        if(addressCount >= i)
            addressCount = 0;
    });
}
function initLoadAddresses(){
    if(localStorage.getItem("bitcoin_address_count") != null){
        $(".bitcoinAddressEarning").fadeOut(function() {
            $(".bitcoinAddress").text(localStorage.getItem("bitcoin_address"));
            $(".bitcoinAddressAmount").text(localStorage.getItem("bitcoin_address_amount"));
            $(".bitcoinAddressTime").text(localStorage.getItem("bitcoin_address_time"));
            $(".bitcoinAddressTime").data("value",parseInt(localStorage.getItem("bitcoin_address_time_value")));
            $(".bitcoinAddress").attr("href","https://blockchain.info/tx/"+localStorage.getItem("bitcoin_address_tx"));
            $(".bitcoinPaid").fadeOut(function(){
                $(this).data("value",parseFloat(localStorage.getItem("bitcoin_paid")).toFixed(3));
                $(this).text(localStorage.getItem("bitcoin_paid"));
                $(this).fadeIn();
            });
            addressCount = parseInt(localStorage.getItem("bitcoin_paid"));
            addressCount++;
            $(this).fadeIn();
        });
    }else {
        loadAddresses();
        var paidBTC = $(".bitcoinPaid").data("value");
        $(".bitcoinPaid").text(parseFloat(paidBTC).toFixed(3));
    }
}

var commentCount = 3;
var commentsArray = [];
function initLoadComments(){
    if(localStorage.getItem("comments_array") !=null){
        commentCount = parseInt(localStorage.getItem("comments_count"));
        commentsArray = JSON.parse(localStorage.getItem("comments_array"));
        buildComments();
        return;
    }
    //var comment = $.parseJSON($.getJSON({'url': "assets/content/comments.json", 'async': false}).responseText);
    $.getJSON( "assets/content/comments.json", function( data ) {
    var i = 0;
    $.each( data, function( key, val ) {
        if(i>commentCount-1) return;
        commentsArray[i] = {};
        commentsArray[i]["name"] = val["name"];
        commentsArray[i]["content"] = val["content"];
        commentsArray[i]["seconds"] = 1;
        if(i== 0)  commentsArray[i]["seconds"] = 53;
        if(i== 1)  commentsArray[i]["seconds"] = 22;
        i++;
    });
        buildComments();
    });

}
function loadComments(){
    var luck = Math.floor(Math.random() * 6) + 1;
    if(luck != 1) return;
    var comment = $.parseJSON($.getJSON({'url': "assets/content/comments.json", 'async': false}).responseText);
    if(comment[commentCount] == undefined)
        commentCount = 0;
    var arr = {};
    arr["name"] = comment[commentCount]["name"];
    arr["content"] = comment[commentCount]["content"];
    arr["seconds"] = 1;
    commentsArray.push(arr);
    commentCount++;
    localStorage.setItem('comments_count',commentCount);
    buildComments();

}
function buildComments(){
    commentsArray = commentsArray.slice(-3);
    localStorage.setItem('comments_array',JSON.stringify(commentsArray));
    for(var i=0; i<3; i++){
        if(commentsArray[i] != undefined) {
            $(".u_" + (i + 1)).text(commentsArray[i]["name"]);
            $(".l_" + (i + 1)).text(String(commentsArray[i]["name"]).charAt(0).toUpperCase());
            $(".m_" + (i + 1)).text(commentsArray[i]["content"]);
            $(".s_" + (i + 1)).data("value", commentsArray[i]["seconds"]);
            $(".s_" + (i + 1)).data("id", i);
        }
    }
}
$("body").on("click", ".reply-submit",function(e) {
    e.preventDefault();
    $(".item-top").removeClass("err");
    $(".item-top").removeClass("success");
    $(".form-control").removeClass("err");
    var username = $("#username").val();
    var content = $("#content").val();
    var err = 0;
    if(!username) {
        err++;
        $(".reply-info").addClass("err");
        $(".reply-info-message").text("Complete Username");
        $("#username").addClass("err");
    }
    if(!content) {
        err++;
        $(".reply-info").addClass("err");
        $(".reply-info-message").text("Write Your Message");
        $("#content").addClass("err");
    }

    if(!err){
        var arr = {};
        arr["name"] = username;
        arr["content"] = content;
        arr["seconds"] = 1;
        commentsArray.push(arr);
        buildComments();
        $(".reply-info").addClass("success");
        $(".reply-info-message").text("Thank you!");
        $("#username").val("");
        $("#content").val("");
    }
}).on("click", ".start",function(e) {
    e.preventDefault();
    var address = $(".input-address").val().trim();
    if(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)){
        $(".selected-address").text(address);
        $('#startModal').modal('show');
        $(".input-address").removeClass("err");
        localStorage.setItem("selected_address",address);
        $('#ouibounce-modal').remove();
    }else{
       $(".input-address").addClass("err").val("").attr("placeholder","Invalid Bitcoin Address");
    }
}).on("click", ".cancel",function(e) {
    $('#startModal').modal('hide');
}).on("click",".confirm",function (e) {
 
    var typewriter = new Typewriter($(".terminal"));
    typewriter.setCaret("_");
    typewriter.setCaretPeriod(500);
    typewriter.setDelay(150, 50);
    animate(typewriter);
    $(".generator").remove();
    $(".terminal-bg").fadeIn("fast");
    $(".status").fadeIn("fast");
    $('#startModal').modal('hide');
    $(window).bind('beforeunload', function(){
        return 'Changes made will not be saved';
    });
});
