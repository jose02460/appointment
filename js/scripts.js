$(document).ready(function() {
  $("form#scheduleAnAppointment").submit(function(event) {
    event.preventDefault();

    var firstNameOutput = $("#firstName").val();
    var lastNameOutput = $("#lastName").val();
    var descriptionOutput = $("#discription").val();
    var startDateOutput = $("#startDate").val();
    var endDateOutput = $("#endDate").val();

    $("#firstNameOutput").text(firstNameOutput);
    $("#lastNameOutput").text(lastNameOutput);
    $("#descriptionOutput").text(descriptionOutput);
    $("#startDateOutput").text(startDateOutput);
    $("#endDateOutput").text(endDateOutput);

    $("#confirmation").show();
    // $("form#scheduleAnAppointment").hide();
  });




})
