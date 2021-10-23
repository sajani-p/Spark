// export const getMembers = () => [
//     { id: "1", name: "Imalsha Ranepura"},
//     { id:"2", name: "Anurda Pathum"},
// ];

import { deleteRequest, getRequest, putRequest, postRequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);

export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);

export const addMember = (data) => postRequest(`${BASE_URL}`, data);

export const editMember = (id,data) => putRequest(`${BASE_URL}/${id}`,data);