import React from "react"

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(0)
  React.useEffect(() => {
    if (window) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  })

  return windowWidth
}

export default useWindowWidth
