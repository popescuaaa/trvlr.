import React from 'react';

class Menu extends React.Component<{}, {}> {
   render(){
        return (
            <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand">
                <i className="fas fa-plane-departure"></i>
            </a>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
            </nav>
        )
   }
}


export default Menu;