import { shelf } from '.';
import { Task } from './taskClass';

const taskHandler = (function () {
  const getTaskInfo = () => [document.querySelector('#title').value, document.querySelector('#description').value, document.querySelector('#date').value];

  const generateTask = () => new Task(...getTaskInfo());

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
    const folder = shelf.find((folder) => folder.id === id);
    folder.content.push(generateTask());
  };
  return { storeTask, edit, remove };
}());
export { taskHandler };
