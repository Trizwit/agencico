import Link from "next/link"

const ClientLogoItem=(props)=>{
return(
<>
<div className="ag-client-logobox">
    <Link href="/">
    <a>
    <img src= {props.img} alt=""/>
    </a>
    </Link>
</div>
</>
)
}
export default ClientLogoItem