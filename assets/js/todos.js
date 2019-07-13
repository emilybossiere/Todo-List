// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(e) {
  $(this) //remove span (X)
    .parent() //remove parent element, the li
    .fadeOut(500, function() {
      $(this).remove(); //"this" referring to "this" and parent above
    });
  e.stopPropagation(); //stops event bubbling
});

$("input[type='text']").keypress(function(e) {
  //enter key
  if (e.which === 13) {
    var todoText = $(this).val();
    //clear input after entered
    $(this).val("");
    //create new li & add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
