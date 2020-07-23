import React from "react"
import { graphql } from "gatsby"
import GitHubIcon from "../images/svg/github.svg"
import LinkedInIcon from "../images/svg/linkedin.svg"
import MailIcon from "../images/svg/mail.svg"
import PhoneIcon from "../images/svg/phone.svg"

import "./meta.css"

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

  return (
    <div className="meta">
      <h1>
        <span className="first-name">{first_name} </span>
        <span className="last-name">{last_name}</span>
      </h1>
      <span className="address">{address}</span>
      <span className="contact">
        <ContactElement displayString={phone}>
          <PhoneIcon />
        </ContactElement>
        <span>|</span>
        <ContactElement displayString={email}>
          <MailIcon />
        </ContactElement>
        <span>|</span>
        <ContactElementLink link={github}>
          <GitHubIcon />
        </ContactElementLink>
        <span>|</span>
        <ContactElementLink link={linkedin}>
          <LinkedInIcon />
        </ContactElementLink>
      </span>
    </div>
  )
}

export default Meta

const ContactElementLink = props => {
  const { link, children } = props

  return (
    <span className="contact-element">
      {children}
      <a href={link.url}>{link.username}</a>
    </span>
  )
}
const ContactElement = props => {
  const { displayString, children } = props

  return (
    <span className="contact-element">
      {children}
      <span>{displayString}</span>
    </span>
  )
}

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
