import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// False data for now untill the api is created
const initialState = {
    links: [
        {
          id: 1,
          name: 'Google',
          link: 'www.google.com'
        },    
        {
          id: 2,
          name: 'Youtube',
          link: 'www.youtube.com'
        },    
        {
          id: 3,
          name: 'Dribbble',
          link: 'www.Dribbble.com'
        },
      ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  function addLink(text) {
      dispatch({
          type: 'ADD_LINK',
          payload: text
      })
  }   

  function editLink(text) {
    dispatch({
        type: 'EDIT_LINK',  
        payload: text        
    })
}  

function deleteLink(id) {
  dispatch({
      type: 'DELETE_LINK',  
      payload: id
  })
}  
  
  return (
    <GlobalContext.Provider value={{
        links:state.links,
        // completeTodo,
        addLink,
        editLink,
        deleteLink
        }}>
        {children}
    </GlobalContext.Provider>
    );
}