$(".submit").on("click",function(){
    if($(".title").val() =="" || $(".description").val() ==""){
        alert("Empty todo")
    }else{
        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds(); 
    }

})