import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

function Navbar() {
    const { store, actions } = useContext(Context)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-primary" to="/home">Star Wars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/personajes">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planetas">Planetas</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/species" >Species</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Favorite
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    !!store.favorite &&
                                    store.favorite.map((value, index) => {
                                        return (
                                            <>

                                                <div class="list-group">
                                                   
                                                    <button key={index} type="button" class="list-group-item list-group-item-action" onClick={() => actions.deleteFavorite(index)}><i class="fas fa-times text-danger mr-3"></i>{value}</button>
                                                    
                                                </div>
                                            </>






                                        )
                                    })
                                }


                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
