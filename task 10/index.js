// localStorage.setItem('name','Bob')
// console.log(localStorage.getItem('name'))
// //localStorage.removeItem('name')


// sessionStorage.setItem('name','john')
// //console.log(sessionStorage.getItem('name'))
// //sessionStorage.removeItem('name')
// sessionStorage.setItem('name','Bob')

// document.cookie='name=kyle; expires=' + new Date(2032,0,1).toUTCString()
// document.cookie='lastName=Smith; expires=' + new Date(2032,0,1).toUTCString()

// console.log(document.cookie)

function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);

}