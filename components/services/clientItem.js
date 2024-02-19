import Link from "next/link"

const ClientItem=(props)=>{
return <>
<div className="single-client-testimonial">
    <div className="client-testimonial-img">
        
    </div>
    <div className="client-testimonial-info">
        <h2>{props.name}</h2>
        <p>{props.position}</p>
    </div>
    <div className="client-testimonial-rating">
        <ul>
            <li><Link href="/"><i className="bi bi-star-fill"></i></Link></li>
            <li><Link href="/"><i className="bi bi-star-fill"></i></Link></li>
            <li><Link href="/"><i className="bi bi-star-fill"></i></Link></li>
            <li><Link href="/"><i className="bi bi-star-fill"></i></Link></li>
            <li><Link href="/"><i className="bi bi-star-fill"></i></Link></li>
        </ul>
        <p>Thanks to the MVP they provided, I&apos;ve successfully launched my startup. Their service is unparalleled and truly exceptional.</p>
    </div>
</div>
</>;
}

export default ClientItem