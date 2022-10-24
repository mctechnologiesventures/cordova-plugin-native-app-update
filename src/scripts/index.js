var plugin = function () {
  return window.AppUpdate;
};
var AppUpdate = /** @class */ (function () {
  function AppUpdate() {}
  AppUpdate.needsUpdate = function (
    success,
    failure,
    force_api_url,
    force_api_response_key
  ) {
    var checker = plugin();
    if (checker) {
      const timeOutId = setTimeout(() => {
        failure("plugin not available");
      }, 300);
      return checker.needsUpdate.apply(checker, [
        (appUpdateObj) => {
          clearTimeout(timeOutId);
          success(appUpdateObj);
        },
        (error) => {
          clearTimeout(timeOutId);
          failure(error);
        },
        force_api_url,
        force_api_response_key,
      ]);
    }
    failure("plugin not available");
  };
  return AppUpdate;
})();
export default AppUpdate;
