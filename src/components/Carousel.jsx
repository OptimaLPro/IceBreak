import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../assets/css/Carousel_style.css"
import { useState } from "react";
import ReactCardFlip from "react-card-flip";


const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div
            className={`carousel__cell number-slide1 ${flippedIndex === 0 ? "flipped" : ""}`}
            onClick={() => handleFlip(0)}
          >
            {flippedIndex === 0 ? "Flipped!1" : "1"}
          </div>
          <div
            className={`carousel__cell number-slide2 ${flippedIndex === 1 ? "flipped" : ""}`}
            onClick={() => handleFlip(1)}
          >
            {flippedIndex === 1 ? "Flipped!2" : "2"}
          </div>
          <div
            className={`carousel__cell number-slide3 ${flippedIndex === 2 ? "flipped" : ""}`}
            onClick={() => handleFlip(2)}
          >
            {flippedIndex === 2 ? "Flipped!3" : "3"}
          </div>
          <div
            className={`carousel__cell number-slide4 ${flippedIndex === 3 ? "flipped" : ""}`}
            onClick={() => handleFlip(3)}
          >
            {flippedIndex === 3 ? "Flipped!4" : "4"}
          </div>
          <div
            className={`carousel__cell number-slide5 ${flippedIndex === 4 ? "flipped" : ""}`}
            onClick={() => handleFlip(4)}
          >
            {flippedIndex === 4 ? "Flipped!5" : "5"}
          </div>

        </div>
      </div>
    </div>
  )
}
