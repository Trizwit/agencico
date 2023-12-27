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
   desc="Experience efficiency in credential management. Our platform simplifies the issuance process, allowing organizations to effortlessly create and distribute digital documents. 
   Recipients can then verify their credentials with ease, reducing administrative overhead and enhancing overall workflow productivity."
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Enhanced Trust and Transparency"
   desc="Build trust through transparency. The blockchain ledger ensures a transparent and auditable trail of credential issuance and verification, instilling confidence in both issuers and recipients.
  Trust becomes an inherent feature of your credentialing process."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Global Accessibility"
   desc="Empower users with universal access to their credentials. Our platform transcends geographical boundaries, enabling individuals to access and present their digital documents anytime, anywhere. 
   Facilitate seamless interactions across borders and ensure the widespread recognition of achievements."
  />

  
</div>
</div>
</div>
</>
)
}
export default AboutFutured