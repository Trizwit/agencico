import AgencyBlogItem from "./blog/item"

const AgencyBlog=()=>{
return(
<>
<div className="ag-blog-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-4">
        <h2 className="ag-section-title">
        Working with best companies in Web3
        </h2>
    </div>
</div>
<div className="row gy-4">
    
    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="24+"
     subtitle= "Projects"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="7+"
     subtitle="Partner Companies"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="150+"
     subtitle="Smart Contracts On-Chain"
    />

</div>
</div>
</div>
</>
)
}
export default AgencyBlog