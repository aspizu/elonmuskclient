// import "./router.js";

export { get, post };

function get(url, success) {
  const API = "http://127.0.0.1:8001";
  return $.get(API + url, success);
}

function post(url, data, success) {
  const API = "http://127.0.0.1:8001";
  return $.ajax({
    type: "POST",
    url: API + url,
    data: JSON.stringify(data),
    success: success,
    contentType: "application/json",
    dataType: "json",
  });
}

const views = {
  feed: {
    template: "/static/template/feed.html",
    onload: (args) => {
      if (args[0] == "home") {
        //
      } else if (args[0] == "all") {
        //
      }
    },
  },
  user: {
    template: "/static/template/user.html",
    onload: (args) => {},
  },
};

function loadView(view_args) {
  const view = views[view_args[0]];
  $("#view").load(view.template, () => view.onload(view_args.slice(1)));
}

function updateView() {
  if (window.page == "home") {
    loadView(["feed", "home"]);
  } else if (window.page == "all") {
    loadView(["feed", "all"]);
  } else if (window.page == "you") {
    loadView(["user", window.username]);
  }
}

function updateNavigation() {
  ["home", "all", "you"].forEach((i) => {
    $("#navigation-" + i).removeClass("active");
  });
  $("#navigation-" + window.page).addClass("active");
}

$(() => {
  window.page = "home";
  window.username = "aspizu";
  updateView();
  updateNavigation();
  ["home", "all", "you"].forEach((i) => {
    $("#navigation-" + i).click(() => {
      window.page = i;
      updateView();
      updateNavigation();
    });
  });
});
