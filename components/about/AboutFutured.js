import FuturedItem from "./Futured/FuturedItem"

const AboutFutured=()=>{
return(
<>
<div className="featured-area positioning  pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1><span>Mission</span></h1>
        </div>
    </div>
</div>
<div className="row justify-content-center mt-50">

  <FuturedItem
   icon="/assets/images/icon/featured-icon-1.png"
   title="Guidance"
   desc="
   To offer expert consultation, guidance, and assistance to clients aiming to incorporate state-of-the-art technologies into their operations, products, and services."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-2.png"
   title="Innovation"
   desc="To cultivate the creation of inventive and impactful technical solutions that tackle real-world challenges and opportunities."
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Growth"
   desc="To actively participate in advancing and refining the startup ecosystem by engaging with fellow stakeholders, exchanging knowledge, and pooling resources."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Educate"
   desc="To inform and raise awareness regarding the advantages and implications of cutting-edge technologies, advocating for their adoption and conscientious utilization."
  />

</div>
</div>
</div>
</>
)
}
export default AboutFutured