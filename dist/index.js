'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$j = "* {\n  font-size: 16px;\n  line-height: 22px;\n  font-family: 'Open Sans';\n  font-weight: 400;\n}";
styleInject(css_248z$j);

var css_248z$i = ".avatarContainer,\nimg.avatarImage {\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nspan.avatarInitials {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #0094DA;\n  color: #f1f1f1;\n}";
styleInject(css_248z$i);

const Avatar = ({ name = 'K', src, alt = 'avatar', size = 50, className, onClick }) => {
    const getInitials = (name) => {
        const initials = name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        return initials;
    };
    return (React.createElement("div", { className: className ? className : `avatarContainer `, onClick: onClick, "data-testid": "avatar-container" }, src ? React.createElement("img", { className: "avatarImage", src: src, alt: alt }) : React.createElement("span", { className: "avatarInitials" }, getInitials(name))));
};

/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$1.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends$1({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$1({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? (module => module.useSyncExternalStore)(React__namespace) : shim;

const DataRouterContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/React__namespace.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/React__namespace.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = React__namespace.useRef(false);
  React__namespace.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = React__namespace.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  return React__namespace.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
var DataRouterHook$1;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));

var DataRouterStateHook$1;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  process.env.NODE_ENV !== "production" ? warning(!React__namespace.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let dataRouterState = React__namespace.useContext(DataRouterStateContext);
  let navigate = useNavigate();
  React__namespace.useEffect(() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? warning(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (locationContext == null) {
    return null;
  }

  return /*#__PURE__*/React__namespace.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/React__namespace.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

new Promise(() => {});

/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = React__namespace.useRef();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = React__namespace.useState({
    action: history.action,
    location: history.location
  });
  React__namespace.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React__namespace.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (process.env.NODE_ENV !== "production") ;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/React__namespace.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let {
    basename
  } = React__namespace.useContext(NavigationContext); // Rendered into <a href> for absolute URLs

  let absoluteHref;
  let isExternal = false;

  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to; // Only check for external origins client-side

    if (isBrowser) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = stripBasename(targetUrl.pathname, basename);

      if (targetUrl.origin === currentUrl.origin && path != null) {
        // Strip the protocol/origin/basename for same-origin absolute URLs
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  } // Rendered into <a href> for relative URLs


  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React__namespace.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/React__namespace.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React__namespace.useContext(DataRouterStateContext);
  let {
    navigator
  } = React__namespace.useContext(NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/React__namespace.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  return /*#__PURE__*/React__namespace.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/React__namespace.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/React__namespace.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  FormImpl.displayName = "FormImpl";
}

if (process.env.NODE_ENV !== "production") ; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = React__namespace.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React__namespace.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return React__namespace.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React__namespace.useContext(NavigationContext);
  let routeContext = React__namespace.useContext(RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = useLocation();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }

  return createPath(path);
}

const AuthHOC = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        if (!props.isAuthenticated) {
            return React.createElement(Navigate, { to: "/login" });
        }
        return React.createElement(WrappedComponent, { ...props });
    };
    return ComponentWithAuth;
};

const CloseIcon = () => {
    return (React.createElement("svg", { height: "15", width: "20", viewBox: "0 0 25 15" },
        React.createElement("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" })));
};

var css_248z$h = ".alert {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n\nspan.AlertSpan {\n    align-self: center;\n}\n\n.alert-success {\n    border: 2px solid #78d178;\n    background-color: #d1ffcd;\n}\n\n.alert-failure {\n    border: 2px solid #d17878;\n    background-color: rgb(255, 205, 205);\n}\n\n.alert-warning {\n    border: 2px solid #ecdd68;\n    background-color: #faf4c7;\n}\n\n.closeIcon {\n    cursor: pointer;\n}";
styleInject(css_248z$h);

const Alert = ({ message, type = 'success', timeout, isClosable = true, className }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    if (timeout) {
        setTimeout(() => {
            handleClose();
        }, timeout);
    }
    if (!isOpen) {
        return null;
    }
    const alertBody = (React.createElement("div", null,
        type === 'success' && 'This is the Success Alert',
        type === 'failure' && 'This is the Failure Alert',
        type === 'warning' && 'This is the Warning Alert'));
    return (React.createElement("div", { className: className ? className : `alert alert-${type}` },
        React.createElement("span", { className: "AlertSpan" }, message ? message : alertBody),
        isClosable && (React.createElement("div", { className: "closeIcon", "data-testid": "close-button", onClick: handleClose },
            React.createElement(CloseIcon, null)))));
};

var css_248z$g = "span.badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  height: 20px;\n  padding: 4px;\n  border-radius: 50%;\n  text-align: center;\n}\n\nspan.badge.badge-primary {\n  background-color: #0788dd;\n  color: white;\n}\n\nspan.badge.badge-success {\n  background-color: #78d178;\n  color: white;\n}\n\nspan.badge.badge-danger {\n  background-color: #d17878;\n  color: white;\n}\n\nspan.badge.badge-warning {\n  background-color: #ecdd68;\n  color: white;\n}";
styleInject(css_248z$g);

const Badge = ({ label, type = 'primary', className, max = 11 }) => {
    const displayLabel = label > max ? `${max}+` : label;
    return (React.createElement("span", { className: className ? className : `badge badge-${type}`, "data-testid": "tooltip" }, displayLabel));
};

var css_248z$f = "label.button,\nbutton {\n    cursor: pointer;\n    border-radius: 6px;\n    padding: 10px;\n    text-align: center;\n}\n\nlabel.borderLess,\n.button-borderLess {\n    border: 0;\n    outline: 0;\n    background: transparent;\n    color: #4ab3e9;\n}\n\nlabel.button-borderLess:hover,\n.button-borderLess:hover {\n    background: #E9EAEC\n}\n\nlabel.button-contained,\n.button-contained {\n    background: #4ab3e9;\n    color: white;\n    border: 0;\n}\n\nlabel.button-contained:hover,\n.button-contained:hover {\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;\n    background: #0c8ce9;\n}\n\nlabel.button-outline,\n.button-outline {\n    border: 0.4px solid #4ab3e9;\n    background-color: transparent;\n    color: #4ab3e9\n}\n\nlabel.button-outline:hover,\n.button-outline:hover {\n    background: #0c8ce9;\n    color: white;\n}\n\nbutton.button.button-contained.Icon {\n    display: inline-flex;\n    align-items: center;\n}\n\nspan.start-button-icon {\n    display: inherit;\n    margin-right: 8px;\n    margin-left: -4px;\n}\n\nspan.end-button-icon {\n    display: inherit;\n    margin-right: -4px;\n    margin-left: 8px;\n}\n\nsvg.button-icon-svg {\n    font-size: 19px;\n}\n\n.button-icon-svg {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    fill: currentColor;\n}";
styleInject(css_248z$f);

const Button = (props) => {
    const { bg, color, variant = 'borderLess', onClick, disabled = false, className, type = 'button', multiple = false, startIcon, endIcon, children } = props;
    return (React.createElement(React.Fragment, null,
        (type === 'button' || type === 'submit' || type === 'reset') && (React.createElement("button", { ...props, type: "button", className: `${className || ''} button button-${variant} ${disabled ? 'button_disabled' : ''} ${startIcon ? 'Icon' : ''} ${endIcon ? 'Icon' : ''}`, onClick: onClick, disabled: disabled },
            startIcon && React.createElement("span", { className: "start-button-icon" }, startIcon),
            children ? children : 'Button',
            endIcon && React.createElement("span", { className: "end-button-icon" }, endIcon))),
        type === 'file' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "uploadFile", type: "file", hidden: true, multiple: multiple, id: "upload-btn" }),
            React.createElement("label", { className: `${className ? className : `button button-${variant}`} ${disabled ? `button_disabled` : ''}`, htmlFor: "upload-btn" }, children ? children : 'Upload Button')))));
};

var css_248z$e = ".card {\n    background-color: #fff;\n    color: rgba(0, 0, 0, 0.87);\n    border-radius: 4px;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    overflow: hidden;\n    max-width: 345px;\n}\n\n.noBorderCard {\n    border: none;\n}\n\n.cardHead,\n.cardFooter {\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n}\n\n.cardHead {\n    margin: 0;\n    font-weight: 500;\n    background: #D9D9D9;\n}\n\nimg.cardImg {\n    display: block;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.cardBody {\n    padding: 16px;\n}\n\n.cardFooter {\n    padding: 8px;\n    justify-content: start;\n    display: flex;\n}\n\n.cardTitle {\n    margin: 0;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 2.043;\n    margin-bottom: 0.35em;\n}\n\n.cardFooter,\np.cardDesc {\n    margin: 0;\n    color: #858585;\n}\n\np.cardDesc {\n    font-size: 0.875rem;\n    line-height: 1.43;\n    letter-spacing: 0.01071em;\n}";
styleInject(css_248z$e);

const Card = (props) => {
    const { className, padding, title = 'Title of Your Card', cardbody = 'This is the Body Section', border, cardheaderimg, height = '150px' } = props;
    const cardHeader = (React.createElement("div", { className: "cardHead", style: { height: height } },
        React.createElement("img", { className: "cardImg", src: cardheaderimg, alt: "Image Cap", style: { height: height } })));
    const cardFooter = React.createElement("div", { className: "cardFooter" }, props.children);
    return (React.createElement("div", { ...props, className: className ? className : `card noBorderCard ` },
        cardheaderimg ? cardHeader : '',
        React.createElement("div", { style: { padding }, className: "cardBody" },
            React.createElement("div", { className: "cardTitle" }, title),
            React.createElement("p", { className: "cardDesc" }, cardbody)),
        cardFooter));
};

var css_248z$d = ".DrawerContainer {\n  position: absolute;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  background: #e0f5ff;\n  color: #6c747e;\n  width: 257px;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n    transition: margin 300ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n  }\n}\n\n.DrawerContainer-left {\n  left: 0;\n  top: auto;\n  animation: slide-in-left 0.3s ease-in-out forwards;\n}\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n    transition: margin 300ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n  }\n}\n\n.DrawerContainer-right {\n  right: 0;\n  top: auto;\n  animation: slide-in-right 0.3s ease-in-out forwards;\n}";
styleInject(css_248z$d);

const Drawer = ({ align = 'left', width, bg, color, className, style, isOpen = true, children }) => {
    const DrawerStyles = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement("div", { className: className ? className : `DrawerContainer DrawerContainer-${align}`, "data-testid": "drawerComoponent", style: DrawerStyles }, children))));
};

const Upload = () => {
    return (React.createElement("svg", { className: "uploadIcon", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", clipRule: "evenodd" },
        React.createElement("path", { d: "M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" })));
};

const DeleteIcon = () => {
    return (React.createElement("svg", { className: "button-icon-svg", viewBox: "0 0 24 24", "data-testid": "DeleteIcon" },
        React.createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })));
};

var css_248z$c = ".IconButton-Label {\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.IconButton-Label:hover {\n  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;\n}\n\n.IconButton-Label:hover svg.uploadIcon {\n  fill: #0094DA;\n}\n\nsvg.uploadIcon {\n  fill: rgb(45, 56, 67);\n}\n\n.IconButton-Label:hover svg.button-icon-svg {\n  fill: #0094DA;\n}";
styleInject(css_248z$c);

const IconButton = (props) => {
    const { children, className, multiple = false, onClick, type = 'button' } = props;
    return (React.createElement(React.Fragment, null,
        type === 'file' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "IconButton-Input", type: "file", hidden: true, multiple: multiple, id: "IconButton-btn" }),
            React.createElement("label", { className: className ? className : 'IconButton-Label', htmlFor: "IconButton-btn", "data-testid": "upload-component" }, children ? React.createElement("span", { className: "image-icon" }, children) : React.createElement(Upload, null)))),
        type === 'button' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "IconButton-Input", type: "button", hidden: true, multiple: multiple, id: "IconButton-btn" }),
            React.createElement("label", { className: className ? className : 'IconButton-Label', htmlFor: "IconButton-btn", "data-testid": "upload-component", onClick: onClick }, children ? React.createElement("span", { className: "image-icon" }, children) : React.createElement(DeleteIcon, null))))));
};

const ShowPassword = () => {
    return (React.createElement("div", null,
        React.createElement("svg", { width: "18", height: "14", viewBox: "0 0 26 24", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd" },
            React.createElement("path", { d: "M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" }))));
};

const ClosePassword = () => {
    return (React.createElement("div", null,
        React.createElement("svg", { width: "18", height: "14", viewBox: "0 0 26 24", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd" },
            React.createElement("path", { d: "M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" }))));
};

var css_248z$b = "/* .commonInputDiv {\n    border-radius: 6px;\n    padding: 8px;\n    user-select: none;\n    background: transparent;\n    border: 0.4px solid rgba(147, 128, 108, 0.25);\n} */\n\n.commonInputDiv {\n    border-radius: 6px;\n    padding: 8px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n\n.combinedInputField {\n    display: flex;\n}\n\n.adornmentContent,\n.oranmentContent {\n    padding: 7.5px;\n}\n\n.commonInputDiv,\n.adornmentContent,\n.oranmentContent,\n.adornInputField,\n.oranInputField {\n    background: transparent;\n    border: 0.4px solid rgba(147, 128, 108, 0.25);\n}\n\n.adornmentContent {\n    border-radius: 6px 0px 0px 6px;\n    border-right: 0;\n}\n\n.adornInputField,\n.oranInputField {\n    display: flex;\n    align-items: start;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    padding: 8px;\n}\n\n.adornInputField,\n.oranmentContent {\n    border-radius: 0px 6px 6px 0px;\n}\n\n.oranInputField {\n    border-radius: 6px 0px 0px 6px;\n}\n\n.oranmentContent {\n    border-left: 0;\n    border-left: 0px;\n}\n\n.commonInputDiv input:focus,\ninput.InputAddOn-field:focus {\n    background: transparent;\n    border: none;\n    outline: none;\n}\n\n.commonInputDiv:focus-within,\n.combinedInputField:focus-within,\n.error.commonInputDiv,\n.error.combinedInputField {\n    border-radius: 6px;\n    background: transparent;\n}\n\n.commonInputDiv:focus-within,\n.combinedInputField:focus-within {\n    border: 0.4px solid #0094DA;\n}\n\n.combinedInputField:focus-within .adornmentContent,\n.combinedInputField:focus-within .adornInputField,\n.combinedInputField:focus-within .oranmentContent,\n.combinedInputField:focus-within .oranInputField {\n    outline: none;\n    border: 0px;\n}\n\n.combinedInputField:focus-within .adornmentContent {\n    border-right: 0.4px solid rgba(147, 128, 108, 0.25);\n}\n\n.combinedInputField:focus-within .oranmentContent {\n    border-left: 0.4px solid rgba(147, 128, 108, 0.25);\n}\n\n.error.commonInputDiv,\n.error.combinedInputField {\n    border: 0.4px solid red;\n}\n\ninput {\n    border: 0;\n    width: 100%;\n    background: transparent;\n}\n\nspan.InputAddOn-item {\n    padding: 0px 4px;\n}\n\n.InputAddOn-item {\n    color: #666666;\n}";
styleInject(css_248z$b);

const Input = (props) => {
    const { className, placeholder, autoFocus = false, disabled = false, type, adornment, required, onChange, ornament, error = false, ...rest } = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    let _placeholder = 'Input Field';
    let _type = 'text';
    let _required = false;
    if (placeholder)
        _placeholder = placeholder;
    if (type)
        _type = type;
    if (required)
        _required = required;
    return (React.createElement(React.Fragment, null,
        type === 'password' && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className}${error ? 'error' : ''} commonInputDiv combinedInputField ` },
                React.createElement("input", { ...rest, type: inputType, placeholder: _placeholder, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "passwordInput" }),
                React.createElement("span", { className: "passwordIcon", onClick: togglePasswordVisibility, "data-testid": "passwordVisibility" }, showPassword ? React.createElement(ClosePassword, null) : React.createElement(ShowPassword, null))))),
        type !== 'password' && !adornment && !ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''} commonInputDiv` },
                React.createElement("input", { type: _type, placeholder: _placeholder, autoFocus: autoFocus, disabled: disabled, required: _required, ...rest, onChange: onChange, "data-testid": "generalInput" })))),
        type !== 'password' && adornment && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''} combinedInputField` },
                React.createElement("div", { className: "adornmentContent" },
                    React.createElement("span", { className: "InputAddOn-item InputAddOn-field", "data-testid": "adornment" }, adornment)),
                React.createElement("div", { className: `adornInputField ${className}` },
                    React.createElement("input", { className: "InputAddOn-field", placeholder: _placeholder, ...rest, type: _type, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "adornmentInput" }))))),
        type !== 'password' && ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''}  combinedInputField` },
                React.createElement("div", { className: `oranInputField ${className}` },
                    React.createElement("input", { className: "InputAddOn-field", placeholder: _placeholder, ...rest, type: _type, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "oranmentInput" })),
                React.createElement("div", { className: "oranmentContent" },
                    React.createElement("span", { className: "InputAddOn-item", "data-testid": "oranment" }, ornament)))))));
};

var css_248z$a = ".NavBarContainer-top {\n  z-index: 1200;\n  padding: 8px 0px;\n  display: flex;\n  position: relative;\n  width: 100%;\n  flex-direction: row;\n  background: #e0f5ff;\n  color: #6c747e;\n  transition: all 0.5s;\n}";
styleInject(css_248z$a);

const NavBar = ({ width, bg, color, style, children }) => {
    const navBarStyles = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (React.createElement("div", { className: `NavBarContainer-top`, style: navBarStyles, "data-testid": "navbarComponent" }, children));
};

const RightArrow = () => {
    return (React.createElement("svg", { className: "greyColor", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })));
};

var css_248z$9 = ".menuContainer {\n  background: transparent;\n  color: black;\n  width: 100%;\n}\n\n.menuLinkContainer,\n.menuDropDownIcon,\n.MenuType {\n  transition: all 0.5s;\n}\n\n.menuLinkContainer {\n  align-content: start;\n  justify-content: start;\n  place-content: start;\n  gap: 15px;\n  padding: 8px 8px 8px 16px;\n  align-items: center;\n}\n\n.menuLinkContainer,\n.menuChild {\n  cursor: pointer;\n  display: flex;\n  color: #6c747d;\n}\n\n.menuLinkContainer:hover,\nspan.menusText:hover {\n  border-radius: 8px;\n  color: #0094DA;\n  background: transparent;\n}\n\nsvg.greyColor {\n  fill: #6C757D;\n}\n\n.menuLinkContainer:hover .svg-icon path,\n.menuLinkContainer:hover .greyColor path {\n  fill: #0094DA;\n}\n\na.menuLink,\na.menuLink.active {\n  color: black;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.MenuType {\n  margin: 4px 4px 8px 4px;\n}\n\n.menuItem_group_title {\n  padding: 8px 16px;\n  color: rgba(0, 0, 0, .45);\n}\n\n.menuChild {\n  text-decoration: none;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  margin-left: 30px;\n  border: none;\n  outline: none;\n  padding: 10px 14px 10px 14px;\n}\n\n.menuChild:hover {\n  border-radius: 8px;\n  color: #0094DA;\n  background: transparent;\n}\n\n.menuDropDownIcon {\n  display: inline-flex;\n  padding-left: 2px;\n  margin-left: 5px;\n  vertical-align: middle;\n  width: 12px;\n}\n\n.menuDropDownIcon.rotateNintee {\n  transform: rotateNintee(90deg);\n  transform: rotate(90deg) translateX(1px);\n}\n\n.menuItem_group_divider {\n  overflow: hidden;\n  line-height: 0;\n  border-color: rgba(5, 5, 5, .06);\n  border-style: solid;\n  border-width: 0;\n  border-top-width: 2px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 2px;\n          margin-block-end: 2px;\n  padding: 0;\n}";
styleInject(css_248z$9);

const Menu = ({ style, menuData, bg, color, onClick }) => {
    const [subItem, setSubItem] = React.useState(false);
    const [currmenu, setCurrMenu] = React.useState();
    const [currSubMenu, setCurrSubMenu] = React.useState();
    const menuStyles = {
        color: color,
        backgroundColor: bg,
        ...style
    };
    const handleSubItem = (key) => {
        setSubItem(!subItem);
        setCurrMenu(key);
        setCurrSubMenu('');
    };
    return (React.createElement(BrowserRouter, null,
        React.createElement("div", { className: "menuContainer", style: menuStyles }, menuData.map((menuItem, index) => (React.createElement(React.Fragment, { key: index },
            menuItem?.icon && menuItem?.label && (React.createElement(NavLink, { to: menuItem.href, className: "menuLink" },
                React.createElement("div", { className: "MenuType" },
                    menuItem?.type !== 'divider' && React.createElement("div", { className: "menuItem_group_title" }, menuItem.type),
                    React.createElement("div", { className: "menuLinkContainer", onClick: () => {
                            handleSubItem(menuItem.key);
                        }, style: menuStyles },
                        React.createElement("div", { className: "menuImage" }, menuItem.icon),
                        React.createElement("div", { className: "menuTitle" },
                            React.createElement("span", { className: "menusText" }, menuItem.label),
                            menuItem.children && menuItem.children?.length > 0 && (React.createElement("div", { className: `menuDropDownIcon ${subItem && currmenu === menuItem.key ? 'rotateNintee' : ''}` }, React.createElement(RightArrow, null)))))))),
            currmenu === menuItem.key && menuItem.children && currmenu && subItem && (React.createElement(React.Fragment, null, menuItem.children.map((mapChild) => (React.createElement(NavLink, { to: mapChild.href, key: mapChild.key, className: "menuLink" },
                React.createElement("div", { className: "menuChild", key: mapChild.key, style: { display: subItem ? 'block' : 'none', color: `${color}` } }, mapChild.label)))))),
            menuItem?.type === 'divider' && React.createElement("div", { className: "menuItem_group_divider", key: index })))))));
};

var css_248z$8 = "span.menuItem-label {\n  min-height: auto;\n  outline: 0px;\n  border: 0px;\n  margin: 0px;\n  border-radius: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nspan.menuItem-label:hover {\n  color: #1e9de3;\n}\n\n.selected {\n  background: #EFF2FC;\n}\n\n.notSelected {\n  background: transparent;\n}\n\n.removeGutters {\n  padding: 6px 0px;\n}\n\n.addGutters {\n  padding: 6px 16px;\n}";
styleInject(css_248z$8);

const MenuItem = ({ autofocus = false, children = 'Menu Item', className, disableGutters = false, onClick, value = children }) => {
    const handleClick = () => {
        onClick(value);
    };
    return (React.createElement("span", { className: `${className ? className : 'menuItem-label'} ${autofocus ? 'selected' : 'notSelected'} ${disableGutters ? 'removeGutters' : 'addGutters'}`, onClick: handleClick, key: value }, children));
};

const DownIcon = () => {
    return (React.createElement("svg", { className: "downIcon", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M7 10l5 5 5-5z" })));
};

var css_248z$7 = ".selectContainer {\n    display: inline-flex;\n    border: 0.4px solid #C4C4C4;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.selectItems {\n    margin-top: 4px;\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 0px 1px 0px;\n    position: absolute;\n    overflow-x: hidden;\n    overflow-y: auto;\n    overflow: hidden auto;\n    outline: 0px;\n    transition: all 300ms ease-in-out;\n}\n\n.selectItems,\n.selectContainer {\n    padding: 4px 8px;\n    color: #6c747e;\n    border-radius: 4px;\n    background: transparent;\n}\n\nsvg.downIcon {\n    display: flex;\n    width: 1em;\n    height: 1em;\n    fill: rgba(0, 0, 0, 0.54);\n}\n\n.selctDownIcon,\n.selectItems {\n    transition: all 0.5s;\n}\n\n.selctDownIcon.rotateOneEighty {\n    transform: rotate(180deg) translateX(0px);\n    transition: all 0.5s;\n}\n\n\n\n.select {\n    min-width: 80px;\n}";
styleInject(css_248z$7);

const Select = ({ placeholder = 'select...', onChange, padding, width, option, ...props }) => {
    const [openSelect, setOpenSelect] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const selectRef = React.useRef(null);
    const handleSelectOpen = () => {
        setOpenSelect(!openSelect);
    };
    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setOpenSelect(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleSelectClick = (value) => {
        setSelectedValue(value);
        setOpenSelect(false);
        if (onChange) {
            onChange(value);
        }
    };
    const containerStyle = {
        padding: padding || '',
        width: placeholder.length > 0 ? `${placeholder.length * 10}px` : ''
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ...props, className: "selectContainer select", style: containerStyle, onClick: handleSelectOpen, ref: selectRef },
            selectedValue ? selectedValue : placeholder,
            React.createElement("span", { className: `selctDownIcon ${openSelect ? 'rotateOneEighty' : ''}` },
                React.createElement(DownIcon, null))),
        openSelect && option && (React.createElement("div", { className: "selectItems select", style: containerStyle }, option.map((selectData) => {
            return (React.createElement(MenuItem, { onClick: () => handleSelectClick(selectData), key: selectData }, selectData));
        })))));
};

const Stack = ({ align = 'start', direction = 'column', isInline = false, justify = 'start', spacing = 0, wrap = false, style, children }) => {
    const stackStyles = {
        display: isInline ? 'inline-flex' : 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: spacing ? `${spacing}px` : '0px',
        ...style
    };
    return (React.createElement("div", { className: `StackContainer ${direction === 'column' ? 'column' : 'row'}`, style: stackStyles }, children));
};

var css_248z$6 = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n}\n\n.switch input[type=\"checkbox\"] {\n  display: none;\n}\n\n.switch label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.switch label::after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\n\n.switch input:checked+label {\n  background-color: #0094DA;\n}\n\n.switch input:checked+label::after {\n  transform: translateX(30px);\n}\n\np.switchleftTag {\n  padding-left: 6px;\n  padding-top: 3px;\n}\n\np.switchrightTag {\n  text-align: right;\n  padding-top: 4px;\n  padding-right: 9px;\n}\n\np.switchrightTag,\np.switchleftTag {\n  color: white;\n  margin: 0;\n  font-weight: 500;\n}";
styleInject(css_248z$6);

const Switch = (props) => {
    const { name, disabled, checked = false, onChange } = props;
    return (React.createElement("div", { className: "switch" },
        React.createElement("input", { type: "checkbox", id: "switch-toggle", defaultChecked: checked, onChange: onChange, disabled: disabled, name: name, ...props }),
        React.createElement("label", { htmlFor: "switch-toggle" },
            React.createElement("p", { className: checked ? 'switchleftTag' : 'switchrightTag' }, checked ? 'On' : 'Off'))));
};

var css_248z$5 = ".table-container {\n    border: 1px solid #dddddd;\n    overflow: hidden;\n    border-radius: 8px;\n}\n\ntable.mainTable {\n    border: 0px;\n    outline: 0;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntable {\n    border-radius: 15px;\n}";
styleInject(css_248z$5);

const Table = ({ children, className }) => {
    return (React.createElement("div", { className: className ? className : 'table-container', "data-testid": "table-container" },
        React.createElement("table", { className: "mainTable" }, children)));
};

const TableBody = ({ children }) => {
    return React.createElement("tbody", null, children);
};

var css_248z$4 = "td.tableCell {\n  color: grey;\n  text-align: left;\n  padding: 8px;\n}";
styleInject(css_248z$4);

const TableCell = ({ children, className }) => {
    return React.createElement("td", { className: className ? className : 'tableCell' }, children);
};

var css_248z$3 = "tr.tableRow:nth-child(odd) {\n  background: #f9f9f9;\n}";
styleInject(css_248z$3);

const TableRow = ({ children, className }) => {
    return React.createElement("tr", { className: className ? className : 'tableRow' }, children);
};

const TableHeader = ({ children }) => {
    return React.createElement("thead", null, children);
};

var css_248z$2 = ".tableHead {\n  text-align: left;\n  padding: 8px;\n  font-weight: 600;\n  background: #f1f1f1;\n}";
styleInject(css_248z$2);

const TableHead = ({ children, className }) => {
    return React.createElement("th", { className: className ? className : 'tableHead' }, children);
};

var css_248z$1 = ".tooltipMainDiv {\n    position: relative;\n    display: inline-block;\n}\n\n.textContainer {\n    visibility: visible;\n    min-width: 30px;\n    background-color: rgb(49, 49, 49);\n    color: #fff;\n    text-align: center;\n    border-radius: 4px;\n    padding: 5px 5px 5px 5px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0.8;\n}";
styleInject(css_248z$1);

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (React.createElement("div", { className: "tooltipMainDiv", "data-testid": "tooltipHover", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        children,
        showTooltip && React.createElement("span", { className: "textContainer " }, text)));
};

var css_248z = "textarea.textAreaInput {\n  background: transparent;\n  border: 1px solid rgba(147, 128, 108, 0.25);\n  border-radius: 6px;\n  padding: 8px;\n  outline: none;\n}\n\ntextarea.textAreaInput:focus {\n  border: 0.5px solid #0094DA;\n  outline: none;\n}\n\ntextarea.error.textAreaInput {\n  border: 0.5px solid red;\n  outline: none;\n}";
styleInject(css_248z);

const TextArea = (props) => {
    const { placeholder, onChange, rows, cols, className, error = false, ...rest } = props;
    return (React.createElement("textarea", { className: `${error ? 'error' : ''} ${className ? className : 'textAreaInput'}`, rows: rows ? rows : 10, cols: cols ? cols : 50, form: props.form, placeholder: placeholder ? placeholder : 'Text Area...', onChange: onChange }));
};

exports.Alert = Alert;
exports.AuthHOC = AuthHOC;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.Drawer = Drawer;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.NavBar = NavBar;
exports.Select = Select;
exports.Stack = Stack;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.TextArea = TextArea;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
