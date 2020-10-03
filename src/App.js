import React from 'react';
import './App.css';
import {gql, useQuery} from '@apollo/client' ;
import {SaleIndicator, Circle} from './components/SaleIndicator';
import Banksy from './components/Banksy';
import { Popup} from 'semantic-ui-react'

export const query = gql`
query {
  popular_artists(size: 3) {
    artists {
      name
      	artworks {
      	  id
          title
          is_for_sale
          price
          	image {
              image_url
              
          	}
      	}
    }
  }
}
`

function App() {
  const {loading, data} = useQuery(query)
  console.log(data)
 
  if (loading) return <p>Loading Masterpieces...</p>
console.log(data.popular_artists.artists[0].name)
console.log(data.popular_artists.artists[0].artworks.map(work => work.image).map(image => image.image_url))
// console.log(data.popular_artists.artists[0].artworks)

const pablo = data.popular_artists.artists[0].name
const banksy = data.popular_artists.artists[1].name

// const contactPrice = (price, is_for_sale ) => {
//   if (price === "" && is_for_sale === "true") {
// return <h3>Contact for Price</h3>
//   }
// }
  return (
    <>
    <section className="App">
    <h1>BP Art Galleria 🎨</h1>

    <div id="sale-legend">
      <h5>Legend</h5>
      <Circle color="green" selected={ true}/><p>For Sale</p>
      <Circle color="red" selected={true}/><p>Not For Sale</p>
    </div>

    <div id="pablo">
    <h2>{pablo}</h2>
    
    <div class="ui raised cards">
    {data.popular_artists.artists[0].artworks.map(work => (
      <Popup
      content="Click to View Details"
      position='top center'
      trigger={
      <a id="pablo-card" class="ui card" href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">
  <div class="content">
    <div class="ui large header">{work.title}</div>
    <SaleIndicator is_for_sale={work.is_for_sale}/>
    <div class="description">{work.is_for_sale && work.price === "" ? "Contact for Price" : null}</div>
    <div class="description">{work.price}</div>
  </div>
</a>
    }/>   
    ))} 
     </div>
    </div>
    <Banksy />
     </section>
     
     
     <footer>
     <h6> © BP Art Galleria 👩‍🎨</h6>
   </footer>
   </>
      );
    }
      // {/* <h2>{work.title}</h2>
      // <h3>{work.price}</h3>
      // <h3>{work.is_for_sale && work.price === "" ? "Contact for Price" : null}</h3>
      // <SaleIndicator is_for_sale={work.is_for_sale}/>
      // <a href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">View Details</a>
      // </>
    
  
    


export default App;
