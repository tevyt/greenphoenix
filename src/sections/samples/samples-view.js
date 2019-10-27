import React from "react"
import Sample from "../../components/Sample"

import "./samples-styles.scss"

function Samples() {
  return (
    <div className="section samples">
      <h3>Samples</h3>
      <div className="samples-list">
        <Sample
          name="minesweeper"
          description="A browser based implementation of minesweeper built with React."
          thumbnailUrl="http://placehold.it/300"
          sourceCodeUrl="https://www.github.com"
          liveDemoUrl="https://www.youtube.com"
        />
        <Sample thumbnailUrl="http://placehold.it/300" sourceCodeUrl="test" />
        <Sample thumbnailUrl="http://placehold.it/300" />
        <Sample thumbnailUrl="http://placehold.it/300" />
        <Sample thumbnailUrl="http://placehold.it/300" />
        <Sample thumbnailUrl="http://placehold.it/300" />
      </div>
    </div>
  )
}

export default Samples
