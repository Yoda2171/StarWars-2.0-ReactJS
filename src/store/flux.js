import { get } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: null,
      infoPeople: null,
      planetas: null,
      infoPlanet: null,
      species: null,
      infoSpecies: null,
      favorite: []
    },
    actions: {
      getpersonajes: () => {
        fetch("https://swapi.dev/api/people/", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {

            setStore({
              personajes: data.results,
            });

          });
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets/", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setStore({
              planetas: data.results,
            });
          });
      },
      getSpecies: () => {
        fetch("https://swapi.dev/api/species/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },

        })
          .then((resp) => resp.json())
          .then((data) => {

            setStore({
              species: data.results
            })
          })
      },
      getinfoPeople: (id) => {
        fetch(`https://swapi.dev/api/people/${id}/`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setStore({
              infoPeople: data,
            });
          });
      },
      getinfoPlanet: (id) => {
        fetch(`https://swapi.dev/api/planets/${id}/`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setStore({
              infoPlanet: data,
            });
          });
      },
      getinfoSpecies: (id) => {
        fetch(`https://swapi.dev/api/species/${id}/`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setStore({
              infoSpecies: data,
            });
          });
      },

      checkName: (nombre) => {
        const store = getStore()
        console.log(store.favorite)
      
        const nombres = store.favorite.includes(nombre)
        if (nombres) {
          
        }else{
          getActions().addFavorite(nombre)
        }


      },

      addFavorite: (favorite) => {
        const store = getStore()

        const add = store.favorite.concat(favorite)
        console.log(add)

        setStore({
          favorite: add
        })
      },

      deleteFavorite: (favorito) => {
        const store = getStore()

        store.favorite.splice(favorito,1)
        getActions().addFavorite([])
        
  
        
      },



    }
  }
}

export default getState;