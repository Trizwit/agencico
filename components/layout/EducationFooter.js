import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const EducationFooter=()=>{
return <>
<div className="edu-footer-style">
<div className="container">
<div className="edu-footer-main-wrap">
<div className="row">
<div className="col-lg-3 col-md-7">
    <div className="edu-footer-about">
        <div className="logo">
            <Link href="/">
                <img src={FooterConstant.Logo} alt=""/>

            </Link>
        </div>
        <p className="f-about-texts">{FooterConstant.subTitle}</p>
        <ul className="footer-social-links d-flex gap-3 ">
            <li><Link href={FooterConstant.GoogleLink}><i className="bi bi-google"></i></Link></li>
            <li><Link href={FooterConstant.TwitterLink}><i className="bi bi-twitter"></i></Link></li>
            <li><Link href={FooterConstant.InstagramLink}><i className="bi bi-instagram"></i></Link></li>
            <li><Link href={FooterConstant.LinkedinLink}><i className="bi bi-linkedin"></i></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-6">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Services</h4>
                <ul className="footer-links">
                    <li><Link href="/">Design</Link></li>
                    <li><Link href="/">Development</Link></li>
                    <li><Link href="/">Marketing</Link></li>
                    <li><Link href="/">Content Writing</Link></li>
                </ul>
            </div>
        </div>  
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget ">
                <h4 className="footer-widget-title">Company</h4>
                <ul className="footer-links">
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Terms</Link></li>
                    <li><Link href="/">Privacy Policy</Link></li>
                    <li><Link href="/">Careers</Link></li>       
                </ul>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Job Info</h4>
                <ul className="footer-links">
                    <li><Link href="/">Select</Link></li>
                    <li><Link href="/">Services</Link></li>
                    <li><Link href="/">Payment</Link></li>       
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="col-lg-3 col-md-6 d-lg-flex justify-content-end pt-4 pt-lg-0">
    <div className="footer-widget">
        <h4 className="footer-widget-title">Contact</h4>
        <ul className="footer-contact-links">
            <li><span>Call :</span><Link href="/"> {FooterConstant.phone}</Link></li>
            <li><span>Email :</span><Link href="/"> {FooterConstant.email}</Link></li>
            <li><span>Address :</span><Link href="/"> {FooterConstant.address[0]}</Link></li>
        </ul>
    </div>

</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
    <div className="footer-copyright text-center" dangerouslySetInnerHTML={{__html: FooterConstant.copyrightTwo}}>
    </div>
</div>
</div>
</div>
</div>
</>;
}
export default EducationFooter