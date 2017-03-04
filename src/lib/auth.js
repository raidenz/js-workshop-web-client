/**
 * Auth state
 * @type {Boolean}
 */
let authenticated = false;

/**
 * User
 * @type {Object}
 */
let user = null;

/**
 * Determine whether user is logged in or not.
 * @return {Boolean}
 */
const isLoggedIn = () => authenticated;

/**
 * Get user
 * @return {Object|null}
 */
const getUser = () => user;

/**
 * Mock login request.
 * @param  {Object} facebookUser  [Facebook user's object. It contains user info and tokens]
 * @return {Promise}
 */
const logIn = (facebookUser) => new Promise((resolve, reject) => {
  setTimeout(() => {
    // facebookUser.accessToken
    authenticated = true;
    user = {
      name: facebookUser.name,
    };

    resolve();
  }, 200);
});

/**
 * Revoke authentication
 * @return {Promise}
 */
const logOut = () => {
  authenticated = false;
  user = null;

  return Promise.resolve();
};

/**
 * Route middleware
 * @param  {Object}   nextState
 * @param  {[Function]} replace
 * @param  {Function} next
 */
export const requireAuth = (nextState, replace, next) => {
  if (authenticated) {
    next();
  } else {
    replace('/login');
    next();
  }
};

export default {
 isLoggedIn,
 logIn,
 logOut,
 getUser,
 requireAuth,
};
