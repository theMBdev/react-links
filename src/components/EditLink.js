import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

export const EditLink = ({ match }) => {

    let history = useHistory();
    const { links, editLink, deleteLink } = useContext(GlobalContext);

    const [selectedLink, setSeletedLink] = useState({
        id: null,
        name: "",
        designation: "",
        location: ""
    });

    const currentLinkId = match.params.id;

    useEffect(() => {
        const linkId = currentLinkId;
        const selectedLink = links.find(link => link.id === parseInt(linkId));
        setSeletedLink(selectedLink);
    }, []);

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
                <input type="text" className="input" value={selectedLink.name} onChange={e => handleOnChange("name", e.target.value)} placeholder="Link Name..."></input>
                <input type="text" className="input" value={selectedLink.link} onChange={e => handleOnChange("link", e.target.value)} placeholder="Link Url..."></input>
                <button type="submit">
                    Edit Link
            </button>
            </form>

            <div className="button-container">
                <Link to={`/`}>  <button className="button-delete" onClick={() => deleteLink(selectedLink.id)}><img src="./x.png" alt="x"></img></button></Link>
            </div>

        </div>);






}

export default EditLink;
