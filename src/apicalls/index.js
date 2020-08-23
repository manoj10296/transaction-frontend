import {API} from '../backend'


export const createTransaction = (data) => {
  return fetch(`${API}createtransaction`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const getTransactions = () => {
  return fetch(`${API}transactions`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
