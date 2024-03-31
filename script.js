var app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        taskName: '',
        taskStatus: 'Not Started',
        showAll: false
    },
    methods: {
        addTask: function() {
            if (this.taskName.trim() !== '') {
                this.tasks.push({ name: this.taskName.trim(), status: this.taskStatus });
                this.taskName = '';
                this.taskStatus = 'Not Started';
            }
        },
        showAllTasks: function() {
            this.showAll = true;
        }
    }
});
