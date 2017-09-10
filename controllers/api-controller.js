import bodyParser from 'body-parser';
import todoModel from '../models/todo-model';

export default function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todos/:user', (req, res) => {
        todoModel.find({username: req.params.user}, (err, todos) => {
            if (err) throw err;
            res.send(todos);
        });
    });

    app.get('/api/todos/:id', (req, res) => {
        todoModel.findById(req.params.id, (err, todo) => {
            if (err) throw err;
            res.send(todo);
        });
    });

    app.post('/api/todos', (req, res) => {
        const todo = todoModel({
            username: 'test',
            todo: req.body.todo, 
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment,
        });
        todo.save((err, todo) => {
            if (err) throw err;
            res.send('Success');
        });
    });

    app.put('/api/todos/:id', (req, res) => {
        todoModel.findByIdAndUpdate(req.params.id, {
            todo: req.body.todo, 
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment,
        }, (err, todo) => {
            if (err) throw err;
            res.send('Success');
        });
    });

    app.delete('/api/todos/:id', (req, res) => {
        todoModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;
            res.send('Success');
        });
    });
}
