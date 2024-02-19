import Link from "next/link"

const TrustedCompanList=(props)=>{
return <>
<div className="edu-client-logobox">
    <Link href="/">

        <img src={props.img} alt=""/>

    </Link>
</div>
</>;
}
export default TrustedCompanList