import React from 'react'

export const Header = () => {
  return (
    <div className='p-5'>
    <nav className="navbar navbar-expand-lg bg-lightb rounded-pill">
    <div className="container-fluid px-5">
      <a className="navbar-brand charm-bold fs-2" href="#">Aura Financials</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link px-4 fw-bold" aria-current="page" href="#">Home</a>
          <a className="nav-link px-4 fw-bold" href="#">About</a>
          <a className="nav-link px-4 fw-bold" href="#">Contact</a>
          <a className="nav-link px-4 fw-bold" href="#">Blogs</a>
          <a className="nav-link px-4 fw-bold" >Login</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}
