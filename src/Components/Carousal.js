import React from 'react'

export default function Carousal() {
  return (
  <div>


    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
      <div className="carousel-inner" id='carousal'>

        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>

        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?size=626&ext=jpg" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1673439306780-2b457e65da70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWVtYWRlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://media.istockphoto.com/id/1366953086/photo/korean-dishes.jpg?s=612x612&w=0&k=20&c=3nYEdg3y3HfAeJu-Vf5GQYO3iEhFm-syRgSFr6hL874=" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}
