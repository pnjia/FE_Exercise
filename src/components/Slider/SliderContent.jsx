
const SliderContent = ({activeIndex, sliderImage}) => {
  return (
    <section>
        {sliderImage.map((slide, index) => (
            <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <img className="slide-image" src={slide.urls} alt="" />
                <h2 className="slide-title" src={slide.title} alt="">{slide.title}</h2> 
                <h3 className="slide-text" src={slide.title} alt="">{slide.description}</h3> 
            </div>
        ))}
    </section>
  )
}

export default SliderContent