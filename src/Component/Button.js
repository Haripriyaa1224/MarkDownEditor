import React from 'react'

export const Button = (props) => {
  return (
    <>
    <button onClick={props.onClickProp}>{props.children}</button>
    </>
  )
}
