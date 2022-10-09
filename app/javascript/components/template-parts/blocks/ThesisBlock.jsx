import React from 'react'
import Block from './ExternalBlock'
import ThesisIcon from '../../../../assets/images/icons/article.svg'

function ThesisBlock() {
  return (
    <Block
    title="Senior Thesis"
    icon={ThesisIcon}
    link_description="Read Now"
    link_path="/assets/thesis.pdf"
/>
)
}

export default ThesisBlock