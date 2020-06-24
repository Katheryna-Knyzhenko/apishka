export function createTask (title) {
    return axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId:1730,
        title:title
    });
}


const axios = require('axios');
export function getTasks () {
    return axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1730&count=10`);

}

export function deleteTask (id) {
    return  axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1730&taskId=${id}`

    );

    // return promise.then((response) => {
    //     return response.data});
}
export function updateTasks (title, id, done) {
   return axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId:1730,
        title:title,
        taskId: id,
        done: done
    });

    // return promise.then((response) => {
    //     return response.data});
}