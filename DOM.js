// // EXAMINE THE DOCUMENT OBJECT//
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// // GET ELEMENT BY ID//
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
//  headerTitle.textContent='Hello';
//  headerTitle.innerText='Gooobye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// // headerTitle.style.borderBottom='solid 3px #000';
//  header.style.borderBottom='solid 3px #000';
// //GET ELEMENTs BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';

// var add=document.getElementsByClassName('title');
// console.log(add);
// add[0].style.fontWeight='bold';
// add[0].style.color='green';

//GET ELEMENTS BY CLASS NAME//

// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// // items.style.backgroundColor='f4f4f4'; GIVES ERROR
// for(var i = 0; i<items.length;i++)
// {
//     items[i].style.backgroundColor='#f4f4f4';
// }

// items[2].style.backgroundColor='green';
// for(var i=0; i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }
// get element by tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(var i=0; i<FileList.length;i++)
// {
//     li[i].style.backgroundColor='#f4f4f4';
// }

//QUERYSELECTOR// ONLY FOR 1 ITEM

var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var li = document.getElementsByTagName('li');
li[4].style.color='red';
var items= document.getElementsByClassName('list-group-item');
items[1].style.color='green';
items[2].style.backgroundColor=('pink');
