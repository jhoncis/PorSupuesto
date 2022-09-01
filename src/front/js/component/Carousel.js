import React from 'react'

const Carousel = () => {

    return(
        <div className="justify-content-md-center" >
<div id="carouselExampleIndicators" className="carousel slide d-flex align-items-center" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="https://static8.depositphotos.com/1022135/1992/i/950/depositphotos_9924250-stock-photo-modern-office.jpg" className='mx-auto d-block' width={800} height={500}/>
    </div>
    <div className="carousel-item">
      <img src="https://st2.depositphotos.com/1007959/992/i/950/depositphotos_65098445-stock-photo-hands-framing-custom-kitchen-design.jpg" className='mx-auto d-block' width={800} height={500}/>
    </div>
    <div className="carousel-item">
      <img src="https://st3.depositphotos.com/2321825/992/i/450/depositphotos_356023984-stock-photo-recreational-activities-deck-cruise-ship.jpg" className='mx-auto d-block' width={800} height={500} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
        </div>
    )
}



export default Carousel