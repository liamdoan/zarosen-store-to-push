import axios from "axios"

 const BASE_URL = "http://localhost:5000/api/";
//const BASE_URL = "https://zarosen-clothing-store.herokuapp.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk0MzUzNzFjYTQwNjIwY2EyNWQ0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzIxMTgxMSwiZXhwIjoxNjQzNDcxMDExfQ.wRHLVjNUCDsk3tFrNXbVLy8hvEPqvO-avP96r7mDOUs"

export const publicRequest = axios.create({
    baseURL : BASE_URL
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});
