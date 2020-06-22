import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch(action.type) {
        case 'GET_LINKS':
            return {
                ...state,
                loading: false,
                links: action.payload
            }
        case 'ADD_LINK':
            return {
                ...state,
                links: [...state.links, action.payload]
            }

            case 'EDIT_LINK':
                const updatedLink = action.payload;

                const updatedLinks = state.links.map(link => {
                    if (link._id === updatedLink.id) {
                        console.log("REDUCER link updated")
                      return updatedLink;
                    }
                    return link;
                  });

                  return {
                    ...state,
                    links: updatedLinks
                  };
                
            case 'DELETE_LINK':
                return {
                    ...state,                    
                    // filter the links and return the ones were the id is not the one given
                    links: state.links.filter(link => link._id !== action.payload )                    
                }

            case 'LINKS_ERROR': 
                return {
                    ...state,
                    error: action.payload
                }

    default:
        return state;
    }
}    