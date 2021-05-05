import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

function InfoPlanetas() {
    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        actions.getinfoPlanet(id)
    }, [])


    return (
        <>
            <div className=" container p-3">

                <div className="card mb-3 p-2" style={{ "max-width": "540px;" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" width="100%" classNameName="img-fluid grayscale" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{!!store.infoPlanet && store.infoPlanet.name}</h5>
                                <p className="card-text">Population: {!!store.infoPlanet && store.infoPlanet.population}</p>
                                <p className="card-text">Climate: {!!store.infoPlanet && store.infoPlanet.climate}</p>
                                <p className="card-text">Diameter: {!!store.infoPlanet && store.infoPlanet.diameter}</p>
                                <p className="card-text">Terrain: {!!store.infoPlanet && store.infoPlanet.terrain}</p>
                                <p className="card-text">Rotation Period: {!!store.infoPlanet && store.infoPlanet.rotation_period}</p>
                                <p className="card-text">Orbital Period: {!!store.infoPlanet && store.infoPlanet.orbital_period}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InfoPlanetas

