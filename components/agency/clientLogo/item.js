import Link from "next/link"

const ClientLogoItem=(props)=>{
return <>
<div className="ag-client-logobox">
    <Link href="/">

        <img src= {props.img} alt=""/>

    </Link>
</div>
</>;
}
export default ClientLogoItem