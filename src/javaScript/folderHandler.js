import { shelf } from './index';
import { domHandler } from './domHandler';
import { folder } from './folderCLass';

const folderHandler = (function () {
  const getTitle = () => document.querySelector('#titleProject').value;

  const generateFolder = () => new folder(getTitle());

  const storeFolder = (shelf) => {
    shelf.push(generateFolder());
  };

  const getEditedTitle = () => document.querySelector('#editTitleProject').value;

  const edit = (id) => {
    for (let i = 0; i < shelf.length; i++) {
      if (shelf[i].id === id) {
        shelf[i].name = getEditedTitle();
      }
    }
    domHandler.createFolderDivs(shelf);
  };

  const deleteFolder = (id) => {
    for (let i = 0; i < shelf.length; i++) {
      if (shelf[i].id === id) {
        shelf.splice(i, 1);
      }
    }
    domHandler.createFolderDivs(shelf);
  };

  return { storeFolder, edit, deleteFolder };
}());

export { folderHandler };
