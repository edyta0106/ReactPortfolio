$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

useEffect(() => {
  document.querySelector(".navTrigger").click(function () {
    this.toggleClass("active");
    console.log("Clicked menu");
    document.querySelector("#mainListDiv").toggleClass("show_list");
    document.querySelector("#mainListDiv").fadeIn();
  });
}, []);
