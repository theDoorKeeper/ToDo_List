/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javaScript/domHandler.js":
/*!**************************************!*\
  !*** ./src/javaScript/domHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHandler": () => (/* binding */ domHandler)
/* harmony export */ });
/* harmony import */ var _folderHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderHandler */ "./src/javaScript/folderHandler.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/javaScript/form.js");
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskHandler */ "./src/javaScript/taskHandler.js");
/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniqueID */ "./src/javaScript/uniqueID.js");
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */





const domHandler = (function () {
  const main = document.querySelector('.main');
  const folderContainer = document.querySelector('.folderContainer');
  const sideBar = document.querySelector('.sidebar');
  const taskContainer = document.querySelector('.taskListContainer');

  const renderFolder = (shelf) => {
    shelf.forEach((folder) => {
      const renderTasks = () => {
        folder.content.forEach((task) => {
          const taskSkeleton = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', task.id, ['task'], null);
          taskContainer.appendChild(taskSkeleton);

          const checkBtnContainer = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('label', task.id, ['switch'], null);
          taskSkeleton.appendChild(checkBtnContainer);

          const checkBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('input', task.id, ['checkbox'], null);
          checkBtn.setAttribute('type', 'checkbox');
          checkBtnContainer.appendChild(checkBtn);

          const slider = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('span', task.id, ['slider', 'round'], null);
          checkBtnContainer.appendChild(slider);

          taskSkeleton.innerHTML += `<div> ${task.title}   Description: ${task.description}</div>  <div> Date : ${task.date} </div>`;

          const btnWrapper = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', null, ['buttonWrap'], null);
          taskSkeleton.appendChild(btnWrapper);

          const editBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', task.id, ['taskIcon']);
          const editIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', task.id, ['fa', 'fa-edit']);

          btnWrapper.appendChild(editBtn);
          editBtn.appendChild(editIcon);

          const confirmEditBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', task.id, ['taskIcon'], null);
          confirmEditBtn.style.display = 'none';
          const confirmEditIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', task.id, ['fa', 'fa-check-circle']);

          btnWrapper.appendChild(confirmEditBtn);
          confirmEditBtn.appendChild(confirmEditIcon);

          const deleteBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', task.id, ['taskIcon']);
          const deleteIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', task.id, ['fa', 'fa-trash']);

          btnWrapper.appendChild(deleteBtn);
          deleteBtn.appendChild(deleteIcon);

          deleteIcon.addEventListener('click', (e) => {
            taskContainer.innerHTML = '';
            _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.remove(e.target.id, folder);
            renderTasks();
          });
          editIcon.addEventListener('click', (e) => {
            (0,_form__WEBPACK_IMPORTED_MODULE_1__.openForm)();
            e.target.style.display = 'none';
            confirmEditBtn.style.display = '';
          });

          confirmEditIcon.addEventListener('click', (e) => {
            taskContainer.innerHTML = '';
            e.target.style.display = 'none';
            editBtn.style.display = '';
            _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.edit(e.target.id, folder);
            renderTasks();
            (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
          });

          taskSkeleton.addEventListener('click', (e) => {
            const isButton = e.target.className === 'slider round';
            if (!isButton) {
              return;
            }

            taskSkeleton.classList.toggle('taskComplete');
          });
        });
      };

      const eachFolder = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', folder.id, ['folder'], folder.name);

      folderContainer.appendChild(eachFolder);

      eachFolder.addEventListener('click', (e) => {
        if (main.childNodes[9]) {
          main.childNodes[9].remove();
        }
        const taskList = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', e.target.id, ['tasklist'], null);
        main.appendChild(taskList);

        const addTask = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', folder.id, ['taskIcon', 'addTask'], null);
        const addTaskIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', null, ['fa', 'fa-plus-square']);

        taskList.appendChild(addTask);
        addTask.appendChild(addTaskIcon);

        const confirmBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', folder.id, ['taskIcon'], null);
        const confirmIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', folder.id, ['fa', 'fa-check'], null);
        confirmBtn.style.display = 'none';

        taskList.appendChild(confirmBtn);
        confirmBtn.appendChild(confirmIcon);
        taskContainer.innerHTML = '';

        renderTasks();

        taskList.addEventListener('click', (e) => {
          const isButton = e.target.className === 'fa fa-plus-square';
          if (!isButton) {
            return;
          }
          (0,_form__WEBPACK_IMPORTED_MODULE_1__.openForm)();

          confirmBtn.style.display = '';
        });
        taskList.addEventListener('click', (e) => {
          const isButton = e.target.className === 'fa fa-check';
          if (!isButton) {
            return;
          }
          taskContainer.innerHTML = '';

          _taskHandler__WEBPACK_IMPORTED_MODULE_2__.taskHandler.storeTask(e.target.id);
          renderTasks();

          (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeForm)();
          confirmBtn.style.display = 'none';
        });
      });

      const deleteFolder = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', null, ['taskIcon'], null);
      const deleteFolderIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', null, ['fa', 'fa-trash'], null);

      eachFolder.appendChild(deleteFolder);
      deleteFolder.appendChild(deleteFolderIcon);

      const editFolderBtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', null, ['taskIcon'], null);
      const editFolderIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', null, ['fa', 'fa-pencil']);

      eachFolder.appendChild(editFolderBtn);
      editFolderBtn.appendChild(editFolderIcon);

      const eachFoldersConfirmEditbtn = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', null, ['taskIcon'], null);
      const confirmIcon = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('i', null, ['fa', 'fa-check']);

      eachFoldersConfirmEditbtn.style.display = 'none';
      eachFolder.appendChild(eachFoldersConfirmEditbtn);
      eachFoldersConfirmEditbtn.appendChild(confirmIcon);
    });

    // ading event listener for each DELETE button using bubling
    sideBar.addEventListener('click', (e) => {
      const isButton = e.target.className === 'fa fa-trash';
      if (!isButton) {
        return;
      }
      _folderHandler__WEBPACK_IMPORTED_MODULE_0__.folderHandler.deleteFolder(e.target.parentNode.parentNode.id);
      (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeEditProjectForm)();
    });

    // ading event listener for each EDIT button using bubling
    sideBar.addEventListener('click', (e) => {
      const isButton = e.target.className === 'fa fa-check';
      if (!isButton) {
        return;
      }
      e.target.parentNode.parentNode.childNodes[2].style.display = '';
      e.target.style.display = 'none';
      _folderHandler__WEBPACK_IMPORTED_MODULE_0__.folderHandler.edit(e.target.parentNode.parentNode.id);
      (0,_form__WEBPACK_IMPORTED_MODULE_1__.closeEditProjectForm)();
    });

    // ading event listener for each CONFIRM button using bubling

    sideBar.addEventListener('click', (e) => {
      const isButton = e.target.className === 'fa fa-pencil';
      if (!isButton) {
        return;
      }
      e.target.parentNode.parentNode.childNodes[3].style.display = '';
      e.target.style.display = 'none';

      (0,_form__WEBPACK_IMPORTED_MODULE_1__.openEditProjectForm)();
    });
  };

  const createFolderDivs = (shelf) => {
    folderContainer.innerHTML = '';
    renderFolder(shelf);
  };

  return { createFolderDivs };
}());



/***/ }),

/***/ "./src/javaScript/folderCLass.js":
/*!***************************************!*\
  !*** ./src/javaScript/folderCLass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folder": () => (/* binding */ folder)
/* harmony export */ });
/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueID */ "./src/javaScript/uniqueID.js");


class folder {
  constructor(name) {
    this.name = name;
    this.id = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_0__.ID)();
    this.content = [];
  }
}




/***/ }),

/***/ "./src/javaScript/folderHandler.js":
/*!*****************************************!*\
  !*** ./src/javaScript/folderHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folderHandler": () => (/* binding */ folderHandler)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/javaScript/index.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ "./src/javaScript/domHandler.js");
/* harmony import */ var _folderCLass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folderCLass */ "./src/javaScript/folderCLass.js");




const folderHandler = (function () {
  const getTitle = () => document.querySelector('#titleProject').value;

  const generateFolder = () => new _folderCLass__WEBPACK_IMPORTED_MODULE_2__.folder(getTitle());

  const storeFolder = (shelf) => {
    shelf.push(generateFolder());
  };

  const getEditedTitle = () => document.querySelector('#editTitleProject').value;

  const edit = (id) => {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.shelf.length; i++) {
      if (_index__WEBPACK_IMPORTED_MODULE_0__.shelf[i].id === id) {
        _index__WEBPACK_IMPORTED_MODULE_0__.shelf[i].name = getEditedTitle();
      }
    }
    _domHandler__WEBPACK_IMPORTED_MODULE_1__.domHandler.createFolderDivs(_index__WEBPACK_IMPORTED_MODULE_0__.shelf);
  };

  const deleteFolder = (id) => {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.shelf.length; i++) {
      if (_index__WEBPACK_IMPORTED_MODULE_0__.shelf[i].id === id) {
        _index__WEBPACK_IMPORTED_MODULE_0__.shelf.splice(i, 1);
      }
    }
    _domHandler__WEBPACK_IMPORTED_MODULE_1__.domHandler.createFolderDivs(_index__WEBPACK_IMPORTED_MODULE_0__.shelf);
  };

  return { storeFolder, edit, deleteFolder };
}());




/***/ }),

/***/ "./src/javaScript/form.js":
/*!********************************!*\
  !*** ./src/javaScript/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "openEditProjectForm": () => (/* binding */ openEditProjectForm),
/* harmony export */   "closeEditProjectForm": () => (/* binding */ closeEditProjectForm)
/* harmony export */ });
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}
function openProjectForm() {
  document.getElementById('myProjectForm').style.display = 'block';
}

function closeProjectForm() {
  document.getElementById('myProjectForm').style.display = 'none';
}
function openEditProjectForm() {
  document.getElementById('myEditProjectForm').style.display = 'block';
}
function closeEditProjectForm() {
  document.getElementById('myEditProjectForm').style.display = 'none';
}




/***/ }),

/***/ "./src/javaScript/index.js":
/*!*********************************!*\
  !*** ./src/javaScript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shelf": () => (/* binding */ shelf)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/javaScript/domHandler.js");
/* harmony import */ var _folderHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folderHandler */ "./src/javaScript/folderHandler.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/javaScript/form.js");




const shelf = [];

document.querySelector('#newProject').addEventListener('click', () => {
/* shelf.push(new folder('movies to watch',null));
console.log(shelf) */
  (0,_form__WEBPACK_IMPORTED_MODULE_2__.openProjectForm)();
});

document.querySelector('.Projectcancel').addEventListener('click', (e) => {
  e.preventDefault();
  (0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)();
});

document.querySelector('.Projectadd').addEventListener('click', (e) => {
  e.preventDefault();
  _folderHandler__WEBPACK_IMPORTED_MODULE_1__.folderHandler.storeFolder(shelf);
  _domHandler__WEBPACK_IMPORTED_MODULE_0__.domHandler.createFolderDivs(shelf);
  (0,_form__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm)();
});




/***/ }),

/***/ "./src/javaScript/taskClass.js":
/*!*************************************!*\
  !*** ./src/javaScript/taskClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueID */ "./src/javaScript/uniqueID.js");


class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.check = false;
    this.id = (0,_uniqueID__WEBPACK_IMPORTED_MODULE_0__.ID)();
  }
}




/***/ }),

/***/ "./src/javaScript/taskHandler.js":
/*!***************************************!*\
  !*** ./src/javaScript/taskHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskHandler": () => (/* binding */ taskHandler)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/javaScript/index.js");
/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskClass */ "./src/javaScript/taskClass.js");



const taskHandler = (function () {
  const getTaskInfo = () => [document.querySelector('#title').value, document.querySelector('#description').value, document.querySelector('#date').value];

  const generateTask = () => new _taskClass__WEBPACK_IMPORTED_MODULE_1__.Task(...getTaskInfo());

  const edit = (id, folder) => {
    for (let i = 0; i < folder.content.length; i++) {
      if (folder.content[i].id === id) {
        folder.content[i] = generateTask();
      }
    }
  };

  const remove = (id, folder) => {
    for (let i = 0; i < folder.content.length; i++) {
      if (folder.content[i].id === id) {
        folder.content.splice(i, 1);
      }
    }
  };

  const storeTask = (id) => {
    const folder = ___WEBPACK_IMPORTED_MODULE_0__.shelf.find((folder) => folder.id === id);
    folder.content.push(generateTask());
  };
  return { storeTask, edit, remove };
}());



/***/ }),

/***/ "./src/javaScript/uniqueID.js":
/*!************************************!*\
  !*** ./src/javaScript/uniqueID.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ ID),
/* harmony export */   "createHtmlElement": () => (/* binding */ createHtmlElement)
/* harmony export */ });
const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}${1}`;
};

const createHtmlElement = (type, id, arrayClasses, content) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qYXZhU2NyaXB0L2RvbUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvamF2YVNjcmlwdC9mb2xkZXJDTGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qYXZhU2NyaXB0L2ZvbGRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvamF2YVNjcmlwdC9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2phdmFTY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvamF2YVNjcmlwdC90YXNrQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvamF2YVNjcmlwdC90YXNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qYXZhU2NyaXB0L3VuaXF1ZUlELmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZ0Q7QUFHaEM7QUFDNEI7QUFDRzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0REFBaUI7QUFDaEQ7O0FBRUEsb0NBQW9DLDREQUFpQjtBQUNyRDs7QUFFQSwyQkFBMkIsNERBQWlCO0FBQzVDO0FBQ0E7O0FBRUEs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Q0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgZm9sZGVySGFuZGxlciB9IGZyb20gJy4vZm9sZGVySGFuZGxlcic7XG5pbXBvcnQge1xuICBvcGVuRWRpdFByb2plY3RGb3JtLCBjbG9zZUVkaXRQcm9qZWN0Rm9ybSwgb3BlbkZvcm0sIGNsb3NlRm9ybSxcbn0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IHRhc2tIYW5kbGVyIH0gZnJvbSAnLi90YXNrSGFuZGxlcic7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vdW5pcXVlSUQnO1xuXG5jb25zdCBkb21IYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJDb250YWluZXInKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3RDb250YWluZXInKTtcblxuICBjb25zdCByZW5kZXJGb2xkZXIgPSAoc2hlbGYpID0+IHtcbiAgICBzaGVsZi5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgICAgICBmb2xkZXIuY29udGVudC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza1NrZWxldG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIHRhc2suaWQsIFsndGFzayddLCBudWxsKTtcbiAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTa2VsZXRvbik7XG5cbiAgICAgICAgICBjb25zdCBjaGVja0J0bkNvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsYWJlbCcsIHRhc2suaWQsIFsnc3dpdGNoJ10sIG51bGwpO1xuICAgICAgICAgIHRhc2tTa2VsZXRvbi5hcHBlbmRDaGlsZChjaGVja0J0bkNvbnRhaW5lcik7XG5cbiAgICAgICAgICBjb25zdCBjaGVja0J0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsIHRhc2suaWQsIFsnY2hlY2tib3gnXSwgbnVsbCk7XG4gICAgICAgICAgY2hlY2tCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgY2hlY2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuXG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCB0YXNrLmlkLCBbJ3NsaWRlcicsICdyb3VuZCddLCBudWxsKTtcbiAgICAgICAgICBjaGVja0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuXG4gICAgICAgICAgdGFza1NrZWxldG9uLmlubmVySFRNTCArPSBgPGRpdj4gJHt0YXNrLnRpdGxlfSAgIERlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259PC9kaXY+ICA8ZGl2PiBEYXRlIDogJHt0YXNrLmRhdGV9IDwvZGl2PmA7XG5cbiAgICAgICAgICBjb25zdCBidG5XcmFwcGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIG51bGwsIFsnYnV0dG9uV3JhcCddLCBudWxsKTtcbiAgICAgICAgICB0YXNrU2tlbGV0b24uYXBwZW5kQ2hpbGQoYnRuV3JhcHBlcik7XG5cbiAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIHRhc2suaWQsIFsndGFza0ljb24nXSk7XG4gICAgICAgICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaScsIHRhc2suaWQsIFsnZmEnLCAnZmEtZWRpdCddKTtcblxuICAgICAgICAgIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgICAgICAgICBjb25zdCBjb25maXJtRWRpdEJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCB0YXNrLmlkLCBbJ3Rhc2tJY29uJ10sIG51bGwpO1xuICAgICAgICAgIGNvbmZpcm1FZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgY29uc3QgY29uZmlybUVkaXRJY29uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2knLCB0YXNrLmlkLCBbJ2ZhJywgJ2ZhLWNoZWNrLWNpcmNsZSddKTtcblxuICAgICAgICAgIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoY29uZmlybUVkaXRCdG4pO1xuICAgICAgICAgIGNvbmZpcm1FZGl0QnRuLmFwcGVuZENoaWxkKGNvbmZpcm1FZGl0SWNvbik7XG5cbiAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgdGFzay5pZCwgWyd0YXNrSWNvbiddKTtcbiAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2knLCB0YXNrLmlkLCBbJ2ZhJywgJ2ZhLXRyYXNoJ10pO1xuXG4gICAgICAgICAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRhc2tIYW5kbGVyLnJlbW92ZShlLnRhcmdldC5pZCwgZm9sZGVyKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3BlbkZvcm0oKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBjb25maXJtRWRpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25maXJtRWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIHRhc2tIYW5kbGVyLmVkaXQoZS50YXJnZXQuaWQsIGZvbGRlcik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0YXNrU2tlbGV0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNCdXR0b24gPSBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzbGlkZXIgcm91bmQnO1xuICAgICAgICAgICAgaWYgKCFpc0J1dHRvbikge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tTa2VsZXRvbi5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrQ29tcGxldGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlYWNoRm9sZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGZvbGRlci5pZCwgWydmb2xkZXInXSwgZm9sZGVyLm5hbWUpO1xuXG4gICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWFjaEZvbGRlcik7XG5cbiAgICAgIGVhY2hGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAobWFpbi5jaGlsZE5vZGVzWzldKSB7XG4gICAgICAgICAgbWFpbi5jaGlsZE5vZGVzWzldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGUudGFyZ2V0LmlkLCBbJ3Rhc2tsaXN0J10sIG51bGwpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIGZvbGRlci5pZCwgWyd0YXNrSWNvbicsICdhZGRUYXNrJ10sIG51bGwpO1xuICAgICAgICBjb25zdCBhZGRUYXNrSWNvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpJywgbnVsbCwgWydmYScsICdmYS1wbHVzLXNxdWFyZSddKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICAgICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cbiAgICAgICAgY29uc3QgY29uZmlybUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBmb2xkZXIuaWQsIFsndGFza0ljb24nXSwgbnVsbCk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1JY29uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2knLCBmb2xkZXIuaWQsIFsnZmEnLCAnZmEtY2hlY2snXSwgbnVsbCk7XG4gICAgICAgIGNvbmZpcm1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICAgICAgY29uZmlybUJ0bi5hcHBlbmRDaGlsZChjb25maXJtSWNvbik7XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgcmVuZGVyVGFza3MoKTtcblxuICAgICAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNCdXR0b24gPSBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdmYSBmYS1wbHVzLXNxdWFyZSc7XG4gICAgICAgICAgaWYgKCFpc0J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcGVuRm9ybSgpO1xuXG4gICAgICAgICAgY29uZmlybUJ0bi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNCdXR0b24gPSBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdmYSBmYS1jaGVjayc7XG4gICAgICAgICAgaWYgKCFpc0J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgdGFza0hhbmRsZXIuc3RvcmVUYXNrKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICByZW5kZXJUYXNrcygpO1xuXG4gICAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgICAgY29uZmlybUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZWxldGVGb2xkZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgWyd0YXNrSWNvbiddLCBudWxsKTtcbiAgICAgIGNvbnN0IGRlbGV0ZUZvbGRlckljb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaScsIG51bGwsIFsnZmEnLCAnZmEtdHJhc2gnXSwgbnVsbCk7XG5cbiAgICAgIGVhY2hGb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRm9sZGVyKTtcbiAgICAgIGRlbGV0ZUZvbGRlci5hcHBlbmRDaGlsZChkZWxldGVGb2xkZXJJY29uKTtcblxuICAgICAgY29uc3QgZWRpdEZvbGRlckJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBudWxsLCBbJ3Rhc2tJY29uJ10sIG51bGwpO1xuICAgICAgY29uc3QgZWRpdEZvbGRlckljb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaScsIG51bGwsIFsnZmEnLCAnZmEtcGVuY2lsJ10pO1xuXG4gICAgICBlYWNoRm9sZGVyLmFwcGVuZENoaWxkKGVkaXRGb2xkZXJCdG4pO1xuICAgICAgZWRpdEZvbGRlckJ0bi5hcHBlbmRDaGlsZChlZGl0Rm9sZGVySWNvbik7XG5cbiAgICAgIGNvbnN0IGVhY2hGb2xkZXJzQ29uZmlybUVkaXRidG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgWyd0YXNrSWNvbiddLCBudWxsKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1JY29uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2knLCBudWxsLCBbJ2ZhJywgJ2ZhLWNoZWNrJ10pO1xuXG4gICAgICBlYWNoRm9sZGVyc0NvbmZpcm1FZGl0YnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBlYWNoRm9sZGVyLmFwcGVuZENoaWxkKGVhY2hGb2xkZXJzQ29uZmlybUVkaXRidG4pO1xuICAgICAgZWFjaEZvbGRlcnNDb25maXJtRWRpdGJ0bi5hcHBlbmRDaGlsZChjb25maXJtSWNvbik7XG4gICAgfSk7XG5cbiAgICAvLyBhZGluZyBldmVudCBsaXN0ZW5lciBmb3IgZWFjaCBERUxFVEUgYnV0dG9uIHVzaW5nIGJ1YmxpbmdcbiAgICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzQnV0dG9uID0gZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZmEgZmEtdHJhc2gnO1xuICAgICAgaWYgKCFpc0J1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb2xkZXJIYW5kbGVyLmRlbGV0ZUZvbGRlcihlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgY2xvc2VFZGl0UHJvamVjdEZvcm0oKTtcbiAgICB9KTtcblxuICAgIC8vIGFkaW5nIGV2ZW50IGxpc3RlbmVyIGZvciBlYWNoIEVESVQgYnV0dG9uIHVzaW5nIGJ1YmxpbmdcbiAgICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzQnV0dG9uID0gZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZmEgZmEtY2hlY2snO1xuICAgICAgaWYgKCFpc0J1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9sZGVySGFuZGxlci5lZGl0KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICBjbG9zZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy8gYWRpbmcgZXZlbnQgbGlzdGVuZXIgZm9yIGVhY2ggQ09ORklSTSBidXR0b24gdXNpbmcgYnVibGluZ1xuXG4gICAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBpc0J1dHRvbiA9IGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZhIGZhLXBlbmNpbCc7XG4gICAgICBpZiAoIWlzQnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzNdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIG9wZW5FZGl0UHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGb2xkZXJEaXZzID0gKHNoZWxmKSA9PiB7XG4gICAgZm9sZGVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJlbmRlckZvbGRlcihzaGVsZik7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlRm9sZGVyRGl2cyB9O1xufSgpKTtcbmV4cG9ydCB7IGRvbUhhbmRsZXIgfTtcbiIsImltcG9ydCB7IElEIH0gZnJvbSAnLi91bmlxdWVJRCc7XG5cbmNsYXNzIGZvbGRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBJRCgpO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCB7IGZvbGRlciB9O1xuIiwiaW1wb3J0IHsgc2hlbGYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGRvbUhhbmRsZXIgfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuaW1wb3J0IHsgZm9sZGVyIH0gZnJvbSAnLi9mb2xkZXJDTGFzcyc7XG5cbmNvbnN0IGZvbGRlckhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZVByb2plY3QnKS52YWx1ZTtcblxuICBjb25zdCBnZW5lcmF0ZUZvbGRlciA9ICgpID0+IG5ldyBmb2xkZXIoZ2V0VGl0bGUoKSk7XG5cbiAgY29uc3Qgc3RvcmVGb2xkZXIgPSAoc2hlbGYpID0+IHtcbiAgICBzaGVsZi5wdXNoKGdlbmVyYXRlRm9sZGVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEVkaXRlZFRpdGxlID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUaXRsZVByb2plY3QnKS52YWx1ZTtcblxuICBjb25zdCBlZGl0ID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGVsZi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoZWxmW2ldLmlkID09PSBpZCkge1xuICAgICAgICBzaGVsZltpXS5uYW1lID0gZ2V0RWRpdGVkVGl0bGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZG9tSGFuZGxlci5jcmVhdGVGb2xkZXJEaXZzKHNoZWxmKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVGb2xkZXIgPSAoaWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoZWxmLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2hlbGZbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIHNoZWxmLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZG9tSGFuZGxlci5jcmVhdGVGb2xkZXJEaXZzKHNoZWxmKTtcbiAgfTtcblxuICByZXR1cm4geyBzdG9yZUZvbGRlciwgZWRpdCwgZGVsZXRlRm9sZGVyIH07XG59KCkpO1xuXG5leHBvcnQgeyBmb2xkZXJIYW5kbGVyIH07XG4iLCJmdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQcm9qZWN0Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQcm9qZWN0Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5mdW5jdGlvbiBvcGVuRWRpdFByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFZGl0UHJvamVjdEZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cbmZ1bmN0aW9uIGNsb3NlRWRpdFByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFZGl0UHJvamVjdEZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQge1xuICBvcGVuRm9ybSwgY2xvc2VGb3JtLCBvcGVuUHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0sIG9wZW5FZGl0UHJvamVjdEZvcm0sIGNsb3NlRWRpdFByb2plY3RGb3JtLFxufTtcbiIsImltcG9ydCB7IGRvbUhhbmRsZXIgfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuaW1wb3J0IHsgZm9sZGVySGFuZGxlciB9IGZyb20gJy4vZm9sZGVySGFuZGxlcic7XG5pbXBvcnQgeyBvcGVuUHJvamVjdEZvcm0sIGNsb3NlUHJvamVjdEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCBzaGVsZiA9IFtdO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLyogc2hlbGYucHVzaChuZXcgZm9sZGVyKCdtb3ZpZXMgdG8gd2F0Y2gnLG51bGwpKTtcbmNvbnNvbGUubG9nKHNoZWxmKSAqL1xuICBvcGVuUHJvamVjdEZvcm0oKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUHJvamVjdGNhbmNlbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjbG9zZVByb2plY3RGb3JtKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlByb2plY3RhZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZm9sZGVySGFuZGxlci5zdG9yZUZvbGRlcihzaGVsZik7XG4gIGRvbUhhbmRsZXIuY3JlYXRlRm9sZGVyRGl2cyhzaGVsZik7XG4gIGNsb3NlUHJvamVjdEZvcm0oKTtcbn0pO1xuXG5leHBvcnQgeyBzaGVsZiB9O1xuIiwiaW1wb3J0IHsgSUQgfSBmcm9tIFwiLi91bmlxdWVJRFwiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuY2hlY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlkID0gSUQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBUYXNrIH07XG4iLCJpbXBvcnQgeyBzaGVsZiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFza0NsYXNzJztcblxuY29uc3QgdGFza0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+IFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVdO1xuXG4gIGNvbnN0IGdlbmVyYXRlVGFzayA9ICgpID0+IG5ldyBUYXNrKC4uLmdldFRhc2tJbmZvKCkpO1xuXG4gIGNvbnN0IGVkaXQgPSAoaWQsIGZvbGRlcikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9sZGVyLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmb2xkZXIuY29udGVudFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZm9sZGVyLmNvbnRlbnRbaV0gPSBnZW5lcmF0ZVRhc2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKGlkLCBmb2xkZXIpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvbGRlci5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm9sZGVyLmNvbnRlbnRbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZvbGRlci5jb250ZW50LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcmVUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gc2hlbGYuZmluZCgoZm9sZGVyKSA9PiBmb2xkZXIuaWQgPT09IGlkKTtcbiAgICBmb2xkZXIuY29udGVudC5wdXNoKGdlbmVyYXRlVGFzaygpKTtcbiAgfTtcbiAgcmV0dXJuIHsgc3RvcmVUYXNrLCBlZGl0LCByZW1vdmUgfTtcbn0oKSk7XG5leHBvcnQgeyB0YXNrSGFuZGxlciB9O1xuIiwiY29uc3QgSUQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICByZXR1cm4gYF8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX0kezF9YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkO1xuICBpZiAoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcblxuICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IHsgSUQsIGNyZWF0ZUh0bWxFbGVtZW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2phdmFTY3JpcHQvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9