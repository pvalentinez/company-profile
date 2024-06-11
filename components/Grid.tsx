import React from 'react'
import { BentoGrid } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {[{ title: 'Title1'}]}
        </BentoGrid>
    </section>
  )
}

export default Grid