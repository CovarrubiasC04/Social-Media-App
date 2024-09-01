import React from 'react'
import "./CSS/Widgets.css"
function Widgets() {
  return (
    <div className='widgets'>
      <iframe src="https://abcnews.go.com/"
        width = "340"
        height = "100%"
        style={{border:"none", overflow: "hidden"}}
        scrollings="no"
        frameborder="0"
        allowTransparancy = "true"
        allow="encrypted-media">
      </iframe>
    </div>
  )
}

export default Widgets
