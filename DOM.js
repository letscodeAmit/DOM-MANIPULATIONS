var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);
//Add item
function addItem(e){
    e.preventDefault();
   // console.log(1);

   //get input value
   var newItem=document.getElementById('item').value;
   var item2=document.getElementById('description').value;

   //create new li element
   var li=document.createElement('li');
   //Add class
   li.className='list-group-item';
   //Add text node with input value
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(' ' + item2));

   //create del button element
   var deleteBtn=document.createElement('button');

   //Add classes to del button

   deleteBtn.className='btn btn-danger btn-sm float-right delete';

   //Append text node
   deleteBtn.appendChild(document.createTextNode('x'));
   //Append button to li
   li.appendChild(deleteBtn);

   var editBtn=document.createElement('button');

   //Add classes to del button

   editBtn.className='btn btn-success btn-sm float-right delete';

   //Append text node
   editBtn.appendChild(document.createTextNode('Edit'));
   //Append button to li
   li.appendChild(editBtn);


   //Append li to list
   itemList.appendChild(li);
}
// Remove item
function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains('delete')){
        //console.log(1);

       if(confirm('are you sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
       }
       } 
    }

    // filter items
    function filterItems(e){
        //convert text to lowercase
      var text=e.target.value.toLowerCase();
      //console.log(text);
      // get lis
      var items=itemList.getElementsByTagName('li');
      //console.log(items);
      //convert to an array
      Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;       //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1 || (itemName2.toLowerCase().indexOf(text) != -1)) {
            item.style.display='block';
        }else{
            item.style.display='none';

    }
});
    }
