import React, { useEffect, useState } from 'react'
import Property from './Property/Property'

const Properties = (props) => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch(
      'https://property-registry-system-default-rtdb.firebaseio.com/property.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched :', data)
        const loaded = []

        for (const key in data) {
          loaded.push({
            id: key,
            title: data[key].title,
            location: data[key].location,
            area: data[key].area,
            price: data[key].price,
            date: data[key].date,
          })
        }
        setProperties(loaded)
        console.log(loaded)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div id="properties">
      <h1 className="py-10 text-center text-[36px] font-bold">
        Explore Properties
      </h1>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => {
          return (
            <Property
              key={property.id}
              img="/Assets/house.jpeg"
              title={property.title}
              location={property.location}
              area={property.area}
              price={property.price}
              date={property.date}
              web3={props.web3}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Properties
