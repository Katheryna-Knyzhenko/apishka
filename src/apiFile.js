export function createTask (title) {
    return axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId:1730,
        title:title
    });
}


const axios = require('axios');
export function getTasks () {
    return axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1730&count=20`);

}

export function deleteTask (id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1730&taskId=${id}`
    );

    return promise.then((response) => {
        return response.data});
}
export function deleteTasks (id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=7737&taskId=${id}`
    );

    return promise.then((response) => {
        return response.data});
}