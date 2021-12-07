import React from 'react';

function Gif ({gif}){
  // console.log('props',props.randomIndex())
  // let url = ''
  // let idx = props.randomIndex()
  // props.gif.data.forEach((element) => {
  //   url = element.images.original.url
  // })


  return (
  <>
  <img src={gif.data.images.original.url} alt='gif' />
  </>
  )
}

export default Gif