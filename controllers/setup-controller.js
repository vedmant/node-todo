import todoModel from '../models/todo-model';

const demoData = [
    {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false,
    },
    {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false,
    },
    {
        username: 'test',
        todo: 'Learn node',
        isDone: false,
        hasAttachment: false,
    },
];

export default function (app) {
    app.get('/api/setup-todos', (req, res) => {
        todoModel.create(demoData, (err, results) => {
            res.send(results);
        });
    });
}