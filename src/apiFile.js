export function createTask (title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId:1730,
        title:title
    });
    return promise.then((response) => {
        return response.data});
}


const axios = require('axios');
export function getTasks () {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1730&count=6`);

    return promise.then((response) => {return response.data});
}

export function deleteTask (id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1730&taskId=${id}`
    );

    return promise.then((response) => {
        return response.data});
}