/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let tasks = [\r\n  {\r\n    description: \"do laundry\",\r\n    completed: false,\r\n    index: 0\r\n  },\r\n  {\r\n    description: \"do dishes\",\r\n    completed: false,\r\n    index: 1\r\n  },\r\n  {\r\n    description: \"eat pizza\",\r\n    completed: false,\r\n    index: 2\r\n  }\r\n];\r\n\r\nconst todoList = document.getElementsByClassName('todo-list')\r\n\r\nconst populateList = () => {\r\n  tasks.forEach((task) => {\r\n    const li = document.createElement('li');\r\n    li.innerText = task.description;\r\n\r\n    todoList.appendChild(li);\r\n  });\r\n}\r\n\r\npopulateList();\r\n\n\n//# sourceURL=webpack://into-to-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;