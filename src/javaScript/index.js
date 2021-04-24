import { domHandler } from './domHandler';
import { folderHandler } from './folderHandler';
import { openProjectForm, closeProjectForm } from './form';

const shelf = [];

document.querySelector('#newProject').addEventListener('click', () => {
/* shelf.push(new folder('movies to watch',null));
console.log(shelf) */
  openProjectForm();
});

document.querySelector('.Projectcancel').addEventListener('click', (e) => {
  e.preventDefault();
  closeProjectForm();
});

document.querySelector('.Projectadd').addEventListener('click', (e) => {
  e.preventDefault();
  folderHandler.storeFolder(shelf);
  domHandler.createFolderDivs(shelf);
  closeProjectForm();
});

export { shelf };
