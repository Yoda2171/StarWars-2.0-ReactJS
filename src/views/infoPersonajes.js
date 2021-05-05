import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

function InfoPersonajes() {
    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        actions.getinfoPeople(id)
    }, [])

    return (
        <>
            <div className=" container p-3">

                <div className="card mb-3 p-2" style={{ "max-width": "540px;" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" width="100%" classNameName="img-fluid grayscale" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title ">{!!store.infoPeople && store.infoPeople.name}</h5>
                                <p className="card-text">Height: {!!store.infoPeople && store.infoPeople.height}</p>
                                <p className="card-text">Mass: {!!store.infoPeople && store.infoPeople.mass}</p>
                                <p className="card-text">BirthYear: {!!store.infoPeople && store.infoPeople.birth_year}</p>
                                <p className="card-text">Gender: {!!store.infoPeople && store.infoPeople.gender}</p>
        
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InfoPersonajes
