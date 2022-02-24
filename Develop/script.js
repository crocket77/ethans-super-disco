var todaysDate = document.getElementById('currentDay');
var dayContainer = document.getElementById('time_blocks');

//uses moment to display current date
$("#currentDay").append(moment().format("dddd, MMMM Do"))

// Store current hour as a number
const hour = Number(moment().format("H"));
// Initialize empty task list object
let hourList = {};

var createTask = function() {
    // create elements that make up a task item
    todaysDate=moment();

    // TODO: Loop through the data and generate your HTML
    for (var i = 0; i < 9; i++) {
    // create a container for each repo
    const userInfoEl = document.createElement("div");
    userInfoEl.innerHTML="<h3>"+i+"</h3><p></p>"
    dayContainer.appendChild(userInfoEl);
    };
}
createTask();

