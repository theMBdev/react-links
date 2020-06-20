import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const LinkHome = () => {

  const context = useContext(GlobalContext);
  // const {completeTodo} = useContext(GlobalContext);
  console.log("Context", context.links);

  return (
    <>
      <div className="page-container">

        {context.links.map((link) => (
          <div key={link.id} className="link">
            <a href={"http://" + link.link} target="_blank" rel="noopener noreferrer">
              <div className="link__text-container">
                <div className="link__name">{link.name}</div>
                <div className="link__link">{link.link}</div>
              </div>
            </a>

            <div className="button-container">
              <Link to={`/editlink/${link.id}`}>  <button className="button-edit" >Edit</button></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}