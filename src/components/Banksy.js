import React from 'react';
import {query} from '../App';
import {SaleIndicator} from './SaleIndicator';
import { useQuery} from '@apollo/client';
import { Popup} from 'semantic-ui-react'

function Banksy(){
    const {loading, data} = useQuery(query)
  if (loading) return <p>Loading....</p>

  const banksy = data.popular_artists.artists[1].name

  return (
  <section className="banksy-section">
  <div id="banksy">
  <h2>{banksy}</h2>

  <div class="ui raised cards">
  {data.popular_artists.artists[1].artworks.map(work => (
     <Popup
     content="Click to View Details"
     position='top center'
     trigger={
    <a class="ui card" href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">
    <div class="content">
    <div class="ui large header">{work.title}</div>
    <SaleIndicator is_for_sale={work.is_for_sale}/>
    <div class="description">{work.is_for_sale && work.price === "" ? "Contact for Price" : null}</div>
    <div class="description">{work.price}</div>
    </div>
    </a>
     } />
  ))}
  </div>
  </div>

  </section>
  )
}

export default Banksy