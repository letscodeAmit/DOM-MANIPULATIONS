function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const obj = {
    name,
    email,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));

  showNewUserOnSreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localStoragekeys.length; i++) {
    const key = localStoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnSreen(userDetailsObj);
  }
});

function showNewUserOnSreen(user) {

    document.getElementById('email').value="";
    document.getElementById('name').value="";
  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
  <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
   <button onclick=deleteUser('${user.email}')> Delete User </button> </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
//Edit User
function editUserDetails(emailId,name){
    document.getElementById('email').value=emailId;
    document.getElementById('name').value=name;

deleteUser(emailId)

}




//deleteUser('abc@gmail.com')

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
     removeUserFromScreen(emailId);

}
function removeUserFromScreen(emailId){
    
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted=document.getElementById(emailId);

parentNode.removeChild(childNodeToBeDeleted);
}
