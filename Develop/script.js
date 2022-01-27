var todaysDate = document.getElementById('currentDay');
var dayContainer = document.getElementById('time_blocks');




var createTask = function() {
    // create elements that make up a task item
    todaysDate=moment();

    // TODO: Loop through the data and generate your HTML
    for (var i = 0; i < 23; i++) {
    // create a container for each repo
    var userInfoEl = document.createElement("div");
    userInfoEl.innerHTML="<h3>"+i+"</h3><p></p>"
    dayContainer.appendChild(userInfoEl);
    };
}

  createTask();