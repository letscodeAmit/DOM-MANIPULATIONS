function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
  
const obj={
        name,
        email,
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));

showNewUserOnSreen(obj)
}

window.addEventListener("DOMContentLoaded", () => { 

    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj);
  
    for(var i=0; i<localStoragekeys.length;i++){

      const key = localStoragekeys[i];
      const userDetailsString = localStorageObj[key];
      const userDetailsObj = JSON.parse(userDetailsString);
      showNewUserOnSreen(userDetailsObj)
    }
});

function showNewUserOnSreen(user){

    const parentNode=document.getElementById('listOfUsers');
    const childHTML=`<li>${user.name} - ${user.email}</li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}