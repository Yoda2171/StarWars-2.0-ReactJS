import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

function MoreSpecies() {
    const { store, actions } = useContext(Context)
    const {id} = useParams()

    useEffect(() => {
        actions.getinfoSpecies(id)
    }, [])

    return (
        <div>
            <div className=" container p-3 ">

                <div className="card mb-3 p-2" style={{ "max-width": "540px;" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} alt="" width="100%" classNameName="img-fluid grayscale" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{!!store.infoSpecies && store.infoSpecies.name}</h5>
                                <p className="card-text">Classification: {!!store.infoSpecies && store.infoSpecies.classification}</p>
                                <p className="card-text">Designation: {!!store.infoSpecies && store.infoSpecies.designation}</p>
                                <p className="card-text">Average Lifespan: {!!store.infoSpecies&& store.infoSpecies.average_lifespan}</p>
                                <p className="card-text">Language: {!!store.infoSpecies && store.infoSpecies.language}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MoreSpecies
