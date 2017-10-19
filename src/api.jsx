import axios from 'axios';

export const sendDataToServer = (id, tile) =>

    new Promise((resolve, reject) => {

        const funcSuccess = (response) => {
            resolve(response);
        };

        const funcError = (err) => {
            reject(err);
        };

        axios.put('/items/' + id, tile)
            .then(funcSuccess, funcError);

    });

export const loadDataFromServer = () =>

    new Promise((resolve, reject) => {

        const funcSuccess = (response) => {
            resolve(response);
        };

        const funcError = (err) => {
            reject(err);
        };

        axios.get('/items')
            .then(funcSuccess, funcError);

    });

