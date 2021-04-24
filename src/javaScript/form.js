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

export {
  openForm, closeForm, openProjectForm, closeProjectForm, openEditProjectForm, closeEditProjectForm,
};
