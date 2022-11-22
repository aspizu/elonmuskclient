import "./router.js";
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
