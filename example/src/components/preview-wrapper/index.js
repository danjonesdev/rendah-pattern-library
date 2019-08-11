import React from 'react'

export default function PreviewWrapper({ ...props }) {
  const {
    title,
    description
  } = props

  return (
    <div className="container  mla  mra  pv3  mb4  bb  bc-black">
      <h1 className="t-primary  f3">{title}</h1>
      <p className="t-secondary  f5">{description}</p>
    </div>
  )
}
