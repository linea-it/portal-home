(this["webpackJsonpportal-home"] = this["webpackJsonpportal-home"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 10;\n  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-top: 120px!important;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.MuiAppBar-colorPrimary {\n  background-color: #34465D!important;\n  color: #5C6B7D;\n}\n\n.MuiTabs-flexContainer {\n  background-color: #5c6b7d;\n}\n\n.MuiCard-root {\n  max-width: 1000px!important;\n}\n\n.MuiButtonGroup-groupedHorizontal {\n  border-right: 1px solid rgba(0, 0, 0, 0.23);\n  border-color: black!important;\n  color: white!important;\n}\n\n.MuiButtonGroup-groupedTextHorizontal:not(:last-child) {\n  padding-left: 20px!important;\n  padding-right: 20px;\n}\n\n.MuiButtonGroup-groupedHorizontal:not(:first-child) {\n  padding-left: 20px!important;\n  padding-right: 20px;\n}\n\n.hover11 figure img {\n\topacity: 1;\n\ttransition: .3s ease-in-out;\n}\n.hover11 figure:hover img {\n\topacity: .5;\n}\n\n.MuiCardMedia-root {\n  opacity: 1;\n\ttransition: .3s ease-in-out;\n  width: 70%;\n  margin-left: 15%;\n}\n\n.MuiCardMedia-root:hover {\n\topacity: .5;\n}\n\np {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 40px;\n}\n\nh2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 60px;\n}\n\n.MuiTypography-h6 {\n  font-size: 1.5rem!important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/App.js";





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/img/icon-des.png":
/*!*************************************!*\
  !*** ./src/assets/img/icon-des.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/img/linea-logo-mini.png":
/*!********************************************!*\
  !*** ./src/assets/img/linea-logo-mini.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/img/linea-logo.png":
/*!***************************************!*\
  !*** ./src/assets/img/linea-logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linea-logo.c8f96244.png";

/***/ }),

/***/ "./src/assets/json/version.json":
/*!**************************************!*\
  !*** ./src/assets/json/version.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/components/Card.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
function MediaCard({
  card
}) {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: card.uri,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.media,
    image: card.uriImage,
    title: card.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, card.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "small",
    href: card.uri,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Acessar")));
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _assets_img_linea_logo_mini_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/linea-logo-mini.png */ "./src/assets/img/linea-logo-mini.png");
/* harmony import */ var _assets_img_linea_logo_mini_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_linea_logo_mini_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/json/version.json */ "./src/assets/json/version.json");
var _assets_json_version_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/version.json */ "./src/assets/json/version.json", 1);
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/components/Footer.js";







function Footer() {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
    root: {
      width: '100%',
      float: 'right',
      height: 64
    },
    drawer: {
      top: 'auto',
      bottom: 0,
      backgroundColor: '#596C7B',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    grow: {
      flexGrow: 1
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    versionLink: {
      color: '#d2cf00',
      textDecoration: 'none',
      fontSize: '0.9rem',
      cursor: 'pointer'
    },
    logoLink: {
      lineHeight: 0
    }
  }));
  const classes = useStyles();

  const openGithub = vlink => {
    if (vlink) {
      window.open(vlink);
    }
  };

  const instance =  false ? undefined // eslint-disable-line
  : "Developer";
  let version = '--';
  let vlink = null;

  if (Object.entries(_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__).length !== 0 && _assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.constructor === Object) {
    if (_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.tag) {
      version = `${_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.tag}`;
      vlink = `${_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.url}`;
    } else {
      version = `${_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.sha.substring(0, 7)}`;
      vlink = `${_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.url.replace(/.git$/, '')}/commit/${_assets_json_version_json__WEBPACK_IMPORTED_MODULE_5__.sha}`;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "fixed",
    className: classes.drawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "inherit",
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, instance, ' ', "Home:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: () => openGithub(vlink),
    className: classes.versionLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, version)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Powered by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.linea.gov.br/",
    target: "blank",
    className: classes.logoLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_linea_logo_mini_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "LIneA",
    alt: "LineA",
    style: {
      cursor: 'pointer',
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Grid.js":
/*!********************************!*\
  !*** ./src/components/Grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullWidthGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Plataformas_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plataformas_json.js */ "./src/components/Plataformas_json.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/components/Grid.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  }
}));
function FullWidthGrid() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "space-around",
    spacing: 3,
    key: "gridPrincipal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _Plataformas_json_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(card => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    key: card.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    card: card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _assets_img_icon_des_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/icon-des.png */ "./src/assets/img/icon-des.png");
/* harmony import */ var _assets_img_icon_des_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icon_des_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/components/Header.js";





const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  AppBar: {
    boxShadow: 'none'
  }
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
      className: classes.AppBar,
      position: "fixed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
      variant: "dense",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "Menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_img_icon_des_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Portal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h6",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "DES Science Portal")));
  }

}

Header.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./src/components/Grid.js");
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/components/Main.js";


function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}

/***/ }),

/***/ "./src/components/Plataformas_json.js":
/*!********************************************!*\
  !*** ./src/components/Plataformas_json.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/img/linea-logo.png */ "./src/assets/img/linea-logo.png");
/* harmony import */ var _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0__);

const uriBase = "http://scienceportal-dev.linea.gov.br/";
/* harmony default export */ __webpack_exports__["default"] = ([{
  "id": 1,
  "uriImage": _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  "title": "Dashboard",
  //"description": "Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum. ",
  "uri": `${uriBase}dashboard/`
}, {
  "id": 2,
  "uriImage": _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  "title": "Monitor",
  //"description": "A Amazon Web Services oferece serviços de computação em nuvem confiáveis, escaláveis e acessíveis. ",
  "uri": `${uriBase}monitor/`
}, {
  "id": 3,
  "uriImage": _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  "title": "Science Products",
  //"description": "Google Cloud Platform é uma suíte de computação em nuvem oferecida pelo Google. ",
  "uri": `${uriBase}science-products/`
}, {
  "id": 4,
  "uriImage": _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  "title": "User Interfaces",
  //"description": "Google Cloud Platform é uma suíte de computação em nuvem oferecida pelo Google. ",
  "uri": `${uriBase}user-interface/`
}, {
  "id": 5,
  "uriImage": _src_assets_img_linea_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  "title": "My Workspace",
  //"description": "Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum, Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum. ",
  "uri": `${uriBase}my-workspace/`
}]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/index.css */ "./src/assets/css/index.css");
/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/fernando.silva/Projetos/portal-home/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/fernando.silva/Projetos/portal-home/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/fernando.silva/Projetos/portal-home/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/fernando.silva/Projetos/portal-home/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map