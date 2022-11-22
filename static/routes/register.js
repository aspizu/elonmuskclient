import { get, post } from "/static/index.js";

export const route = {
  template: "/static/routes/register.html",
  title: "Register",
  onLoad: () => {
    console.log("e");
    $("#button").click(() => {
      console.log("a");
      post(
        "/register",
        {
          username: $("#input-username").val(),
          email: $("#input-email").val(),
          password: $("#input-password").val(),
          avatar: $("#input-avatar").val(),
          bio: $("#input-bio").val(),
        },
        (response) => {
          if (response["success"]) {
            $("#main").append($("<p></p>").text("success"));
          } else {
            $("#main").append($("<p></p>").text(response["exception"]));
          }
        }
      );
    });
  },
};
