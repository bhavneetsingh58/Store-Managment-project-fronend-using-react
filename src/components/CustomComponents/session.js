var UserProfile = (function () {
  var name = "";
  var email = "";
  var userID = "";
  var userType = "";
  var loggedInState = false;

  var getName = function () {
    return name;
  };

  var getEmail = function () {
    return email;
  };

  var getUserID = function () {
    return userID;
  };
  var getUserType = function () {
    return userType;
  };
  var getLoggedInState = function () {
    return loggedInState;
  };
  var setName = function (inputName) {
    name = inputName;
  };
  var setEmail = function (inputEmail) {
    email = inputEmail;
  };
  var setUserID = function (inputUserID) {
    userID = inputUserID;
  };
  var setLoggedInState = function (inputLoggedInState) {
    loggedInState = inputLoggedInState;
  }; 

  var setUserType = function (inputUserType) {
    userType = inputUserType;
  };

  return {
    getName: getName,
    getEmail: getEmail,
    getUserID: getUserID,
    getUserType: getUserType,
    getLoggedInState:getLoggedInState,


    setName: setName,
    setEmail: setEmail,
    setUserID: setUserID,
    setUserType: setUserType,
    setLoggedInState:setLoggedInState
  };
})();

export default UserProfile;





