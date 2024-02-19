import AgencyBlogItem from "./blog/item"

const AgencyBlog=()=>{
return(
<>
<div className="ag-blog-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-6">
        <h2 className="ag-section-title">
        Working with the best!
        </h2>
    </div>
</div>
<div className="row gy-4">
    
    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="7+"
     subtitle= "Projects"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="4+"
     subtitle="Partner Companies"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="10+"
     subtitle="Products Released"
    />

</div>
</div>
</div>
</>
)
}
export default AgencyBlog