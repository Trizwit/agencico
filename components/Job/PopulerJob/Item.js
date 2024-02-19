import Link from "next/link"

const PopulerJobItem=()=>{
return <>
<div className="single-popular-job-item">
    <div className="program-time">
        <span>Digital Marketing</span>
        <p>13h ago</p>
    </div>
    <div className="popular-job-content">
        <h3><Link href="/">Associate Product Marketing Consumer Marketing</Link></h3>
        <ul>
            <li><i className="bi bi-clock"></i>Part Time</li>
            <li><i className="bi bi-geo-alt"></i>Tokyo, Japan</li>
        </ul>
    </div>
    <div className="popular-job-apply">
            <ul>
                <li><img src="/assets/images/icon/apply-job-1.png" alt=""/>Umasta</li>
                <li> <Link href="/">Apply Now<i className="bi bi-arrow-right-short"></i> </Link></li>
            </ul>
    </div>
</div>
</>;
}
export default PopulerJobItem