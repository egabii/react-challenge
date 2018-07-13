
import axios from 'axios';

class TodoService {

    getTodos(){
        return new Promise((resolve, reject) => {
            axios.get('../../shared/todos.json')
            .then(todos => {
                resolve({
                    todoModels: (() => todos.map(todo => new TodoModel(todo)))()
                });
            })
            .catch(err => {
                reject({error: 'Unable to retrieve model from source' });
            });
        });
    }
}

export { TodoService };