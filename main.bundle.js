webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dotdataanalytics/dotdataanalytics.module": [
		"./src/app/theme/dashboard/dotdataanalytics/dotdataanalytics.module.ts",
		"dotdataanalytics.module"
	],
	"./theme/dashboard/dashboard.module": [
		"./src/app/theme/dashboard/dashboard.module.ts",
		"dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_admin_admin_component__ = __webpack_require__("./src/app/layout/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_admin_admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/default',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet><app-spinner></app-spinner></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'dotData';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_admin_admin_component__ = __webpack_require__("./src/app/layout/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_auth_auth_component__ = __webpack_require__("./src/app/layout/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__layout_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__layout_auth_auth_component__["a" /* AuthComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_menu_items_menu_items__["a" /* MenuItems */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded\"\n     [attr.nav-type]=\"navType\"\n     [attr.theme-layout]=\"themeLayout\"\n     [attr.vertical-placement]=\"verticalPlacement\"\n     [attr.vertical-layout]=\"verticalLayout\"\n     [attr.pcoded-device-type]=\"pcodedDeviceType\"\n     [attr.vertical-nav-type]=\"verticalNavType\"\n     [attr.vertical-effect]=\"verticalEffect\"\n     [attr.vnavigation-view]=\"vnavigationView\"\n     [attr.fream-type]=\"freamType\"\n     [attr.sidebar-img]=\"sidebarImg\"\n     [attr.sidebar-img-type]=\"sidebarImgType\"\n     [attr.layout-type]=\"layoutType\"\n     (window:resize)=\"onResize($event)\"\n  >\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\"  [attr.header-theme]=\"headerTheme\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\">\n          <a class=\"mobile-menu ripple light\" id=\"mobile-collapse\" href=\"javascript:\" (click)=\"toggleOpened()\" [exclude]=\"'#main_navbar'\" (clickOutside)=\"onClickedOutsideSidebar($event)\">\n            <i class=\"icon-menu\"></i>\n          </a>\n          <a [routerLink]=\"['/dashboard/default/']\" class=\"ripple light\">\n            <!--<img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Mega Able\" />--> Your Logo Here\n          </a>\n          <a href=\"javascript:\" class=\"mobile-options ripple light\" (click)=\"toggleHeaderNavRight()\">\n            <i class=\"icon-more\"></i>\n          </a>\n        </div>\n        <div class=\"navbar-container container-fluid\">\n\n          <ul class=\"nav-left\">\n            <li class=\"ripple light\">\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\n            </li>\n            <li class=\"header-search\">\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\n              <div id=\"main-search\" class=\"main-search morphsearch-search\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend search-close\" (click)=\"searchOff()\"><i class=\"icon-close input-group-text\"></i></span>\n                  <input class=\"form-control\" [style.width]=\"searchWidthString\">\n                  <span class=\"input-group-append search-btn\" (click)=\"searchOn()\"><i class=\"icon-search input-group-text\"></i></span>\n                </div>\n              </div>\n            </li>\n            <li class=\"ripple light\" appToggleFullScreen>\n              <a href=\"javascript:\">\n                <i class=\"icon-fullscreen\"></i>\n              </a>\n            </li>\n          </ul>\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right\">\n            <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification ripple light\" [ngClass]=\"liveNotificationClass\" (click)=\"toggleLiveNotification()\">\n              <a href=\"javascript:\">\n                <i class=\"icon-bell\"></i>\n                <span class=\"badge bg-c-red\"></span>\n              </a>\n              <!--<ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\">-->\n                <!--<li>-->\n                  <!--<h6>Notifications</h6>-->\n                  <!--<label class=\"label label-danger\">New</label>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<div class=\"media\">-->\n                    <!--<img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">-->\n                    <!--<div class=\"media-body\">-->\n                      <!--<h5 class=\"notification-user\">John Doe</h5>-->\n                      <!--<p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>-->\n                      <!--<span class=\"notification-time\">30 minutes ago</span>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<div class=\"media\">-->\n                    <!--<img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">-->\n                    <!--<div class=\"media-body\">-->\n                      <!--<h5 class=\"notification-user\">Joseph William</h5>-->\n                      <!--<p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>-->\n                      <!--<span class=\"notification-time\">30 minutes ago</span>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<div class=\"media\">-->\n                    <!--<img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">-->\n                    <!--<div class=\"media-body\">-->\n                      <!--<h5 class=\"notification-user\">Sara Soudein</h5>-->\n                      <!--<p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>-->\n                      <!--<span class=\"notification-time\">30 minutes ago</span>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</li>-->\n              <!--</ul>-->\n            </li>\n            <!--<li class=\"ripple light\">-->\n              <!--<a href=\"javascript:\" (click)=\"toggleChat()\">-->\n                <!--<i class=\"icon-comments\"></i>-->\n                <!--<span class=\"badge bg-c-green\"></span>-->\n              <!--</a>-->\n            <!--</li>-->\n            <li (clickOutside)=\"notificationOutsideClick('profile')\" class=\"user-profile header-notification ripple light\" [ngClass]=\"profileNotificationClass\" (click)=\"toggleProfileNotification()\">\n              <a href=\"javascript:\">\n                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n                <span>Emiliano Gaytan</span>\n                <i class=\"icon-angle-down\"></i>\n              </a>\n              <!--<ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\">-->\n                <!--<li>-->\n                  <!--<a href=\"javascript:\">-->\n                    <!--<i class=\"icon-settings\"></i> Settings-->\n                  <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<a [routerLink]=\"['/user/profile/']\">-->\n                    <!--<i class=\"icon-user\"></i> Profile-->\n                  <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<a href=\"javascript:\">-->\n                    <!--<i class=\"icon-email\"></i> My Messages-->\n                  <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<a [routerLink]=\"['/auth/lock-screen/']\" target=\"_blank\">-->\n                    <!--<i class=\"icon-lock\"></i> Lock Screen-->\n                  <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                  <!--<a [routerLink]=\"['/auth/login/simple/']\" target=\"_blank\">-->\n                    <!--<i class=\"icon-layout-sidebar-left\"></i> Logout-->\n                  <!--</a>-->\n                <!--</li>-->\n              <!--</ul>-->\n            </li>\n          </ul>\n          <!-- Sidebar chat start -->\n          <div [@slideInOut]=\"chatSlideInOut\" id=\"sidebar\" class=\"users p-chat-user showChat\" [ngClass]=\"chatSlideInOut\">\n            <div class=\"had-container\">\n              <div class=\"card card_main p-fixed users-main\">\n                <div class=\"user-box\">\n                  <!--<div class=\"chat-search-box\">-->\n                    <!--<span class=\"back_friendlist\" (click)=\"toggleChat()\">-->\n                      <!--<i class=\"fa fa-chevron-left\"></i>-->\n                    <!--</span>-->\n                    <!--<div class=\"right-icon-control\">-->\n                      <!--<form class=\"form-material\" action=\"javascript:\">-->\n                        <!--<div class=\"form-group form-primary\">-->\n                          <!--<input type=\"text\" name=\"search-text\" class=\"form-control\" id=\"search-friends\" required=\"\">-->\n                          <!--<span class=\"form-bar\"></span>-->\n                          <!--<label class=\"float-label\"><i class=\"fa fa-search m-r-10\"></i>Search Friend</label>-->\n                        <!--</div>-->\n                      <!--</form>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                  <!--<div class=\"main-friend-list\">-->\n                    <!--<div class=\"media userlist-box ripple\" data-username=\"Josephin Doe\" placement=\"left\" ngbTooltip=\"Josephin Doe\" (click)=\"toggleInnerChat()\">-->\n                      <!--<a class=\"media-left\" href=\"javascript:\">-->\n                        <!--<img class=\"media-object img-radius img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Josephin Doe\">-->\n                        <!--<div class=\"live-status bg-success\"></div>-->\n                      <!--</a>-->\n                      <!--<div class=\"media-body\">-->\n                        <!--<div class=\"f-13 chat-header\">Josephin Doe</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"media userlist-box ripple\" data-username=\"Lary Doe\" placement=\"left\" ngbTooltip=\"Lary Doe\" (click)=\"toggleInnerChat()\">-->\n                      <!--<a class=\"media-left\" href=\"javascript:\">-->\n                        <!--<img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Lary Doe\">-->\n                        <!--<div class=\"live-status bg-danger\"></div>-->\n                      <!--</a>-->\n                      <!--<div class=\"media-body\">-->\n                        <!--<div class=\"f-13 chat-header\">Lary Doe</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"media userlist-box ripple\" data-username=\"Alice\" placement=\"left\" ngbTooltip=\"Alice\" (click)=\"toggleInnerChat()\">-->\n                      <!--<a class=\"media-left\" href=\"javascript:\">-->\n                        <!--<img class=\"media-object img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Alice\">-->\n                        <!--<div class=\"live-status bg-success\"></div>-->\n                      <!--</a>-->\n                      <!--<div class=\"media-body\">-->\n                        <!--<div class=\"f-13 chat-header\">Alice</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"media userlist-box ripple\" data-username=\"Alia\" placement=\"left\" ngbTooltip=\"Alia\" (click)=\"toggleInnerChat()\">-->\n                      <!--<a class=\"media-left\" href=\"javascript:\">-->\n                        <!--<img class=\"media-object img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Alia\">-->\n                        <!--<div class=\"live-status bg-success\"></div>-->\n                      <!--</a>-->\n                      <!--<div class=\"media-body\">-->\n                        <!--<div class=\"f-13 chat-header\">Alia</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"media userlist-box ripple\" data-username=\"Suzen\" placement=\"left\" ngbTooltip=\"Suzen\" (click)=\"toggleInnerChat()\">-->\n                      <!--<a class=\"media-left\" href=\"javascript:\">-->\n                        <!--<img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Suzen\">-->\n                        <!--<div class=\"live-status bg-danger\"></div>-->\n                      <!--</a>-->\n                      <!--<div class=\"media-body\">-->\n                        <!--<div class=\"f-13 chat-header\">Suzen</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Sidebar inner chat start-->\n          <!--<div [@slideInOut]=\"innerChatSlideInOut\" class=\"showChat_inner\">-->\n            <!--<div class=\"media chat-inner-header\">-->\n              <!--<a class=\"back_chatBox\">-->\n                <!--<i class=\"fa fa-chevron-left\" (click)=\"toggleInnerChat()\"></i> Josephin Doe-->\n              <!--</a>-->\n            <!--</div>-->\n            <!--<div class=\"media chat-messages\">-->\n              <!--<a class=\"media-left photo-table\" href=\"javascript:\">-->\n                <!--<img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">-->\n              <!--</a>-->\n              <!--<div class=\"media-body chat-menu-content\">-->\n                <!--<div class=\"\">-->\n                  <!--<p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>-->\n                  <!--<p class=\"chat-time\">8:20 a.m.</p>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"media chat-messages\">-->\n              <!--<div class=\"media-body chat-menu-reply\">-->\n                <!--<div class=\"\">-->\n                  <!--<p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>-->\n                  <!--<p class=\"chat-time\">8:20 a.m.</p>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"media-right photo-table\">-->\n                <!--<a href=\"javascript:\">-->\n                  <!--<img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">-->\n                <!--</a>-->\n              <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"chat-reply-box\">-->\n              <!--<div class=\"right-icon-control\">-->\n                <!--<form class=\"form-material\" action=\"javascrpit:\">-->\n                  <!--<div class=\"form-group form-primary\">-->\n                    <!--<input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">-->\n                    <!--<span class=\"form-bar\"></span>-->\n                    <!--<label class=\"float-label\"><i class=\"fa fa-search m-r-10\"></i>Share Your Thoughts</label>-->\n                  <!--</div>-->\n                <!--</form>-->\n                <!--<div class=\"form-icon \">-->\n                  <!--<button class=\"btn btn-success btn-icon ripple light\">-->\n                    <!--<i class=\"fa fa-paper-plane \"></i>-->\n                  <!--</button>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!-- Sidebar inner chat end-->\n        </div>\n      </div>\n    </nav>\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"headerFixedMargin\">\n      <div class=\"pcoded-wrapper\">\n        <nav\n          id=\"main_navbar\"\n          class=\"pcoded-navbar\"\n          (clickOutside)=\"onClickedOutsideSidebar($event)\"\n          [exclude]=\"'#mobile-collapse'\"\n          [attr.pcoded-header-position]=\"pcodedHeaderPosition\"\n          [attr.navbar-theme]=\"navBarTheme\"\n          [attr.active-item-theme]=\"activeItemTheme\"\n          sub-item-theme=\"theme2\"\n          active-item-style=\"style0\"\n          [attr.pcoded-navbar-position]=\"pcodedSidebarPosition\"\n          [style.top]=\"headerFixedTop\"\n          [style.height]=\"sidebarFixedNavHeight\"\n        >\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\n            <div class=\"\">\n              <!--<div class=\"main-menu-header ripple light\">-->\n                <!--<img class=\"img-80 img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"User-Profile-Image\">-->\n                <!--<div class=\"user-details\">-->\n                  <!--<span id=\"more-details\" (click)=\"toggleOpenedSidebar()\"> John Doe test2-->\n                    <!--<i class=\"fa fa-caret-down\"></i>-->\n                  <!--</span>-->\n                <!--</div>-->\n              <!--</div>-->\n              <div class=\"main-menu-content\">\n                <ul>\n                  <li [@mobileMenuTop]=\"isCollapsedSideBar\" class=\"more-details\" [ngClass]=\"isCollapsedSideBar\">\n                    <a [routerLink]=\"['/user/profile']\" class=\"ripple\"><i class=\"icon-user\"></i>View Profile</a>\n                    <a href=\"javascript:\" class=\"ripple\"><i class=\"icon-settings\"></i>Settings</a>\n                    <a [routerLink]=\"['/auth/login/simple']\" class=\"ripple\" target=\"_blank\"><i class=\"icon-layout-sidebar-left\"></i>Logout</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!--<div class=\"p-15 p-b-0\">-->\n              <!--<form class=\"form-material\" action=\"javascript:\">-->\n                <!--<div class=\"form-group form-primary\">-->\n                  <!--<input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">-->\n                  <!--<span class=\"form-bar\"></span>-->\n                  <!--<label class=\"float-label\"><i class=\"fa fa-search m-r-10\"></i>Search Friend</label>-->\n                <!--</div>-->\n              <!--</form>-->\n            <!--</div>-->\n            <perfect-scrollbar [style.max-width]=\"'235px'\" [style.max-height]=\"sidebarFixedHeight\" [config]=\"config\">\n              <div *ngFor=\"let asideItems of menuItems.getAll()\" class=\"d-color\">\n                <div class=\"pcoded-navigation-label\" [attr.menu-title-theme]=\"menuTitleTheme\">{{asideItems.label}}</div>\n                <ul class=\"pcoded-item pcoded-left-item\" [attr.item-border]=\"itemBorder\" [attr.item-border-style]=\"itemBorderStyle\" [attr.subitem-border]=\"subItemBorder\" *ngFor=\"let asideItem of asideItems.main\" appAccordionLink group=\"{{asideItem.state}}\">\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\" appAccordionLink group=\"{{asideItem.state}}\">\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\" href=\"{{asideItem.external}}\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                  </li>\n\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" appAccordionLink group=\"{{asideItem.state}}\">\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.main_state, asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle *ngIf=\"asideItem.main_state; else mainContent\">\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                    <ng-template #mainContent>\n                      <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                        <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                        <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                    </ng-template>\n                  </li>\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'sub'\" class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\" appAccordionLink group=\"{{asideItem.state}}\">\n                    <a [routerLinkActive]=\"['active']\" [routerLinkActive]=\"['active']\" href=\"javascript:;\" appAccordionToggle>\n                      <div class=\"ripple menu-ripple\"></div>\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                    <ul class=\"pcoded-submenu\">\n                      <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub'\">\n                          <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.state, asideChildren.state]\" target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\n                            <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                            <span class=\"pcoded-mcaret\"></span>\n                          </a>\n                        </li>\n\n                        <li [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\" *ngIf=\"asideChildren.type === 'sub'\" appAccordionLink group=\"sub-toggled\">\n                          <a [routerLinkActive]=\"['active']\" href=\"javascript:;\" appAccordionToggle>\n                            <div class=\"ripple menu-ripple\"></div>\n                            <span class=\"pcoded-micon\"><i class=\"icon-direction-alt\"></i></span>\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                            <span class=\"pcoded-mcaret\"></span>\n                          </a>\n                          <ul class=\"pcoded-submenu\">\n                            <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\n                              <li [routerLinkActive]=\"['active']\">\n                                <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\" target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\n                                  <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\n                                  <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\n                                  <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\" class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\n                                  <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                              </li>\n                            </ng-template>\n                          </ul>\n                        </li>\n                      </ng-template>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </perfect-scrollbar>\n          </div>\n        </nav>\n        <div class=\"pcoded-content\">\n          <!--<app-breadcrumbs></app-breadcrumbs>-->\n          <div class=\"pcoded-inner-content\">\n            <!-- Main-body start -->\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <router-outlet>\n                  <app-title></app-title>\n                  <app-spinner></app-spinner>\n                </router-outlet>\n              </div>\n            </div>\n            <div id=\"styleSelector\" [ngClass]=\"configOpenRightBar\">\n              <div class=\"selector-toggle\">\n              <!--  <a href=\"javascript:\" placement=\"left\" class=\"ripple light\" ngbTooltip=\"Live layout customizer\" (click)=\"toggleRightbar()\"></a>-->\n              </div>\n              <ul>\n                <li>\n                  <p class=\"selector-title main-title st-main-title\"><b>Gradient </b>able Customizer</p><span class=\"text-muted\">Live customizer with tons of options</span></li>\n                <li>\n                  <p class=\"selector-title\">Main layouts</p>\n                </li>\n                <li>\n                  <div class=\"theme-color\">\n                    <a href=\"javascript:\" (click)=\"setNavBarTheme('themelight1')\" class=\"ripple\" navbar-theme=\"themelight1\" placement=\"top\" ngbTooltip=\"Light Sidebar\">\n                      <span class=\"head\"></span>\n                      <span class=\"cont\"></span>\n                    </a>\n                    <a href=\"javascript:\" (click)=\"setNavBarTheme('theme1')\" class=\"ripple\" navbar-theme=\"theme1\" placement=\"top\" ngbTooltip=\"Dark Sidebar\">\n                      <span class=\"head\"></span>\n                      <span class=\"cont\"></span>\n                    </a>\n                    <a href=\"javascript:\" (click)=\"setLayoutType('img')\" class=\"ripple\" layout-type=\"img\" placement=\"top\" ngbTooltip=\"Sidebar with image\">\n                      <span class=\"head\"></span>\n                      <span class=\"cont\"></span>\n                    </a>\n                    <a href=\"javascript:\" (click)=\"setLayoutType('light')\" class=\"ripple\" layout-type=\"light\" placement=\"top\" ngbTooltip=\"Light Layout\">\n                      <span class=\"head\"></span>\n                      <span class=\"cont\"></span>\n                    </a>\n                    <a href=\"javascript:\" (click)=\"setLayoutType('dark')\" class=\"ripple light\" layout-type=\"dark\" placement=\"top\" ngbTooltip=\"Dark Layout\">\n                      <span class=\"head\"></span>\n                      <span class=\"cont\"></span>\n                    </a>\n                  </div>\n                </li>\n              </ul>\n              <perfect-scrollbar [style.max-width]=\"'100%'\" [style.max-height]=\"'calc(100vh - 495px)'\" [config]=\"config\">\n                <div class=\"style-cont m-t-10\">\n                  <ngb-tabset>\n                    <ngb-tab title=\"Layouts\">\n                      <ng-template ngbTabContent>\n                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                          <ul>\n                            <li class=\"theme-option\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"false\" id=\"theme-layout\" name=\"vertical-item-border\" [checked]=\"isVerticalLayoutChecked\" (change)=\"setVerticalLayout()\">\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\n                                  <span>Box Layout - with patterns</span>\n                                </label>\n                              </div>\n                            </li>\n                            <li class=\"theme-option\" id=\"bg-pattern-visiblity\" [ngClass]=\"displayBoxLayout\">\n                              <div class=\"theme-color\">\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme1')\" themebg-pattern=\"theme1\"></a>\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme2')\" themebg-pattern=\"theme2\"></a>\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme3')\" themebg-pattern=\"theme3\"></a>\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme4')\" themebg-pattern=\"theme4\"></a>\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme5')\" themebg-pattern=\"theme5\"></a>\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme6')\" themebg-pattern=\"theme6\"></a>\n                              </div>\n                            </li>\n                            <li class=\"theme-option\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"false\" id=\"sidebar-position\" name=\"sidebar-position\" [checked]=\"isSidebarChecked\" (change)=\"setSidebarPosition()\">\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\n                                  <span>Fixed Sidebar Position</span>\n                                </label>\n                              </div>\n                            </li>\n                            <li class=\"theme-option\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"false\" id=\"header-position\" name=\"header-position\" [checked]=\"isHeaderChecked\" (change)=\"setHeaderPosition()\">\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\n                                  <span>Fixed Header Position</span>\n                                </label>\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                      </ng-template>\n                    </ngb-tab>\n                    <ngb-tab title=\"Sidebar Settings\">\n                      <ng-template ngbTabContent>\n                        <div [@fadeInOutTranslate] class=\"m-t-15\">\n                          <ul>\n                            <li class=\"theme-option\">\n                              <p class=\"sub-title drp-title\">Menu Type</p>\n                              <div class=\"form-radio\" id=\"menu-effect\">\n                                <div class=\"radio radiofill radio-primary radio-inline\" ngbTooltip=\"Color icon\">\n                                  <label>\n                                    <input type=\"radio\" name=\"radio\" value=\"st1\" (click)=\"this.navType=$event.target.value\">\n                                    <i class=\"helper\"></i>\n                                    <span class=\"micon st1\"><i class=\"icon-home\"></i></span>\n                                  </label>\n                                </div>\n                                <div class=\"radio radiofill radio-success radio-inline\" ngbTooltip=\"Simple icon\">\n                                  <label>\n                                    <input type=\"radio\" name=\"radio\" value=\"st2\" (click)=\"this.navType=$event.target.value\" checked=\"true\">\n                                    <i class=\"helper\"></i>\n                                    <span class=\"micon st2\"><i class=\"icon-home\"></i></span>\n                                  </label>\n                                </div>\n                              </div>\n                            </li>\n                            <li class=\"theme-option\">\n                              <p class=\"sub-title drp-title\">SideBar Effect</p>\n                              <select id=\"vertical-menu-effect\" class=\"form-control minimal\" (change)=\"this.verticalEffect=$event.target.value\">\n                                <option value=\"shrink\" selected>shrink</option>\n                                <option value=\"overlay\">overlay</option>\n                                <option value=\"push\">Push</option>\n                              </select>\n                            </li>\n                            <li class=\"theme-option\">\n                              <p class=\"sub-title drp-title\">Hide/Show Border</p>\n                              <select id=\"vertical-border-style\" class=\"form-control minimal\" (change)=\"this.itemBorderStyle=$event.target.value\">\n                                <option value=\"solid\" selected>Style 1</option>\n                                <option value=\"dotted\">Style 2</option>\n                                <option value=\"dashed\">Style 3</option>\n                                <option value=\"none\" selected>No Border</option>\n                              </select>\n                            </li>\n                            <li class=\"theme-option\">\n                              <p class=\"sub-title drp-title\">Drop-Down Icon</p>\n                              <select id=\"vertical-dropdown-icon\" class=\"form-control minimal\" (change)=\"this.dropDownIcon=$event.target.value\">\n                                <option value=\"style1\" selected>Style 1</option>\n                                <option value=\"style2\">style 2</option>\n                                <option value=\"style3\" selected>style 3</option>\n                              </select>\n                            </li>\n                            <li class=\"theme-option\">\n                              <p class=\"sub-title drp-title\">Sub Menu Drop-down Icon</p>\n                              <select id=\"vertical-subitem-icon\" class=\"form-control minimal\" (change)=\"this.subItemIcon=$event.target.value\">\n                                <option value=\"style1\">Style 1</option>\n                                <option value=\"style2\">style 2</option>\n                                <option value=\"style3\">style 3</option>\n                                <option value=\"style4\">style 4</option>\n                                <option value=\"style5\">style 5</option>\n                                <option value=\"style6\">style 6</option>\n                                <option value=\"style7\" selected>no icon</option>\n                              </select>\n                            </li>\n                          </ul>\n                        </div>\n                      </ng-template>\n                    </ngb-tab>\n                  </ngb-tabset>\n                  <div class=\"tab-content tabs\">\n                    <ul>\n                      <li>\n                        <p class=\"selector-title\">Header color</p>\n                      </li>\n                      <li class=\"theme-option\">\n                        <div class=\"theme-color\">\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme1';setBackgroundPattern('theme1')\" header-theme=\"theme1\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span>\n                          </a>\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme2';setBackgroundPattern('theme2')\" header-theme=\"theme2\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span></a>\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme3';setBackgroundPattern('theme3')\" header-theme=\"theme3\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span>\n                          </a>\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme4';setBackgroundPattern('theme4')\" header-theme=\"theme4\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span>\n                          </a>\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme5';setBackgroundPattern('theme5')\" header-theme=\"theme5\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span>\n                          </a>\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme6';setBackgroundPattern('theme6')\" header-theme=\"theme6\">\n                            <span class=\"head\"></span>\n                            <span class=\"cont\"></span>\n                          </a>\n                        </div>\n                      </li>\n                      <li>\n                        <p class=\"selector-title\">Navbar image</p>\n                      </li>\n                      <li class=\"theme-option\">\n                        <div class=\"theme-color\">\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img1'\" navbg-pattern=\"img1\"></a>\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img2'\" navbg-pattern=\"img2\"></a>\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img3'\" navbg-pattern=\"img3\"></a>\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img4'\" navbg-pattern=\"img4\"></a>\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img5'\" navbg-pattern=\"img5\"></a>\n                          <a href=\"javascript:\" class=\"navbg-pattern image ripple\" (click)=\"this.sidebarImgType='img6'\" navbg-pattern=\"img6\"></a>\n                        </div>\n                      </li>\n                      <li>\n                        <p class=\"selector-title\">Active link color</p>\n                      </li>\n                      <li class=\"theme-option\">\n                        <div class=\"theme-color\">\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme1'\" class=\"small\" active-item-theme=\"theme1\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme2'\" class=\"small\" active-item-theme=\"theme2\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme3'\" class=\"small\" active-item-theme=\"theme3\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme4'\" class=\"small\" active-item-theme=\"theme4\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme5'\" class=\"small\" active-item-theme=\"theme5\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme6'\" class=\"small\" active-item-theme=\"theme6\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme7'\" class=\"small\" active-item-theme=\"theme7\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme8'\" class=\"small\" active-item-theme=\"theme8\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme9'\" class=\"small\" active-item-theme=\"theme9\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme10'\" class=\"small\" active-item-theme=\"theme10\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme11'\" class=\"small\" active-item-theme=\"theme11\"></a>\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme12'\" class=\"small\" active-item-theme=\"theme12\"></a>\n                        </div>\n                      </li>\n                      <li>\n                        <p class=\"selector-title\">Menu Caption Color</p>\n                      </li>\n                      <li class=\"theme-option\">\n                        <div class=\"theme-color\">\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme1'\" lheader-theme=\"theme1\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme2'\" lheader-theme=\"theme2\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme3'\" lheader-theme=\"theme3\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme4'\" lheader-theme=\"theme4\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme5'\" lheader-theme=\"theme5\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme6'\" lheader-theme=\"theme6\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme7'\" lheader-theme=\"theme7\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme8'\" lheader-theme=\"theme8\"></a>\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme9'\" lheader-theme=\"theme9\"></a>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </perfect-scrollbar>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(menuItems) {
        var _this = this;
        this.menuItems = menuItems;
        this.scroll = function () {
            var scrollPosition = window.pageYOffset;
            if (scrollPosition > 56) {
                if (_this.isSidebarChecked === true) {
                    _this.pcodedSidebarPosition = 'fixed';
                }
                _this.headerFixedTop = '0';
                _this.sidebarFixedNavHeight = '100%';
            }
            else {
                _this.headerFixedTop = 'auto';
                _this.pcodedSidebarPosition = 'absolute';
                _this.sidebarFixedNavHeight = '';
            }
        };
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light'; // light(default) dark(dark)
        this.headerTheme = 'theme1'; // theme1(default)
        this.pcodedHeaderPosition = 'fixed';
        this.headerFixedTop = 'auto';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.chatSlideInOut = 'out';
        this.innerChatSlideInOut = 'out';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        this.toggleOn = true;
        this.navBarTheme = 'themelight1'; // themelight1(default) theme1(dark)
        this.activeItemTheme = 'theme1';
        this.pcodedSidebarPosition = 'fixed';
        this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
        this.dropDownIcon = 'style3';
        this.subItemIcon = 'style7';
        this.displayBoxLayout = 'd-none';
        this.isVerticalLayoutChecked = false;
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        this.headerFixedMargin = '56px';
        this.sidebarFixedHeight = 'calc(100vh - 236px)'; // calc(100vh - 236px)
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.itemBorder = true;
        this.isCollapsedSideBar = 'no-block';
        this.setMenuAttributes(this.windowWidth);
        this.setHeaderAttributes(this.windowWidth);
        // dark
        /*this.setLayoutType('dark');*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');*/
        // dark-light
        /*this.setNavBarTheme('theme1');*/
        // box
        /*this.setVerticalLayout();*/
        // sidebar img
        /*this.setLayoutType('img');*/
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.setBackgroundPattern('theme1');
        /*document.querySelector('body').classList.remove('dark');*/
    };
    AdminComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        var reSizeFlag = true;
        if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.pcodedDeviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    AdminComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    AdminComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.pcodedDeviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else if (windowWidth < 768) {
            this.pcodedDeviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.pcodedDeviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    AdminComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
        this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
        if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleLiveNotification = function () {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
        if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleProfileNotification = function () {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
        if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    AdminComponent.prototype.toggleChat = function () {
        this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
        if (this.innerChatSlideInOut === 'in') {
            this.innerChatSlideInOut = 'out';
        }
    };
    AdminComponent.prototype.toggleInnerChat = function () {
        this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
    };
    AdminComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        var searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    AdminComponent.prototype.searchOff = function () {
        var _this = this;
        var searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    AdminComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 992) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            if (this.navRight === 'nav-on') {
                this.toggleHeaderNavRight();
            }
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    };
    AdminComponent.prototype.onClickedOutsideSidebar = function (e) {
        if ((this.windowWidth < 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    AdminComponent.prototype.toggleRightbar = function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
    AdminComponent.prototype.setNavBarTheme = function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.sidebarImg = 'false';
        }
        else {
            this.menuTitleTheme = 'theme9';
            this.navBarTheme = 'theme1';
            this.sidebarImg = 'false';
        }
    };
    AdminComponent.prototype.setLayoutType = function (type) {
        if (type === 'dark') {
            this.layoutType = type;
            this.headerTheme = 'theme6';
            this.sidebarImg = 'false';
            this.navBarTheme = 'theme1';
            this.menuTitleTheme = 'theme9';
            this.freamType = 'theme6';
            document.querySelector('body').classList.add('dark');
            this.setBackgroundPattern('theme6');
            this.activeItemTheme = 'theme1';
        }
        else if (type === 'light') {
            this.layoutType = type;
            this.sidebarImg = 'false';
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.activeItemTheme = 'theme1';
        }
        else if (type === 'img') {
            this.sidebarImg = 'true';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.activeItemTheme = 'theme1';
        }
    };
    AdminComponent.prototype.setVerticalLayout = function () {
        this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
        if (this.isVerticalLayoutChecked) {
            this.verticalLayout = 'box';
            this.displayBoxLayout = '';
        }
        else {
            this.verticalLayout = 'wide';
            this.displayBoxLayout = 'd-none';
        }
    };
    AdminComponent.prototype.setBackgroundPattern = function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    };
    AdminComponent.prototype.setSidebarPosition = function () {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
        this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 236px)' : 'calc(100vh + 236px)';
    };
    AdminComponent.prototype.setHeaderPosition = function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '56px' : '';
        if (this.isHeaderChecked === false) {
            window.addEventListener('scroll', this.scroll, true);
            window.scrollTo(0, 0);
        }
        else {
            window.removeEventListener('scroll', this.scroll, true);
            this.headerFixedTop = 'auto';
            this.pcodedSidebarPosition = 'fixed';
            this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 292px)' : 'calc(100vh + 292px)';
        }
    };
    AdminComponent.prototype.toggleOpenedSidebar = function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
        this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 353px)' : 'calc(100vh - 236px)';
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/layout/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/layout/admin/admin.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('notificationBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('an-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('an-animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('an-off <=> an-animate', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        width: '300px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        width: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('mobileHeaderNavRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('nav-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('nav-on', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('nav-off <=> nav-on', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('mobileMenuTop', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('no-block <=> yes-block', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__["a" /* MenuItems */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function () {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.title;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            if (title !== undefined) {
                _this.titleService.setTitle(title + ' | dotData');
            }
        });
    }
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-title',
            template: '<span></span>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/layout/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <app-spinner><app-title></app-title></app-spinner>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/auth/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/layout/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/layout/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                var toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
        }
        this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.countState = 0;
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AccordionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("./src/app/shared/accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.pcoded-trigger'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cardClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardIconToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var cardToggle = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('cardToggle', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('collapsed, void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        height: __WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* AUTO_STYLE */],
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('collapsed <=> expanded', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out')
    ])
]);
var cardClose = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('cardClose', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 0,
        display: 'none'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('open <=> closed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms')),
]);
var cardIconToggle = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('cardIconToggle', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('an-off, void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        width: '35px',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('an-animate', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        width: __WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* AUTO_STYLE */],
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('an-off <=> an-animate', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out')
    ])
]);


/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardToggleDirective = /** @class */ (function () {
    function CardToggleDirective(el) {
        this.el = el;
    }
    CardToggleDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('fa-minus');
        this.el.nativeElement.classList.toggle('fa-plus');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CardToggleDirective.prototype, "onToggle", null);
    CardToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appCardToggleEvent]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CardToggleDirective);
    return CardToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\n  <div class=\"card-header ripple\" *ngIf=\"title\">\n    <h5>{{ title }}</h5>\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span>\n    <div class=\"card-header-right\" *ngIf=\"!cardOptionBlock\">\n      <ul class=\"list-unstyled card-option\" [@cardIconToggle]=\"cardIconToggle\">\n        <li *ngIf=\"!isCardToggled\" (click)=\"toggleCardOption()\"><i class=\"fa fa open-card-option fa-wrench\"></i></li>\n        <li *ngIf=\"isCardToggled\" (click)=\"toggleCardOption()\"><i class=\"fa fa open-card-option fa-times\"></i></li>\n        <li><i class=\"fa {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\n        <li><i class=\"fa fa-minus minimize-card\" appCardToggleEvent (click)=\"toggleCard($event)\"></i></li>\n        <li><i class=\"fa fa-refresh reload-card\" (click)=\"cardRefresh($event)\" ></i></li>\n        <li><i class=\"fa fa-trash close-card\" (click)=\"closeCard($event)\"></i></li>\n      </ul>\n    </div>\n  </div>\n\n  <div [@cardToggle]=\"cardToggle\" class=\"card-block-hid\">\n    <div class=\"card-block\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"fa fa-spinner rotate-refresh\"></i></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.scss":
/***/ (function(module, exports) {

module.exports = ".card .card-header .card-header-right .card-option {\n  width: 140px;\n  -webkit-transition: unset;\n  transition: unset; }\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_animation__ = __webpack_require__("./src/app/shared/card/card-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.cardOptionBlock = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
        this.fullCardIcon = 'fa-expand';
        this.cardIconToggle = 'an-off';
    }
    CardComponent.prototype.ngOnInit = function () {
        if (this.cardOptionBlock) {
            this.cardToggle = 'false';
        }
    };
    CardComponent.prototype.toggleCard = function (event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.toggleCardOption = function () {
        this.isCardToggled = !this.isCardToggled;
        this.cardIconToggle = this.cardIconToggle === 'an-off' ? 'an-animate' : 'an-off';
    };
    CardComponent.prototype.closeCard = function (event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    CardComponent.prototype.fullScreen = function (event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
    };
    CardComponent.prototype.cardRefresh = function () {
        var _this = this;
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout(function () {
            _this.cardLoad = '';
            _this.loadCard = false;
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "classHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "cardOptionBlock", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/shared/card/card.component.html"),
            styles: [__webpack_require__("./src/app/shared/card/card.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__card_animation__["c" /* cardToggle */], __WEBPACK_IMPORTED_MODULE_1__card_animation__["a" /* cardClose */], __WEBPACK_IMPORTED_MODULE_1__card_animation__["b" /* cardIconToggle */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullScreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullScreenDirective = /** @class */ (function () {
    function ToggleFullScreenDirective() {
    }
    ToggleFullScreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToggleFullScreen]'
        })
    ], ToggleFullScreenDirective);
    return ToggleFullScreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        label: 'dotData Analytics',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'sub',
                icon: 'icon-bar-chart-alt',
                children: [
                    {
                        state: 'analytics',
                        name: 'Analytics'
                    }
                ]
            }
        ],
    },
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.scss":
/***/ (function(module, exports) {

module.exports = ".md-close-btn {\n  border: 0;\n  background: none;\n  color: #ffffff;\n  position: absolute;\n  top: 21px;\n  right: 16px;\n  font-size: 1.2em;\n  cursor: pointer; }\n\n.md-perspective {\n  height: 100%;\n  overflow: hidden; }\n\n.md-perspective body {\n    height: 100%;\n    overflow: hidden;\n    background: #222;\n    -webkit-perspective: 600px;\n    perspective: 600px; }\n\n.container {\n  min-height: 100%; }\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%); }\n\n.md-show {\n  visibility: visible; }\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  opacity: 0;\n  background: rgba(55, 58, 60, 0.65);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible; }\n\n.md-content {\n  color: #666666;\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto; }\n\n.md-content h3 {\n    color: #fff;\n    margin: 0;\n    padding: 0.4em;\n    text-align: center;\n    font-size: 2.4em;\n    font-weight: 300;\n    opacity: 0.8;\n    background: rgba(0, 115, 170, 0.93);\n    border-radius: 3px 3px 0 0; }\n\n.md-content > div {\n    padding: 15px 40px 30px;\n    margin: 0;\n    font-weight: 300;\n    font-size: 1.15em; }\n\n.md-content > div p {\n      margin: 0;\n      padding: 10px 0; }\n\n.md-content > div ul {\n      margin: 0;\n      padding: 0 0 30px 20px; }\n\n.md-content > div ul li {\n        padding: 5px 0; }\n\n.md-content button {\n    display: block;\n    margin: 0 auto;\n    font-size: 0.8em; }\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-1 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  -webkit-transform: translateX(20%);\n  transform: translateX(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9); }\n\n.md-show.md-effect-2 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1; }\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  -webkit-transform: translateY(20%);\n  transform: translateY(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-3 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  -webkit-transform: scale(0) rotate(720deg);\n  transform: scale(0) rotate(720deg);\n  opacity: 0; }\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\n.md-show.md-effect-4 .md-content {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n  opacity: 1; }\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-5 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(600px) rotateX(20deg);\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0; }\n\n.md-show.md-effect-5 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translateZ(0px) rotateX(0deg);\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-6 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0; }\n\n.md-show.md-effect-6 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1; }\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n.md-effect-7 .md-content {\n    -webkit-transform: translateY(-200%);\n    transform: translateY(-200%);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    opacity: 0; }\n\n.md-show.md-effect-7 .md-content {\n  -webkit-transform: translateY(0%);\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1; }\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-8 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateY(-70deg);\n  transform: rotateY(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0; }\n\n.md-show.md-effect-8 .md-content {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n  opacity: 1; }\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-9 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-70deg);\n  transform: rotateX(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0; }\n\n.md-show.md-effect-9 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-10 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-60deg);\n  transform: rotateX(-60deg);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-10 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-11 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-12 ~ .md-overlay {\n  background: #0073aa; }\n\n.md-effect-12 .md-content {\n  color: #fff;\n  background: transparent; }\n\n.md-effect-12 .md-content h3 {\n    color: #fff;\n    background: transparent; }\n\n.md-show.md-effect-12 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  border: 1px solid #fff; }\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-13 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(-3000px) rotateY(90deg);\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0; }\n\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out; }\n\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n\n@keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n            transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n            transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-14 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateY(100%) rotateX(90deg);\n  transform: translateY(100%) rotateX(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n\n.md-show.md-effect-14 .md-content {\n  -webkit-transform: translateY(0%) rotateX(0deg);\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-15 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-15 .md-content {\n  -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1; }\n\n.md-show.md-effect-16 ~ .md-overlay {\n  background: rgba(180, 46, 32, 0.5); }\n\n.md-show.md-effect-16 ~ .container {\n  -webkit-filter: blur(3px);\n  -moz-filter: blur(3px);\n  filter: blur(3px); }\n\n/* Effect 16:  Blur */\n\n.md-effect-16 .md-content {\n  -webkit-transform: translateY(-5%);\n  transform: translateY(-5%);\n  opacity: 0; }\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n\n.md-show.md-effect-16 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.md-show.md-effect-17 ~ .md-overlay {\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  -webkit-transform: translateY(200%);\n  transform: translateY(200%); }\n\n.md-show.md-effect-17 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.3s 0.2s;\n  transition: all 0.3s 0.2s; }\n\n.md-show.md-effect-18 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n\n.md-show.md-effect-18 ~ .md-overlay {\n  background: rgba(143, 27, 15, 0.8);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\n.md-show.md-effect-18 ~ .container, .md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 0% 50%;\n  -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n\n/* Effect 18:  Slide from right with perspective on container */\n\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px); } }\n\n@keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px); } }\n\n.md-effect-18 .md-content {\n  -webkit-transform: translateX(200%);\n  transform: translateX(200%);\n  opacity: 0; }\n\n.md-show.md-effect-18 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s; }\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n\n.md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\n.md-show.md-effect-19 ~ .container, .md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out; } }\n\n@keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n            transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n\n.md-effect-19 .md-content {\n  -webkit-transform: translateY(-200%);\n  transform: translateY(-200%);\n  opacity: 0; }\n\n.md-show.md-effect-19 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s; }\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%; } }\n"

/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalAnimationComponent = /** @class */ (function () {
    function ModalAnimationComponent() {
        this.backDrop = false;
    }
    ModalAnimationComponent.prototype.ngOnInit = function () {
    };
    ModalAnimationComponent.prototype.close = function (event) {
        document.querySelector('#' + event).classList.remove('md-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "modalClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "contentClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "modalID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalAnimationComponent.prototype, "backDrop", void 0);
    ModalAnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-animation',
            template: __webpack_require__("./src/app/shared/modal-animation/modal-animation.component.html"),
            styles: [__webpack_require__("./src/app/shared/modal-animation/modal-animation.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ModalAnimationComponent);
    return ModalAnimationComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.scss":
/***/ (function(module, exports) {

module.exports = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.basic.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.basic.fade.in {\n    opacity: 1; }\n\n.basic.modal.fade.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.basic.modal.fade .modal-dialog {\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n.basic .basic-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 16px;\n  color: #292b2c; }\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none; }\n\n.basic h5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalBasicComponent.prototype, "dialogClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-basic',
            template: __webpack_require__("./src/app/shared/modal-basic/modal-basic.component.html"),
            styles: [__webpack_require__("./src/app/shared/modal-basic/modal-basic.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__ = __webpack_require__("./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_accordionanchor_directive__ = __webpack_require__("./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_accordionlink_directive__ = __webpack_require__("./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accordion_accordion_directive__ = __webpack_require__("./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_admin_title_title_component__ = __webpack_require__("./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_card_component__ = __webpack_require__("./src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__card_card_toggle_directive__ = __webpack_require__("./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_basic_modal_basic_component__ = __webpack_require__("./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_animation_modal_animation_component__ = __webpack_require__("./src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spinner_spinner_component__ = __webpack_require__("./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_click_outside__ = __webpack_require__("./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_click_outside__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng_click_outside__["ClickOutsideModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullScreenDirective */],
                __WEBPACK_IMPORTED_MODULE_4__accordion_accordionanchor_directive__["a" /* AccordionAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_5__accordion_accordionlink_directive__["a" /* AccordionLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_6__accordion_accordion_directive__["a" /* AccordionDirective */],
                __WEBPACK_IMPORTED_MODULE_11__card_card_toggle_directive__["a" /* CardToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__layout_admin_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modal_basic_modal_basic_component__["a" /* ModalBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_animation_modal_animation_component__["a" /* ModalAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_15_ng_click_outside__["ClickOutsideModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullScreenDirective */],
                __WEBPACK_IMPORTED_MODULE_4__accordion_accordionanchor_directive__["a" /* AccordionAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_5__accordion_accordionlink_directive__["a" /* AccordionLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_6__accordion_accordion_directive__["a" /* AccordionDirective */],
                __WEBPACK_IMPORTED_MODULE_11__card_card_toggle_directive__["a" /* CardToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_9__layout_admin_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modal_basic_modal_basic_component__["a" /* ModalBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_animation_modal_animation_component__["a" /* ModalAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-line-material.scss":
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: transparent; }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.scss":
/***/ (function(module, exports) {

module.exports = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinkits__ = __webpack_require__("./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = __WEBPACK_IMPORTED_MODULE_1__spinkits__["a" /* Spinkit */];
        this.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.spinner = __WEBPACK_IMPORTED_MODULE_1__spinkits__["a" /* Spinkit */].skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */] || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__("./src/app/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/app/shared/spinner/spinner.component.scss"), __webpack_require__("./src/app/shared/spinner/spinkit-css/sk-line-material.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map