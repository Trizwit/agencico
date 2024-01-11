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
   desc="To provide expert advice, guidance, and support to clients seeking to integrate Web3 technologies into their operations, products, and services."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-2.png"
   title="Innovation"
   desc="To foster development of innovative and impactful Web3 solutions that address real-world challenges and opportunities."
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Growth"
   desc="To contribute to the growth and evolution of the Web3 ecosystem by collaborating with other stakeholders and sharing knowledge and resources."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Educate"
   desc="To educate and raise awareness about the benefits and implications of decentralized technologies and promote their adoption and responsible use."
  />

</div>
</div>
</div>
</>
)
}
export default AboutFutured