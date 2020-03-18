import axios from "axios";

export const ADD_USER = "ADD_USER";

export const addUser = text => {
    return {
        type: ADD_USER,
        text
    };
};

