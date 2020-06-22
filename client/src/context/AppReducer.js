import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch (action.type) {
        case 'GET_LINKS':
            return {
                ...state,
                loading: false,
                links: action.payload
            }

        //// before using the api to pull data we had to update local state
        // case 'ADD_LINK':
        //     return {
        //         ...state,               
        //         links: [...state.links, action.payload]
        //     }

        //// before using the api to pull data we had to update local state
        // case 'EDIT_LINK':
        //     const updatedLink = action.payload;

        //     // rebuild links replacing the selected one with the new data
        //     const updatedLinks = state.links.map(link => {
        //         if (link._id === updatedLink._id) {
        //             console.log("REDUCER link updated")
        //           return updatedLink;
        //         }                    
        //         return link;
        //       });

        //       return {
        //         ...state,
        //         links: updatedLinks   
        //       };

        //// before using the api to pull data we had to update local state
        // case 'DELETE_LINK':
        //     return {
        //         ...state,
        //         // filter the links and return the ones were the id is not the one given
        //         links: state.links.filter(link => link._id !== action.payload )                    
        //     }

        case 'LINKS_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}    