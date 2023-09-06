import React from "react";
import { NavLink } from "react-router-dom";
function Artist(props) {
    const {id,name,popularity,followers,genres}=props
  return (
    <>
      <div className=" col col-md-4 mb-2">
        <div class="card" style={{ width: "25rem" }}>
        <div className="card-header">
            <h6 className="display-6">{name}</h6>
        </div>
          <div class="card-body">
<ul className="list-group">
    <li className="list-group-item">
        <strong>Genres</strong>
        <span className="float-end">{genres.join(',')}</span>
    </li>
    <li className="list-group-item">
        <strong>Popularity</strong>
        <span className="float-end">{popularity}</span>
    </li>
    <li className="list-group-item">
        <strong>followers</strong>
        <span className="float-end">{followers.total}</span>
    </li>
</ul> 
          
          </div>
          <div className="card-footer">
            <NavLink to={`/track/${id}` } className="btn btn-success">Track</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Artist;
