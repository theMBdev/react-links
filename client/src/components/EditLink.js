import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

export const EditLink = ({ match }) => {

    let history = useHistory();
    const { getLinks, links, loading, editLink, deleteLink } = useContext(GlobalContext);

    const [selectedLink, setSeletedLink] = useState({
        _id: null,
        name: "",
        designation: "",
        location: ""
    });

    const currentLinkId = match.params.id;

    useEffect(() => {
        getLinks();
        const linkId = currentLinkId;
        console.log("CurIDin", linkId);

        console.log("Links", links)
        const selectedLink = links.find(link => link._id === linkId);        

        setSeletedLink(selectedLink);        
    }, []);

    console.log("EDIT PAGE - Link", selectedLink)

    const onSubmit = e => {
        e.preventDefault();
        editLink(selectedLink);
        console.log(selectedLink);
        history.push("/");
    };

    const handleOnChange = (linkKey, value) =>
        setSeletedLink({ ...selectedLink, [linkKey]: value });

    return (
        <div className="page-container">
            <form className="" onSubmit={onSubmit}>
                <input type="text" className="input" value={selectedLink.name || ''} onChange={e => handleOnChange("name", e.target.value)} placeholder="Link Name..."></input>
                <input type="text" className="input" value={selectedLink.link || ''} onChange={e => handleOnChange("link", e.target.value)} placeholder="Link Url..."></input>

				<div className="button-container">					
					<button className="main-button button-primary" type="submit">
						Save
					</button>
		
                	<Link to={`/`}>  <button className="main-button button-delete" onClick={() => deleteLink(selectedLink._id)}>Delete</button></Link>
            	</div>

            </form>

            

        </div>);






}

export default EditLink;
