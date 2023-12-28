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
   desc="Secure digital credentials with our blockchain platform for tamper-proof integrity. Leverage its security for trust and reliability, 
   guarding against unauthorized alterations."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-2.png"
   title="Streamlined Issuance and Verification"
   desc="Streamline credential management, simplifying issuance and verification for organizations. Reduce administrative overhead and boost workflow productivity"
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Enhanced Trust and Transparency"
   desc="Instill trust with blockchain transparency in credentialing. Ensure a clear, auditable trail for issuance and verification, making trust inherent in your process."
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Global Accessibility"
   desc="Enable universal access to credentials; our platform transcends boundaries for digital document retrieval anywhere. Ensure seamless cross-border interactions, fostering widespread recognition of achievements."
  />

  
</div>
</div>
</div>
</>
)
}
export default AboutFutured