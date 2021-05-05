import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

function Species() {
    const { store, actions } = useContext(Context)



    return (
        <div>
            <div className="row">
                {
                    !!store.species &&
                    store.species.map((value, index) => {
                        return (
                            <>
                                <div className="p-3">
                                    <div className="card" key={index} style={{ "width": "15rem" }}>
                                        <img src={`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`} alt="" width="100%" className="img-fluid grayscale" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center pb-3">{value.name}</h5>
                                            <div className="row px-3">
                                                <Link to={`/species/${index + 1}`} className="btn btn-primary">More info</Link>

                                                <button className="btn btn-warning ml-auto" onClick={() => actions.checkName(value.name)}><i className="far fa-star "></i></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Species
