for(var i = 1; i<=localStorage.getItem("id");i++){

    var todo=$("<div class='todo'></div>").text(i + ":" + JSON.parse(localStorage.getItem(array))["title"]
     + ":" + JSON.parse(localStorage.getItem(array))["description"] + ":" 
     + JSON.parse(localStorage.getItem(array))["priority"]);


} 
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
var id = i+1 
console.log(i, JSON.parse(localStorage.getItem(array))["title"])
console.log(localStorage.length)
var array={}
var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var a = "agg"

var remove=$("<button>Delete</button>").click(function(){
    $(this).parent().remove();
});
var done=$("<button>Done</button>").click(function(){
    $(this).parent().fadeIn();
    $(".done-todos").append($(this).parent());
    
});
$(".submit").on("click",function(e){
    e.preventDefault()
    if(!$("#title").val() || !$("#description").val() ){
        alert("Empty todo")
    }else{
        
        var todo=$("<div class='todo'></div>").text($("#title").val() + " " + $("#description").val());
        var time = date.getFullYear() + '-' + month + '-' + day + " " + hr + ":" + min + ":" + sec;
        var show_time=$("<div class='time'></div>")
        array["title"]=$("#title").val()
        array["description"]=$("#description").val()
        array["priority"] =$("#priority").val()
        localStorage.setItem("array" ,JSON.stringify(array))
        localStorage.setItem("show_time",time)
        localStorage.setItem("id",id)

        show_time.append(time)
        todo.append(remove,done,show_time);
        $(".list-todos").append(todo);
        $("#title").val("")
        $("#description").val("")
        $("#priority").val("")
        console.log(a)
        id +=1
    }

})