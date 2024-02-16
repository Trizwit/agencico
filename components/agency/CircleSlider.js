import Slider from "react-slick"

const AgencyCircleSlider=()=>{
return(
<>
<div className="ag-testimonial-style">
<div className="container position-relative">
<div className="row justify-content-center">
    <div className="col-lg-6">
       <Slider
        infinite={true}
        arrows={false}
       >
        <div className="ag-testimonial-silder">
            <div className="ag-testimonial-card">
                <h4 className="testiminial-texts">“Working with Trizwit was a game-changer for our web3 project. Their expertise and dedication to excellence resulted in an MVP that surpassed our wildest expectations. From conceptualization to delivery, their team demonstrated unparalleled professionalism and innovation. We&apos;re thrilled with the outcome and grateful for their invaluable contribution to our success. Highly recommended for anyone seeking top-notch software development services!”</h4>

                <h5 className="reviewer-name">XYZ</h5>
                <span>CEO of ABCD Company</span>
            </div>
        </div>
        <div className="ag-testimonial-silder">
            <div className="ag-testimonial-card">
                <h4 className="testiminial-texts">“Working with Trizwit was a game-changer for our web3 project. Their expertise and dedication to excellence resulted in an MVP that surpassed our wildest expectations. From conceptualization to delivery, their team demonstrated unparalleled professionalism and innovation. We&apos;re thrilled with the outcome and grateful for their invaluable contribution to our success. Highly recommended for anyone seeking top-notch software development services!”</h4>

                <h5 className="reviewer-name">XYZ</h5>
                <span>CEO of ABCD Company</span>
            </div>
        </div>
       </Slider>
    </div>
</div>
<div className="ag-testimonial-background d-none d-lg-block">
    <img src="assets/images/agency/backgrounds/testi-bg.png" alt=""/>
</div>
</div>
</div>
</>
)
}
export default AgencyCircleSlider