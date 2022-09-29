window.addEventListener("load", function (e) {
  console.log("Lets get ready to party with Jquery!!");
});
$("article").find("img").addClass("image-center");
const paragraphs = $("article").find("p");
paragraphs.eq(paragraphs.length - 1).remove();
$("#title").css("font-size", Math.floor(Math.random() * 100));
$("ol").append("<li>IM NEWWWWWW</li>");
$("aside").html("<p>I am sorry for the list ever having existed</P>");
$("input").on("input", function () {
  $("body").css(
    "background-color",
    `rgb(${$("input").eq(0).val()}, ${$("input").eq(1).val()}, ${$("input")
      .eq(2)
      .val()})`
  );
});
$("img").on("click", function () {
  $(this).remove();
});

$(".container").remove();
$("form").on("submit", function (e) {
  e.preventDefault();
  $(".movie-ratings").append(
    `<li>${this.movie.value}: ${this.rating.value}/10<button>remove</button></li>`
  );
  this.reset();
});
$(".movie-ratings").on("click", "button", function (e) {
  $(this).parent().remove();
});
