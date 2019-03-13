

// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

$("#entryForm").on("submit", function (event) {
  event.preventDefault();
  
  const entry = $("#txtEntry").val();
  const data = {
    entry: entry
  };
  $.ajax({
    method: "POST",
    //submit2 weird
    url: "/submit",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: 'json',
  }).then(function (response) {
    console.log(response);
    //document.getElementById("entriesHere").append(response.entry);
    var toDoCount = 0;
    var targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    var entries = $("#entriesHere");
    var wordz = $("<span>");
    wordz.text(entry + " ");
    wordz.addClass(".wordz");
    wordz.css('color', targetColorOfText);
    entries.append(wordz);
      
  
  });
  return false;

});


