import React from "react"
import { graphql } from "gatsby"

const Meta = props => {
  const {
    first_name,
    last_name,
    dob,
    address,
    phone,
    github,
    linkedin,
    website,
    email,
  } = props.me

  return (
    <div className="meta">
      <h1>
        <span className="first_name">{first_name} </span>
        <span className="last_name">{last_name}</span>
      </h1>
      <span>
        <span className="address">{address}</span>
      </span>
      <br />
      <span>
        <span>{phone}</span> | <span>{email}</span> | <span>{github}</span> |{" "}
        <span>{linkedin}</span>
      </span>
    </div>
  )
}

export default Meta

export const query = graphql`
  fragment MetaFragment on SanityMeta {
    first_name
    last_name
    dob
    address
    phone
    github
    linkedin
    website
    email
  }
`
