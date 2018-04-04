import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
  <h1>{props.kurssi.nimi}</h1>
  )
}

const Osa = (props) =>{
  return (
    <div>
      <p>{props.nimi} {props.lkm} </p>
    </div>
  )
}

const Sisalto = (props) => {
  return(
    <div>
      <Osa nimi={props.kurssi.osat[0].nimi} lkm={props.kurssi.osat[0].tehtavia} />
      <Osa nimi={props.kurssi.osat[1].nimi} lkm={props.kurssi.osat[1].tehtavia} />
      <Osa nimi={props.kurssi.osat[2].nimi} lkm={props.kurssi.osat[2].tehtavia} />
    </div>
  )
}

const Yhteensa = (props) =>{
return (
  <div>
    <p>Yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää</p>
  </div>
)
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi}  />
      <Yhteensa kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)