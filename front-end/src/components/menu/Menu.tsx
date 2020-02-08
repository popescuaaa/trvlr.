import React from 'react';
/**
 * Cryptho one way logic
 */
class Menu extends React.Component<{}, {}> {
   render(){
        return (
            <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand">
                <i className="fas fa-plane-departure"></i>
            </a>
            <form className="form-inline">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                <input type="password" className="form-control" placeholder="Password" aria-label="Passsword" aria-describedby="basic-addon2"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
            </nav>
        )
   }
}


export default Menu;