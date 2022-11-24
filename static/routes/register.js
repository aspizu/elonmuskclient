import { get, post } from "/static/index.js";

export const route = {
  template: "/static/routes/register.html",
  title: "Register",
  onLoad: () => {
    $("#input-username").on("input", () => {
      const text = $("#input-username").val();
      var error = "";
      if (text.length < 3) {
        error = "Username cannot be shorter than 3 characters";
      } else if (!/^[a-zA-Z0-9]*$/.test(text)) {
        error = "Username can only contain alphabets and numbers";
      }
      if (error.length == 0) {
        $("#input-username").removeClass("error");
      } else {
        $("#input-username").addClass("error");
      }
      $("#input-error-username").text(error);
    });

    $("#submit").click(() => {
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
