import Link from "next/link"
import AgencyConstantTwo from "../../constant/Agency/DetailTwo"

const AgencyDetail=()=>{
return <>
<div className="ag-working-process">
<div className="container">
<div className="row align-items-center gy-4">
<div className="col-xxl-7 col-lg-6">
    <div className="position-relative">
        <div className="ag-process-features-image d-inline-block position-relative">
            <img src={AgencyConstantTwo.CoverImg1} alt="" className="position-relative"/>
            
            <div className="process-animi-shape position-absolute d-lg-block d-none">
                <img src="/assets/images/agency/shapes/process-shape1.png" alt=""/>
            </div>

           
        </div>
        <div className="features-img-bg">
            <img src="/assets/images/agency/shapes/process-circle1.png" alt=""/>
        </div>
    </div>
    
</div>   
<div className="col-xxl-5 col-lg-6 pt-5 pt-lg-0">
    <div className="ag-process-disc">
        <h2 className="ag-section-title text-start">
            {AgencyConstantTwo.Title1}
        </h2>
        
            <p>{AgencyConstantTwo.subTitle1}</p>

            <div className="process-btn">
                <Link href="/" className="ag-btn-fill">

                    {AgencyConstantTwo.actionBtn1}
                </Link>
            </div>
    </div>
</div>
</div>
<div className="row align-items-center process-row-gap gy-4">
<div className="col-xxl-5 col-lg-6  order-1 order-lg-0 pt-5 pt-lg-0">
    <div className="ag-process-disc">
        <h2 className="ag-section-title text-start">
            {AgencyConstantTwo.Title2}
        </h2>
        
        <p>{AgencyConstantTwo.subTitle2}</p>

        <div className="process-btn">
            <Link href="/" className="ag-btn-fill">{AgencyConstantTwo.actionBtn2}</Link>
        </div>
    </div>
</div>
<div className="col-xxl-7 col-lg-6 order-0 order-lg-1">
    <div className="position-relative text-lg-end">
        <div className="ag-process-features-image  d-inline-block position-relative">
            <img src={AgencyConstantTwo.CoverImg2} alt="" className="position-relative"/>
            
            <div className="process-animi-shape position-absolute d-lg-block d-none">
                <img src="/assets/images/agency/shapes/process-shape2.png" alt=""/>
            </div>

           
        </div>
        <div className="features-img-bg2">
            <img src="assets/images/agency/shapes/process-circle2.png" alt=""/>
        </div>
    </div>
</div>

</div>
</div>
</div>
</>;
}
export default AgencyDetail