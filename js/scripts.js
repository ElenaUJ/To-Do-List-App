function newItem () {
    // 1. Adding a new To Do List item (li)
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    // Question: the vanilla JS version uses if ( inputValue === '' ), is this exactly the same as !inputValue (which is less characters to type that's why I used it)
    if (!inputValue) {
        alert('You must write something!');
    } else {
        list.append(li);
    }
};