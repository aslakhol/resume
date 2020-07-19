import React from "react"
import { graphql } from "gatsby"

const Meta = props => {
  const {
    first_name,
    last_name,
    address,
    phone,
    github,
    linkedin,
    website,
    email,
  } = props.me

  console.log(props)

  return (
    <div className="meta">
      <h1>
        <span className="first-name">{first_name} </span>
        <span className="last-name">{last_name}</span>
      </h1>
      <span>
        <span className="address">{address}</span>
      </span>
      <br />
      <span>
        <span>{phone}</span> | <span>{email}</span> |{" "}
        <span>
          <a href={github.url}>{github.username}</a>
        </span>{" "}
        |{" "}
        <span>
          <a href={linkedin.url}>{linkedin.username}</a>
        </span>{" "}
        | <span>{website}</span>
      </span>
    </div>
  )
}

export default Meta

export const query = graphql`
  fragment MetaFragment on SanityMeta {
    first_name
    last_name
    address
    phone
    github {
      url
      username
    }
    linkedin {
      url
      username
    }
    website
    email
  }
`
