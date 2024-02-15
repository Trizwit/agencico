import Link from "next/link"

const AgencyBlogItem=(props)=>{
return <>
<div className="col-lg-4 col-md-6">
<div className="ag-blog-card">
    <div className="blog-disc">
        <h3 className="blog-title">
            
        <Link href="/">{props.title}</Link>
            
        </h3>
        <div className="blog-btn">
            <Link href="/">{props.subtitle}<i className="bi bi-arrow-right"></i></Link>
        </div>
    </div>
</div>
</div>
</>;
}
export default AgencyBlogItem