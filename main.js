$( document ).ready(function(){
  $(".archive").hide();
  let events = ["Announcement Day", "Application Deadline", "Booth Registration", "Booth Registration Deadline", "Deadline Day", "Release Date"];
  let dates = ["August 20th, 2021", "September 1st, 2021", "September 2nd, 2021", "September 9th, 2021", "February 1st. 2022", "February 20th, 2022"];

  let events2 = [];
  let dates2 = [];

  function addP(array){
  return("<p>" + array + "</p>");
  }

  function addH2(array) {
  return("<h2>" + array + "</h2>");
  }

  function appendText(event1, date){
    $(".current").append(event1);
    $(".current").append(date);
  }

$("#archive").click(function(){
  $(".current").hide();
  $(".archive").show();

});

$("#current").click(function(){
  $(".archive").hide();
  $(".current").show();
});

events.forEach((item, i) => {
  let x = addH2(item);
  events2.push(x);
});

  dates.forEach((item, i) => {
    let x = addP(item);
    dates2.push(x);
  });

  events2.forEach((item, i) => {
    appendText(item, dates2[i]);

  });

});
