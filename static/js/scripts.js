// Navbar collapse and add to right of screen on small screens
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: "right" });
});

// jQuery
$(document).ready(function () {
  $(".collapsible").collapsible(); /* accordion */
  $("select").formSelect(); /* select dropdowns */
  $(".modal").modal(); /* delete user confirmation */
  $(".collapsible-header:contains('Priority: High')").addClass(
    "priority-high"
  ); /* adds class to collapsible header */
  $(".collapsible-header:contains('Priority: Medium')").addClass(
    "priority-med"
  );
  $(".collapsible-header:contains('Priority: Low')").addClass("priority-low");
  $(".collapsible-header:contains('Priority: Info')").addClass("priority-info");
  $(".collapsible-header:contains('Status: Closed')").addClass("closed-ticket");
  $(".dropdown-trigger").dropdown(); /* navbar dropdowns */
});

// random background image on page refresh

$(function () {
  var images = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg",
    "bg7.jpg",
    "bg8.jpg",
    "bg9.jpg",
    "bg10.jpg",
    "bg11.jpg",
    "bg12.jpg",
    "bg13.jpg",
    "bg14.jpg",
    "bg15.jpg",
    "bg16.jpg",
  ];
  $("body").css({
    "background-image":
      "url(/static/images/" +
      images[Math.floor(Math.random() * images.length)] +
      ")",
  });
});

// disables submit buttons on submit & stops multiple clicks and duplicate forms being created
$("body").on("submit", "form", function () {
  $(this).submit(function () {
    return false;
  });
  return true;
});

// unhides quick comment box in tickets views
$(".quick-comment").click(function () {
  $(".quick-comment-form").prop("hidden", false);
});
// hides quick comment box on cancel click
$(".quick-comment-cancel").click(function () {
  $(".quick-comment-form").prop("hidden", true);
});
