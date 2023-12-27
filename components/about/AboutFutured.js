import FuturedItem from "./Futured/FuturedItem"

const AboutFutured=()=>{
return(
<>
<div className="featured-area positioning  pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1><span>Key</span> Benefits</h1>
        </div>
    </div>
</div>
<div className="row justify-content-center mt-50">

  <FuturedItem
   icon="/assets/images/icon/featured-icon-1.png"
   title="Secure and Immutable Credentials"
   desc="Ensure the integrity of your digital credentials with our blockchain-powered platform.
  Leverage the security and immutability of blockchain technology to safeguard against tampering and unauthorized alterations,
  providing a trusted and reliable source of information."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-2.png"
   title="Streamlined Issuance and Verification"
   desc="Ensure the integrity of your digital credentials with our blockchain-powered platform. 
  Leverage the security and immutability of blockchain technology to safeguard against tampering and unauthorized alterations,
  providing a trusted and reliable source of information."
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Enhanced Trust and Transparency"
   desc="Ensure the integrity of your digital credentials with our blockchain-powered platform. 
  Leverage the security and immutability of blockchain technology to safeguard against tampering and unauthorized alterations,
  providing a trusted and reliable source of information."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Global Accessibility"
   desc="Ensure the integrity of your digital credentials with our blockchain-powered platform. 
   Leverage the security and immutability of blockchain technology to safeguard against tampering and unauthorized alterations, 
   providing a trusted and reliable source of information."
  />

  
</div>
</div>
</div>
</>
)
}
export default AboutFutured