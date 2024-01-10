import AgencyServiceItem from "./services/item"

const AgencyServices=()=>{
return(
<>
<div className="ag-service-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lx-3 col-lg-5">
        <h2 className="ag-section-title">Our Blockchain Consulting Process</h2>
    </div>
</div>

<div className="row gy-4">

    <AgencyServiceItem 
     bg=""
     img="/assets/images/agency/icons/3d-design.svg"
     name="Ideation"
     title="We discuss the feasibility of your blockchain project with our blockchain developers and define the business goals and workflow for your system."
    />

    <AgencyServiceItem 
     bg="bg-v2"
     img="/assets/images/agency/icons/web-development.svg"
     name="Assessment"
     title="We analyze your existing solution and discover if it can be migrated to the blockchain."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/megaphone.svg"
     name="Technical Component Definition"
     title="Our blockchain consulting team identifies the right blockchain platform based on your business requirements and the type of blockchain."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/megaphone.svg"
     name="PoC"
     title="We create a framework and prototype to identify the use cases for the business with minimum viable features."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/megaphone.svg"
     name="Integration"
     title="Our Blockchain Consultants help clients identify if the blockchain technology can be integrated into their business operations and environment."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/megaphone.svg"
     name="Development"
     title="Once you are ready to start blockchain technology development, we help you build the blockchain product, from UI/UX to full front-end and back-end implementation."
    />

</div>
</div>
</div>
</>
)
}
export default AgencyServices