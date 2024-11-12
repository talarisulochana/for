let b = 20;
switch ("Friday") {
    case "Monday":
        console.log("first day")
        break;
    case "Tuesday":
        console.log("second day")
        break;
    case "Wednesday":
        console.log("third day")
        break;
    case "Thursday":
        console.log("fourth day")
        break;
    case "Friday":
        console.log("fifth day")
        break;
    case "Saturday":
        console.log("sixth day")
    case "Sunday":
        console.log("seventh day")
        break;
    default:
        console.log("choose any one day")
}

var num =[1,2,3,3,4,5];
for (var elements of num){
    console.log(elements)
}

var a =[1,2,3,4,5,["chinni","Kavya"]];
for (var element of a){
    if(typeof element ==="object"){
        console.log(element[0])
    }
}