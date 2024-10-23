import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>Perahin Restaurant &#169; Copyright {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
