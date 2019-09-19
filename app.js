var firebaseConfig = {
    apiKey: "AIzaSyDnFkU6Ca63DbOuyuOC9SG6ZfYyMKldHC0",
    authDomain: "test-dd03c.firebaseapp.com",
    databaseURL: "https://test-dd03c.firebaseio.com",
    projectId: "test-dd03c",
    storageBucket: "",
    messagingSenderId: "454746890826",
    appId: "1:454746890826:web:c34c19fd735f03d1937cb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
  var database = firebase.database();
  
  $("#submit").on("click", function (event) {
      event.preventDefault();
      console.log(event);
  
      var name = $("#name").val().trim();
      var dest = $("#dest").val().trim();
      var firstTrain = $(" firstTrain").val().trim();
      var freq = $(" freq").val().trim();
  
      database.ref().push({
          name: name,
          dest: dest,
         firstTrain: firstTrain,
         freq: freq
      });
      console.log("#submit")
  
      // $("#table").append("<tr>").append("<td>")
  });
  
  database.ref().on("child_added", function(childSnapshot){
  
      var tName = childSnapshot.val().name;
      var tDest = childSnapshot.val().dest;
      var tfirstTrain = childSnapshot.val().firstTrain;
      var tFreq = childSnapshot.val().freq;
        var tRemainder = 0;
        var minsAway = 0;
        var startConverted = moment(childSnapshot.val().start, "HH:mm").subtract(1, "days");


    

      $("#table").append($("<tr>").append(
          $("<td>").text(childSnapshot.val().name),
          $("<td>").text(childSnapshot.val().dest),
          $("<td>").text(childSnapshot.val().firstTrain),
          $("<td>").text(childSnapshot.val().freq),

          ))
      console.log(name);


  });