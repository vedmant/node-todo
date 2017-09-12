import bodyParser from 'body-parser';
import todoModel from '../models/todo-model';

export default function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todos/:id([0-9a-f]{24})', (req, res) => {
        todoModel.findById(req.params.id, (err, todo) => {
            if (err) throw err;
            if (todo === null) return res.send('Not found');
            res.send(todo);
        });
    });

    app.get('/api/todos/:user', (req, res) => {
        todoModel.find({username: req.params.user}, (err, todos) => {
            if (err) throw err;
            res.send(todos);
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
            if (todo === null) return res.send('Not found');
            res.send('Success');
        });
    });

    app.delete('/api/todos/:id', (req, res) => {
        todoModel.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) throw err;
            if (todo === null) return res.send('Not found');
            
            res.send('Success');
        });
    });
}
