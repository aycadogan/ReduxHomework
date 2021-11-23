import * as actionTypes from './actionTypes'

export const addPerson = () => ({
    type: actionTypes.ADD_PERSON,
    payload:1
})

export const deletePerson = () => ({
    type:actionTypes.DELETE_PERSON,
    payload:1
})