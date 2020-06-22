import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const LinkHome = () => {

  const { links, getLinks } = useContext(GlobalContext);
  // const {completeTodo} = useContext(GlobalContext);
  console.log("Context", links);


  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <div className="page-container">

        {links.map((link) => (
          <div key={link._id} className="link">
            <a href={"http://" + link.link} target="_blank" rel="noopener noreferrer">
              <div className="link__text-container">
                <div className="link__name">{link.name}</div>
                <div className="link__link">{link.link}</div>
              </div>
            </a>

            <div className="button-container">
              <Link to={`/editlink/${link._id}`}>  <button className="button-edit" >Edit</button></Link>
            </div>
          </div>
        ))}

    
      </div>
    </>
  )
}