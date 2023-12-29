import AppsList from "./AppsList"

const LayoutAppGrid=()=>{
return(
<>
<div className="apps-area positioning pb-76  pt-100">
<div className="container">
<div className="row">
    <div className="col-lg-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>How <span>It</span> <br/>Works</h1>
        </div>
    </div>
</div>
<div className="works">
    <AppsList
     icon="assets/images/client-logo/step-1.png"
     steptext="/assets/images/client-logo/steptext-1.png"
    />
    <AppsList
     icon="assets/images/client-logo/step-2.png"
     steptext="/assets/images/client-logo/steptext-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/step-3.png"
     steptext="/assets/images/client-logo/steptext-3.png"
    />

</div>
</div>
<img className="shape hrrd-app-shape" src="/assets/images/shape/hrrd-app.png" alt=""/>
</div>
</>
)
}
export default LayoutAppGrid