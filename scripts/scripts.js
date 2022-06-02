$(".submit").on("click",function(){
    if($(".title").val() =="" || $(".description").val() ==""){
        alert("Empty todo")
    }else{
        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var c=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds(); 
    }

})