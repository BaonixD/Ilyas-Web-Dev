document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');
    const list = document.getElementById('todo-list');

    function addTask(taskValue) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&#128465;';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        list.appendChild(li);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                span.classList.add('done');
            } else {
                span.classList.remove('done');
            }
        });

        deleteBtn.addEventListener('click', function() {
            list.removeChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
            input.focus();
        }
    });
});