import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <>
      <div class="card-deck pt-5 m-0" >
        <Link  to="/personajes" class="card" style={{"text-decoration": "none"}}>
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Characters</h5>
          </div>
        </Link>
        <Link  to="/planetas" class="card" style={{"text-decoration": "none"}}>
          <img src="https://hellomoto.cl/wp-content/uploads/2021/04/headerHELLOMOTO_arquitectura-star-wars_CHI.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center text-dark">Planets</h5>
          </div>
        </Link>
        <Link  to="/species" class="card" style={{"text-decoration": "none"}}>
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/ewoks.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center text-success">Species</h5>
          </div>
        </Link>
      </div>

    </>
  )
}

export default home
