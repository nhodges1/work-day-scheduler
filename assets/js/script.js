var tasks = {};

$(".col-10").on("click", "div", function() {
    var text = $(this)
      .text()
      .trim();
  
    var textInput = $("<textarea>")
      .addClass("text-area")
      .val(text);

    $(this).replaceWith(textInput);

});
  