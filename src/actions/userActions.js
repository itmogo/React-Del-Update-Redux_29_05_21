//import React from 'react'
export function addUser (user) {

    return {
        type: "ADD_USER",
        payload: user,
    };
}

export function deleteUserAction (id){
    return {
        type: 'DELETE_USER',
        payload: id,
    };
}


export function updateUserAction (id, updatedUser){
   return {
       type: 'UPDATE_USER',
       payload: { id: id, updatedUserInfo: updatedUser },

   };
}


//export default addUser;