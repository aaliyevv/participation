$(document).ready(function(){
    $('#add-task').click(function(){
        var taskText = $('#new-task').val();
        if (taskText) {
            $('#task-list').append('<li>' + taskText + '<button class="remove">X</button></li>');
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });

    $('#task-list').on('click', '.remove', function(e){
        e.stopPropagation();
        $(this).parent().remove();
    });
});