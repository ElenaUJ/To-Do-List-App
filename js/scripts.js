function newItem () {
    // 1. Adding a new To Do List item (li)
    let list = $('#list');
    let li = $('<li></li>');
    let userInput = $('#input');
    let inputValue = userInput.val();
    li.append(inputValue);

    // Question: the vanilla JS version uses if ( inputValue === '' ), is this exactly the same as !inputValue (which is less characters to type that's why I used it)
    if (!inputValue) {
        alert('You must write something!');
    } else {
        list.append(li);
        // Clears the inbox field when appending new list item
        userInput.val('');
    }

    // 2. Crossing out items upon double-click (has to be placed inside newItem() function because li-lement is only created within that function
    function crossOut() {
        li.addClass('strike');
    }
    li.on('dblclick', crossOut);

    // 3(i). Adding the delete button "X"
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
    
    // Question: Why does it not work when I put the event listener below the deleteListItem() function? I though it didn't matter when functions are declared? But when I changed the order it didn't work any more.
    crossOutButton.on('click', deleteListItem);

    // 3(ii). Adding class="delete" upon click on delete button
    function deleteListItem () {
        li.addClass('delete');
    }

    // 4. Reordering the items
    // Question: So this is only possible with jQuery anyway? I just copied that from the "vanilla" JavaScript template. But I don't have any idea how it works. It's probably very complicated using pure JavaScript?!
    list.sortable();

};