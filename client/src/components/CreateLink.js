import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom'

export const CreateLink = () => {

  const history = useHistory();

  const [link, setLink] = useState('');
  const { addLink } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!link.name || !link.link) return

    const newLink = {
      // _id: Math.floor(Math.random() * 100000000),
      name: link.name,
      link: link.link
    }

    addLink(newLink);
    // redirects to home page on succesfull submit
    history.push("/");
  }

  const handleOnChange = (linkKey, value) =>
    setLink({ ...link, [linkKey]: value });

  return (
    <div className="page-container">
      <form class="" onSubmit={handleSubmit}>
        <input type="text" className="input" value={link.name || ''} onChange={e => handleOnChange("name", e.target.value)} placeholder="Link Name..."></input>
        <input type="text" className="input" value={link.link || ''} onChange={e => handleOnChange("link", e.target.value)} placeholder="Link e.g. www.youtube.com"></input>
				<div className="button-container">					

        <button className="main-button button-primary" type="submit">Create</button>
		</div>
      </form>
    </div>
  )
}