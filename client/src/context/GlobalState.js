import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


// False data for now untill the api is created
const initialState = {
  links: [],
  error: null,
  loading: true
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getLinks() {
    try {
      const url = `http://localhost:3000/links`;

      // vanilla fetch
      // fetch(url).then((response) => {
      //   response.json().then((data) => {
      //     console.log("DATA", data);

      //     dispatch({
      //       type: 'GET_LINKS',
      //       payload: data
      //   });
      //   });
      // });

      // axios fetch
      const res = await axios.get(url);
      dispatch({
        type: 'GET_LINKS',
        payload: res.data
      });

    } catch (err) {
      dispatch({
        type: 'LINK_ERROR',
        payload: err.response.data.error
      });
    }
  }

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

  async function deleteLink(id) {
    try {
      await axios.delete(`http://localhost:3000/links/${id}`);

      dispatch({
        type: 'DELETE_LINK',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'LINK_ERROR',        
        // payload: err.response.data.error
        payload: err.response
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
      links: state.links,
      error: state.error,
      loading: state.loading,
      getLinks,
      addLink,
      editLink,
      deleteLink
    }}>
      {children}
    </GlobalContext.Provider>
  );
}