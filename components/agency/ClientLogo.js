import ClientLogoItem from "./clientLogo/item"

const AgencyClientLogo=()=>{
return(
<>
<div className="ag-client-logo-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-4">
        <h2 className="ag-section-title">
        Trusted By
        </h2>
    </div>
</div>
<div className="ag-client-logo-row">
    <ClientLogoItem
    img="/assets/images/agency/icons/logo-1.png"
    />
    <ClientLogoItem
    img="/assets/images/agency/icons/logo-2.png"
    />
    <ClientLogoItem
    img="/assets/images/agency/icons/logo-3.png"
    />
</div>
</div>
</div>
</>
)
}
export default AgencyClientLogo