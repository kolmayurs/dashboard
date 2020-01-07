import axios from 'axios';

export function createUser(name, email, password) {
    return function(dispatch) {
        dispatch({ type: 'CREATE_USER_START' });
        axios.post('https://backendv1.herokuapp.com/user/create', { name: name, email: email, password: password })
            .then(res => {
                dispatch({ type: 'CREATE_USER_SUCCESS', data: res.data })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_USER_FAIL', error: err })
            });
    }
}