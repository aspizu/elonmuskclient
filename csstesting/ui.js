function register_ui() {
  $(".dropdown").each((_, e) => {
    e = $(e);
    let dropdown_btn = $(e.children("button")[0]);
    let dropdown_menu = $(e.children("div")[0]);
    dropdown_menu.addClass("hide");
    dropdown_menu.children("button").each((_, e) => {
      $(e).click(() => {
        dropdown_btn.click();
      });
    });
    dropdown_btn.click(() => {
      if (dropdown_menu.hasClass("hide")) {
        dropdown_btn.addClass("active");
        dropdown_menu.removeClass("hide");
      } else {
        dropdown_btn.removeClass("active");
        dropdown_menu.addClass("hide");
      }
    });
  });
}

$(() => {
  register_ui();
});
