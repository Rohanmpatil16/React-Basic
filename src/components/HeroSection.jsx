const HeroSection=()=>{
    return(
        <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES
            </p>

            <div className="hero-button">
                <button>Shop Now</button>
                <button className="sec-button">Category</button>

            </div>

            <div className="shopping">
                <p>Also available on </p>
            </div>

            <div className="brand-icon">
                <img src="/image/amazon 1.png" alt="amazon" />
                <img src="/image/flipkart 1.png" alt="flipkart" />
            </div>
        </div>


        <div className="hero-image">
            <img src="image/shoe_image 1.png" alt="shoe" />
        </div>
    </main>
    )
}
export default HeroSection;