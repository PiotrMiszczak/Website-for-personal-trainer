
import * as React from "react"


function Footer(){
  const date = new Date()

  return(
    <>
      <footer className="footer">
        <p>
        <small>&copy; Copyright {date.getFullYear()}</small>
        </p>
        <p style={{ margin: 0, fontSize: 8 }}>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </>
  )

} 

export default Footer
