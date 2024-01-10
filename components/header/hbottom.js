import HOMEHEADER from "../../constant/HeaderConstant/HomeHeader"
import Link from "next/link"
import Image from "next/image"

const HBottom=()=>{
return(
<>
<div className="hrrd-hero positioning d-lg-block d-none d-sm-none">
<div className="container">
<div className="row align-items-center justify-content-between">
<div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
<div className="hrrd-hero-content">
    <h1>{HOMEHEADER.HomeTitle}</h1>

<div className="hrrd-hero-btn-container">   
<div className="hrrd-hero-btn-wrap">
    <Link href="/"><a className="common-btn btn-hrrd-2">{HOMEHEADER.ActionBtnText1}</a></Link>
</div>

<div className="hrrd-hero-btn-wrap">
    <Link href="/"><a className="common-btn btn-hrrd-1">{HOMEHEADER.ActionBtnText2}</a></Link>
</div>

</div> 

</div>
</div>
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
<div className="hrrd-hero-img-wrap">
<div className="hrrd-hero-img">
    <img src={HOMEHEADER.ConverImage} alt=""/>
        <div className="hrrd-hero-post">
            <h4>Verify</h4>
            <div className="hrrd-hero-post-shape">
                <img src="assets/images/shape/hrrd-hero-post.png" alt=""/>
                <Link href="/"><a><i className="bi bi-download"></i></a></Link>
            </div>
            <ul>
                <li><span></span><Link href="/"><a>Certificate</a></Link></li>
            </ul>
        </div>
        <div>
            <img className="like-cart hero-like-cart" src="assets/images/shape/hrrd-hero-post2.png" alt=""/>
           
        </div>
</div>
</div>
</div>
</div>
</div>
<img className="shape hrrd-hero-shape" src="assets/images/shape/hrrd-hero-shape.png" alt=""/>
<img className="shape hrrd-hero-shape-top" src="assets/images/shape/hrrd-hero-shape-top.png" alt=""/>
</div>

<div className="hrrd-hero positioning d-lg-none d-block d-sm-block">
<div className="container">
<div className="row align-items-center justify-content-between">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrrd-hero-img-wrap-mobile">
        <div className="hrrd-hero-img">
            <img src="assets/images/hrrd-hero-img.png" alt=""/>
        </div>
    </div>
    </div>
    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="hrrd-hero-content">
            <h1>Best Platform for Monitor Work Flow</h1>
        <div className="hrrd-hero-btn-wrap">
            <a className="common-btn btn-hrrd-1" href="services.html">Get 15 Day Trial</a>
        </div>
        </div>
    </div>
</div>
</div>
<img className="shape hrrd-hero-shape" src="/assets/images/shape/hrrd-hero-shape.png" alt=""/>
</div>
</>
)
}
export default HBottom