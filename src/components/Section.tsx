import React from 'react'

export interface SectionProps {
  children: React.ReactNode | React.ReactNode[]
}

const Section = ({children}: SectionProps) => {
  return (
    <section>{children}</section>
  )
}

export default Section