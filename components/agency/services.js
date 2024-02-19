import AgencyServiceItem from "./services/item"

const AgencyServices=()=>{
return(
<>
<div className="ag-service-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-xl-10 col-lg-5">
        <h2 className="ag-section-title">Our Epic Blueprint Unveiled!</h2>
    </div>
</div>

<div className="row gy-4">

    <AgencyServiceItem 
     bg=""
     img="/assets/images/agency/icons/ideation.png"
     name="Ideation"
     title="We discuss the feasibility of your project with our developers and define the business goals and workflow for your system."
    />

    <AgencyServiceItem 
     bg="bg-v2"
     img="/assets/images/agency/icons/assessment.png"
     name="Assessment"
     title="We scrutinize your current solution to unearth its untapped potential for maximum optimization and further enhancement."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/techcom.png"
     name="Technical Component Definition"
     title="
     Our team discerns the optimal technical stack tailored precisely to your platform's needs, aligning seamlessly with your business objectives."
    />

    <AgencyServiceItem 
     bg=""
     img="/assets/images/agency/icons/poc.png"
     name="PoC"
     title="We craft a framework and prototype, pinpointing key business use cases with minimal essential features, ensuring streamlined identification and validation of business needs."
    />

    <AgencyServiceItem 
     bg="bg-v2"
     img="/assets/images/agency/icons/intgrtn.png"
     name="Integration"
     title="
     We assist clients in identifying opportunities for integrating the latest cutting-edge technologies into their business operations and environment, ensuring they stay at the forefront of innovation."
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/dvlpmnt.png"
     name="Development"
     title="
     When you're set to start your MVP development, we handle everything from UI/UX design to full front-end and back-end implementation, ensuring a seamless product build."
    />

</div>
</div>
</div>
</>
)
}
export default AgencyServices