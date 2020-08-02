import React from "react"

export const ContactElementLink = props => {
  const { link, children } = props

  return (
    <span className="contact-element">
      {children}
      <a href={link.url}>{link.username}</a>
    </span>
  )
}

export const ContactElement = props => {
  const { displayString, children } = props

  return (
    <span className="contact-element">
      {children}
      <span>{displayString}</span>
    </span>
  )
}
