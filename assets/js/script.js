var tasks = {};

$(".col-10").on("click", "p", function() {
    var text = $(this)
      .text()
      .trim();
  
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);

    $(this).replaceWith(textInput);

});
  