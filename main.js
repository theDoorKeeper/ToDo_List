/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javaScript/domHandler.js":
/*!**************************************!*\
  !*** ./src/javaScript/domHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domHandler\": () => (/* binding */ domHandler)\n/* harmony export */ });\n/* harmony import */ var _folderHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderHandler */ \"./src/javaScript/folderHandler.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/javaScript/form.js\");\n/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskHandler */ \"./src/javaScript/taskHandler.js\");\n/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniqueID */ \"./src/javaScript/uniqueID.js\");\n\n\n\n\n\n\nconst domHandler= (function() {   \n\n\n            const main=document.querySelector(\".main\");\n            const folderContainer=document.querySelector(\".folderContainer\");\n            const sideBar=document.querySelector(\".sidebar\")\n            const taskContainer=document.querySelector(\".taskListContainer\")\n\n            const _renderFolder=(shelf)=>{ shelf.forEach( folder => {\n                const renderTasks=()=>{\n                    folder.content.forEach(task => {\n                        const taskSkeleton=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"div\",task.id,[\"task\"],null);\n                        taskContainer.appendChild(taskSkeleton);\n\n\n\n                        const checkBtnContainer=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"label\",task.id,[\"switch\"],null);\n                        taskSkeleton.appendChild(checkBtnContainer);\n\n                        const checkBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"input\",task.id,[\"checkbox\"],null)\n                        checkBtn.setAttribute(\"type\",\"checkbox\");\n                        checkBtnContainer.appendChild(checkBtn);\n\n                        const slider=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"span\",task.id,[\"slider\",\"round\"],null)\n                        checkBtnContainer.appendChild(slider);\n\n\n\n                        taskSkeleton.innerHTML+=`<div> ${task.title}   Description: ${task.description}</div>  <div> Date : ${task.date} </div>`;\n\n\n                        const btnWrapper=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"div\",null,[\"buttonWrap\"],null)\n                        taskSkeleton.appendChild(btnWrapper);\n\n                        const editBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",task.id,[\"taskIcon\"]);\n                        const editIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",task.id,[\"fa\",\"fa-edit\"]);\n\n                        btnWrapper.appendChild(editBtn);\n                        editBtn.appendChild(editIcon);\n\n\n\n                        const confirmEditBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",task.id,[\"taskIcon\"],null)\n                        confirmEditBtn.style.display=\"none\";\n                        const confirmEditIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",task.id,[\"fa\",\"fa-check-circle\"]);\n\n                        \n                        btnWrapper.appendChild(confirmEditBtn);\n                        confirmEditBtn.appendChild(confirmEditIcon)\n\n\n                    \n                        const deleteBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",task.id,[\"taskIcon\"]);\n                        const deleteIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",task.id,[\"fa\",\"fa-trash\"]);\n                        \n                        btnWrapper.appendChild(deleteBtn);\n                        deleteBtn.appendChild(deleteIcon);\n\n                        deleteIcon.addEventListener(\"click\",e=>{\n                            taskContainer.innerHTML=\"\";\n                            _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.remove(e.target.id,folder);\n                            renderTasks();\n                        })\n                        editIcon.addEventListener(\"click\",e=>{\n                            ;(0,_form__WEBPACK_IMPORTED_MODULE_1__.openForm)();\n                            e.target.style.display=\"none\";\n                            confirmEditBtn.style.display=\"\";\n\n                        })\n\n                        confirmEditIcon.addEventListener(\"click\",e=>{\n                            taskContainer.innerHTML=\"\";\n                            e.target.style.display=\"none\";\n                            editBtn.style.display=\"\";\n                            console.log(e.target.id)\n                            _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.edit(e.target.id,folder);\n                            renderTasks();\n                            (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeForm)();\n                            \n\n                        })\n\n\n                        taskSkeleton.addEventListener(\"click\",e=>{\n                            const isButton = e.target.className === \"slider round\";\n                            if (!isButton) {\n                               return;\n                               }    \n\n                               taskSkeleton.classList.toggle(\"taskComplete\")\n\n\n                        })\n\n\n\n\n                    });\n                   }\n\n\n                    const eachFolder =(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"div\",folder.id,[\"folder\"],folder.name ) ;\n\n                     folderContainer.appendChild(eachFolder);\n\n                     eachFolder.addEventListener(\"click\",e=>{\n                        if(main.childNodes[9])\n                        {\n                             main.childNodes[9].remove()\n                                                     }                               \n                        const taskList=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"div\",e.target.id,[\"tasklist\"],null)\n                        main.appendChild(taskList);\n\n\n                        const addTask=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",folder.id,[\"taskIcon\",\"addTask\"],null);\n                        const addTaskIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",null,[\"fa\",\"fa-plus-square\"]);\n\n                        taskList.appendChild(addTask);\n                        addTask.appendChild(addTaskIcon)\n\n                        const confirmBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",folder.id,[\"taskIcon\"],null);\n                        const confirmIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",folder.id,[\"fa\",\"fa-check\"],null);\n                        confirmBtn.style.display=\"none\"; \n\n                        taskList.appendChild(confirmBtn);    \n                        confirmBtn.appendChild(confirmIcon)                         \n                        taskContainer.innerHTML=\"\";\n\n                        renderTasks();\n\n\n                        taskList.addEventListener('click', (e) => {\n                            const isButton = e.target.className === \"fa fa-plus-square\";\n                            if (!isButton) {\n                               return;\n                               } \n                               (0,_form__WEBPACK_IMPORTED_MODULE_1__.openForm)();\n                                \n                               confirmBtn.style.display=\"\";\n                            })                                     \n                            taskList.addEventListener('click', (e) => {\n                                const isButton = e.target.className === \"fa fa-check\";\n                                if (!isButton) {\n                                   return;\n                                   } \n                                   taskContainer.innerHTML=\"\";\n\n                                   _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.storeTask(e.target.id);\n                                   renderTasks();\n\n                                    (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeForm)();\n                                    confirmBtn.style.display=\"none\";\n                                })     \n\n\n\n\n                     })\n\n                     \n\n                    const deleteFolder = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",null,[\"taskIcon\"],null);\n                    const deleteFolderIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",null,[\"fa\",\"fa-trash\"],null);\n\n                    eachFolder.appendChild(deleteFolder);\n                    deleteFolder.appendChild(deleteFolderIcon);\n\n\n                     const editFolderBtn=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",null,[\"taskIcon\"],null);\n                     const editFolderIcon=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",null,[\"fa\",\"fa-pencil\"]);\n\n                     eachFolder.appendChild(editFolderBtn);\n                     editFolderBtn.appendChild(editFolderIcon);\n\n                    const eachFoldersConfirmEditbtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"button\",null,[\"taskIcon\"],null);\n                    const confirmIcon= (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(\"i\",null,[\"fa\",\"fa-check\"]);\n\n\n                    eachFoldersConfirmEditbtn.style.display=\"none\";\n                    eachFolder.appendChild(eachFoldersConfirmEditbtn);\n                    eachFoldersConfirmEditbtn.appendChild(confirmIcon);\n\n\n                                })  \n\n                     //ading event listener for each DELETE button using bubling\n                     sideBar.addEventListener('click', (e) => {\n                     const isButton = e.target.className === \"fa fa-trash\";\n                     if (!isButton) {\n                        return;\n                        } \n                        _folderHandler__WEBPACK_IMPORTED_MODULE_0__.folderHandler.deleteFolder(e.target.parentNode.parentNode.id);\n                        (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeEditProjectForm)();\n                     })\n                                   \n                      //ading event listener for each EDIT button using bubling\n                      sideBar.addEventListener('click', (e) => {\n                        const isButton = e.target.className === \"fa fa-check\";\n                        if (!isButton) {\n                           return;\n                           }\n                           console.log(e.target.parentNode.parentNode.childNodes[2])\n                           e.target.parentNode.parentNode.childNodes[2].style.display=\"\"\n                            e.target.style.display = \"none\";\n                            _folderHandler__WEBPACK_IMPORTED_MODULE_0__.folderHandler.edit(e.target.parentNode.parentNode.id);\n                            (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeEditProjectForm)()\n                        })\n\n                        //ading event listener for each CONFIRM button using bubling\n\n                        sideBar.addEventListener('click', (e) => {\n                            const isButton = e.target.className === \"fa fa-pencil\";\n                            if (!isButton) {\n                               return;\n                               } \n                               e.target.parentNode.parentNode.childNodes[3].style.display=\"\"\n                                e.target.style.display = \"none\";\n                                \n                                (0,_form__WEBPACK_IMPORTED_MODULE_1__.openEditProjectForm)();\n                            })\n\n\n\n    \n\n\n                 }\n\n\n\n            const createFolderDivs = (shelf)=>{\n                folderContainer.innerHTML=\"\";\n                _renderFolder(shelf);\n            }   \n            \n            \n\n\n            \n\n            \n  \n\n\n\n\n         return {createFolderDivs}   \n\n\n})();\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/domHandler.js?");

/***/ }),

/***/ "./src/javaScript/folderCLass.js":
/*!***************************************!*\
  !*** ./src/javaScript/folderCLass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"folder\": () => (/* binding */ folder)\n/* harmony export */ });\n/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueID */ \"./src/javaScript/uniqueID.js\");\n\n\nclass folder{\n    constructor(name,id,content){\n        this.name=name;\n        this.id=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_0__.ID)();\n        this.content=[];\n\n    }\n}  \n\n\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/folderCLass.js?");

/***/ }),

/***/ "./src/javaScript/folderHandler.js":
/*!*****************************************!*\
  !*** ./src/javaScript/folderHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"folderHandler\": () => (/* binding */ folderHandler)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/javaScript/index.js\");\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ \"./src/javaScript/domHandler.js\");\n/* harmony import */ var _folderCLass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folderCLass */ \"./src/javaScript/folderCLass.js\");\n\n\n\n\nconst folderHandler=(function() {   \n      \n      const _getTitle = ()=>{\n        return document.querySelector(\"#titleProject\").value\n      }\n\n\n\n      const _generateFolder = ()=>{\n        return  new _folderCLass__WEBPACK_IMPORTED_MODULE_2__.folder(_getTitle());\n      }\n\n\n\n      const storeFolder = (shelf)=>{\n          shelf.push(_generateFolder())\n      }\n\n\n      const _getEditedTitle=()=>{\n        return document.querySelector(\"#editTitleProject\").value\n      }\n\n\n      const edit=(id)=>{\n        for( let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.shelf.length; i++){ \n          \n            if ( ___WEBPACK_IMPORTED_MODULE_0__.shelf[i].id === id) { \n        \n                ___WEBPACK_IMPORTED_MODULE_0__.shelf[i].name=_getEditedTitle();\n            }\n        \n        }\n        _domHandler__WEBPACK_IMPORTED_MODULE_1__.domHandler.createFolderDivs(___WEBPACK_IMPORTED_MODULE_0__.shelf);\n    }\n      \n\n\n      const deleteFolder = (id)=>{ \n          for( let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.shelf.length; i++){ \n          \n              if ( ___WEBPACK_IMPORTED_MODULE_0__.shelf[i].id === id) { \n          \n                  ___WEBPACK_IMPORTED_MODULE_0__.shelf.splice(i, 1); \n              }\n          \n          }\n          _domHandler__WEBPACK_IMPORTED_MODULE_1__.domHandler.createFolderDivs(___WEBPACK_IMPORTED_MODULE_0__.shelf);\n      }\n\n\nreturn {storeFolder,edit,deleteFolder}\n})();\n\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/folderHandler.js?");

/***/ }),

/***/ "./src/javaScript/form.js":
/*!********************************!*\
  !*** ./src/javaScript/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openForm\": () => (/* binding */ openForm),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"openProjectForm\": () => (/* binding */ openProjectForm),\n/* harmony export */   \"closeProjectForm\": () => (/* binding */ closeProjectForm),\n/* harmony export */   \"openEditProjectForm\": () => (/* binding */ openEditProjectForm),\n/* harmony export */   \"closeEditProjectForm\": () => (/* binding */ closeEditProjectForm)\n/* harmony export */ });\nfunction openForm() {\n    document.getElementById(\"myForm\").style.display = \"block\";\n  }\n  \n  function closeForm() {\n    document.getElementById(\"myForm\").style.display = \"none\";\n  } \n  function openProjectForm() {\n    document.getElementById(\"myProjectForm\").style.display = \"block\";\n  }\n  \n  function closeProjectForm() {\n    document.getElementById(\"myProjectForm\").style.display = \"none\";\n\n  } \n  function openEditProjectForm() {\n    document.getElementById(\"myEditProjectForm\").style.display = \"block\";\n  }\n  function closeEditProjectForm() {\n    document.getElementById(\"myEditProjectForm\").style.display = \"none\";\n\n  } \n\n  \n\n//# sourceURL=webpack://todolist/./src/javaScript/form.js?");

/***/ }),

/***/ "./src/javaScript/index.js":
/*!*********************************!*\
  !*** ./src/javaScript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shelf\": () => (/* binding */ shelf)\n/* harmony export */ });\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ \"./src/javaScript/domHandler.js\");\n/* harmony import */ var _folderHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folderHandler */ \"./src/javaScript/folderHandler.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/javaScript/form.js\");\n/* Interface should have :\nleft banner with button to add Projects ;\nmiddle banner to add To dos, \nTO DOS must have : \nTitle , \nDescription,\nDate,\nchecklist,\npriority\n\n\n\nUSE A LIST OF TASKS AND LOOP TO DISPLAY IT\n\nMAYBE MAKE A PROJECT CLASS\n*/\n\n\n\n\n\n\n\n\nlet shelf=[];\n\n\n\ndocument.querySelector(\"#newProject\").addEventListener(\"click\",(e)=>{\n/* shelf.push(new folder(\"movies to watch\",null));\nconsole.log(shelf) */\n   (0,_form__WEBPACK_IMPORTED_MODULE_2__.openProjectForm)()\n   console.log(shelf)\n})\n\n\n\ndocument.querySelector(\".Projectcancel\").addEventListener(\"click\",(e)=>{\n   e.preventDefault()\n   ;(0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)()\n})\n\ndocument.querySelector(\".Projectadd\").addEventListener(\"click\",(e)=>{\n   e.preventDefault();\n   _folderHandler__WEBPACK_IMPORTED_MODULE_1__.folderHandler.storeFolder(shelf);\n   _domHandler__WEBPACK_IMPORTED_MODULE_0__.domHandler.createFolderDivs(shelf);\n   (0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)();\n   console.log(shelf)\n})\n\n\n/* document.querySelector(\".open-button\").addEventListener(\"click\",(e)=>{\n   \n   openForm()\n}) */\n\n/* \n document.querySelector(\".cancel\").addEventListener(\"click\",(e)=>{\n   e.preventDefault()\n   closeForm()\n})  */\n\n/*  document.querySelector(\".add\").addEventListener(\"click\",(e)=>{\n   e.preventDefault();\n   taskHandler.storeTask(id)\n   console.log(shelf)\n\n    shelf[0].content.push(new Todo(\"lordof the rings\",\"great movie\"));\n   console.log(shelf[0]) \n\n})  */\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/index.js?");

/***/ }),

/***/ "./src/javaScript/taskClass.js":
/*!*************************************!*\
  !*** ./src/javaScript/taskClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueID */ \"./src/javaScript/uniqueID.js\");\n\n\nclass Task{\n    constructor(title,description,date,check){\n        this.title=title;\n        this.description=description;\n        this.date=date;\n        this.check=false;\n        this.id=(0,_uniqueID__WEBPACK_IMPORTED_MODULE_0__.ID)();\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/taskClass.js?");

/***/ }),

/***/ "./src/javaScript/taskHandler.js":
/*!***************************************!*\
  !*** ./src/javaScript/taskHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskHandler\": () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/javaScript/index.js\");\n/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskClass */ \"./src/javaScript/taskClass.js\");\n\n\n\nconst taskHandler =(function() {   \n      \n     const _getTaskInfo =()=>{\n        return [document.querySelector(\"#title\").value,document.querySelector(\"#description\").value,document.querySelector(\"#date\").value]\n      }\n\n     const _generateTask =()=>{\n          return new _taskClass__WEBPACK_IMPORTED_MODULE_1__.Task(..._getTaskInfo())\n      }\n\n      const edit=(id,folder)=>{\n        for( let i = 0; i < folder.content.length; i++){ \n          \n            if ( folder.content[i].id === id) { \n        \n                folder.content[i]=_generateTask();\n            }\n        \n        }\n    }\n\n\n    const remove = (id,folder)=>{ \n      for( let i = 0; i < folder.content.length; i++){ \n      \n          if ( folder.content[i].id === id) { \n      \n              folder.content.splice(i, 1); \n          }\n      \n      }\n  \n  }\n      \n      const storeTask=(id)=>{\n        let folder = ___WEBPACK_IMPORTED_MODULE_0__.shelf.find(folder=>folder.id===id);\n        folder.content.push(_generateTask())\n      }\n        return {storeTask,edit,remove}\n\n})();\n\n\n//# sourceURL=webpack://todolist/./src/javaScript/taskHandler.js?");

/***/ }),

/***/ "./src/javaScript/uniqueID.js":
/*!************************************!*\
  !*** ./src/javaScript/uniqueID.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ID\": () => (/* binding */ ID),\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst ID = function () {\n    // Math.random should be unique because of its seeding algorithm.\n    // Convert it to base 36 (numbers + letters), and grab the first 9 characters\n    // after the decimal.\n    return '_' + Math.random().toString(36).substr(2, 9)+1;\n  };\n\n\n  const createHtmlElement=(type, id, arrayClasses, content) => {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses)\n      arrayClasses.forEach((myClass) => element.classList.add(myClass));\n  \n    if (content) element.innerText = content;\n  \n    return element;\n  }\n\n  \n\n//# sourceURL=webpack://todolist/./src/javaScript/uniqueID.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javaScript/index.js");
/******/ 	
/******/ })()
;