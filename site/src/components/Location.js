import React from "react"

const Location = props => {
  const { cities, countries } = props
  return (
    <div className="location">
      {countries.length < 2 ? cities.join(", ") : ""}
      {cities.length > 0 && countries.length === 1 ? ", " : ""}
      {countries.join(", ")}
    </div>
  )
}

export default Location
