var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var todo=$("<div class='todo'></div>").text($(".title").val() + " " + $(".description").val());
var a = "agg"

var time = date.getFullYear() + '-' + month + '-' + day + " " + hr + ":" + min + ":" + sec;
var show_time=$("<div class='time'></div>")
$("#submit").on("click",function(){
    if($(".title").val() === "" || $(".description").val() === ""){
        alert("Empty todo")
    }else{
        
        show_time.append(time)
    }

})