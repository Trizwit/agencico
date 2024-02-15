import Link from "next/link"

const BlogItem=(props)=>{
return <>
<div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="blog-post-wrap">
    <h1><Link href="/">{props.title}</Link></h1>
    <ul>
        <li><i className="bi bi-person-fill"></i> 
        <Link href="/">{props.author}</Link>
        </li>
        <li><i className="bi bi-calendar3"></i> 
         <Link href="/">{props.published_at}</Link>
        </li>
        <li><i className="bi bi-chat-left-text-fill"></i> 
         <Link href="/">{props.comments}</Link>
        </li>
    </ul>
    <p>{props.desc}</p>
    <Link href="/" className="blog-post-btn">Read More<i className='bx bx-chevron-right'></i></Link>
</div>
</div>
<div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="blog-post-img">
    <Link href="/"><img src="assets/images/blog/blog-1.png" alt=""/></Link>
</div>
</div>
</>;
}
export default BlogItem