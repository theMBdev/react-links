import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

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

  // i dont have to dispatch the create, edit and delete anymore as each function updates the database and 
  // im always updating current data from the database

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

  async function addLink(link) {
    // when posting data you need a content type  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:3000/links', link, config);
      console.log("Res.data", res.data)

      // dispatch({
      //   type: 'ADD_LINK',
      //   payload: res.data
      // })
    } catch (err) {
      dispatch({
        type: 'LINK_ERROR',
        payload: err.response.data.error
      });
    }
  }

 async function editLink(link) {

    try {
      const res = await axios.put(`http://localhost:3000/links/${link._id}`, {
        name: link.name,
        link: link.link
      });

      // dispatch({
      //   type: 'EDIT_LINK',
      //   payload: link
      // })
    } catch (err) {
      dispatch({
        type: 'LINK_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteLink(id) {
      try {
        await axios.delete(`http://localhost:3000/links/${id}`);

        // dispatch({
        //   type: 'DELETE_LINK',
        //   payload: id
        // })
      } catch (err) {
        dispatch({
          type: 'LINK_ERROR',
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