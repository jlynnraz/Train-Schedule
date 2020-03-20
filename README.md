## Train Schedule
Don't miss the train! Add and remove train times with the train scheduler. Fill out the form with the information for your train then click submit.

## Motivation
Train Scheduler was designed to add and remove entries from a Firebase database. It also utilizes moment to keep track of time, which makes the scheduling app complete.

## Installation
* Fork It
* Clone It
* NPM Install Firebase
* Open in default browser, or view live demo [HERE](https://jlynnraz.github.io/Train-Schedule/) 

## Technologies
* JavaScript 
* jQuery
* Firebase
* Moment.js

## Behind the Scenes

When a train time is entered, a snapshot is sent to the database then appended to the table. Moment is used to format the time.
~~~
database.ref().on("child_added", function(childSnapshot){
  
      var tName = childSnapshot.val().name;
      var tDest = childSnapshot.val().dest;
      var tfirstTrain = childSnapshot.val().firstTrain;
      var tFreq = childSnapshot.val().freq;
      var startConverted = moment(tfirstTrain, "HH:mm").subtract(1, "days");
      var diffTime = moment().diff(moment(startConverted), "minutes")
      var tRemainder = diffTime % tFreq;
        var tMinAway = tFreq - tRemainder
        var nextTrain = moment().add(tMinAway, "minutes").format("HH:mm")
    

      $("#table").append($("<tr>").append(
          $("<td>").text(tName),
          $("<td>").text(tDest),
          $("<td>").text(tFreq),
          $("<td>").text(nextTrain),
          $("<td>").text(tMinAway),
~~~

## Contact
Please contact me directly with any comments of questions!
* jlynnraz@gmail.com
* [LinkedIn](https://www.linkedin.com/in/jaimee-razee/)
* [Portfolio](https://jlynnraz.github.io/Portfolio2/)


<img src="https://images.unsplash.com/photo-1543967625-f24827a5fdb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" data-canonical-src="https://images.unsplash.com/photo-1543967625-f24827a5fdb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" width="200" height="300" />


