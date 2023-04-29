var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-XOAZ7YXK.css";

// app/components/layout.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children, login: login2 = !1 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col h-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-16 gap-2 px-4 py-2 z-50 fixed w-full flex bg-base-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
            className: "flex-0 btn btn-ghost px-2 text-3xl",
            to: "/",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "lowercase text-primary",
                children: "Blog"
              }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 15,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "lowercase",
                children: "System"
              }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 16,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          login2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "dropdown dropdown-end fixed top-2 right-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                tabIndex: 0,
                className: "btn btn-ghost btn-circle avatar",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: "https://www.dmoe.cc/random.php",
                    alt: "\u5934\u50CF"
                  }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 21,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 20,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                action: "/",
                method: "POST",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  tabIndex: 0,
                  className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                        to: "user/info",
                        className: "justify-between",
                        children: "\u6211\u7684"
                      }, void 0, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 29,
                        columnNumber: 19
                      }, this)
                    }, 0, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 28,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                        to: "#",
                        children: "\u8BBE\u7F6E"
                      }, void 0, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 32,
                        columnNumber: 19
                      }, this)
                    }, 1, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 31,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        type: "submit",
                        name: "_action",
                        value: "logout",
                        children: "\u9000\u51FA"
                      }, void 0, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 35,
                        columnNumber: 19
                      }, this)
                    }, 2, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 34,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 25,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-grow z-40",
        children
      }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/utils/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/prisma.erver.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient()), prisma = global.__db;

// app/utils/user.server.ts
var UserServer = class {
  static async createUser(user) {
    let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
    return { id: (await prisma.user.create({
      data: {
        name: user.name,
        gender: user.gender,
        birthday: user.birthday,
        password: passwordHash,
        email: {
          create: {
            email: user.email,
            isMain: !0
          }
        },
        FriendList: {
          create: {}
        }
      }
    })).id, email: user.email };
  }
  static async validateUser(email, password) {
    let email_ = await prisma.email.findUnique({
      where: {
        email
      },
      select: {
        user: {
          select: {
            id: !0,
            password: !0
          }
        },
        isMain: !0
      }
    });
    if (email_ && email_.isMain && await import_bcryptjs.default.compare(password, email_.user.password))
      return email_.user;
  }
  static async getUserById(id) {
    return await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: !0,
        name: !0,
        gender: !0,
        birthday: !0,
        address: !0,
        email: {
          select: {
            id: !0,
            email: !0,
            isMain: !0
          },
          orderBy: {
            isMain: "desc"
          }
        }
      }
    });
  }
  static async updateUser(id, name, gender, birthday, address) {
    return await prisma.user.update({
      where: { id },
      data: { name, gender, birthday, address }
    }) ? UserServer.getUserById(id) : null;
  }
  static async updateEmails(id, email) {
    let ids = email.filter((e) => e.id).map((e) => e.id), functions = [];
    return functions.push(prisma.email.deleteMany({
      where: {
        id: {
          notIn: ids
        },
        userId: id
      }
    })), email.forEach((e) => {
      e.id ? functions.push(prisma.email.update({
        where: {
          id: e.id
        },
        data: {
          email: e.email
        }
      })) : functions.push(prisma.email.create({
        data: {
          email: e.email,
          isMain: !1,
          user: {
            connect: {
              id
            }
          }
        }
      }));
    }), await prisma.$transaction(functions) ? await UserServer.getUserById(id) : null;
  }
  static async updatePassword(id, password) {
    let passwordHash = await import_bcryptjs.default.hash(password, 10);
    return await prisma.user.update({
      where: { id },
      data: { password: passwordHash }
    }) ? UserServer.getUserById(id) : null;
  }
  static async getExperiences(id) {
    let study = await prisma.experience.findMany({
      where: {
        userId: id,
        type: "study"
      },
      select: {
        id: !0,
        rank: !0,
        address: !0,
        position: !0,
        startTime: !0,
        endTime: !0
      }
    }), work = await prisma.experience.findMany({
      where: {
        userId: id,
        type: "work"
      },
      select: {
        id: !0,
        address: !0,
        position: !0,
        startTime: !0,
        endTime: !0
      }
    });
    return { study, work };
  }
  static async updateExperiences(id, study, work) {
    let ids = study.filter((e) => e.id).map((e) => e.id);
    work.filter((e) => e.id).forEach((e) => {
      ids.push(e.id);
    });
    let functions = [];
    return functions.push(prisma.experience.deleteMany({
      where: {
        id: {
          notIn: ids
        },
        userId: id
      }
    })), study.forEach((e) => {
      e.id ? functions.push(prisma.experience.update({
        where: {
          id: e.id
        },
        data: {
          rank: e.rank,
          address: e.address,
          position: e.position,
          startTime: e.startTime,
          endTime: e.endTime,
          type: "study"
        }
      })) : functions.push(prisma.experience.create({
        data: {
          rank: e.rank,
          address: e.address,
          position: e.position,
          startTime: e.startTime,
          endTime: e.endTime,
          type: "study",
          user: {
            connect: {
              id
            }
          }
        }
      }));
    }), work.forEach((e) => {
      e.id ? functions.push(prisma.experience.update({
        where: {
          id: e.id
        },
        data: {
          address: e.address,
          position: e.position,
          startTime: e.startTime,
          endTime: e.endTime,
          type: "work"
        }
      })) : functions.push(prisma.experience.create({
        data: {
          address: e.address,
          position: e.position,
          startTime: e.startTime,
          endTime: e.endTime,
          type: "work",
          user: {
            connect: {
              id
            }
          }
        }
      }));
    }), await prisma.$transaction(functions) ? await UserServer.getExperiences(id) : null;
  }
};

// app/utils/auth.server.ts
var import_node2 = require("@remix-run/node");
async function register(user, redirectTo = "/") {
  let newUser = await UserServer.createUser(user);
  return newUser ? createUserSession(newUser.id, redirectTo) : (0, import_node2.json)(
    {
      error: "\u6CE8\u518C\u5931\u8D25",
      fields: {
        email: user.email,
        name: user.name,
        gender: user.gender,
        birthday: user.birthday,
        password: user.password
      },
      form: "register"
    },
    { status: 400 }
  );
}
async function login({ email, password }, redirectTo = "/") {
  let user = await UserServer.validateUser(email, password);
  return user ? createUserSession(user.id, redirectTo) : (0, import_node2.json)({
    error: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF",
    fields: { email, password }
  }, { status: 400 });
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/account", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("Missing SESSION_SECRET env variable");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "time-manager-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireUserId(request, redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/") {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "number" || !await prisma.user.findFirst({ where: { id: userId } })) {
    if (new URL(request.url).pathname.startsWith("/account"))
      return null;
    throw (0, import_node2.redirect)(`/account?redirectTo=${redirectTo}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "number" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (!userId)
    throw await requireUserId(request);
  let user = await UserServer.getUserById(userId);
  if (!user)
    throw await requireUserId(request);
  return user;
}

// app/components/aside-menu-bar.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AsideMenuBar({ menus }) {
  let list = menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "w-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
      to: menus[index].to,
      className: "grid",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "text-center",
        children: menus[index].name
      }, void 0, !1, {
        fileName: "app/components/aside-menu-bar.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/components/aside-menu-bar.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, index, !1, {
    fileName: "app/components/aside-menu-bar.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: "menu p-4 overflow-y-auto w-52 text-base-content items-center",
    children: list
  }, void 0, !1, {
    fileName: "app/components/aside-menu-bar.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ request }) => {
  let userId = await requireUserId(request);
  return (0, import_node3.json)({ login: !!userId }, { status: 200 });
}, action = async ({ request }) => {
  switch ((await request.formData()).get("_action")) {
    case "logout":
      return logout(request);
    default:
      return null;
  }
};
function App() {
  let loaderData = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Blog System"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "overflow-hidden",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
          login: loaderData.login,
          children: [
            loaderData.login && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full h-full flex mt-16",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
                  className: "w-52 h-full bg-base-200 fixed",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsideMenuBar, {
                    menus: [
                      { to: "", name: "\u9996\u9875" },
                      { to: "friends", name: "\u597D\u53CB" },
                      { to: "logs", name: "\u65E5\u5FD7" },
                      { to: "share", name: "\u5206\u4EAB" },
                      { to: "share/self", name: "\u6211\u7684\u5206\u4EAB" }
                    ]
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 43,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
                  className: "w-full ml-52",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 54,
                  columnNumber: 11
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 42,
              columnNumber: 9
            }, this),
            !loaderData.login && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 59,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 60,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 61,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 62,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: app_default }
];

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Account,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react"), import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => await requireUserId(request) ? (0, import_node4.redirect)("/") : {};
function Account() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "fixed top-16 bottom-0 hero bg-base-200 overflow-auto",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "hero-content flex-col lg:flex-row-reverse",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-center lg:text-left",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "text-5xl font-bold",
              children: "Welcome To Blog System !"
            }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "py-6",
              children: "Login in and have fun!"
            }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 17,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/account.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "card-body",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/account.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/account.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/account.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/account/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action2,
  default: () => Register,
  loader: () => loader3
});
var import_react8 = require("@remix-run/react");

// app/components/form/form-field.tsx
var import_react6 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FormField({
  className = "input input-bordered w-full max-w-xs",
  htmlFor,
  label,
  type = "text",
  value = "",
  onChange = () => {
  },
  onBlur = () => {
  },
  error = "",
  selfControl = !1,
  hasError = !0
}) {
  let [errorText, setErrorText] = (0, import_react6.useState)(error), textarea = type === "textarea";
  return (0, import_react6.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "form-control",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor,
            className: "label",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
              className: "underline decoration-sky-500",
              children: label
            }, void 0, !1, {
              fileName: "app/components/form/form-field.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/form/form-field.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          textarea ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            onChange: (e) => {
              onChange(e), selfControl || setErrorText("");
            },
            onBlur: (e) => onBlur(e),
            id: htmlFor,
            name: htmlFor,
            value,
            className: "textarea textarea-bordered"
          }, void 0, !1, {
            fileName: "app/components/form/form-field.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            onChange: (e) => {
              onChange(e), selfControl || setErrorText("");
            },
            onBlur: (e) => onBlur(e),
            type,
            id: htmlFor,
            name: htmlFor,
            className,
            value
          }, void 0, !1, {
            fileName: "app/components/form/form-field.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/form/form-field.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      hasError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, !1, {
        fileName: "app/components/form/form-field.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/form/form-field.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/account/register.tsx
var import_react9 = require("react");

// app/components/form/radio-field.tsx
var import_react7 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function RadioField({
  htmlFor,
  label,
  value = "",
  onChange = () => {
  },
  hasError = !0,
  error = "",
  args
}) {
  let [errorText, setErrorText] = (0, import_react7.useState)(error);
  (0, import_react7.useEffect)(() => {
    setErrorText(error);
  }, [error]);
  let options = args.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
    className: "label cursor-pointer",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "label-text",
        children: item.label
      }, void 0, !1, {
        fileName: "app/components/form/radio-field.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "radio",
        name: htmlFor,
        className: "radio radio-primary",
        value: item.value,
        onChange,
        checked: item.value === value
      }, void 0, !1, {
        fileName: "app/components/form/radio-field.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ]
  }, index, !0, {
    fileName: "app/components/form/radio-field.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "form-control",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor,
        className: "label",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
          className: "underline decoration-sky-500",
          children: label
        }, void 0, !1, {
          fileName: "app/components/form/radio-field.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/form/radio-field.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-" + args.length,
        children: options
      }, void 0, !1, {
        fileName: "app/components/form/radio-field.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      hasError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, !1, {
        fileName: "app/components/form/radio-field.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/form/radio-field.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/account/register.tsx
var import_node5 = require("@remix-run/node");

// app/utils/validators.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), UserValidator = class {
  static async validateEmail(email, register2 = !1, edit = !1, id = 0) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.length || !validRegex.test(email))
      return "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740";
    if (register2) {
      if (await prisma.email.count({ where: { email } }))
        return "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C\u8FC7";
    } else if (edit && await prisma.email.count({ where: { email, userId: { not: id } } }))
      return "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C\u8FC7";
  }
};
UserValidator.validateName = (name) => {
  if (name.length) {
    if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(name))
      return "\u59D3\u540D\u5FC5\u987B\u4E3A\u4E2D\u6587";
  } else
    return "\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A";
}, UserValidator.validateGender = (gender) => {
  if (!gender.length)
    return "\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A";
}, UserValidator.validateBirthday = (birthday) => {
  if (!birthday.length)
    return "\u751F\u65E5\u4E0D\u80FD\u4E3A\u7A7A";
}, UserValidator.validatePassword = async (password, edit = !1, id = 0) => {
  if (edit) {
    let user = await prisma.user.findUnique({ where: { id } });
    return user && await import_bcryptjs2.default.compare(password, user.password) ? void 0 : "\u5BC6\u7801\u9519\u8BEF";
  } else {
    if (password.length < 8)
      return "\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E8\u4F4D";
    if (password.length >= 8 && password.length < 16 && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/))
      return "\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57";
    if (password.length >= 16)
      return "\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC716\u4F4D";
  }
};

// app/routes/account/register.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => (0, import_node5.json)({ redirectTo: new URL(request.url).searchParams.get("redirectTo") }) || "/", action2 = async ({ request }) => {
  let redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/", form = await request.formData(), email = form.get("email"), name = form.get("name"), gender = form.get("gender"), birthday_f = form.get("birthday"), password = form.get("password");
  if (typeof email != "string" || typeof name != "string" || typeof gender != "string" || typeof password != "string" || typeof birthday_f != "string")
    return (0, import_node5.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F", fields: { email, name, gender, birthday_f, password } }, { status: 400 });
  let errors = {
    email: await UserValidator.validateEmail(email, !0),
    name: UserValidator.validateName(name),
    gender: UserValidator.validateGender(gender),
    birthday: UserValidator.validateBirthday(birthday_f),
    password: await UserValidator.validatePassword(password)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node5.json)({ errors, fields: { email, name, gender, birthday_f, password } }, { status: 400 });
  email = email, name = name, gender = gender, password = password;
  let birthday = new Date(birthday_f);
  return await register({ email, name, gender, birthday, password }, redirectTo);
};
function Register() {
  var _a, _b, _c, _d, _e;
  let redirectTo = (0, import_react8.useLoaderData)().redirectTo, onLoad = Boolean((0, import_react8.useTransition)().submission), actionData = (0, import_react8.useActionData)(), [errors, setErrors] = (0, import_react9.useState)((actionData == null ? void 0 : actionData.errors) || {}), [formData, setFormData] = (0, import_react9.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    name: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.name) || "",
    gender: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.gender) || "",
    birthday: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.birthday_f) || "",
    password: ((_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.password) || ""
  }), handleInputChange = (event) => {
    setFormData((form) => ({ ...form, [event.target.name]: event.target.value })), setErrors((errors2) => ({ ...errors2, [event.target.name]: "" }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tabs justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            className: "tab tab-bordered",
            to: "../login?redirectTo=" + redirectTo,
            children: "\u767B\u5F55"
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            className: "tab tab-bordered tab-active",
            to: "../register?redirectTo=" + redirectTo,
            children: "\u6CE8\u518C"
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/register.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "email",
            label: "\u90AE\u7BB1",
            value: formData.email,
            onChange: handleInputChange,
            error: errors.email
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "password",
            type: "password",
            label: "\u5BC6\u7801",
            value: formData.password,
            onChange: handleInputChange,
            error: errors.password
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "name",
            label: "\u59D3\u540D",
            value: formData.name,
            onChange: handleInputChange,
            error: errors.name
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioField, {
            htmlFor: "gender",
            label: "\u6027\u522B",
            value: formData.gender,
            onChange: handleInputChange,
            args: [
              { label: "\u7537", value: "\u7537" },
              { label: "\u5973", value: "\u5973" }
            ],
            error: errors.gender
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            type: "date",
            htmlFor: "birthday",
            label: "\u51FA\u751F\u65E5\u671F",
            value: formData.birthday,
            onChange: handleInputChange,
            error: errors.birthday
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "form-control mt-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-primary",
              disabled: onLoad,
              children: onLoad ? "\u6CE8\u518C\u4E2D..." : "\u6CE8\u518C"
            }, void 0, !1, {
              fileName: "app/routes/account/register.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/account/register.tsx",
            lineNumber: 113,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/register.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/account/register.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/routes/account/index.tsx
var account_exports2 = {};
__export(account_exports2, {
  default: () => Index,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react"), import_node6 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";
  return (0, import_node6.json)({ redirectTo });
};
function Index() {
  let redirectTo = (0, import_react10.useLoaderData)().redirectTo;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: "https://www.fengqiwu.xyz/wp-content/uploads/2023/03/%E6%98%9F%E6%9E%81.jpg",
        alt: "account"
      }, void 0, !1, {
        fileName: "app/routes/account/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-2 gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
            to: "login?redirectTo=" + redirectTo,
            className: "btn btn-primary",
            children: "\u767B\u5F55"
          }, void 0, !1, {
            fileName: "app/routes/account/index.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
            to: "register?redirectTo=" + redirectTo,
            className: "btn btn-secondary",
            children: "\u6CE8\u518C"
          }, void 0, !1, {
            fileName: "app/routes/account/index.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/account/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/account/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader5
});
var import_react11 = require("@remix-run/react"), import_react12 = require("react");
var import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => (0, import_node7.json)({ redirectTo: new URL(request.url).searchParams.get("redirectTo") }) || "/", action3 = async ({ request }) => {
  let redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/", form = await request.formData(), email = form.get("email"), password = form.get("password");
  return typeof email != "string" || typeof password != "string" ? (0, import_node7.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F", fields: { email, password } }, { status: 400 }) : (email = email, password = password, await login({ email, password }, redirectTo));
};
function Login() {
  var _a, _b;
  let redirectTo = (0, import_react11.useLoaderData)().redirectTo, onLoad = Boolean((0, import_react11.useTransition)().submission), actionData = (0, import_react11.useActionData)(), [formError, setFormError] = (0, import_react12.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react12.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || ""
  }), handleInputChange = (event) => {
    setFormData((form) => ({ ...form, [event.target.name]: event.target.value })), setFormError("");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tabs justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
            className: "tab tab-bordered tab-active",
            to: "../login?redirectTo=" + redirectTo,
            children: "\u767B\u5F55"
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
            className: "tab tab-bordered",
            to: "../register?redirectTo=" + redirectTo,
            children: "\u6CE8\u518C"
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/login.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "email",
            label: "\u8D26\u53F7",
            value: formData.email,
            onChange: handleInputChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "password",
            label: "\u5BC6\u7801",
            type: "password",
            value: formData.password,
            onChange: handleInputChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
            children: formError
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "form-control mt-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-primary",
              disabled: onLoad,
              children: onLoad ? "\u767B\u5F55\u4E2D..." : "\u767B\u5F55"
            }, void 0, !1, {
              fileName: "app/routes/account/login.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/account/login.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/account/login.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/account/login.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/friends.tsx
var friends_exports = {};
__export(friends_exports, {
  action: () => action4,
  default: () => Friends,
  loader: () => loader6
});
var import_react14 = require("react");

// app/components/utils/friend-list.tsx
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FriendList({ friendList }) {
  let list = friendList.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "w-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Link, {
      to: "" + item.id,
      className: "btn-ghost grid",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "text-center",
        children: item.name
      }, void 0, !1, {
        fileName: "app/components/utils/friend-list.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/components/utils/friend-list.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  }, index, !1, {
    fileName: "app/components/utils/friend-list.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: "menu p-4 overflow-y-auto w-52 text-base-content items-center",
    children: list
  }, void 0, !1, {
    fileName: "app/components/utils/friend-list.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/friends.tsx
var import_node8 = require("@remix-run/node");

// app/utils/friend.server.ts
var FriendServer = class {
  static async getAllFriends(id) {
    let data = (await prisma.friendList.findMany({
      where: {
        userId: id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: !0,
                name: !0
              }
            }
          }
        }
      }
    })).map((item) => item.friendGroup.map((item2) => item2.friend)), res = [];
    for (let item of data)
      res.push(...item);
    return res;
  }
  static async getFriendsList(id) {
    return await prisma.friendList.findMany({
      where: {
        userId: id
      }
    });
  }
  static async getFriendsByListId(id, userId) {
    let res = await prisma.friendList.findUnique({
      where: {
        id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: !0,
                name: !0
              }
            }
          }
        }
      }
    });
    return (res == null ? void 0 : res.userId) !== userId ? null : res;
  }
  static async getUserList(id) {
    let data = (await prisma.friendList.findMany({
      where: {
        userId: id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: !0,
                name: !0
              }
            }
          }
        }
      }
    })).map((item) => item.friendGroup.map((item2) => item2.friend.id)), ids = [];
    for (let item of data)
      ids.push(...item);
    return ids.push(id), await prisma.user.findMany({
      where: {
        id: {
          notIn: ids
        }
      },
      select: {
        id: !0,
        name: !0
      }
    });
  }
  static async addFriend(listId, userId) {
    return await prisma.friendList.update({
      where: {
        id: listId
      },
      data: {
        friendGroup: {
          create: {
            friend: {
              connect: {
                id: userId
              }
            }
          }
        }
      }
    });
  }
  static async deleteFriend(listId, userId) {
    let group = await prisma.friendGroup.findFirst({
      where: {
        listId,
        friendId: userId
      }
    });
    return await prisma.friendGroup.delete({
      where: {
        id: group.id
      }
    });
  }
  static async deleteFriendGroup(listId) {
    return await prisma.friendList.delete({
      where: {
        id: listId
      }
    });
  }
  static async addFriendGroup(userId, name) {
    return await prisma.friendList.create({
      data: {
        name,
        userId,
        isGroup: !0
      }
    });
  }
};

// app/routes/friends.tsx
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let userId = await getUserId(request), friendList = await FriendServer.getFriendsList(userId), listInitialId = friendList.find((friend) => !friend.isGroup).id;
  return new URL(request.url).pathname.split("/").length === 2 ? (0, import_node8.redirect)(`/friends/${listInitialId}`) : (0, import_node8.json)({ friendList }, { status: 200 });
}, action4 = async ({ request }) => {
  let userId = await getUserId(request), name = (await request.formData()).get("name");
  if (await FriendServer.addFriendGroup(userId, name)) {
    let friendList = await FriendServer.getFriendsList(userId);
    return (0, import_node8.json)({ friendList }, { status: 200 });
  }
  return (0, import_node8.json)({ error: "\u6DFB\u52A0\u5931\u8D25" }, { status: 500 });
};
function Friends() {
  let loaderData = (0, import_react15.useLoaderData)(), [formData, setFormData] = (0, import_react14.useState)({
    name: ""
  }), add = (0, import_react14.useRef)(!0), handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }), add.current = formData.name !== "";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "fixed top-16 bottom-0 left-52 right-0 flex",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
        className: "h-full overflow-y-auto w-52 bg-gradient-to-br from-violet-300 to-sky-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FriendList, {
            friendList: loaderData.friendList
          }, void 0, !1, {
            fileName: "app/routes/friends.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            method: "post",
            action: "/friends",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "collapse collapse-plus bg-base-100 rounded-box bg-transparent",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "checkbox",
                  onClick: (_) => {
                    setFormData({ name: "" }), add.current = !0;
                  }
                }, void 0, !1, {
                  fileName: "app/routes/friends.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "collapse-title text-xl font-medium",
                  children: "\u6DFB\u52A0\u5206\u7EC4"
                }, void 0, !1, {
                  fileName: "app/routes/friends.tsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "collapse-content",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                      htmlFor: "name",
                      label: "\u540D\u79F0",
                      value: formData.name,
                      onChange: handleInputChange,
                      hasError: !1
                    }, void 0, !1, {
                      fileName: "app/routes/friends.tsx",
                      lineNumber: 58,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "my-2 w-full",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        className: "btn btn-error w-full",
                        disabled: add.current,
                        children: "\u6DFB\u52A0"
                      }, void 0, !1, {
                        fileName: "app/routes/friends.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/friends.tsx",
                      lineNumber: 65,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/friends.tsx",
                  lineNumber: 57,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/friends.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/friends.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "h-full overflow-hidden flex grow",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
          fileName: "app/routes/friends.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/friends.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/friends.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/friends/$listId.tsx
var listId_exports = {};
__export(listId_exports, {
  action: () => action5,
  default: () => ListId,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader7 = async ({ request, params }) => {
  let { listId } = params, userId = await getUserId(request), list = await FriendServer.getFriendsByListId(parseInt(listId), userId);
  if (!list)
    return (0, import_node9.redirect)("/friends");
  let user = await FriendServer.getUserList(userId);
  return (0, import_node9.json)({ listId, list, user }, { status: 200 });
}, action5 = async ({ request, params }) => {
  let { listId } = params, form = await request.formData(), id = form.get("id"), action19 = form.get("_action"), userId = await getUserId(request);
  switch (action19) {
    case "deleteGroup":
      return await FriendServer.deleteFriendGroup(parseInt(listId)) ? (0, import_node9.redirect)("/friends") : (0, import_node9.json)({ error: "\u5220\u9664\u5931\u8D25" }, { status: 500 });
    case "delete":
      if (await FriendServer.deleteFriend(parseInt(listId), parseInt(id))) {
        let list = await FriendServer.getFriendsByListId(parseInt(listId), userId), user = await FriendServer.getUserList(userId);
        return (0, import_node9.json)({ listId, list, user }, { status: 200 });
      }
      return (0, import_node9.json)({ error: "\u5220\u9664\u5931\u8D25" }, { status: 500 });
    case "add":
      if (await FriendServer.addFriend(parseInt(listId), parseInt(id))) {
        let list = await FriendServer.getFriendsByListId(parseInt(listId), userId), user = await FriendServer.getUserList(userId);
        return (0, import_node9.json)({ listId, list, user }, { status: 200 });
      }
      return (0, import_node9.json)({ error: "\u6DFB\u52A0\u5931\u8D25" }, { status: 500 });
    default:
      return (0, import_node9.json)({ error: "\u672A\u77E5\u9519\u8BEF" }, { status: 500 });
  }
};
function ListId() {
  let loaderData = (0, import_react16.useLoaderData)(), actionData = (0, import_react16.useActionData)(), user = (actionData == null ? void 0 : actionData.user) || loaderData.user, list = (actionData == null ? void 0 : actionData.list.friendGroup) || loaderData.list.friendGroup;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex grow",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full overflow-y-auto grow",
        children: [
          loaderData.list.isGroup && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "justify-center flex my-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "_action",
                  value: "deleteGroup"
                }, void 0, !1, {
                  fileName: "app/routes/friends/$listId.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-error",
                  children: "\u5220\u9664\u5206\u7EC4"
                }, void 0, !1, {
                  fileName: "app/routes/friends/$listId.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Friend, {
            friend: list
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-60 h-full overflow-y-auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold",
            children: "\u7528\u6237\u5217\u8868"
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {
            user
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/friends/$listId.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function Friend({ friend }) {
  let list = friend.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "mx-4 my-2 shadow-2xl rounded-lg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around h-16 m-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "avatar ml-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "https://www.dmoe.cc/random.php",
                alt: "avatar"
              }, void 0, !1, {
                fileName: "app/routes/friends/$listId.tsx",
                lineNumber: 89,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-end flex",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-bold m-2 text-blue-600",
              children: item.friend.name
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "id",
              value: item.friend.id
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "_action",
              value: "delete"
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-primary btn-sm mb-4",
              children: "\u5220\u9664\u597D\u53CB"
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/friends/$listId.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ]
  }, item.friend.id, !0, {
    fileName: "app/routes/friends/$listId.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    children: list
  }, void 0, !1, {
    fileName: "app/routes/friends/$listId.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
function User({ user }) {
  let list = user.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "mx-4 my-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around h-16",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "avatar ml-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "https://www.dmoe.cc/random.php",
                alt: "avatar"
              }, void 0, !1, {
                fileName: "app/routes/friends/$listId.tsx",
                lineNumber: 127,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 125,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 124,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-end flex",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-bold m-2 text-blue-600",
              children: item.name
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 131,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/routes/friends/$listId.tsx",
            lineNumber: 133,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around shadow-2xl rounded-lg bg-orange-100 ml-6 -mt-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "id",
              value: item.id
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 138,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "_action",
              value: "add"
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 139,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-primary btn-sm mt-8 mb-4",
              children: "\u52A0\u4E3A\u597D\u53CB"
            }, void 0, !1, {
              fileName: "app/routes/friends/$listId.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/friends/$listId.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/friends/$listId.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this)
    ]
  }, item.id, !0, {
    fileName: "app/routes/friends/$listId.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    children: list
  }, void 0, !1, {
    fileName: "app/routes/friends/$listId.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader8
});
var import_react18 = require("@remix-run/react");

// app/components/utils/log-list.tsx
var import_date_fns = require("date-fns"), import_react17 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function LogList({ logs, readonly = !0, share = !0 }) {
  let logList = logs.map((log, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
    log,
    readonly,
    share: share && log.share
  }, index, !1, {
    fileName: "app/components/utils/log-list.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: logList
  }, void 0, !1, {
    fileName: "app/components/utils/log-list.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function Log({ log, readonly, view = !1, share }) {
  let template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body { 
          font-family:Helvetica,Arial,sans-serif; 
          font-size:14px 
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='\u5BCC\u6587\u672C\u533A\u57DF\u3002 \u6309ALT-0\u5BFB\u6C42\u5E2E\u52A9\u3002' contenteditable='true' spellcheck='false'>
      ${log.content}
    </body>
    </html>
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col w-full divide-y-2 divide-gray-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "avatar justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "https://www.dmoe.cc/random.php",
                alt: "avatar"
              }, void 0, !1, {
                fileName: "app/components/utils/log-list.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/utils/log-list.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-2xl font-bold m-2 text-blue-600",
                children: log.user.name
              }, void 0, !1, {
                fileName: "app/components/utils/log-list.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "m-2 text-slate-400",
                children: "\u53D1\u8868\u4E8E" + (0, import_date_fns.format)(new Date(log.updateTime.substring(0, log.updateTime.length - 2)), "yyyy-MM-dd HH:mm:ss")
              }, void 0, !1, {
                fileName: "app/components/utils/log-list.tsx",
                lineNumber: 62,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          !view && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center px-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
              className: "btn btn-info w-24",
              to: `/logs/view/${log.id}`,
              children: "\u8BE6\u60C5"
            }, void 0, !1, {
              fileName: "app/components/utils/log-list.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          share && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center px-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
              className: "btn btn-accent w-24",
              to: `/share/new/${log.id}`,
              children: "\u5206\u4EAB"
            }, void 0, !1, {
              fileName: "app/components/utils/log-list.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          !readonly && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "self-center px-2",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
                  className: "btn btn-success w-24",
                  to: `/logs/edit/${log.id}`,
                  children: "\u4FEE\u6539"
                }, void 0, !1, {
                  fileName: "app/components/utils/log-list.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/utils/log-list.tsx",
                lineNumber: 79,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "POST",
                className: "self-center px-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "hidden",
                    name: "_action",
                    value: "delete"
                  }, void 0, !1, {
                    fileName: "app/components/utils/log-list.tsx",
                    lineNumber: 83,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "hidden",
                    name: "id",
                    value: log.id
                  }, void 0, !1, {
                    fileName: "app/components/utils/log-list.tsx",
                    lineNumber: 84,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "btn btn-error w-24",
                    children: "\u5220\u9664"
                  }, void 0, !1, {
                    fileName: "app/components/utils/log-list.tsx",
                    lineNumber: 85,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/utils/log-list.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/utils/log-list.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/utils/log-list.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
          src: "data:text/html;charset=utf-8," + encodeURI(template),
          className: "h-96 w-full"
        }, void 0, !1, {
          fileName: "app/components/utils/log-list.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/utils/log-list.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/utils/log-list.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_node10 = require("@remix-run/node");

// app/utils/log.server.ts
var LogServer = class {
  static async createLog(log) {
    return await prisma.log.create({
      data: {
        canReply: log.reply,
        canShare: log.share,
        content: log.content,
        user: {
          connect: {
            id: log.userId
          }
        }
      }
    });
  }
  static async updateLog(id, log) {
    return await prisma.log.update({
      where: {
        id
      },
      data: {
        canReply: log.reply,
        canShare: log.share,
        content: log.content
      }
    });
  }
  static async getLogs(userId) {
    let res = await prisma.log.findMany({
      orderBy: {
        updateTime: "desc"
      },
      include: {
        user: {
          select: {
            name: !0
          }
        }
      }
    }), friends = await FriendServer.getAllFriends(userId);
    return res.map((item) => (item.share = item.canShare || item.userId === userId || friends.some((friend) => friend.id === item.userId), item));
  }
  static async getLogsByUserId(userId) {
    return await prisma.log.findMany({
      where: {
        userId
      },
      orderBy: {
        updateTime: "desc"
      },
      include: {
        user: {
          select: {
            name: !0
          }
        }
      }
    });
  }
  static async getLogById(id, verify = !1, userId = -1) {
    let res = await prisma.log.findUnique({
      where: {
        id
      },
      include: {
        user: {
          select: {
            name: !0
          }
        }
      }
    });
    if (!res || verify && res.userId !== userId)
      return null;
    let friends = await FriendServer.getAllFriends(userId);
    return res.reply = res.canReply || res.userId === userId || friends.some((item) => item.id === res.userId), res.share = res.canShare || res.userId === userId || friends.some((item) => item.id === res.userId), res;
  }
  static async deleteLogById(id, userId) {
    let res = await prisma.log.findUnique({
      where: {
        id
      },
      select: {
        userId: !0
      }
    });
    return (res == null ? void 0 : res.userId) !== userId ? null : await prisma.log.delete({
      where: {
        id
      }
    });
  }
  static async verifyReply(id, userId) {
    let log = await prisma.log.findUnique({
      where: {
        id
      }
    }), friends = await FriendServer.getAllFriends(userId);
    return log && (log.canReply || log.userId === userId || friends.some((item) => item.id === log.userId));
  }
  static async verifyShare(id, userId) {
    let log = await prisma.log.findUnique({
      where: {
        id
      }
    }), friends = await FriendServer.getAllFriends(userId);
    return log && (log.canShare || log.userId === userId || friends.some((item) => item.id === log.userId));
  }
};

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let userId = await getUserId(request), res = await LogServer.getLogs(userId);
  return (0, import_node10.json)({ logs: res }, { status: 200 });
};
function Index2() {
  let loaderData = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed top-16 bottom-0 left-52 right-0 overflow-y-auto px-12 bg-amber-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-base-100 divide-y-2 divide-black",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogList, {
            logs: loaderData.logs
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/share.tsx
var share_exports = {};
__export(share_exports, {
  action: () => action6,
  default: () => Share
});
var import_react19 = require("@remix-run/react"), import_node11 = require("@remix-run/node");

// app/utils/share.server.ts
var ShareServer = class {
  static async createShare(share) {
    return await prisma.share.create({
      data: {
        ...share
      }
    });
  }
  static async getShares(userId) {
    return (await prisma.share.findMany({
      orderBy: {
        updateTime: "desc"
      },
      include: {
        user: {
          select: {
            name: !0
          }
        },
        log: {
          include: {
            user: {
              select: {
                name: !0
              }
            }
          }
        }
      }
    })).map((item) => (item.self = item.userId === userId, item));
  }
  static async verifyShare(id, userId) {
    let res = await prisma.share.findUnique({
      where: {
        id
      }
    });
    return (res == null ? void 0 : res.userId) === userId;
  }
  static async getShareById(id) {
    return await prisma.share.findUnique({
      where: {
        id
      },
      include: {
        user: {
          select: {
            name: !0
          }
        },
        log: {
          include: {
            user: {
              select: {
                name: !0
              }
            }
          }
        }
      }
    });
  }
  static async updateShare(id, contentStr) {
    return await prisma.share.update({
      where: {
        id
      },
      data: {
        content: contentStr
      }
    });
  }
  static async deleteShare(id, userId) {
    let share = await prisma.share.findUnique({
      where: {
        id
      }
    });
    if ((share == null ? void 0 : share.userId) === userId)
      return await prisma.share.delete({
        where: {
          id
        }
      });
  }
  static async getSharesByUserId(userId) {
    return (await prisma.share.findMany({
      where: {
        userId
      },
      orderBy: {
        updateTime: "desc"
      },
      include: {
        user: {
          select: {
            name: !0
          }
        },
        log: {
          include: {
            user: {
              select: {
                name: !0
              }
            }
          }
        }
      }
    })).map((item) => (item.self = !0, item));
  }
};

// app/routes/share.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action6 = async ({ request }) => {
  let id = (await request.formData()).get("id"), userId = await getUserId(request);
  await ShareServer.deleteShare(parseInt(id), userId);
  let share = await ShareServer.getShares(userId);
  return (0, import_node11.json)({ share }, { status: 200 });
};
function Share() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
    fileName: "app/routes/share.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/share/edit.$id.tsx
var edit_id_exports = {};
__export(edit_id_exports, {
  action: () => action7,
  default: () => Edit,
  loader: () => loader9
});
var import_node12 = require("@remix-run/node");
var import_react21 = require("@remix-run/react"), import_react22 = require("react");

// app/components/alert.tsx
var import_react20 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Alert({ className = "", message, type, timeout = 3e3 }) {
  let [time, setTime] = (0, import_react20.useState)(timeout), timeSet = (0, import_react20.useRef)();
  return (0, import_react20.useEffect)(() => {
    time > 0 ? (clearTimeout(timeSet.current), timeSet.current = setTimeout(() => {
      setTime(time - 100);
    }, 100)) : clearTimeout(timeSet.current);
  }, [time, setTime]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `alert alert-${type} shadow-lg ${className}`,
    style: time === 0 ? { display: "none" } : { opacity: time * 1 / timeout },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "cursor-pointer select-none",
          children: message
        }, void 0, !1, {
          fileName: "app/components/alert.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/alert.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-none",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "btn btn-ghost btn-sm",
          type: "button",
          onClick: () => {
            setTime(0);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "w-5 h-5 flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-x",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "#ffffff",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }, void 0, !1, {
                  fileName: "app/components/alert.tsx",
                  lineNumber: 52,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }, void 0, !1, {
                  fileName: "app/components/alert.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                }, void 0, !1, {
                  fileName: "app/components/alert.tsx",
                  lineNumber: 54,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/alert.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/alert.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/alert.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/alert.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "alert alert-success alert-info alert-error alert-warning opea",
        style: { display: "none" }
      }, void 0, !1, {
        fileName: "app/components/alert.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/alert.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/utils/my-editor.tsx
var import_tinymce_react = require("@tinymce/tinymce-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function MyEditor({
  initValue = "",
  onChange = () => {
  },
  readonly = !1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tinymce_react.Editor, {
    id: "content",
    inline: !1,
    value: initValue,
    init: {
      height: 500,
      plugins: [
        "anchor autolink charmap codesample emoticons image link lists media searchreplace table",
        "visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker",
        "a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments",
        "tableofcontents footnotes mergetags autocorrect typography inlinecss"
      ],
      toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough |            link image media table mergetags | addcomment showcomments |            pellcheckdialog a11ycheck typography | align lineheight |            checklist numlist bullist indent outdent | emoticons charmap | removeformat",
      content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      language: "zh_CN",
      fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px 96px 120px 144px 288px",
      font_formats: "\u5B8B\u4F53=\u5B8B\u4F53;\u9ED1\u4F53=\u9ED1\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;Arial=Arial;Courier New=Courier New;Tahoma=Tahoma;Times New Roman=Times New Roman;Verdana=Verdana;",
      readonly
    },
    onEditorChange: onChange,
    apiKey: "2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b"
  }, void 0, !1, {
    fileName: "app/components/utils/my-editor.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/share/edit.$id.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader9 = async ({ request, params }) => {
  let { id } = params, userId = await getUserId(request);
  if (!await ShareServer.verifyShare(parseInt(id), userId))
    return (0, import_node12.redirect)("/share");
  let share = await ShareServer.getShareById(parseInt(id));
  return (0, import_node12.json)({ share }, { status: 200 });
}, action7 = async ({ request, params }) => {
  let { id } = params, form = await request.formData(), userId = await getUserId(request), content = form.get("content");
  if (typeof content != "string")
    return new Response("bad request", { status: 400 });
  let shareId = parseInt(id), contentStr = content;
  return await ShareServer.updateShare(shareId, contentStr) ? (0, import_node12.redirect)("/share") : (0, import_node12.json)({ error: "\u4FEE\u6539\u5931\u8D25", content: contentStr }, { status: 500 });
};
function Edit() {
  let loaderData = (0, import_react21.useLoaderData)(), actionData = (0, import_react21.useActionData)(), [formData, setFormData] = (0, import_react22.useState)({
    content: (actionData == null ? void 0 : actionData.content) || loaderData.share.content
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/share/edit.$id.tsx",
                lineNumber: 55,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/share/edit.$id.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/share/edit.$id.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/share/edit.$id.tsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/share/edit.$id.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u63D0\u4EA4"
                }, void 0, !1, {
                  fileName: "app/routes/share/edit.$id.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/share/edit.$id.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/share/edit.$id.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-base-100 divide-y-2 divide-black mb-14",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
                log: loaderData.share.log,
                readonly: !0,
                view: !0,
                share: !1
              }, void 0, !1, {
                fileName: "app/routes/share/edit.$id.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-full divide-y-2 divide-gray-200",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-16 flex",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "self-center",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mx-4 text-2xl font-bold m-2 text-blue-600",
                          children: "\u8BC4\u8BBA"
                        }, void 0, !1, {
                          fileName: "app/routes/share/edit.$id.tsx",
                          lineNumber: 70,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/share/edit.$id.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-auto"
                      }, void 0, !1, {
                        fileName: "app/routes/share/edit.$id.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/edit.$id.tsx",
                    lineNumber: 68,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
                    initValue: formData.content,
                    onChange: handleContentChange
                  }, void 0, !1, {
                    fileName: "app/routes/share/edit.$id.tsx",
                    lineNumber: 74,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/share/edit.$id.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/edit.$id.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/share/edit.$id.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/share/edit.$id.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/share/edit.$id.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/share/new.$id.tsx
var new_id_exports = {};
__export(new_id_exports, {
  action: () => action8,
  default: () => New,
  loader: () => loader10
});
var import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_node13 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader10 = async ({ request, params }) => {
  let { id } = params, userId = await getUserId(request);
  if (!await LogServer.verifyShare(parseInt(id), userId))
    return (0, import_node13.redirect)("/logs/view/" + id);
  let log = await LogServer.getLogById(parseInt(id), !1, userId);
  return (0, import_node13.json)({ log }, { status: 200 });
}, action8 = async ({ request, params }) => {
  let { id } = params, form = await request.formData(), userId = await getUserId(request), content = form.get("content");
  if (typeof content != "string")
    return new Response("bad request", { status: 400 });
  let log = parseInt(id), contentStr = content;
  return await ShareServer.createShare({ userId, logId: log, content: contentStr }) ? (0, import_node13.redirect)("/share") : (0, import_node13.json)({ error: "\u5206\u4EAB\u5931\u8D25" }, { status: 500 });
};
function New() {
  let loaderData = (0, import_react23.useLoaderData)(), actionData = (0, import_react23.useActionData)(), [formData, setFormData] = (0, import_react24.useState)({
    content: ""
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/share/new.$id.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/share/new.$id.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/share/new.$id.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/share/new.$id.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/share/new.$id.tsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u63D0\u4EA4"
                }, void 0, !1, {
                  fileName: "app/routes/share/new.$id.tsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/share/new.$id.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/share/new.$id.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-base-100 divide-y-2 divide-black mb-14",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
                log: loaderData.log,
                readonly: !0,
                view: !0,
                share: !1
              }, void 0, !1, {
                fileName: "app/routes/share/new.$id.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-full divide-y-2 divide-gray-200",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-16 flex",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "self-center",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mx-4 text-2xl font-bold m-2 text-blue-600",
                          children: "\u8BC4\u8BBA"
                        }, void 0, !1, {
                          fileName: "app/routes/share/new.$id.tsx",
                          lineNumber: 72,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/share/new.$id.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-auto"
                      }, void 0, !1, {
                        fileName: "app/routes/share/new.$id.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/new.$id.tsx",
                    lineNumber: 70,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
                    initValue: formData.content,
                    onChange: handleContentChange
                  }, void 0, !1, {
                    fileName: "app/routes/share/new.$id.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/share/new.$id.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/new.$id.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/share/new.$id.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/share/new.$id.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/share/new.$id.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/share/index.tsx
var share_exports2 = {};
__export(share_exports2, {
  default: () => Index3,
  loader: () => loader11
});
var import_node14 = require("@remix-run/node");
var import_react25 = require("@remix-run/react"), import_date_fns2 = require("date-fns"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let userId = await getUserId(request), share = await ShareServer.getShares(userId);
  return (0, import_node14.json)({ share }, { status: 200 });
};
function Index3() {
  let loaderData = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed top-16 bottom-0 left-52 right-0 overflow-y-auto px-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-base-100 divide-y-2 divide-black",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareList, {
            share: loaderData.share
          }, void 0, !1, {
            fileName: "app/routes/share/index.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/share/index.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/share/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/share/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/share/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function ShareList({ share }) {
  let list = share.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, {
    share: item
  }, index, !1, {
    fileName: "app/routes/share/index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: list
  }, void 0, !1, {
    fileName: "app/routes/share/index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function Share2({ share }) {
  let template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body { 
          font-family:Helvetica,Arial,sans-serif; 
          font-size:14px 
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='\u5BCC\u6587\u672C\u533A\u57DF\u3002 \u6309ALT-0\u5BFB\u6C42\u5E2E\u52A9\u3002' contenteditable='true' spellcheck='false'>
      ${share.content}
    </body>
    </html>
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-base-100 divide-y-2 divide-black",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
        log: share.log,
        readonly: !0,
        view: !0,
        share: !1
      }, void 0, !1, {
        fileName: "app/routes/share/index.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full divide-y-2 divide-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-16 flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "self-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "mx-4 text-2xl font-bold m-2 text-blue-600",
                  children: "\u8BC4\u8BBA"
                }, void 0, !1, {
                  fileName: "app/routes/share/index.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/share/index.tsx",
                lineNumber: 76,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-auto"
              }, void 0, !1, {
                fileName: "app/routes/share/index.tsx",
                lineNumber: 79,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/index.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col w-full divide-y-2 divide-gray-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "avatar justify-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: "https://www.dmoe.cc/random.php",
                        alt: "avatar"
                      }, void 0, !1, {
                        fileName: "app/routes/share/index.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/share/index.tsx",
                      lineNumber: 84,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/share/index.tsx",
                    lineNumber: 83,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-2xl font-bold m-2 text-blue-600",
                        children: share.user.name
                      }, void 0, !1, {
                        fileName: "app/routes/share/index.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "m-2 text-slate-400",
                        children: [
                          "\u5206\u4EAB\u4E8E" + (0, import_date_fns2.format)(new Date(share.createTime.substring(0, share.createTime.length - 2)), "yyyy-MM-dd HH:mm:ss"),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                            fileName: "app/routes/share/index.tsx",
                            lineNumber: 93,
                            columnNumber: 17
                          }, this),
                          "\u6700\u540E\u8BC4\u8BBA\u4E8E" + (0, import_date_fns2.format)(new Date(share.updateTime.substring(0, share.updateTime.length - 2)), "yyyy-MM-dd HH:mm:ss")
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/share/index.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/index.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex-auto"
                  }, void 0, !1, {
                    fileName: "app/routes/share/index.tsx",
                    lineNumber: 97,
                    columnNumber: 13
                  }, this),
                  share.self && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "self-center px-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Link, {
                          className: "btn btn-success w-24",
                          to: `/share/edit/${share.id}`,
                          children: "\u4FEE\u6539"
                        }, void 0, !1, {
                          fileName: "app/routes/share/index.tsx",
                          lineNumber: 101,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/share/index.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                        method: "POST",
                        className: "self-center px-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                            type: "hidden",
                            name: "id",
                            value: share.id
                          }, void 0, !1, {
                            fileName: "app/routes/share/index.tsx",
                            lineNumber: 104,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "btn btn-error w-24",
                            children: "\u5220\u9664"
                          }, void 0, !1, {
                            fileName: "app/routes/share/index.tsx",
                            lineNumber: 105,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/share/index.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/index.tsx",
                    lineNumber: 99,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/share/index.tsx",
                lineNumber: 82,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
                  src: "data:text/html;charset=utf-8," + encodeURI(template),
                  className: "h-48 w-full"
                }, void 0, !1, {
                  fileName: "app/routes/share/index.tsx",
                  lineNumber: 111,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/share/index.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/index.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/share/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/share/index.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/routes/share/self.tsx
var self_exports = {};
__export(self_exports, {
  action: () => action9,
  default: () => Self,
  loader: () => loader12
});
var import_node15 = require("@remix-run/node");
var import_react26 = require("@remix-run/react"), import_date_fns3 = require("date-fns"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  let userId = await getUserId(request), share = await ShareServer.getSharesByUserId(userId);
  return (0, import_node15.json)({ share }, { status: 200 });
}, action9 = async ({ request }) => {
  let id = (await request.formData()).get("id"), userId = await getUserId(request);
  await ShareServer.deleteShare(parseInt(id), userId);
  let share = await ShareServer.getSharesByUserId(userId);
  return (0, import_node15.json)({ share }, { status: 200 });
};
function Self() {
  let loaderData = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed top-16 bottom-0 left-52 right-0 overflow-y-auto px-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-base-100 divide-y-2 divide-black",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareList2, {
            share: loaderData.share
          }, void 0, !1, {
            fileName: "app/routes/share/self.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/share/self.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/share/self.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/share/self.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/share/self.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function ShareList2({ share }) {
  let list = share.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share3, {
    share: item
  }, index, !1, {
    fileName: "app/routes/share/self.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: list
  }, void 0, !1, {
    fileName: "app/routes/share/self.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function Share3({ share }) {
  let template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body { 
          font-family:Helvetica,Arial,sans-serif; 
          font-size:14px 
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='\u5BCC\u6587\u672C\u533A\u57DF\u3002 \u6309ALT-0\u5BFB\u6C42\u5E2E\u52A9\u3002' contenteditable='true' spellcheck='false'>
      ${share.content}
    </body>
    </html>
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-base-100 divide-y-2 divide-black",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
        log: share.log,
        readonly: !0,
        view: !0,
        share: !1
      }, void 0, !1, {
        fileName: "app/routes/share/self.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full divide-y-2 divide-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-16 flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "self-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "mx-4 text-2xl font-bold m-2 text-blue-600",
                  children: "\u8BC4\u8BBA"
                }, void 0, !1, {
                  fileName: "app/routes/share/self.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/share/self.tsx",
                lineNumber: 85,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-auto"
              }, void 0, !1, {
                fileName: "app/routes/share/self.tsx",
                lineNumber: 88,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/self.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col w-full divide-y-2 divide-gray-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "avatar justify-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: "https://www.dmoe.cc/random.php",
                        alt: "avatar"
                      }, void 0, !1, {
                        fileName: "app/routes/share/self.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/share/self.tsx",
                      lineNumber: 93,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/share/self.tsx",
                    lineNumber: 92,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-2xl font-bold m-2 text-blue-600",
                        children: share.user.name
                      }, void 0, !1, {
                        fileName: "app/routes/share/self.tsx",
                        lineNumber: 99,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "m-2 text-slate-400",
                        children: [
                          "\u5206\u4EAB\u4E8E" + (0, import_date_fns3.format)(new Date(share.createTime.substring(0, share.createTime.length - 2)), "yyyy-MM-dd HH:mm:ss"),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                            fileName: "app/routes/share/self.tsx",
                            lineNumber: 102,
                            columnNumber: 17
                          }, this),
                          "\u6700\u540E\u8BC4\u8BBA\u4E8E" + (0, import_date_fns3.format)(new Date(share.updateTime.substring(0, share.updateTime.length - 2)), "yyyy-MM-dd HH:mm:ss")
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/share/self.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/self.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex-auto"
                  }, void 0, !1, {
                    fileName: "app/routes/share/self.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                  }, this),
                  share.self && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "self-center px-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Link, {
                          className: "btn btn-success w-24",
                          to: `/share/edit/${share.id}`,
                          children: "\u4FEE\u6539"
                        }, void 0, !1, {
                          fileName: "app/routes/share/self.tsx",
                          lineNumber: 110,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/share/self.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                        method: "POST",
                        className: "self-center px-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                            type: "hidden",
                            name: "id",
                            value: share.id
                          }, void 0, !1, {
                            fileName: "app/routes/share/self.tsx",
                            lineNumber: 113,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "btn btn-error w-24",
                            children: "\u5220\u9664"
                          }, void 0, !1, {
                            fileName: "app/routes/share/self.tsx",
                            lineNumber: 114,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/share/self.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/share/self.tsx",
                    lineNumber: 108,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/share/self.tsx",
                lineNumber: 91,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
                  src: "data:text/html;charset=utf-8," + encodeURI(template),
                  className: "h-48 w-full"
                }, void 0, !1, {
                  fileName: "app/routes/share/self.tsx",
                  lineNumber: 120,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/share/self.tsx",
                lineNumber: 119,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/share/self.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/share/self.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/share/self.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/logs.tsx
var logs_exports = {};
__export(logs_exports, {
  action: () => action10,
  default: () => Logs
});
var import_react27 = require("@remix-run/react"), import_node16 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action10 = async ({ request }) => {
  let form = await request.formData(), action19 = form.get("_action"), userId = await getUserId(request);
  switch (action19) {
    case "delete":
      let logId = form.get("id");
      return await LogServer.deleteLogById(parseInt(logId), userId) ? (0, import_node16.json)({ logs: await LogServer.getLogsByUserId(userId) }, { status: 200 }) : (0, import_node16.json)({ message: "\u5220\u9664\u5931\u8D25" }, { status: 400 });
    default:
      return (0, import_node16.json)({ message: "\u672A\u77E5\u64CD\u4F5C" }, { status: 400 });
  }
};
function Logs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Outlet, {}, void 0, !1, {
    fileName: "app/routes/logs.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/logs/edit-reply.$id.tsx
var edit_reply_id_exports = {};
__export(edit_reply_id_exports, {
  action: () => action11,
  default: () => Reply,
  loader: () => loader13
});
var import_react28 = require("@remix-run/react"), import_react29 = require("react");
var import_node17 = require("@remix-run/node");

// app/utils/reply.server.ts
var ReplyServer = class {
  static async createReply(userId, type, target, reply, content) {
    return await prisma.reply.create({
      data: {
        userId,
        type,
        logId: type === "log" ? target : null,
        replyId: type === "reply" ? target : null,
        content,
        canReply: reply
      }
    });
  }
  static async getReplyByLogId(logId, userId) {
    let res = await prisma.reply.findMany({
      where: {
        logId,
        type: "log"
      },
      include: {
        other_reply: !0,
        user: {
          select: {
            id: !0,
            name: !0
          }
        }
      }
    }), friends = await FriendServer.getAllFriends(userId);
    for (let item of res) {
      if (item.other_reply.length)
        for (let reply of item.other_reply)
          await ReplyServer.getChildReply(reply, friends, userId);
      item.reply = item.canReply || item.userId === userId || friends.some((friend) => friend.id === item.userId), item.self = item.userId === userId;
    }
    return res;
  }
  static async getChildReply(reply, friends, userId) {
    let temp = await prisma.reply.findUnique({
      where: {
        id: reply.id
      },
      include: {
        other_reply: !0,
        user: {
          select: {
            id: !0,
            name: !0
          }
        }
      }
    });
    if (reply.user = temp.user, temp.other_reply.length) {
      reply.other_reply = temp.other_reply;
      for (let item of reply.other_reply)
        await ReplyServer.getChildReply(item, friends, userId);
    }
    reply.reply = reply.canReply || reply.userId === userId || friends.some((item) => item.id === reply.userId), reply.self = reply.userId === userId;
  }
  static async verifyReply(id, userId, edit = !1) {
    let reply = await prisma.reply.findUnique({
      where: {
        id
      }
    }), friends = await FriendServer.getAllFriends(userId);
    return edit ? reply && reply.userId === userId ? reply : !1 : reply && (reply.canReply || reply.userId === userId || friends.some((item) => item.id === reply.userId));
  }
  static async deleteReply(id, userId) {
    let reply = await prisma.reply.findUnique({
      where: {
        id
      }
    });
    return reply && (reply.userId === userId || reply.canReply) ? (await prisma.reply.delete({
      where: {
        id
      }
    }), !0) : !1;
  }
  static async updateReply(id, userId, replyBool, contentStr) {
    let reply = await prisma.reply.findUnique({
      where: {
        id
      }
    });
    if (reply && reply.userId === userId)
      return await prisma.reply.update({
        where: {
          id
        },
        data: {
          canReply: replyBool,
          content: contentStr
        }
      });
  }
};

// app/routes/logs/edit-reply.$id.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader13 = async ({ request, params }) => {
  let { id } = params, logId = new URL(request.url).searchParams.get("log"), userId = await getUserId(request), reply = await ReplyServer.verifyReply(parseInt(id), userId, !0);
  return reply ? (0, import_node17.json)({ reply, logId }, { status: 200 }) : (0, import_node17.redirect)("/logs/view/" + logId);
}, action11 = async ({ request, params }) => {
  let { id } = params, logId = new URL(request.url).searchParams.get("log"), form = await request.formData(), userId = await getUserId(request), reply = form.get("reply"), content = form.get("content");
  if (typeof reply != "string" || typeof content != "string")
    return new Response("bad request", { status: 400 });
  let replyBool = reply === "1", contentStr = content;
  if (await ReplyServer.updateReply(parseInt(id), userId, replyBool, contentStr))
    return (0, import_node17.redirect)("/logs/view/" + logId);
  {
    let reply2 = await ReplyServer.verifyReply(parseInt(id), userId, !0);
    return reply2 ? (0, import_node17.json)({ error: "\u4FEE\u6539\u5931\u8D25", reply: reply2, logId }, { status: 500 }) : (0, import_node17.redirect)("/logs/view/" + logId);
  }
};
function Reply() {
  let loaderData = (0, import_react28.useLoaderData)(), actionData = (0, import_react28.useActionData)(), [formData, setFormData] = (0, import_react29.useState)({
    reply: (actionData == null ? void 0 : actionData.reply.canReply) || loaderData.reply.canReply,
    content: (actionData == null ? void 0 : actionData.reply.content) || loaderData.reply.content
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  }, handleClick = (event) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.checked });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/logs/edit-reply.$id.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/edit-reply.$id.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 68,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "reply",
                  value: formData.reply ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 69,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u63D0\u4EA4"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 71,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/edit-reply.$id.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 gap-10 justify-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "form-control",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  className: "ursor-pointer label",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-bold underline decoration-sky-500 text-lg decoration-4",
                      children: "\u662F\u5426\u53EF\u4EE5\u56DE\u590D"
                    }, void 0, !1, {
                      fileName: "app/routes/logs/edit-reply.$id.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-10"
                    }, void 0, !1, {
                      fileName: "app/routes/logs/edit-reply.$id.tsx",
                      lineNumber: 79,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "checkbox",
                      name: "reply",
                      className: "toggle toggle-primary",
                      onClick: handleClick,
                      checked: formData.reply
                    }, void 0, !1, {
                      fileName: "app/routes/logs/edit-reply.$id.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/logs/edit-reply.$id.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/logs/edit-reply.$id.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/edit-reply.$id.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/logs/edit-reply.$id.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
          initValue: formData.content,
          onChange: handleContentChange
        }, void 0, !1, {
          fileName: "app/routes/logs/edit-reply.$id.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/edit-reply.$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/edit-reply.$id.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/logs/reply.$id.tsx
var reply_id_exports = {};
__export(reply_id_exports, {
  action: () => action12,
  default: () => Reply2,
  loader: () => loader14
});
var import_react30 = require("@remix-run/react"), import_react31 = require("react");
var import_node18 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader14 = async ({ request, params }) => {
  let { id } = params, type = new URL(request.url).searchParams.get("type"), userId = await getUserId(request), reply = !1;
  return type === "log" ? reply = await LogServer.verifyReply(parseInt(id), userId) : type === "reply" && (reply = await ReplyServer.verifyReply(parseInt(id), userId)), reply ? (0, import_node18.json)({}, { status: 200 }) : (0, import_node18.redirect)("/logs/view/" + id);
}, action12 = async ({ request, params }) => {
  let { id } = params, type = new URL(request.url).searchParams.get("type"), form = await request.formData(), userId = await getUserId(request), reply = form.get("reply"), content = form.get("content");
  if (typeof reply != "string" || typeof content != "string")
    return new Response("bad request", { status: 400 });
  let target = parseInt(id), replyBool = reply === "1", contentStr = content;
  if (await ReplyServer.createReply(userId, type, target, replyBool, contentStr)) {
    if (type === "log")
      return (0, import_node18.redirect)("/logs/view/" + id);
    if (type === "reply") {
      let logId = new URL(request.url).searchParams.get("log");
      return (0, import_node18.redirect)("/logs/view/" + logId);
    } else
      return new Response("bad request", { status: 400 });
  } else
    return (0, import_node18.json)({ error: "\u56DE\u590D\u5931\u8D25" }, { status: 500 });
};
function Reply2() {
  let actionData = (0, import_react30.useActionData)(), [formData, setFormData] = (0, import_react31.useState)({
    reply: !1,
    content: ""
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  }, handleClick = (event) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.checked });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/logs/reply.$id.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/reply.$id.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 76,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "reply",
                  value: formData.reply ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u63D0\u4EA4"
                }, void 0, !1, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 79,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/reply.$id.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 gap-10 justify-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "form-control",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  className: "ursor-pointer label",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-bold underline decoration-sky-500 text-lg decoration-4",
                      children: "\u662F\u5426\u53EF\u4EE5\u56DE\u590D"
                    }, void 0, !1, {
                      fileName: "app/routes/logs/reply.$id.tsx",
                      lineNumber: 84,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-10"
                    }, void 0, !1, {
                      fileName: "app/routes/logs/reply.$id.tsx",
                      lineNumber: 87,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "checkbox",
                      name: "reply",
                      className: "toggle toggle-primary",
                      onClick: handleClick
                    }, void 0, !1, {
                      fileName: "app/routes/logs/reply.$id.tsx",
                      lineNumber: 88,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/logs/reply.$id.tsx",
                  lineNumber: 83,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/logs/reply.$id.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/reply.$id.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/logs/reply.$id.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
          initValue: formData.content,
          onChange: handleContentChange
        }, void 0, !1, {
          fileName: "app/routes/logs/reply.$id.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/reply.$id.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/reply.$id.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/logs/edit.$id.tsx
var edit_id_exports2 = {};
__export(edit_id_exports2, {
  action: () => action13,
  default: () => Edit2,
  loader: () => loader15
});
var import_node19 = require("@remix-run/node");
var import_react32 = require("@remix-run/react"), import_react33 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader15 = async ({ request, params }) => {
  let { id } = params;
  if (!id)
    return (0, import_node19.redirect)("/logs");
  let logId = parseInt(id), userId = await getUserId(request), log = await LogServer.getLogById(logId, !0, userId);
  return log ? (0, import_node19.json)({ log }, { status: 200 }) : (0, import_node19.redirect)("/logs");
}, action13 = async ({ request, params }) => {
  let { id } = params, logId = parseInt(id), userId = await getUserId(request), form = await request.formData(), reply = form.get("reply"), share = form.get("share"), content = form.get("content");
  if (typeof reply != "string" || typeof share != "string" || typeof content != "string" || !logId)
    return (0, import_node19.json)({ error: "\u9519\u8BEF\u7684\u8BF7\u6C42" }, { status: 400 });
  let replyBool = reply === "1", shareBool = share === "1", contentStr = content;
  return await LogServer.updateLog(logId, { userId, reply: replyBool, share: shareBool, content: contentStr }) ? (0, import_node19.redirect)("/logs") : (0, import_node19.json)({
    error: "\u4FEE\u6539\u5931\u8D25",
    log: { reply: replyBool, share: shareBool, content: contentStr }
  }, { status: 500 });
};
function Edit2() {
  let loaderData = (0, import_react32.useLoaderData)(), actionData = (0, import_react32.useActionData)(), [formData, setFormData] = (0, import_react33.useState)({
    reply: actionData ? actionData.log.reply : loaderData.log.canReply,
    share: actionData ? actionData.log.share : loaderData.log.canShare,
    content: actionData ? actionData.log.content : loaderData.log.content
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  }, handleClick = (event) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.checked });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/logs/edit.$id.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/edit.$id.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react32.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 68,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "reply",
                  value: formData.reply ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 69,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "share",
                  value: formData.share ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 71,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u4FEE\u6539"
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/edit.$id.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 gap-10 justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "form-control",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    className: "ursor-pointer label",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold underline decoration-sky-500 text-lg decoration-4",
                        children: "\u662F\u5426\u53EF\u4EE5\u56DE\u590D"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-10"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "checkbox",
                        name: "reply",
                        className: "toggle toggle-primary",
                        checked: formData.reply,
                        onClick: handleClick,
                        onChange: (_) => _
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/logs/edit.$id.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "form-control",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    className: "ursor-pointer label",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold underline decoration-pink-500 text-lg decoration-4",
                        children: "\u662F\u5426\u53EF\u4EE5\u5206\u4EAB"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-10"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "checkbox",
                        name: "share",
                        className: "toggle toggle-primary",
                        checked: formData.share,
                        onClick: handleClick,
                        onChange: (_) => _
                      }, void 0, !1, {
                        fileName: "app/routes/logs/edit.$id.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/logs/edit.$id.tsx",
                    lineNumber: 92,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/logs/edit.$id.tsx",
                  lineNumber: 91,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/edit.$id.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/logs/edit.$id.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
          initValue: formData.content,
          onChange: handleContentChange
        }, void 0, !1, {
          fileName: "app/routes/logs/edit.$id.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/edit.$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/edit.$id.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/logs/view.$id.tsx
var view_id_exports = {};
__export(view_id_exports, {
  action: () => action14,
  default: () => View,
  loader: () => loader16
});
var import_node20 = require("@remix-run/node"), import_react34 = require("@remix-run/react");
var import_date_fns4 = require("date-fns");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader16 = async ({ request, params }) => {
  let { id } = params, logId = parseInt(id), userId = await getUserId(request), log = await LogServer.getLogById(logId, !1, userId);
  if (!log)
    return (0, import_node20.redirect)("/");
  let reply = await ReplyServer.getReplyByLogId(logId, userId);
  return (0, import_node20.json)({ log, reply }, { status: 200 });
}, action14 = async ({ request, params }) => {
  let id = (await request.formData()).get("id"), userId = await getUserId(request);
  if (await ReplyServer.deleteReply(parseInt(id), userId)) {
    let { id: id2 } = params, logId = parseInt(id2), log = await LogServer.getLogById(logId, !1, userId);
    if (!log)
      return (0, import_node20.redirect)("/");
    let reply = await ReplyServer.getReplyByLogId(logId, userId);
    return (0, import_node20.json)({ log, reply }, { status: 200 });
  }
  return (0, import_node20.json)({ message: "\u5220\u9664\u5931\u8D25" }, { status: 400 });
};
function View() {
  let loaderData = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex px-12 py-4 w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
              className: "btn btn-accent w-32",
              to: "/",
              children: "\u8FD4\u56DE"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-grow"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/logs/view.$id.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-base-100 divide-y-2 divide-black",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Log, {
                log: loaderData.log,
                readonly: !0,
                view: !0,
                share: loaderData.log.share
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogReply, {
                reply: loaderData.reply,
                canReply: loaderData.log.reply,
                id: loaderData.log.id
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/logs/view.$id.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/view.$id.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/view.$id.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function LogReply({ reply, canReply, id }) {
  let replyList = reply.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reply3, {
    reply: item,
    id
  }, item.id, !1, {
    fileName: "app/routes/logs/view.$id.tsx",
    lineNumber: 67,
    columnNumber: 12
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full divide-y-2 divide-gray-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-16 flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "mx-4 text-2xl font-bold m-2 text-blue-600",
              children: "\u56DE\u590D"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          canReply && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
              className: "mx-4 btn btn-warning w-24",
              to: `/logs/reply/${id}?type=log`,
              children: "\u56DE\u590D"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      replyList
    ]
  }, void 0, !0, {
    fileName: "app/routes/logs/view.$id.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
function Reply3({ reply, id }) {
  let childReplyList = [], getChildReply = (reply2) => {
    var _a;
    ((_a = reply2.other_reply) == null ? void 0 : _a.length) > 0 && reply2.other_reply.forEach((item) => {
      childReplyList.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReplyChild, {
        reply: item,
        parent: reply2.id,
        id
      }, item.id, !1, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 97,
        columnNumber: 29
      }, this)), getChildReply(item);
    });
  };
  getChildReply(reply);
  let template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body { 
          font-family:Helvetica,Arial,sans-serif; 
          font-size:14px 
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='\u5BCC\u6587\u672C\u533A\u57DF\u3002 \u6309ALT-0\u5BFB\u6C42\u5E2E\u52A9\u3002' contenteditable='true' spellcheck='false'>
      ${reply.content}
    </body>
    </html>
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "avatar justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "https://www.dmoe.cc/random.php",
                alt: "avatar"
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 128,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 125,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-2xl font-bold m-2 text-blue-600",
                children: reply.user.name
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "m-2 text-slate-400",
                children: [
                  "\u53D1\u8868\u4E8E",
                  (0, import_date_fns4.format)(new Date(reply.updateTime.substring(0, reply.updateTime.length - 2)), "yyyy-MM-dd HH:mm:ss"),
                  "\xA0\xA0\xA0\xA0rid:\xA0",
                  reply.id
                ]
              }, void 0, !0, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 133,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 138,
            columnNumber: 9
          }, this),
          reply.reply && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
              className: "mx-4 btn btn-warning w-24",
              to: `/logs/reply/${reply.id}?type=reply&log=${id}`,
              children: "\u56DE\u590D"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this),
          reply.self && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "self-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
                  className: "mx-4 btn btn-success w-24",
                  to: `/logs/edit-reply/${reply.id}?log=${id}`,
                  children: "\u4FEE\u6539"
                }, void 0, !1, {
                  fileName: "app/routes/logs/view.$id.tsx",
                  lineNumber: 147,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 146,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "POST",
                className: "self-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "hidden",
                    name: "id",
                    value: reply.id
                  }, void 0, !1, {
                    fileName: "app/routes/logs/view.$id.tsx",
                    lineNumber: 150,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "mx-4 btn btn-error w-24",
                    children: "\u5220\u9664"
                  }, void 0, !1, {
                    fileName: "app/routes/logs/view.$id.tsx",
                    lineNumber: 151,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 149,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 145,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
          src: "data:text/html;charset=utf-8," + encodeURI(template),
          className: "h-48 w-full"
        }, void 0, !1, {
          fileName: "app/routes/logs/view.$id.tsx",
          lineNumber: 157,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 156,
        columnNumber: 7
      }, this),
      reply.other_reply.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full pl-8 divide-y-2 divide-gray-200",
        children: childReplyList
      }, void 0, !1, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/logs/view.$id.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}
function ReplyChild({ reply, parent, id }) {
  let template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body {
          font-family:Helvetica,Arial,sans-serif;
          font-size:14px
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='\u5BCC\u6587\u672C\u533A\u57DF\u3002 \u6309ALT-0\u5BFB\u6C42\u5E2E\u52A9\u3002' contenteditable='true' spellcheck='false'>
      ${reply.content}
    </body>
    </html>
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full border-l-2 border-l-gray-200 divide-y-2 divide-gray-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "avatar justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "https://www.dmoe.cc/random.php",
                alt: "avatar"
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 202,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-2xl font-bold m-2 text-blue-600",
                children: reply.user.name
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 206,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "m-2 text-slate-400",
                children: [
                  "\u53D1\u8868\u4E8E",
                  (0, import_date_fns4.format)(new Date(reply.updateTime.substring(0, reply.updateTime.length - 2)), "yyyy-MM-dd HH:mm:ss"),
                  "\xA0\xA0\xA0\xA0rid:\xA0",
                  reply.id,
                  "\xA0->\xA0rid:\xA0",
                  parent
                ]
              }, void 0, !0, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 207,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 205,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-auto"
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 212,
            columnNumber: 9
          }, this),
          reply.reply && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "self-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
              className: "mx-4 btn btn-warning w-24",
              to: `/logs/reply/${reply.id}?type=reply&log=${id}`,
              children: "\u56DE\u590D"
            }, void 0, !1, {
              fileName: "app/routes/logs/view.$id.tsx",
              lineNumber: 215,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 214,
            columnNumber: 11
          }, this),
          reply.self && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "self-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
                  className: "mx-4 btn btn-success w-24",
                  to: `/logs/edit-reply/${reply.id}?log=${id}`,
                  children: "\u4FEE\u6539"
                }, void 0, !1, {
                  fileName: "app/routes/logs/view.$id.tsx",
                  lineNumber: 221,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 220,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "POST",
                className: "self-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "hidden",
                    name: "id",
                    value: reply.id
                  }, void 0, !1, {
                    fileName: "app/routes/logs/view.$id.tsx",
                    lineNumber: 224,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "mx-4 btn btn-error w-24",
                    children: "\u5220\u9664"
                  }, void 0, !1, {
                    fileName: "app/routes/logs/view.$id.tsx",
                    lineNumber: 225,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/logs/view.$id.tsx",
                lineNumber: 223,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/logs/view.$id.tsx",
            lineNumber: 219,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 198,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
          src: "data:text/html;charset=utf-8," + encodeURI(template),
          className: "h-48 w-full"
        }, void 0, !1, {
          fileName: "app/routes/logs/view.$id.tsx",
          lineNumber: 231,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/logs/view.$id.tsx",
        lineNumber: 230,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/logs/view.$id.tsx",
    lineNumber: 197,
    columnNumber: 5
  }, this);
}

// app/routes/logs/index.tsx
var logs_exports2 = {};
__export(logs_exports2, {
  default: () => Index4,
  loader: () => loader17
});
var import_react35 = require("@remix-run/react");
var import_node21 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader17 = async ({ request }) => {
  let userId = await getUserId(request), res = await LogServer.getLogsByUserId(userId);
  return (0, import_node21.json)({ logs: res }, { status: 200 });
};
function Index4() {
  let loaderData = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed left-52 right-0 py-4 z-40 px-12 flex justify-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react35.Link, {
            className: "btn btn-primary w-32",
            to: "new",
            children: "\u53D1\u8868\u65E5\u5FD7"
          }, void 0, !1, {
            fileName: "app/routes/logs/index.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-base-100 divide-y-2 divide-black",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogList, {
              logs: loaderData.logs,
              readonly: !1,
              share: !1
            }, void 0, !1, {
              fileName: "app/routes/logs/index.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/logs/index.tsx",
            lineNumber: 23,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/logs/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action15,
  default: () => New2
});
var import_react36 = require("@remix-run/react"), import_react37 = require("react");
var import_node22 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action15 = async ({ request }) => {
  let form = await request.formData(), userId = await getUserId(request), reply = form.get("reply"), share = form.get("share"), content = form.get("content");
  if (typeof reply != "string" || typeof share != "string" || typeof content != "string")
    return new Response("bad request", { status: 400 });
  let replyBool = reply === "1", shareBool = share === "1", contentStr = content;
  return await LogServer.createLog({ userId, reply: replyBool, share: shareBool, content: contentStr }) ? (0, import_node22.redirect)("/logs") : (0, import_node22.json)({ error: "\u6DFB\u52A0\u5931\u8D25" }, { status: 500 });
};
function New2() {
  let actionData = (0, import_react36.useActionData)(), [formData, setFormData] = (0, import_react37.useState)({
    reply: !1,
    share: !1,
    content: ""
  }), handleContentChange = (content) => {
    setFormData({ ...formData, content });
  }, handleClick = (event) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.checked });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full overflow-y-auto grow bg-amber-100",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                className: "w-96 my-2",
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/logs/new.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/logs/new.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react36.Link, {
                  className: "btn btn-accent w-32",
                  to: "../",
                  children: "\u8FD4\u56DE"
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-grow"
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 53,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "reply",
                  value: formData.reply ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "share",
                  value: formData.share ? 1 : 0
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 55,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "content",
                  value: formData.content
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-secondary w-32",
                  disabled: formData.content.length === 0,
                  children: "\u63D0\u4EA4"
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 57,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/new.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-4 py-4 gap-10 justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "form-control",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    className: "ursor-pointer label",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold underline decoration-sky-500 text-lg decoration-4",
                        children: "\u662F\u5426\u53EF\u4EE5\u56DE\u590D"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-10"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "checkbox",
                        name: "reply",
                        className: "toggle toggle-primary",
                        onClick: handleClick
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/logs/new.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "form-control",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    className: "ursor-pointer label",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold underline decoration-pink-500 text-lg decoration-4",
                        children: "\u662F\u5426\u53EF\u4EE5\u5206\u4EAB"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-10"
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "checkbox",
                        name: "share",
                        className: "toggle toggle-primary",
                        onClick: handleClick
                      }, void 0, !1, {
                        fileName: "app/routes/logs/new.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/logs/new.tsx",
                    lineNumber: 75,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/logs/new.tsx",
                  lineNumber: 74,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/logs/new.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/logs/new.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditor, {
          initValue: formData.content,
          onChange: handleContentChange
        }, void 0, !1, {
          fileName: "app/routes/logs/new.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/logs/new.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/logs/new.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  default: () => User2,
  loader: () => loader18
});
var import_node23 = require("@remix-run/node");
var import_react38 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  let user = await getUser(request), path = new URL(request.url).pathname;
  return (0, import_node23.json)({ user, path }, { status: 200 });
};
function User2() {
  let user = (0, import_react38.useLoaderData)().user;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "fixed top-16 bottom-0 left-52 right-0 overflow-y-auto",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex h-32 m-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "avatar w-32 h-32 justify-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: "https://www.dmoe.cc/random.php",
                  alt: "avatar"
                }, void 0, !1, {
                  fileName: "app/routes/user.tsx",
                  lineNumber: 22,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/user.tsx",
                lineNumber: 20,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/user.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "self-end flex",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-3xl font-bold m-2 text-blue-600",
                  children: user.name
                }, void 0, !1, {
                  fileName: "app/routes/user.tsx",
                  lineNumber: 26,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "badge badge-secondary self-center",
                  children: "LV6"
                }, void 0, !1, {
                  fileName: "app/routes/user.tsx",
                  lineNumber: 27,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-auto"
            }, void 0, !1, {
              fileName: "app/routes/user.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Outlet, {}, void 0, !1, {
            fileName: "app/routes/user.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/user.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/user.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/user/experience.tsx
var experience_exports = {};
__export(experience_exports, {
  action: () => action16,
  default: () => Experience,
  loader: () => loader19
});
var import_node24 = require("@remix-run/node");
var import_react40 = require("@remix-run/react"), import_react41 = require("react");

// app/components/utils/experiences.tsx
var import_react39 = require("react");
var import_date_fns5 = require("date-fns"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Experiences({
  experiences,
  onChange = () => {
  },
  check = () => {
  }
}) {
  let check_study = (0, import_react39.useRef)(experiences.study.map((value) => !!value.id)), check_work = (0, import_react39.useRef)(experiences.work.map((value) => !!value.id)), handleStudyChange = (event) => {
    let index = parseInt(event.target.id.split("-")[1]), name = event.target.id.split("-")[0].split("_")[1];
    experiences.study[index] = { ...experiences.study[index], [name]: event.target.value }, onChange(experiences), check("study", checkStudy(index, Object.keys(experiences.study[index]).every((key) => key === "id" ? !0 : experiences.study[index][key] !== "")));
  }, handleWorkChange = (event) => {
    let index = parseInt(event.target.id.split("-")[1]), name = event.target.id.split("-")[0].split("_")[1];
    experiences.work[index] = { ...experiences.work[index], [name]: event.target.value }, onChange(experiences), check("work", checkWork(index, Object.keys(experiences.work[index]).every((key) => (console.log(experiences.work[index]), console.log(key, experiences.work[index][key]), key === "id" ? !0 : experiences.work[index][key] !== ""))));
  }, checkStudy = (index, value) => (check_study.current[index] = value, !check_study.current.every((value2) => value2)), checkWork = (index, value) => (check_work.current[index] = value, !check_work.current.every((value2) => value2)), deleteStudy = (index) => {
    experiences.study.splice(index, 1), check_study.current.splice(index, 1), onChange(experiences), check("study", !check_study.current.every((value) => value));
  }, deleteWork = (index) => {
    experiences.work.splice(index, 1), check_work.current.splice(index, 1), onChange(experiences), check("work", !check_work.current.every((value) => value));
  }, study = experiences.study.map((experience, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "collapse collapse-plus border border-base-300 bg-base-100 rounded-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "collapse-title text-xl font-medium",
        children: experience.address
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "collapse-content",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "study_rank-" + index,
            label: "\u6559\u80B2\u7EA7\u522B",
            value: experience.rank,
            onChange: handleStudyChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "study_address-" + index,
            label: "\u5B66\u6821",
            value: experience.address,
            onChange: handleStudyChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "study_position-" + index,
            label: "\u5B66\u4F4D",
            value: experience.position,
            onChange: handleStudyChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "study_startTime-" + index,
            label: "\u5F00\u59CB\u65F6\u95F4",
            type: "date",
            value: experience.startTime === "" ? "" : (0, import_date_fns5.format)(new Date(experience.startTime), "yyyy-MM-dd"),
            onChange: handleStudyChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "study_endTime-" + index,
            label: "\u7ED3\u675F\u65F6\u95F4",
            type: "date",
            value: experience.endTime === "" ? "" : (0, import_date_fns5.format)(new Date(experience.endTime), "yyyy-MM-dd"),
            onChange: handleStudyChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 106,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-2 w-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-error w-full",
              type: "button",
              onClick: (_) => deleteStudy(index),
              children: "\u5220\u9664"
            }, void 0, !1, {
              fileName: "app/components/utils/experiences.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 114,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ]
  }, index, !0, {
    fileName: "app/components/utils/experiences.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this)), work = experiences.work.map((experience, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "collapse collapse-plus border border-base-300 bg-base-100 rounded-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "checkbox"
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "collapse-title text-xl font-medium",
        children: experience.address
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "collapse-content",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "work_address-" + index,
            label: "\u5355\u4F4D",
            value: experience.address,
            onChange: handleWorkChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 129,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "work_position-" + index,
            label: "\u804C\u4F4D",
            value: experience.position,
            onChange: handleWorkChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "work_startTime-" + index,
            label: "\u5F00\u59CB\u65F6\u95F4",
            type: "date",
            value: experience.startTime === "" ? "" : (0, import_date_fns5.format)(new Date(experience.startTime), "yyyy-MM-dd"),
            onChange: handleWorkChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
            htmlFor: "work_endTime-" + index,
            label: "\u7ED3\u675F\u65F6\u95F4",
            type: "date",
            value: experience.endTime === "" ? "" : (0, import_date_fns5.format)(new Date(experience.endTime), "yyyy-MM-dd"),
            onChange: handleWorkChange,
            hasError: !1
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 151,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-2 w-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-error w-full",
              type: "button",
              onClick: (_) => deleteWork(index),
              children: "\u5220\u9664"
            }, void 0, !1, {
              fileName: "app/components/utils/experiences.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ]
  }, index, !0, {
    fileName: "app/components/utils/experiences.tsx",
    lineNumber: 123,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-end",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "card-body",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold",
                  children: "\u6559\u80B2\u7ECF\u5386"
                }, void 0, !1, {
                  fileName: "app/components/utils/experiences.tsx",
                  lineNumber: 172,
                  columnNumber: 15
                }, this),
                study
              ]
            }, void 0, !0, {
              fileName: "app/components/utils/experiences.tsx",
              lineNumber: 171,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 170,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/utils/experiences.tsx",
          lineNumber: 169,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 168,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col w-full justify-start",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "card-body",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold",
                children: "\u5DE5\u4F5C\u7ECF\u5386"
              }, void 0, !1, {
                fileName: "app/components/utils/experiences.tsx",
                lineNumber: 183,
                columnNumber: 13
              }, this),
              work
            ]
          }, void 0, !0, {
            fileName: "app/components/utils/experiences.tsx",
            lineNumber: 182,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/utils/experiences.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/utils/experiences.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/utils/experiences.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

// app/routes/user/experience.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader19 = async ({ request }) => {
  let userId = await getUserId(request), experience = await UserServer.getExperiences(userId);
  return (0, import_node24.json)({ experience }, { status: 200 });
}, action16 = async ({ request }) => {
  let userId = await getUserId(request), data = (await request.formData()).get("experience");
  if (typeof data != "string")
    return (0, import_node24.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F" }, { status: 400 });
  let experience = JSON.parse(data);
  Object.keys(experience).forEach((key) => {
    experience[key].forEach((item) => {
      item.startTime = new Date(item.startTime), item.endTime = new Date(item.endTime);
    });
  });
  let res = await UserServer.updateExperiences(userId, experience.study, experience.work);
  return res ? (0, import_node24.json)({ experience: res, save: !0 }, { status: 200 }) : (0, import_node24.json)({ error: "\u66F4\u65B0\u5931\u8D25" }, { status: 400 });
};
function Experience() {
  let loaderData = (0, import_react40.useLoaderData)(), actionData = (0, import_react40.useActionData)(), check = (0, import_react41.useRef)({ study: !1, work: !1 }), [formData, setFormData] = (0, import_react41.useState)(
    () => {
      let data = (actionData == null ? void 0 : actionData.experience) || (loaderData == null ? void 0 : loaderData.experience) || { study: [], work: [] };
      return {
        experiences: JSON.parse(JSON.stringify(data))
      };
    }
  ), HandleChange = (experiences) => {
    setFormData({ experiences });
  }, handleCheck = (target, checked) => {
    target === "study" ? check.current.study = checked : target === "work" && (check.current.work = checked);
  }, addStudy = () => {
    let experiences = formData.experiences;
    experiences.study.push({ rank: "", address: "", position: "", startTime: "", endTime: "" }), setFormData({ experiences }), handleCheck("study", !0);
  }, addWork = () => {
    let experiences = formData.experiences;
    experiences.work.push({ address: "", position: "", startTime: "", endTime: "" }), setFormData({ experiences }), handleCheck("work", !0);
  }, reset = () => {
    let data = (actionData == null ? void 0 : actionData.experience) || (loaderData == null ? void 0 : loaderData.experience) || { study: [], work: [] };
    setFormData({ experiences: JSON.parse(JSON.stringify(data)) }), handleCheck("study", !1), handleCheck("work", !1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tabs justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Link, {
            className: "tab tab-bordered",
            to: "../info",
            children: "\u4E2A\u4EBA\u4FE1\u606F"
          }, void 0, !1, {
            fileName: "app/routes/user/experience.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Link, {
            className: "tab tab-bordered tab-active",
            to: "../experience",
            children: "\u4E2A\u4EBA\u7ECF\u5386"
          }, void 0, !1, {
            fileName: "app/routes/user/experience.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Link, {
            className: "tab tab-bordered",
            to: "../password",
            children: "\u4FEE\u6539\u5BC6\u7801"
          }, void 0, !1, {
            fileName: "app/routes/user/experience.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/experience.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full justify-center mb-16",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          className: "form-horizontal",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex",
              children: [
                (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                  className: "w-96 my-2",
                  message: actionData.error,
                  type: "error",
                  timeout: 2e3
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 90,
                  columnNumber: 15
                }, this),
                (actionData == null ? void 0 : actionData.save) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                  className: "w-96 my-2",
                  message: "\u4FDD\u5B58\u6210\u529F",
                  type: "success",
                  timeout: 2e3
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 91,
                  columnNumber: 34
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/experience.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "justify-center flex gap-4 my-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-info",
                  type: "button",
                  onClick: addStudy,
                  disabled: check.current.study,
                  children: "\u65B0\u589E\u6559\u80B2\u7ECF\u5386"
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 94,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-accent",
                  type: "button",
                  onClick: addWork,
                  disabled: check.current.work,
                  children: "\u65B0\u589E\u5DE5\u4F5C\u7ECF\u5386"
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-primary",
                  disabled: check.current.study || check.current.work,
                  children: "\u4FDD\u5B58"
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "btn btn-primary",
                  type: "button",
                  onClick: reset,
                  children: "\u8FD8\u539F"
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "experience",
                  value: JSON.stringify(formData.experiences)
                }, void 0, !1, {
                  fileName: "app/routes/user/experience.tsx",
                  lineNumber: 102,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/experience.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Experiences, {
              experiences: formData.experiences,
              onChange: HandleChange,
              check: handleCheck
            }, void 0, !1, {
              fileName: "app/routes/user/experience.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/experience.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/experience.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/experience.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/user/password.tsx
var password_exports = {};
__export(password_exports, {
  action: () => action17,
  default: () => Password
});
var import_react42 = require("@remix-run/react"), import_react43 = require("react");
var import_node25 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action17 = async ({ request }) => {
  let form = await request.formData(), id = await requireUserId(request), password = form.get("password"), new_password = form.get("new_password1");
  if (typeof id != "number" || typeof password != "string" || typeof new_password != "string")
    return (0, import_node25.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F", fields: { password, new_password } }, { status: 400 });
  let errors = {
    password: await UserValidator.validatePassword(password, !0, id)
  };
  return Object.values(errors).some(Boolean) ? (0, import_node25.json)({ errors, fields: { password, new_password } }, { status: 400 }) : await UserServer.updatePassword(id, new_password) ? (0, import_node25.json)({ save: !0 }, { status: 200 }) : (0, import_node25.json)({ error: "\u66F4\u65B0\u5931\u8D25" }, { status: 400 });
};
function Password() {
  var _a;
  let actionData = (0, import_react42.useActionData)(), submit = (0, import_react43.useRef)(!1), [errors, setErrors] = (0, import_react43.useState)({
    password: ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.password) || "",
    new_password1: "",
    new_password2: ""
  }), [formData, setFormData] = (0, import_react43.useState)(() => {
    var _a2, _b, _c;
    return {
      password: ((_a2 = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a2.password) || "",
      new_password1: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.new_password) || "",
      new_password2: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.new_password) || ""
    };
  }), handleInputChange = (event) => {
    setFormData((form) => ({ ...form, [event.target.name]: event.target.value }));
  }, handleInputBlur = (event) => {
    switch (event.target.name) {
      case "password":
        formData.password.length == 0 ? setErrors((errors2) => ({ ...errors2, password: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801" })) : setErrors((errors2) => ({ ...errors2, password: "" }));
        break;
      case "new_password1":
        formData.new_password1.length < 8 ? setErrors((errors2) => ({ ...errors2, new_password1: "\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E8\u4F4D" })) : formData.new_password1.length >= 8 && formData.new_password1.length < 16 && !formData.new_password1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/) ? setErrors((errors2) => ({ ...errors2, new_password1: "\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57" })) : formData.new_password1.length >= 16 ? setErrors((errors2) => ({ ...errors2, new_password1: "\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC716\u4F4D" })) : formData.new_password2.length > 0 && formData.new_password1 !== formData.new_password2 ? setErrors((errors2) => ({ ...errors2, new_password1: "", new_password2: "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4" })) : setErrors((errors2) => ({ ...errors2, new_password1: "" }));
        break;
      case "new_password2":
        formData.new_password1.length == 0 ? setErrors((errors2) => ({ ...errors2, new_password2: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801" })) : formData.new_password1 !== formData.new_password2 ? setErrors((errors2) => ({ ...errors2, new_password2: "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4" })) : setErrors((errors2) => ({ ...errors2, new_password2: "" }));
        break;
      default:
        break;
    }
    submit.current = Object.values(errors).every((error) => error == "") && Object.values(formData).every((value) => value != "");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tabs justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react42.Link, {
            className: "tab tab-bordered",
            to: "../info",
            children: "\u4E2A\u4EBA\u4FE1\u606F"
          }, void 0, !1, {
            fileName: "app/routes/user/password.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react42.Link, {
            className: "tab tab-bordered",
            to: "../experience",
            children: "\u4E2A\u4EBA\u7ECF\u5386"
          }, void 0, !1, {
            fileName: "app/routes/user/password.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react42.Link, {
            className: "tab tab-bordered tab-active",
            to: "../password",
            children: "\u4FEE\u6539\u5BC6\u7801"
          }, void 0, !1, {
            fileName: "app/routes/user/password.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/password.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "card shrink max-w-sm shadow-2xl bg-base-100 mt-2 mb-14 w-96",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            method: "POST",
            className: "card-body",
            children: [
              (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                message: actionData.error,
                type: "error",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 99,
                columnNumber: 35
              }, this),
              (actionData == null ? void 0 : actionData.save) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                message: "\u4FEE\u6539\u6210\u529F",
                type: "success",
                timeout: 2e3
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 100,
                columnNumber: 34
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                htmlFor: "password",
                label: "\u65E7\u5BC6\u7801",
                value: formData.password,
                onChange: handleInputChange,
                onBlur: handleInputBlur,
                type: "password",
                error: errors.password
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 101,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                htmlFor: "new_password1",
                label: "\u65B0\u5BC6\u7801",
                value: formData.new_password1,
                onChange: handleInputChange,
                onBlur: handleInputBlur,
                type: "password",
                error: errors.new_password1,
                selfControl: !0
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 110,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                htmlFor: "new_password2",
                label: "\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",
                value: formData.new_password2,
                onChange: handleInputChange,
                onBlur: handleInputBlur,
                type: "password",
                error: errors.new_password2,
                selfControl: !0
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "btn btn-accent",
                disabled: !submit.current,
                children: "\u4FDD\u5B58"
              }, void 0, !1, {
                fileName: "app/routes/user/password.tsx",
                lineNumber: 130,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/user/password.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user/password.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/password.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/password.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/user/index.tsx
var user_exports2 = {};
__export(user_exports2, {
  loader: () => loader20
});
var import_node26 = require("@remix-run/node"), loader20 = async () => (0, import_node26.redirect)("/user/info");

// app/routes/user/info.tsx
var info_exports = {};
__export(info_exports, {
  action: () => action18,
  default: () => Info,
  loader: () => loader21
});
var import_node27 = require("@remix-run/node");
var import_react46 = require("@remix-run/react"), import_react47 = require("react");
var import_date_fns6 = require("date-fns");

// app/components/utils/emails.tsx
var import_react45 = require("react");

// app/components/form/from-button-field.tsx
var import_react44 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FormButtonField({
  className = "input input-bordered w-full max-w-xs",
  htmlFor,
  label,
  type = "text",
  value = "",
  onChange = () => {
  },
  onClick = () => {
  },
  buttonLabel = "",
  error = "",
  hasError = !0
}) {
  let [errorText, setErrorText] = (0, import_react44.useState)(error);
  return (0, import_react44.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "form-control",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor,
            className: "label",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
              className: "underline decoration-sky-500",
              children: label
            }, void 0, !1, {
              fileName: "app/components/form/from-button-field.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/form/from-button-field.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "input-group",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                onChange: (e) => {
                  onChange(e), setErrorText("");
                },
                type,
                id: htmlFor,
                name: htmlFor,
                className,
                value
              }, void 0, !1, {
                fileName: "app/components/form/from-button-field.tsx",
                lineNumber: 42,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                id: htmlFor,
                type: "button",
                className: "btn btn-primary",
                onClick,
                children: buttonLabel
              }, void 0, !1, {
                fileName: "app/components/form/from-button-field.tsx",
                lineNumber: 52,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/form/from-button-field.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/form/from-button-field.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      hasError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, !1, {
        fileName: "app/components/form/from-button-field.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/form/from-button-field.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/components/utils/emails.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Emails({
  htmlFor,
  label,
  onChange = () => {
  },
  hasError = !0,
  error = [],
  emails,
  success = void 0,
  err = void 0,
  children
}) {
  let [errors, setErrors] = (0, import_react45.useState)(error), handleInputChange = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    emails[index].email = event.target.value, onChange(emails), error[index] = "", setErrors(error);
  }, handleButtonClick = (event) => {
    let index = parseInt(event.currentTarget.id.split("-")[1]);
    emails.splice(index, 1), onChange(emails), error[index] = "", setErrors(error);
  }, email_list = emails.map((email, index) => email.isMain ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
    htmlFor: htmlFor + "-" + index,
    label,
    value: email.email,
    onChange: handleInputChange,
    error: errors[index],
    hasError
  }, index, !1, {
    fileName: "app/components/utils/emails.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormButtonField, {
    htmlFor: htmlFor + "-" + index,
    label,
    value: email.email,
    onChange: handleInputChange,
    onClick: handleButtonClick,
    buttonLabel: "\u5220\u9664",
    error: errors[index],
    hasError
  }, index, !1, {
    fileName: "app/components/utils/emails.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    method: "POST",
    className: "card-body",
    children: [
      err && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
        message: err,
        type: "error",
        timeout: 2e3
      }, void 0, !1, {
        fileName: "app/components/utils/emails.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
        message: "\u4FDD\u5B58\u6210\u529F",
        type: "success",
        timeout: 2e3
      }, void 0, !1, {
        fileName: "app/components/utils/emails.tsx",
        lineNumber: 86,
        columnNumber: 19
      }, this),
      email_list,
      children
    ]
  }, void 0, !0, {
    fileName: "app/components/utils/emails.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/user/info.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader21 = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node27.json)({ user }, { status: 200 });
}, action18 = async ({ request }) => {
  let user = await getUser(request), form = await request.formData();
  switch (form.get("_action")) {
    case "edit_info":
      return EditInfo(user, form);
    case "edit_email":
      return EditEmail(user, form);
    default:
      return (0, import_node27.json)({ error: "\u4E0D\u652F\u6301\u7684\u64CD\u4F5C" }, { status: 400 });
  }
};
async function EditInfo(user, form) {
  let name = form.get("name"), gender = form.get("gender"), birthday_f = form.get("birthday"), address = form.get("address");
  if (typeof name != "string" || typeof gender != "string" || typeof birthday_f != "string" || typeof address != "string")
    return (0, import_node27.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F", fields: { name, gender, birthday_f }, user }, { status: 400 });
  let errors = {
    name: UserValidator.validateName(name),
    gender: UserValidator.validateGender(gender),
    birthday: UserValidator.validateBirthday(birthday_f)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node27.json)({ errors, fields: { name, gender, birthday_f }, user }, { status: 400 });
  let birthday = new Date(birthday_f), res = await UserServer.updateUser(user.id, name, gender, birthday, address);
  return res ? (0, import_node27.json)({ user: res, save: !0 }, { status: 200 }) : (0, import_node27.json)({ error: "\u66F4\u65B0\u5931\u8D25", user }, { status: 400 });
}
async function EditEmail(user, form) {
  let temp = form.get("emails"), emails = JSON.parse(temp);
  if (typeof emails != "object" || !Array.isArray(emails))
    return (0, import_node27.json)({ error: "\u4E0D\u6B63\u786E\u7684\u6570\u636E\u683C\u5F0F", fields: { emails }, user }, { status: 400 });
  let email_err = [], has_err = !1;
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i], err;
    email.id ? err = await UserValidator.validateEmail(email.email, !1, !0, user.id) : err = await UserValidator.validateEmail(email.email, !0), err ? (email_err.push(err), has_err = !0) : email_err.push("");
  }
  if (has_err)
    return (0, import_node27.json)({ errors: { emails: email_err }, fields: { email: emails }, user }, { status: 400 });
  let res = await UserServer.updateEmails(user.id, emails);
  return res ? (0, import_node27.json)({ user: res, save_e: !0 }, { status: 200 }) : (0, import_node27.json)({ error_e: "\u66F4\u65B0\u5931\u8D25", user }, { status: 400 });
}
function Info() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let loaderData = (0, import_react46.useLoaderData)(), actionData = (0, import_react46.useActionData)(), edit = (0, import_react47.useRef)(
    !!((_a = actionData == null ? void 0 : actionData.errors) != null && _a.name) || !!((_b = actionData == null ? void 0 : actionData.errors) != null && _b.gender) || !!((_c = actionData == null ? void 0 : actionData.errors) != null && _c.birthday) || !!((_d = actionData == null ? void 0 : actionData.errors) != null && _d.email) || !!(actionData != null && actionData.error)
  ), edit1 = (0, import_react47.useRef)(!!((_e = actionData == null ? void 0 : actionData.errors) != null && _e.emails) || !!(actionData != null && actionData.error_e)), add = (0, import_react47.useRef)(!0), [formData, setFormData] = (0, import_react47.useState)(() => {
    let user = actionData ? actionData.user : loaderData.user, fields = actionData == null ? void 0 : actionData.fields, new_email = JSON.parse(JSON.stringify((fields == null ? void 0 : fields.email) || user.email));
    return {
      name: (fields == null ? void 0 : fields.name) || user.name,
      gender: (fields == null ? void 0 : fields.gender) || user.gender,
      birthday: (0, import_date_fns6.format)(new Date((fields == null ? void 0 : fields.birthday) || user.birthday), "yyyy-MM-dd"),
      address: (fields == null ? void 0 : fields.address) || user.address,
      email: new_email
    };
  }), handleInputChange = (event) => {
    setFormData((form) => ({ ...form, [event.target.name]: event.target.value })), edit.current = !0;
  }, handleEmailChange = (value) => {
    setFormData((form) => ({ ...form, email: value })), edit1.current = !0, formData.email.at(-1).email !== "" && (add.current = !0);
  }, resetForm = () => {
    let user = actionData ? actionData.user : loaderData.user;
    setFormData({
      name: user.name,
      gender: user.gender,
      birthday: (0, import_date_fns6.format)(new Date(user.birthday), "yyyy-MM-dd"),
      address: user.address,
      email: user.email
    }), edit.current = !1;
  }, addEmail = () => {
    formData.email.push({ id: void 0, email: "", isMain: !1 }), setFormData((form) => ({ ...form })), add.current = !1;
  }, resetEmails = () => {
    let user = actionData ? actionData.user : loaderData.user, new_email = JSON.parse(JSON.stringify(user.email));
    setFormData((form) => ({ ...form, email: new_email })), edit1.current = !1;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tabs justify-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react46.Link, {
            className: "tab tab-bordered tab-active",
            to: "../info",
            children: "\u4E2A\u4EBA\u4FE1\u606F"
          }, void 0, !1, {
            fileName: "app/routes/user/info.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react46.Link, {
            className: "tab tab-bordered",
            to: "../experience",
            children: "\u4E2A\u4EBA\u7ECF\u5386"
          }, void 0, !1, {
            fileName: "app/routes/user/info.tsx",
            lineNumber: 152,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react46.Link, {
            className: "tab tab-bordered",
            to: "../password",
            children: "\u4FEE\u6539\u5BC6\u7801"
          }, void 0, !1, {
            fileName: "app/routes/user/info.tsx",
            lineNumber: 153,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/info.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-2 gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-col w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "card shrink max-w-sm shadow-2xl bg-base-100 mt-2 mb-16 w-96",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                    method: "POST",
                    className: "card-body",
                    children: [
                      (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                        message: actionData.error,
                        type: "error",
                        timeout: 2e3
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 161,
                        columnNumber: 41
                      }, this),
                      (actionData == null ? void 0 : actionData.save) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, {
                        message: "\u4FDD\u5B58\u6210\u529F",
                        type: "success",
                        timeout: 2e3
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 162,
                        columnNumber: 40
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                        htmlFor: "name",
                        label: "\u59D3\u540D",
                        value: formData.name,
                        onChange: handleInputChange,
                        error: (_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.email
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 163,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioField, {
                        htmlFor: "gender",
                        label: "\u6027\u522B",
                        value: formData.gender,
                        args: [
                          { label: "\u7537", value: "\u7537" },
                          { label: "\u5973", value: "\u5973" }
                        ],
                        onChange: handleInputChange,
                        error: (_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.gender
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 170,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                        htmlFor: "birthday",
                        label: "\u751F\u65E5",
                        type: "date",
                        value: formData.birthday,
                        onChange: handleInputChange,
                        error: (_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.birthday
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 181,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                        htmlFor: "address",
                        label: "\u5730\u5740",
                        type: "textarea",
                        value: formData.address,
                        onChange: handleInputChange,
                        error: (_i = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i.address
                      }, void 0, !1, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 189,
                        columnNumber: 19
                      }, this),
                      edit.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "btn btn-primary",
                            name: "_action",
                            value: "edit_info",
                            children: "\u4FDD\u5B58"
                          }, void 0, !1, {
                            fileName: "app/routes/user/info.tsx",
                            lineNumber: 199,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "btn btn-secondary",
                            type: "reset",
                            onClick: resetForm,
                            children: "\u64A4\u6D88"
                          }, void 0, !1, {
                            fileName: "app/routes/user/info.tsx",
                            lineNumber: 200,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/user/info.tsx",
                        lineNumber: 198,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/user/info.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/user/info.tsx",
                  lineNumber: 159,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/user/info.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/user/info.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-col w-full justify-start",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Emails, {
                  emails: formData.email,
                  htmlFor: "email",
                  label: "\u90AE\u7BB1",
                  onChange: handleEmailChange,
                  error: (_j = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _j.emails,
                  success: actionData == null ? void 0 : actionData.save_e,
                  err: actionData == null ? void 0 : actionData.error_e,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "hidden",
                      name: "emails",
                      value: JSON.stringify(formData.email)
                    }, void 0, !1, {
                      fileName: "app/routes/user/info.tsx",
                      lineNumber: 218,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "btn btn-accent",
                      type: "button",
                      onClick: addEmail,
                      disabled: !add.current,
                      children: "\u65B0\u589E"
                    }, void 0, !1, {
                      fileName: "app/routes/user/info.tsx",
                      lineNumber: 219,
                      columnNumber: 17
                    }, this),
                    edit1.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          className: "btn btn-primary",
                          name: "_action",
                          value: "edit_email",
                          children: "\u4FDD\u5B58"
                        }, void 0, !1, {
                          fileName: "app/routes/user/info.tsx",
                          lineNumber: 223,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          className: "btn btn-secondary",
                          type: "reset",
                          onClick: resetEmails,
                          children: "\u64A4\u6D88"
                        }, void 0, !1, {
                          fileName: "app/routes/user/info.tsx",
                          lineNumber: 224,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/user/info.tsx",
                      lineNumber: 222,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/user/info.tsx",
                  lineNumber: 209,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/user/info.tsx",
                lineNumber: 208,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/user/info.tsx",
              lineNumber: 207,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/info.tsx",
          lineNumber: 156,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/info.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/info.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a4726c0f", entry: { module: "/build/entry.client-XEURQVT2.js", imports: ["/build/_shared/chunk-VJGNSQNH.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VM4EJDT4.js", imports: ["/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-U2PWG2KG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/index": { id: "routes/account/index", parentId: "routes/account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/account/index-FMWGH5FE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/login": { id: "routes/account/login", parentId: "routes/account", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/account/login-PJCCFEYJ.js", imports: ["/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account/register": { id: "routes/account/register", parentId: "routes/account", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/account/register-JLI5JKOB.js", imports: ["/build/_shared/chunk-SGHCUTUR.js", "/build/_shared/chunk-IVA3LNLT.js", "/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/friends": { id: "routes/friends", parentId: "root", path: "friends", index: void 0, caseSensitive: void 0, module: "/build/routes/friends-UJHC6WTB.js", imports: ["/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-24QPD6H7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/friends/$listId": { id: "routes/friends/$listId", parentId: "routes/friends", path: ":listId", index: void 0, caseSensitive: void 0, module: "/build/routes/friends/$listId-7GEMSYQW.js", imports: ["/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2UCKIS4C.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-ETLOQNGM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs": { id: "routes/logs", parentId: "root", path: "logs", index: void 0, caseSensitive: void 0, module: "/build/routes/logs-VBPRDD3H.js", imports: ["/build/_shared/chunk-ETLOQNGM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/edit-reply.$id": { id: "routes/logs/edit-reply.$id", parentId: "routes/logs", path: "edit-reply/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/logs/edit-reply.$id-THDILE62.js", imports: ["/build/_shared/chunk-KC2IMU6O.js", "/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/edit.$id": { id: "routes/logs/edit.$id", parentId: "routes/logs", path: "edit/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/logs/edit.$id-FD7O2PMU.js", imports: ["/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/index": { id: "routes/logs/index", parentId: "routes/logs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/logs/index-7OFJ4V4A.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/new": { id: "routes/logs/new", parentId: "routes/logs", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/logs/new-J43Z7ZNY.js", imports: ["/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/reply.$id": { id: "routes/logs/reply.$id", parentId: "routes/logs", path: "reply/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/logs/reply.$id-CP4PGCSH.js", imports: ["/build/_shared/chunk-KC2IMU6O.js", "/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/view.$id": { id: "routes/logs/view.$id", parentId: "routes/logs", path: "view/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/logs/view.$id-5LBPNSS7.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-KC2IMU6O.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/share": { id: "routes/share", parentId: "root", path: "share", index: void 0, caseSensitive: void 0, module: "/build/routes/share-GMV2V57I.js", imports: ["/build/_shared/chunk-K7ABVSX5.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/share/edit.$id": { id: "routes/share/edit.$id", parentId: "routes/share", path: "edit/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/share/edit.$id-4DQOHYMU.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/share/index": { id: "routes/share/index", parentId: "routes/share", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/share/index-EOER3ZDH.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/share/new.$id": { id: "routes/share/new.$id", parentId: "routes/share", path: "new/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/share/new.$id-MEQ7C36Q.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-ETLOQNGM.js", "/build/_shared/chunk-TCOQJZ26.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/share/self": { id: "routes/share/self", parentId: "routes/share", path: "self", index: void 0, caseSensitive: void 0, module: "/build/routes/share/self-EPLHIX5U.js", imports: ["/build/_shared/chunk-6SK4GVIV.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-HNECUXDT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/experience": { id: "routes/user/experience", parentId: "routes/user", path: "experience", index: void 0, caseSensitive: void 0, module: "/build/routes/user/experience-GEZ7LRVQ.js", imports: ["/build/_shared/chunk-COVU6HTZ.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/index": { id: "routes/user/index", parentId: "routes/user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user/index-R4EIAKQK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/info": { id: "routes/user/info", parentId: "routes/user", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/user/info-AQMQ4ICB.js", imports: ["/build/_shared/chunk-COVU6HTZ.js", "/build/_shared/chunk-DPZBLJXF.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-SGHCUTUR.js", "/build/_shared/chunk-IVA3LNLT.js", "/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/password": { id: "routes/user/password", parentId: "routes/user", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/user/password-4YHMDKUJ.js", imports: ["/build/_shared/chunk-COVU6HTZ.js", "/build/_shared/chunk-WVOLWZHW.js", "/build/_shared/chunk-IVA3LNLT.js", "/build/_shared/chunk-YCAQVDYR.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A4726C0F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/account/register": {
    id: "routes/account/register",
    parentId: "routes/account",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/account/index": {
    id: "routes/account/index",
    parentId: "routes/account",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: account_exports2
  },
  "routes/account/login": {
    id: "routes/account/login",
    parentId: "routes/account",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/friends": {
    id: "routes/friends",
    parentId: "root",
    path: "friends",
    index: void 0,
    caseSensitive: void 0,
    module: friends_exports
  },
  "routes/friends/$listId": {
    id: "routes/friends/$listId",
    parentId: "routes/friends",
    path: ":listId",
    index: void 0,
    caseSensitive: void 0,
    module: listId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/share": {
    id: "routes/share",
    parentId: "root",
    path: "share",
    index: void 0,
    caseSensitive: void 0,
    module: share_exports
  },
  "routes/share/edit.$id": {
    id: "routes/share/edit.$id",
    parentId: "routes/share",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports
  },
  "routes/share/new.$id": {
    id: "routes/share/new.$id",
    parentId: "routes/share",
    path: "new/:id",
    index: void 0,
    caseSensitive: void 0,
    module: new_id_exports
  },
  "routes/share/index": {
    id: "routes/share/index",
    parentId: "routes/share",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: share_exports2
  },
  "routes/share/self": {
    id: "routes/share/self",
    parentId: "routes/share",
    path: "self",
    index: void 0,
    caseSensitive: void 0,
    module: self_exports
  },
  "routes/logs": {
    id: "routes/logs",
    parentId: "root",
    path: "logs",
    index: void 0,
    caseSensitive: void 0,
    module: logs_exports
  },
  "routes/logs/edit-reply.$id": {
    id: "routes/logs/edit-reply.$id",
    parentId: "routes/logs",
    path: "edit-reply/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_reply_id_exports
  },
  "routes/logs/reply.$id": {
    id: "routes/logs/reply.$id",
    parentId: "routes/logs",
    path: "reply/:id",
    index: void 0,
    caseSensitive: void 0,
    module: reply_id_exports
  },
  "routes/logs/edit.$id": {
    id: "routes/logs/edit.$id",
    parentId: "routes/logs",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_id_exports2
  },
  "routes/logs/view.$id": {
    id: "routes/logs/view.$id",
    parentId: "routes/logs",
    path: "view/:id",
    index: void 0,
    caseSensitive: void 0,
    module: view_id_exports
  },
  "routes/logs/index": {
    id: "routes/logs/index",
    parentId: "routes/logs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: logs_exports2
  },
  "routes/logs/new": {
    id: "routes/logs/new",
    parentId: "routes/logs",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/user": {
    id: "routes/user",
    parentId: "root",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  },
  "routes/user/experience": {
    id: "routes/user/experience",
    parentId: "routes/user",
    path: "experience",
    index: void 0,
    caseSensitive: void 0,
    module: experience_exports
  },
  "routes/user/password": {
    id: "routes/user/password",
    parentId: "routes/user",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: password_exports
  },
  "routes/user/index": {
    id: "routes/user/index",
    parentId: "routes/user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_exports2
  },
  "routes/user/info": {
    id: "routes/user/info",
    parentId: "routes/user",
    path: "info",
    index: void 0,
    caseSensitive: void 0,
    module: info_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
