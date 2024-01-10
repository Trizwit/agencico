import Link from "next/link"

const AgencyBlogItem=(props)=>{
return(
<>
<div className="col-lg-4 col-md-6">
<div className="ag-blog-card">
    <div className="blog-disc">
        <h3 className="blog-title">
            
        <Link href="/"><a>{props.title}</a></Link>
            
        </h3>
        <div className="blog-btn">
            <Link href="/"><a>{props.subtitle}<i className="bi bi-arrow-right"></i></a></Link>
        </div>
    </div>
</div>
</div>
</>
)
}
export default AgencyBlogItem