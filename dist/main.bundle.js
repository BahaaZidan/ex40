webpackJsonp([1,4],{

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(486);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Photo } from './photo.interface';
var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
        this.photosUrl = '/api/photos/'; //'http://localhost:3000/api/photos/';
        this.usersUrl = '/api/users'; // URL to web api 'http://localhost:3000/api/users';
    }
    PhotoService.prototype.getAll = function () {
        return this.http.get(this.photosUrl)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.getOne = function (id) {
        return this.http.get("" + this.photosUrl + id)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.getByUser = function (username) {
        return this.http.get(this.photosUrl + "byauthor/" + username)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.doLike = function (token, photoId) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.post("" + this.photosUrl + photoId + "/like", {}, options)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.signup = function (username, password) {
        return this.http.post(this.usersUrl + "/register", {
            "username": username,
            "password": password
        })
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.login = function (username, password) {
        return this.http.post(this.usersUrl + "/login", {
            "username": username,
            "password": password
        })
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.facebookLogin = function () {
        return this.http.get(this.usersUrl + "/facebook")
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.edit = function (photoId, description, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.put("" + this.photosUrl + photoId, { description: description }, options)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.add = function (body, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.post("" + this.photosUrl, body, options)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.delete = function (photoId, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.delete("" + this.photosUrl + photoId, options)
            .map(function (res) { return res.json(); });
    };
    PhotoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], PhotoService);
    return PhotoService;
    var _a;
}());
//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoteService = (function () {
    function VoteService(http) {
        this.http = http;
        this.pollsUrl = '/api/polls/'; //'http://localhost:3000/api/polls/';
        this.usersUrl = '/api/users'; // URL to web api'http://localhost:3000/api/users';
    }
    VoteService.prototype.getAllPolls = function () {
        return this.http.get(this.pollsUrl)
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.getPoll = function (id) {
        return this.http.get("" + this.pollsUrl + id)
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.doVote = function (pollId, optionId) {
        return this.http.post("" + this.pollsUrl + pollId + "/vote/" + optionId, {})
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.signup = function (username, password) {
        return this.http.post(this.usersUrl + "/register", {
            "username": username,
            "password": password
        })
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.login = function (username, password) {
        return this.http.post(this.usersUrl + "/login", {
            "username": username,
            "password": password
        })
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.addPoll = function (poll, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.post("" + this.pollsUrl, poll, options)
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.editPoll = function (id, poll, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.put("" + this.pollsUrl + id, poll, options)
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.deletePoll = function (id, token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.delete("" + this.pollsUrl + id, options)
            .map(function (res) { return res.json(); });
    };
    VoteService.prototype.getPollByUser = function (token) {
        //setting the token header
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = headers;
        return this.http.get(this.pollsUrl + "byauthor", options)
            .map(function (res) { return res.json(); });
    };
    VoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], VoteService);
    return VoteService;
    var _a;
}());
//# sourceMappingURL=vote.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.setActive = function (val) {
        this.active = val;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(566),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vote_vote_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_photo_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__soon_soon_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vote_vote_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__photo_photo_module__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Routes = [
    {
        path: '',
        redirectTo: 'photo',
        pathMatch: 'full'
    },
    {
        path: 'vote',
        component: __WEBPACK_IMPORTED_MODULE_6__vote_vote_component__["a" /* VoteComponent */],
        children: __WEBPACK_IMPORTED_MODULE_9__vote_vote_module__["a" /* voteRoutes */]
    },
    {
        path: 'photo',
        component: __WEBPACK_IMPORTED_MODULE_7__photo_photo_component__["a" /* PhotoComponent */],
        children: __WEBPACK_IMPORTED_MODULE_10__photo_photo_module__["a" /* photoRoutes */]
    },
    {
        path: 'soon',
        component: __WEBPACK_IMPORTED_MODULE_8__soon_soon_component__["a" /* SoonComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__soon_soon_component__["a" /* SoonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(Routes),
                __WEBPACK_IMPORTED_MODULE_9__vote_vote_module__["b" /* VoteModule */],
                __WEBPACK_IMPORTED_MODULE_10__photo_photo_module__["b" /* PhotoModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(photoService, router, cookieService) {
        this.photoService = photoService;
        this.router = router;
        this.cookieService = cookieService;
    }
    AddComponent.prototype.add = function (event) {
        var _this = this;
        event.preventDefault();
        var formEl = this.formEl.nativeElement;
        var formData = new FormData(formEl);
        this.photoService.add(formData, this.cookieService.get('token'))
            .subscribe(function (res) {
            if (res._id) {
                _this.router.navigate([("/photo/page/" + res._id)]);
            }
            else {
                _this.error = 'an error occured';
            }
        });
    };
    AddComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formData'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], AddComponent.prototype, "formEl", void 0);
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(567),
            styles: [__webpack_require__(543)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _d) || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(568),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = (function () {
    function GalleryComponent(photoService, route) {
        var _this = this;
        this.photoService = photoService;
        this.route = route;
        this.options = {
            columnWidth: 270
        };
        route.params.subscribe(function (params) { _this.username = params['username']; });
    }
    GalleryComponent.prototype.getAll = function (cb) {
        var _this = this;
        return this.photoService.getAll()
            .subscribe(function (res) {
            _this.photos = res.reverse();
            cb();
        });
    };
    GalleryComponent.prototype.getByUser = function () {
        var _this = this;
        this.photoService.getByUser(this.username)
            .subscribe(function (res) { _this.photos = res.reverse(); });
    };
    GalleryComponent.prototype.onNotify = function (deletedId) {
        this.photos = this.photos.filter(function (x) { return x._id != deletedId; });
    };
    GalleryComponent.prototype.onLoaded = function (loaded) {
        this.masonry.layout();
    };
    GalleryComponent.prototype.ngOnInit = function () {
        if (this.username) {
            this.getByUser();
        }
        else {
            this.getAll(function () { });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]) === 'function' && _a) || Object)
    ], GalleryComponent.prototype, "masonry", void 0);
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(569),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], GalleryComponent);
    return GalleryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(photoService, router, cookieService) {
        this.photoService = photoService;
        this.router = router;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.photoService.login(username, password)
            .subscribe(function (res) {
            if (res.status == "Login successful!") {
                _this.error = false;
                _this.cookieService.put('token', res.token);
                _this.cookieService.put('user', username);
                _this.cookieService.put('userId', res.user._id);
                _this.router.navigate(['/photo/gallery']);
                window.location.reload();
            }
            else {
                _this.error = res.status;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(570),
            styles: [__webpack_require__(546)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoBadgeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Photo } from '../photo.interface';
var PhotoBadgeComponent = (function () {
    function PhotoBadgeComponent(cookieService, photoService) {
        this.cookieService = cookieService;
        this.photoService = photoService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userId = this.cookieService.get('userId');
    }
    PhotoBadgeComponent.prototype.doLike = function () {
        var _this = this;
        this.photoService.doLike(this.cookieService.get('token'), this.id)
            .subscribe(function (res) {
            _this.likers = res.likers;
            console.log(_this.likers);
            _this.isLiked = _this.likers.indexOf(_this.userId) != -1;
        });
    };
    PhotoBadgeComponent.prototype.delete = function () {
        var _this = this;
        this.photoService.delete(this.id, this.cookieService.get('token'))
            .subscribe(function (res) {
            console.log(res);
            _this.notify.emit(_this.id);
        });
    };
    PhotoBadgeComponent.prototype.editSwitch = function () {
        this.editing = this.editing == true ? false : true;
    };
    PhotoBadgeComponent.prototype.edit = function (description) {
        var _this = this;
        console.log(description);
        this.photoService.edit(this.id, description, this.cookieService.get('token'))
            .subscribe(function (res) {
            _this.description = res.description;
            _this.editing = false;
        });
    };
    PhotoBadgeComponent.prototype.photoLoaded = function (event) {
        this.loaded.emit(event.type);
    };
    PhotoBadgeComponent.prototype.ngOnInit = function () {
        if (this.authorId) {
            this.isAuthor = this.userId == this.authorId;
        }
        else {
            this.isAuthor = this.userId == this.author;
        }
        this.isLiked = this.likers.indexOf(this.userId) != -1;
        console.log(this.cookieService.get('userId'));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PhotoBadgeComponent.prototype, "id", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PhotoBadgeComponent.prototype, "url", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PhotoBadgeComponent.prototype, "description", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PhotoBadgeComponent.prototype, "author", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PhotoBadgeComponent.prototype, "authorId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotoBadgeComponent.prototype, "likers", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PhotoBadgeComponent.prototype, "notify", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], PhotoBadgeComponent.prototype, "loaded", void 0);
    PhotoBadgeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-badge',
            template: __webpack_require__(571),
            styles: [__webpack_require__(547)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__photo_service__["a" /* PhotoService */]) === 'function' && _d) || Object])
    ], PhotoBadgeComponent);
    return PhotoBadgeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=photo-badge.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoPageComponent = (function () {
    function PhotoPageComponent(photoService, route, cookieService, router) {
        var _this = this;
        this.photoService = photoService;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.userId = this.cookieService.get('userId');
        route.params.subscribe(function (params) { _this.id = params['photoId']; });
    }
    PhotoPageComponent.prototype.delete = function () {
        var _this = this;
        this.photoService.delete(this.id, this.cookieService.get('token'))
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/photo/gallery']);
        });
    };
    PhotoPageComponent.prototype.doLike = function () {
        var _this = this;
        this.photoService.doLike(this.cookieService.get('token'), this.id)
            .subscribe(function (res) {
            _this.photo.likers = res.likers;
            console.log(_this.photo.likers);
            _this.isLiked = _this.photo.likers.indexOf(_this.userId) != -1;
        });
    };
    PhotoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.getOne(this.id)
            .subscribe(function (res) {
            _this.photo = res;
            _this.isAuthor = res.author._id == _this.userId;
            _this.isLiked = res.likers.indexOf(_this.userId) != -1;
        });
    };
    PhotoPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-page',
            template: __webpack_require__(572),
            styles: [__webpack_require__(548)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], PhotoPageComponent);
    return PhotoPageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=photo-page.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoComponent = (function () {
    function PhotoComponent(cookieService, router, photoService) {
        this.cookieService = cookieService;
        this.router = router;
        this.photoService = photoService;
        if (this.cookieService.get('user')) {
            this.signed = true;
            this.username = this.cookieService.get('user');
        }
        else {
            this.signed = false;
        }
    }
    PhotoComponent.prototype.facebook = function () {
        var _this = this;
        this.photoService.facebookLogin()
            .subscribe(function (res) {
            if (res.status == "Login successful!") {
                console.log(res);
                _this.cookieService.put('token', res.token);
                _this.cookieService.put('user', res.user.username);
                _this.cookieService.put('userId', res.user._id);
                _this.router.navigate(['/photo/gallery']);
                window.location.reload();
            }
            else {
                console.log(res);
            }
        });
    };
    PhotoComponent.prototype.logout = function () {
        this.cookieService.remove('user');
        this.cookieService.remove('token');
        this.router.navigate(['/photo/']);
        window.location.reload();
    };
    PhotoComponent.prototype.ngOnInit = function () {
    };
    PhotoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(573),
            styles: [__webpack_require__(549)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === 'function' && _c) || Object])
    ], PhotoComponent);
    return PhotoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=photo.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_page_photo_page_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_badge_photo_badge_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_add_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return photoRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhotoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var photoRoutes = [
    {
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: 'gallery/:username',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_8__add_add_component__["a" /* AddComponent */]
    },
    {
        path: 'edit/:photoId',
        component: __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'page/:photoId',
        component: __WEBPACK_IMPORTED_MODULE_6__photo_page_photo_page_component__["a" /* PhotoPageComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]
    }
];
var PhotoModule = (function () {
    function PhotoModule() {
    }
    PhotoModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__["a" /* MasonryModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__photo_service__["a" /* PhotoService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_6__photo_page_photo_page_component__["a" /* PhotoPageComponent */], __WEBPACK_IMPORTED_MODULE_7__photo_badge_photo_badge_component__["a" /* PhotoBadgeComponent */], __WEBPACK_IMPORTED_MODULE_8__add_add_component__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_6__photo_page_photo_page_component__["a" /* PhotoPageComponent */], __WEBPACK_IMPORTED_MODULE_7__photo_badge_photo_badge_component__["a" /* PhotoBadgeComponent */], __WEBPACK_IMPORTED_MODULE_8__add_add_component__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoModule);
    return PhotoModule;
}());
//# sourceMappingURL=photo.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(photoService, route, router) {
        this.photoService = photoService;
        this.route = route;
        this.router = router;
    }
    SignupComponent.prototype.signup = function (username, password, passwordAgain) {
        var _this = this;
        if (password != passwordAgain) {
            this.error = "password mismatch";
        }
        else {
            this.photoService.signup(username, password)
                .subscribe(function (res) {
                if (res.status == 'Registration Successful!') {
                    _this.error = false;
                    _this.router.navigate(['/photo/login']);
                }
                else {
                    _this.error = res.status;
                }
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(574),
            styles: [__webpack_require__(550)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__photo_service__["a" /* PhotoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoonComponent = (function () {
    function SoonComponent() {
    }
    SoonComponent.prototype.ngOnInit = function () {
    };
    SoonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-soon',
            template: __webpack_require__(575),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [])
    ], SoonComponent);
    return SoonComponent;
}());
//# sourceMappingURL=soon.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPollComponent = (function () {
    function AddPollComponent(voteService, router, cookieService) {
        this.voteService = voteService;
        this.router = router;
        this.cookieService = cookieService;
        this.options = [];
    }
    AddPollComponent.prototype.addOption = function (option) {
        this.options.push(option);
    };
    AddPollComponent.prototype.addPoll = function (name, options) {
        var _this = this;
        var poll = {
            title: name
        };
        var opts = [];
        for (var i = 0; i < options.split(',').length; i++) {
            opts.push({ name: options.split(',')[i] });
        }
        poll.options = opts;
        this.voteService.addPoll(poll, this.cookieService.get('token'))
            .subscribe(function (res) {
            if (res._id) {
                _this.router.navigate([("/vote/polls/" + res._id)]);
            }
            else {
                _this.error = 'an error occured';
            }
        });
    };
    AddPollComponent.prototype.ngOnInit = function () {
    };
    AddPollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-poll',
            template: __webpack_require__(576),
            styles: [__webpack_require__(552)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object])
    ], AddPollComponent);
    return AddPollComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=add-poll.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPollComponent = (function () {
    function EditPollComponent(voteService, router, route, cookieService) {
        var _this = this;
        this.voteService = voteService;
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.options = [];
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    EditPollComponent.prototype.editOptions = function (option) {
        this.options.push(option);
    };
    EditPollComponent.prototype.editPoll = function (name, options) {
        var _this = this;
        var poll = {
            title: name
        };
        var opts = [];
        for (var i = 0; i < options.split(',').length; i++) {
            opts.push({ name: options.split(',')[i] });
        }
        poll.options = opts;
        this.voteService.editPoll(this.id, poll, this.cookieService.get('token'))
            .subscribe(function (res) {
            if (res._id) {
                _this.router.navigate([("/vote/polls/" + res._id)]);
            }
            else {
                _this.error = 'an error occured';
            }
        });
    };
    EditPollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voteService.getPoll(this.id)
            .subscribe(function (res) {
            _this.pname = res.title;
            res.options.forEach(function (element) {
                _this.options.push(element.name);
            });
        });
    };
    EditPollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-poll',
            template: __webpack_require__(577),
            styles: [__webpack_require__(553)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _d) || Object])
    ], EditPollComponent);
    return EditPollComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=edit-poll.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(voteService, router, cookieService) {
        this.voteService = voteService;
        this.router = router;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.voteService.login(username, password)
            .subscribe(function (res) {
            if (res.status == "Login successful!") {
                _this.error = false;
                _this.cookieService.put('token', res.token);
                _this.cookieService.put('user', username);
                _this.router.navigate(['/vote/yourpolls']);
                window.location.reload();
            }
            else {
                _this.error = res.status;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(578),
            styles: [__webpack_require__(554)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PollListComponent = (function () {
    function PollListComponent(voteService) {
        this.voteService = voteService;
        this.response = [];
    }
    PollListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voteService.getAllPolls()
            .subscribe(function (polls) {
            _this.response = polls;
        });
    };
    PollListComponent.prototype.ngOnChanges = function () {
    };
    PollListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-poll-list',
            template: __webpack_require__(579),
            styles: [__webpack_require__(555)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object])
    ], PollListComponent);
    return PollListComponent;
    var _a;
}());
//# sourceMappingURL=poll-list.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollNotationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PollNotationComponent = (function () {
    function PollNotationComponent() {
    }
    PollNotationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PollNotationComponent.prototype, "pollId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PollNotationComponent.prototype, "pollTitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PollNotationComponent.prototype, "pollAuthor", void 0);
    PollNotationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-poll-notation',
            template: __webpack_require__(580),
            styles: [__webpack_require__(556)]
        }), 
        __metadata('design:paramtypes', [])
    ], PollNotationComponent);
    return PollNotationComponent;
}());
//# sourceMappingURL=poll-notation.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollComponent = (function () {
    function PollComponent(voteService, route) {
        var _this = this;
        this.voteService = voteService;
        this.route = route;
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    PollComponent.prototype.doVote = function (_id) {
        var _this = this;
        this.voteService.doVote(this.id, _id)
            .subscribe(function (res) {
            _this.poll.options = res.options;
        });
    };
    PollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voteService.getPoll(this.id)
            .subscribe(function (res) {
            _this.poll = res;
        });
    };
    PollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-poll',
            template: __webpack_require__(581),
            styles: [__webpack_require__(557)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PollComponent);
    return PollComponent;
    var _a, _b;
}());
//# sourceMappingURL=poll.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(voteService, route, router) {
        this.voteService = voteService;
        this.route = route;
        this.router = router;
    }
    SignUpComponent.prototype.signup = function (username, password, passwordAgain) {
        var _this = this;
        if (password != passwordAgain) {
            this.error = "password mismatch";
        }
        else {
            this.voteService.signup(username, password)
                .subscribe(function (res) {
                if (res.status == 'Registration Successful!') {
                    _this.error = false;
                    _this.router.navigate(['/vote/login']);
                }
                else {
                    _this.error = res.status;
                }
            });
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(582),
            styles: [__webpack_require__(558)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoteComponent = (function () {
    function VoteComponent(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        if (this.cookieService.get('user')) {
            this.signed = true;
        }
        else {
            this.signed = false;
        }
    }
    VoteComponent.prototype.logout = function () {
        this.cookieService.remove('user');
        this.cookieService.remove('token');
        this.router.navigate(['/vote/polls']);
        window.location.reload();
    };
    VoteComponent.prototype.ngOnInit = function () {
    };
    VoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__(583),
            styles: [__webpack_require__(559)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], VoteComponent);
    return VoteComponent;
    var _a, _b;
}());
//# sourceMappingURL=vote.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vote_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poll_list_poll_list_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__your_polls_your_polls_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_poll_add_poll_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_poll_edit_poll_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__poll_notation_poll_notation_component__ = __webpack_require__(480);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return voteRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VoteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var voteRoutes = [
    {
        path: '',
        redirectTo: 'polls',
        pathMatch: 'full'
    },
    {
        path: 'polls',
        component: __WEBPACK_IMPORTED_MODULE_4__poll_list_poll_list_component__["a" /* PollListComponent */]
    },
    {
        path: 'polls/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__["a" /* PollComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'yourpolls',
        component: __WEBPACK_IMPORTED_MODULE_6__your_polls_your_polls_component__["a" /* YourPollsComponent */]
    },
    {
        path: 'addpoll',
        component: __WEBPACK_IMPORTED_MODULE_7__add_poll_add_poll_component__["a" /* AddPollComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__edit_poll_edit_poll_component__["a" /* EditPollComponent */]
    }
];
var VoteModule = (function () {
    function VoteModule() {
    }
    VoteModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__poll_list_poll_list_component__["a" /* PollListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__["a" /* PollComponent */],
                __WEBPACK_IMPORTED_MODULE_6__your_polls_your_polls_component__["a" /* YourPollsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__add_poll_add_poll_component__["a" /* AddPollComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_poll_edit_poll_component__["a" /* EditPollComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__poll_notation_poll_notation_component__["a" /* PollNotationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__poll_list_poll_list_component__["a" /* PollListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__["a" /* PollComponent */],
                __WEBPACK_IMPORTED_MODULE_6__your_polls_your_polls_component__["a" /* YourPollsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__add_poll_add_poll_component__["a" /* AddPollComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_poll_edit_poll_component__["a" /* EditPollComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__poll_notation_poll_notation_component__["a" /* PollNotationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__vote_service__["a" /* VoteService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], VoteModule);
    return VoteModule;
}());
;
//# sourceMappingURL=vote.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourPollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YourPollsComponent = (function () {
    function YourPollsComponent(voteService, cookieService) {
        this.voteService = voteService;
        this.cookieService = cookieService;
        this.polls = [];
    }
    YourPollsComponent.prototype.deletePoll = function (id) {
        var _this = this;
        this.voteService.deletePoll(id, this.cookieService.get('token'))
            .subscribe(function (res) {
            _this.deleted = true;
            _this.getPollByUser();
        });
    };
    YourPollsComponent.prototype.getPollByUser = function () {
        var _this = this;
        this.voteService.getPollByUser(this.cookieService.get('token'))
            .subscribe(function (polls) {
            _this.polls = polls;
        });
    };
    YourPollsComponent.prototype.ngOnInit = function () {
        this.getPollByUser();
    };
    YourPollsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-your-polls',
            template: __webpack_require__(584),
            styles: [__webpack_require__(560)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__vote_service__["a" /* VoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _b) || Object])
    ], YourPollsComponent);
    return YourPollsComponent;
    var _a, _b;
}());
//# sourceMappingURL=your-polls.component.js.map

/***/ }),

/***/ 486:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "p {\n    font-size: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".grid-item { width: 260px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "input {\r\n    margin: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".thumbnail {\n\tpadding:0;\n}\n.brick {\n\twidth:250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "button {\n    margin: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "input {\r\n    margin: 5px;\r\n}\r\n.wrong {\r\n    border: firebrick;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "input {\r\n    margin: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "button {\r\n    margin:5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "input {\r\n    margin: 5px;\r\n}\r\n.wrong {\r\n    border: firebrick;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "button {\r\n    margin-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">EX40</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li [ngClass]=\"{active: active == 'vote'}\" (click)=\"setActive('vote')\"><a routerLink=\"/vote\">Vote</a></li>\n      <li [ngClass]=\"{active: active == 'coordinate'}\" (click)=\"setActive('coordinate')\"><a routerLink=\"/soon\">Coordinate</a></li>\n      <li [ngClass]=\"{active: active == 'stock'}\" (click)=\"setActive('stock')\"><a routerLink=\"/soon\">Stock Charts</a></li>\n      <li [ngClass]=\"{active: active == 'trade'}\" (click)=\"setActive('trade')\"><a routerLink=\"/soon\">Trade Books</a></li>\n      <li [ngClass]=\"{active: active == 'photo'}\" (click)=\"setActive('photo')\"><a routerLink=\"/photo\">Pinterest Clone</a></li>\n      <li [ngClass]=\"{active: active == 'micro'}\" (click)=\"setActive('micro')\"><a routerLink=\"/soon\">Micro Services</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n  <form id=\"addForm\" action=\"/blog\" method=\"post\" enctype=\"multipart/form-data\" (submit)=\"add($event)\" #formData>\n\n    <div class=\"form-group\">\n      <label for=\"photo\">Photo</label>\n      <input type=\"file\" name=\"photo\" id=\"photo\">\n      <p class=\"help-block\">Beware : any photo you upload is always public and can be shared by any one</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea form=\"addForm\" class=\"form-control\" name=\"description\" id=\"description\"></textarea>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-lg btn-default\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<masonry [options]=\"options\">\n  <div *ngFor=\"let p of photos\">\n    <app-photo-badge *ngIf=\"p.author\" (notify)=\"onNotify($event)\" (loaded)=\"onLoaded($event)\" url={{p.url}} id={{p._id}} likers={{p.likers}} author={{p.author}} authorId={{p.author._id}} description={{p.description}}></app-photo-badge>\n  </div>\n</masonry>"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> Login </h2>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" #usrInp>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password\" #pwdInp>\n      <button class=\"btn btn-default btn-lg\" (click)=\"login(usrInp.value, pwdInp.value)\">Finish</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<masonry-brick class=\"brick\">\n  <div class=\"thumbnail\">\n    <a routerLink=\"/photo/page/{{id}}\"><img src=\"uploads{{url}}\" (load)=\"photoLoaded($event)\"></a>\n    <div class=\"caption\">\n      \n      <div *ngIf=\"!editing\">\n        <p>{{description}}</p>\n        <button *ngIf=\"isAuthor\" class=\"btn btn-default btn-xs pull-right\" role=\"button\" (click)=\"editSwitch()\"><i class=\"glyphicon glyphicon-pencil\"></i> Edit</button>\n        <button *ngIf=\"isAuthor\" class=\"btn btn-danger btn-xs pull-right\" role=\"button\" (click)=\"delete()\"><i class=\"glyphicon glyphicon-remove\"></i> Delete</button>\n\n        <button *ngIf=\"!isAuthor\" [ngClass]=\"{'btn-info' : isLiked}\" class=\"btn btn-default btn-xs\" role=\"button\" (click)=\"doLike()\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> Like</button>\n        <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://ex40.herokuapp.com/photo/page/{{id}}\" target=\"_blank\"><button class=\"btn btn-default btn-xs\" role=\"button\"><i class=\"glyphicon glyphicon-bullhorn\"></i> Share</button></a>\n      </div>\n      <div *ngIf=\"editing\">\n        <textarea class=\"form-control\" #newDescription>{{description}}</textarea>\n        <button class=\"btn btn-default btn-xs pull-right\" (click)=\"editSwitch()\">Cancel</button>\n        <button class=\"btn btn-default btn-xs pull-right\" (click)=\"edit(newDescription.value)\">Save</button>\n      </div>\n\n    </div>\n  </div>\n</masonry-brick>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3 *ngIf=\"!photo\">Loading ...</h3>\n  <div class=\"thumbnail\" *ngIf=\"photo\">\n    <a routerLink=\"/photo/edit/{{id}}\"><button *ngIf=\"isAuthor\" class=\"btn btn-default btn pull-right\" role=\"button\"><i class=\"glyphicon glyphicon-pencil\"></i> Edit</button></a>\n    <button *ngIf=\"isAuthor\" class=\"btn btn-danger btn pull-right\" role=\"button\" (click)=\"delete()\"><i class=\"glyphicon glyphicon-remove\"></i> Delete</button>\n\n    <button *ngIf=\"!isAuthor\" [ngClass]=\"{'btn-info' : isLiked}\" class=\"btn btn-default btn\" role=\"button\" (click)=\"doLike()\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> Like</button>\n    <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://ex40.herokuapp.com/photo/page/{{id}}\" target=\"_blank\"><button class=\"btn btn-default btn\" role=\"button\"><i class=\"glyphicon glyphicon-bullhorn\"></i> Share</button></a>\n    <img src=\"uploads{{photo.url}}\">\n    <div class=\"caption\">\n      <h4>{{photo.description}}</h4>\n      <hr>\n      <h5>Posted by <a routerLink=\"/photo/gallery/{{photo.author.username}}\">{{photo.author.username}}</a> at {{photo.createdAt.substring(0, 10)}}</h5>\n      <h5 class=\"\">{{photo.likers.length}} Likes</h5>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 >EX-PHOTO</h1> \n    <p>The Simplist Way to Share Your Photos</p>\n    <div *ngIf=\"!signed\">\n      <button class=\"btn btn-info btn-md\" (click)=\"facebook()\">Login via Facebook</button>\n      <a routerLink=\"./login\"><button class=\"btn btn-primary btn-md\">Login</button></a>\n      <a routerLink=\"./signup\"><button class=\"btn btn-primary btn-md\">SignUp</button></a>\n    </div>\n    <div *ngIf=\"signed\">\n      <a routerLink=\"./add\"><button class=\"btn btn-success btn-md\"><span class=\"glyphicon glyphicon-plus\"></span> Add Photo</button></a>\n      <a routerLink=\"./gallery/{{username}}\"><button class=\"btn btn-primary btn-md\"><span class=\"glyphicon glyphicon-picture\"></span> Gallery</button></a>\n      <button class=\"btn btn-warning btn-md\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Logout</button>\n    </div>\n    \n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> SignUp </h2>\n  <div class=\"row\">\n    \n    <div class=\"col-xs-12 col-md-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" #usernameInput>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password\" #passwordInput>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password again\" #passwordAgainInput>\n      <button class=\"btn btn-default btn-lg\" (click)=\"signup(usernameInput.value, passwordInput.value, passwordAgainInput.value)\">Finish</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>SOON</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> Create Poll </h2>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"pollName\">Poll Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"pollName\" #pollName>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pollOptions\">Poll Options</label>\n        <textarea class=\"form-control\" rows=\"5\" id=\"pollOptions\" #pollOptions>{{options.join()}}</textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"addOption\">Add an Option</label>\n        <div class=\"row\">\n          <div class=\"col-xs-9\">\n              <input type=\"text\" class=\"form-control\" id=\"addOption\" #extraOption>\n          </div>\n          <div class=\"col-xs-3\">\n            <button class=\"btn btn-success btn-md\" (click)=\"addOption(extraOption.value); extraOption.value='';\"> <span class=\"glyphicon glyphicon-plus\"></span> </button>\n          </div>\n        </div>\n      </div>\n      \n\n      <button class=\"btn btn-default btn-lg\" (click)=\"addPoll(pollName.value, pollOptions.value)\">Post</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> Edit Poll </h2>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"pollName\">Poll Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"pollName\" value=\"{{pname}}\" #pollName>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pollOptions\">Poll Options</label>\n        <textarea class=\"form-control\" rows=\"5\" id=\"pollOptions\" value=\"{{options.join()}}\" #pollOptions>{{options.join()}}</textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"addOption\">Add an Option</label>\n        <div class=\"row\">\n          <div class=\"col-xs-9\">\n              <input type=\"text\" class=\"form-control\" id=\"addOption\" #extraOption>\n          </div>\n          <div class=\"col-xs-3\">\n            <button class=\"btn btn-success btn-md\" (click)=\"editOptions(extraOption.value); extraOption.value='';\"> <span class=\"glyphicon glyphicon-plus\"></span> </button>\n          </div>\n        </div>\n      </div>\n      \n\n      <button class=\"btn btn-default btn-lg\" (click)=\"editPoll(pollName.value, pollOptions.value)\">Post</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> Login </h2>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" #usrInp>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password\" #pwdInp>\n      <button class=\"btn btn-default btn-lg\" (click)=\"login(usrInp.value, pwdInp.value)\">Finish</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3>Below are Polls Created via EX-VOTE\n    <br>\n    Vote on any Poll or SignUp and Make Your Own NOW !\n  </h3>\n  <app-poll-notation *ngFor=\"let x of response\" pollAuthor={{x.author.username}} pollTitle={{x.title}} pollId={{x._id}}></app-poll-notation>\n  \n</div>"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<a routerLink={{pollId}}><button class=\"btn btn-block btn-md btn-default\">{{pollTitle}}  <span class=\"badge\">Posted by / {{pollAuthor}}</span>\r\n</button></a>"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" *ngIf=\"!poll\">\n  <h2> Loading ...</h2>\n</div>\n<div class=\"jumbotron\" *ngIf=\"poll\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-6\">\n      <h2>{{poll.title}}</h2>\n      <h4>by {{poll.author.username}}</h4>\n    </div>\n    <div class=\"col-xs-12 col-md-6\">\n      <a *ngFor=\"let o of poll.options\" (click)=\"doVote(o._id)\"><button class=\"btn btn-block btn-md btn-default\">{{o.name}}  <span class=\"badge\">{{o.voters.length}}</span></button></a>\n    </div>\n  </div>\n  \n\n</div>"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n  <h2> SignUp </h2>\n  <div class=\"row\">\n    \n    <div class=\"col-xs-12 col-md-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" #usernameInput>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password\" #passwordInput>\n      <input type=\"password\" class=\"form-control\"  placeholder=\"password again\" #passwordAgainInput>\n      <button class=\"btn btn-default btn-lg\" (click)=\"signup(usernameInput.value, passwordInput.value, passwordAgainInput.value)\">Finish</button>\n    </div>\n    <div class=\"col-xs-12 col-md-6\"></div>\n  </div>\n  \n</div>"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 >EX-VOTE</h1> \n    <p>Make Your Own Polls in a Flash</p>\n    <div *ngIf=\"!signed\">\n      <a routerLink=\"./login\"><button class=\"btn btn-primary btn-md\">Login</button></a>\n      <a routerLink=\"./signup\"><button class=\"btn btn-primary btn-md\">SignUp</button></a>\n    </div>\n    <div *ngIf=\"signed\">\n      <a routerLink=\"./addpoll\"><button class=\"btn btn-success btn-md\"><span class=\"glyphicon glyphicon-plus\"></span> Create a Poll</button></a>\n      <a routerLink=\"./yourpolls\"><button class=\"btn btn-primary btn-md\"><span class=\"glyphicon glyphicon-stats\"></span> Your Polls</button></a>\n      <button class=\"btn btn-warning btn-md\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Logout</button>\n    </div>\n    \n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3>Your Polls</h3>\n  <div class=\"alert alert-success\" *ngIf=\"deleted\">Successful Removal</div>\n  <div class=\"row\" *ngFor=\"let p of polls\">\n    <div class=\"col-xs-12 col-md-10\">\n      <a routerLink=\"/vote/polls/{{p._id}}\"><button class=\"btn btn-md btn-block btn-default\">{{p.title}}</button></a>\n    </div>\n    <div class=\"col-xs-3 col-md-1\">\n      <a routerLink=\"/vote/edit/{{p._id}}\"><button class=\"btn btn-md btn-primary\"><span class=\"glyphicon glyphicon-pencil\"></span> Edit</button></a>\n    </div>\n    <div class=\"col-xs-3 col-md-1\">\n      <button class=\"btn btn-md btn-danger\" (click)=\"deletePoll(p._id)\"><span class=\"glyphicon glyphicon-remove\"></span> Delete</button>\n    </div>\n  </div>\n  \n\n</div>"

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[601]);
//# sourceMappingURL=main.bundle.js.map