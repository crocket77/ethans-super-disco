// Uses Moment JS to display current date
$("#currentDay").append(moment().format("dddd, MMMM Do"));
// Store current hour as a number
let hour = Number(moment().format("HH"));

console.log(hour)
// Initialize empty task list array
var dayList=[];

const initialize =()=>{
if(localStorage.getItem("dailyList")===null){
    dayList =[
        {time:8,half:'am',text:''},
        {time:9,half:'am',text:''},
        {time:10,half:'am',text:''},
        {time:11,half:'am',text:''},
        {time:12,half:'pm',text:''},
        {time:13,half:'pm',text:''},
        {time:14,half:'pm',text:''},
        {time:15,half:'pm',text:''},
        {time:16,half:'pm',text:''},
        
    
    ];
    localStorage.setItem("dailyList", JSON.stringify(dayList));   
}
dayList = JSON.parse(localStorage.getItem("dailyList"));
hour = Number(moment().format("HH"));
console.log(dayList)
populateContainer();
}


function idHour(num) {
    console.log('running idhour')
    if (num===8){
        return 0;
    }
    if(num===9){
        return 1;
    }
    if(num===10){
        return 2;
    }
    if(num===11){
        return 3;
    }
    if(num===12){
        return 4;
    }
    if(num===13){
        return 5;
    }
    if(num===14){
        return 6;
    }
    if(num===15){
        return 7;
    }
    if(num===16){
        return 8;
    }

}


function populateContainer(){
    $(".container").empty();
    // loop to create time-blocks
    for (let i = 0; i < dayList.length; i++) {
    // Creates a container row for the time-block elements
    const hourRow = $('<div class="row time-block mb-1"></div>');
    // Creates and sizes the hour div, and gives it an id relating to it's actual time
    const hourId = $('<div class="hour col-2 p-3 col-lg-1 border"></div>').attr("id",dayList[i].time);
    if(dayList[i].time<=12){
        hourId.text(dayList[i].time+":00"+dayList[i].half)
    }else if(dayList[i].time>12){
        hourId.text((dayList[i].time-12)+":00"+dayList[i].half)   
    }
    $(hourRow).append(hourId)
        // Convert the hour id to a number for comparison
        const hourNum = dayList[i].time
        
        // Create and size the textarea element
        const textArea = $('<textarea class="col-8 col-lg-9 border-bottom"></textarea>');
        if (hourNum<hour) {
            textArea.addClass("past");
        } else if (hourNum === hour) {
            textArea.addClass("present");
        } else {
            textArea.addClass("future");
        }
        textArea.text(dayList[i].text)

        // Inserts the newly created textarea element into the time-block
        $(hourRow).append(textArea);

        const button = $('<button class="saveBtn col-1 col-lg-1 ml-1"><i class="far fa-save"></i></button>');
        // Insert save button into time-block
        $(hourRow).append(button);
    

    // Inserts the new time-block into the larger container
    $(".container").append(hourRow);
    }
};
initialize();
var intervalID = window.setInterval(initialize, 60000);

// Save button event listener
$(".saveBtn").click(function () {
    console.log("save1")
    // References the current value of what is typed in the textarea preceding the saveBtn that was clicked
    const taskText = $(this).prev().val();
  
    // References the hour of the selected time-block
    const time = $(this).parent()[0].innerText;
    
    // gets the task hour and converts to integer
    const taskHour=parseInt(time.split(":")[0]);
  
    // updates the corresponding object in the array
    console.log('taskHour: '+taskHour)
    if(taskHour<8){
        dayList[idHour(taskHour+12)].text = taskText;
    }else{
    dayList[idHour(taskHour)].text = taskText;
    }
    // Saves the new list to localStorage
    localStorage.setItem("dailyList", JSON.stringify(dayList));
    
  });
  




























