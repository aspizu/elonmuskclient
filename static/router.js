import { route as registerRoute } from "./routes/register.js";

const routes = {
  "/register": registerRoute,
};

async function locationHandler() {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }
  const route = routes[location] || routes[404];
  document.title = route.title;
  $("#main").load(route.template, route.onLoad);
}

function routeHandler(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
}

window.onpopstate = locationHandler;
window.route = routeHandler;
$(locationHandler());
