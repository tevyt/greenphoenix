import React from "react"

function useWindowWidth() {
  try {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    })

    return windowWidth
  } catch (e) {
    //window is not available during server side rendering.
    console.warn(e)
    return 0
  }
}

export default useWindowWidth
