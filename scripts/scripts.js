


var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var todo=$("<div class='todo'></div>").text($("#title").val() + " " + $("#description").val());
var a = "agg"

var time = date.getFullYear() + '-' + month + '-' + day + " " + hr + ":" + min + ":" + sec;
var show_time=$("<div class='time'></div>")


var remove=$("<button>Delete</button>").click(function(){
    $(this).parent().remove();
});
var done=$("<button>Done</button>").click(function(){
    $(this).parent().fadeIn();
    $(".done-todos").append($(this).parent());
    
});
$(".submit").on("click",function(){
    if(!$("#title").val() || !$("#description").val() ){
        alert("Empty todo")
    }else{
        var array={}
        array["title"]=$("#title").val()
        array["description"]=$("#description").val()
        array["priority"] =$("#priority").val()
        localStorage.setItem("array",JSON.stringify(array))
        localStorage.setItem("show_time",time)
        localStorage.setItem("id",id)
        
        show_time.append(time)
        todo.append(remove,done,show_time);
        $(".list-todos").append(todo);
        $("#title").val("")
        $("#description").val("")
        console.log("jj")
        id +=1
    }

})
for(var i =1; i<=localStorage.getItem("id");i++){
    var id=i+1

    
    var remove=$("<button>Delete</button>").click(function(){
        $(this).parent().remove();
    });
    var done=$("<button>Done</button>").click(function(){
        $(this).parent().fadeIn();
        $(".done-todos").append($(this).parent());
        
    });
    var show_time=$("<div class='show_time'></div>")
        show_time.append(localStorage.getItem("show_time"))

    todo.append(remove,done,show_time);
    $(".list-todos").append(todo);
} 