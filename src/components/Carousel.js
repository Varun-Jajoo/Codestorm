import React from 'react';

export default function Carousel() {
  return (
    <>
    <p className='text-center' id='about' style={{marginTop : "50vh",color :"red"}}>Past Events</p>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="text">
                <h1 className='text-center'>Treasure Hunt 2022</h1>
<p>TSEC CodeStorm organized the biggest Treasure Hunt at Thadomal Shahani Engineering College in the offline mode after a period of two years on 4th March 2022. This event was exclusively for the First-Year students of TSEC. The event was a success with the participation of 43 teams competing against each other to showcase their talent.

</p>
            </div>
          <div className="card-group">
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-2.5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="text">
                <h1 className='text-center'>Treasure Hunt 2022</h1>
<p>TSEC CodeStorm organized the biggest Treasure Hunt at Thadomal Shahani Engineering College in the offline mode after a period of two years on 4th March 2022. This event was exclusively for the First-Year students of TSEC. The event was a success with the participation of 43 teams competing against each other to showcase their talent.

</p>
</div>
          <div className="card-group">
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-2.5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="text">
                <h1 className='text-center'>Treasure Hunt 2022</h1>
<p>TSEC CodeStorm organized the biggest Treasure Hunt at Thadomal Shahani Engineering College in the offline mode after a period of two years on 4th March 2022. This event was exclusively for the First-Year students of TSEC. The event was a success with the participation of 43 teams competing against each other to showcase their talent.

</p>
</div>
        <div className="card-group">
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-2.5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
            <div className="card mx-5">
              <img src="https://tseccodestorm.dev/images/Techonavation-img2.JPG" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}
