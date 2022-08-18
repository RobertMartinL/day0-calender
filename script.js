
var list = {}

var now = moment();

    var eight = document.getElementById("8am");
    var nine = document.getElementById("9am");
    var ten = document.getElementById("10am");
    var eleven = document.getElementById("11am");
    var twelve = document.getElementById("12pm");
    var one = document.getElementById("1pm");
    var two = document.getElementById("2pm");
    var three = document.getElementById("3pm");
    var four = document.getElementById("4pm");
    var five = document.getElementById("5pm");




var currentHour =moment().hour();
console.log(currentHour)

if (currentHour === 8) {
    $("#8am").addClass("present")
}
if (currentHour === 9) {
    $("#9am").addClass("present")
}
if (currentHour === 10) {
    $("#10am").addClass("present")
}
if (currentHour === 11) {
    $("#11am").addClass("present")
}
if (currentHour === 12) {
    $("#12pm").addClass("present")
}
if (currentHour === 13) {
    $("#1pm").addClass("present")
}
if (currentHour === 14) {
    $("#2pm").addClass("present")
}
if (currentHour === 15) {
    $("#3pm").addClass("present")
}
if (currentHour === 16) {
    $("#4pm").addClass("present")
}
if (currentHour === 17) {
    $("#5pm").addClass("present")
}
if (currentHour > 8) {
    $("#8am").addClass("past")
}
if (currentHour > 9) {
    $("#9am").addClass("past")
}
if (currentHour > 10) {
    $("#10am").addClass("past")
}
if (currentHour > 11) {
    $("#11am").addClass("past")
}
if (currentHour > 12) {
    $("#12pm").addClass("past")
}
if (currentHour > 13) {
    $("#1pm").addClass("past")
}
if (currentHour > 14) {
    $("#2pm").addClass("past")
}
if (currentHour > 15) {
    $("#3pm").addClass("past")
}
if (currentHour > 16) {
    $("#4pm").addClass("past")
}
if (currentHour > 17) {
    $("#5pm").addClass("past")
}







$(".time").on("change", function() {
    var value = $(this).val()
    var id = $(this).attr("id")
    console.log(value)
    console.log(id)
    list[id] = value
     
localStorage.setItem("list", JSON.stringify(list))
    console.log(list)
})

function loadItems() {
    list=JSON.parse(localStorage.getItem("list"))
    console.log(list)

    $("#8am").val(list["8am"]);
    $("#9am").val(list["9am"]);
    $("#10am").val(list["10am"]);
    $("#11am").val(list["11am"]);
    $("#12pm").val(list["12pm"]);
    $("#1pm").val(list["1pm"]);
    $("#2pm").val(list["2pm"]);
    $("#3pm").val(list["3pm"]);
    $("#4pm").val(list["4pm"]);
    $("#5pm").val(list["5pm"]);

}



loadItems()

// So, to get the current time, you would use moment().hours(). That would give the hour (9, 10, 11...14, 15, etc) and you could set a variable (for instance currentHour) to be equal to moment().hours(), say, whenever the page refreshed.
// 11:21
// Then you could set up conditionals to change the color depending on the value of currentHour