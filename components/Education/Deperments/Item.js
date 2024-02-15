import Link from "next/link"

const EducationDepertmentItem=(props)=>{
return <>
<div className="col-lg-4 col-md-6">
<div className="edu-department-single">
    <div className="edu-department-thumb">
        <Link href="/">

            <img src={props.img} alt=""/>

        </Link>
    </div>
    <div className="edu-department-disc">
        <h3 className="department-title"><Link href="/">{props.name}</Link></h3>
        <p>Assertively parallel task synergistic deliverables after high-quality.</p>
        <div className="d-btn">
            <Link href="/">Learn More<i className="bi bi-arrow-right"></i></Link>
        </div>
    </div>
</div>
</div>
</>;
}
export default EducationDepertmentItem