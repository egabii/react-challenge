
import axios from 'axios';
import TodoModel from '../model/Todo';

const TodoService = {
    fetchTodos() {
        return new Promise((resolve, reject) => {
            axios.get('/shared/todos.json')
                .then(({data}) => {
                    resolve({
                        todoModels: data.map(todo => new TodoModel(todo) )
                    });
                })
                .catch(err => {
                    reject({ error: 'Unable to retrieve model from source '+err });
                });
        });
    }
};

export { TodoService };