import { useState } from "react"
import PricingItem from "./Pricing/item"
import { v4 as uuidv4 } from 'uuid';

const HomePricing=()=>{
const [Monthly,setMonthly] = useState(false)
const [AllPricing,setAllPricing] = useState([
	{
	name:"Starter Plan",
	permonth:"$0",
	peryear:"$0",
	features: [
		"10 certificates",
		"1 Batch",
		"No customization",
		"1 brand image",
		"No design support"
	],
	yearfeatures: [
		"10 certificates",
		"1 Batch",
		"No customization",
		"1 brand image",
		"No design support"
	],
	monthly: true,
	premium: false,
	animation: "fadeInLeft"
   },
   {
	name:"Pro Plan",
	permonth:"$45",
	peryear:"$449",
	features: [
		"150 certificates",
		"2 batches",
		"Limited customization",
		"Image gallery access",
		"Limited design support"
	],
	yearfeatures: [
		"1500 certificates",
		"20 Batch",
		"Limited customization",
		"Image gallery access",
		"Limited design support"
	],
	monthly: true,
	premium: true
   },
   {
	name:"Business Plan",
	permonth:"$139",
	peryear:"$0.25/certificate",
	features: [
		"1000  Certificates",
		"5 batches",
		"Custom plan",
		"Customization and design support",
		"Image gallery access"
	],
	yearfeatures: [
		"10000 certificates",
		"50 Batch",
		"Custom plan",
		"Customization and design support",
		"Image gallery access"
	],
	monthly: true,
	premium: false,
	animation: "fadeInRight"
   }
])

// Toggle between monthly and yearly
function TogglePricing(e){
  try{
   Monthly?setMonthly(false):setMonthly(true)
  }catch(err){}
}

return(
<>
<div className="pricing-area positioning pb-76">
	<div className="container">
		<div className="row">
			<div className="col-xl-12 col-lg-12 col-sm-12 col-12">
				<div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
					<h1>Affordable <span>Pricing</span></h1>
				</div>
				<div className="toggle-btn text-center">
			        <span style={{"marginRight":"30px"}}>Annually</span>
			        <label className="switch">
			          <input type="checkbox" id="checbox" onChange={TogglePricing}/>
			          <span className="slider round"></span>
			        </label>
			        <span style={{"marginLeft":"30px"}}>Monthly</span>
			    </div>
			</div>
		</div>
		<div className="row">
       
	   {
		 AllPricing.map(list=>{
			return <PricingItem
			   key={uuidv4()}
			   name={list.name}
			   permonth={list.permonth}
			   peryear={list.peryear}
			   features={list.features}
			   yearfeatures={list.yearfeatures}
			   premium={list.premium}
			   priceMonthly={Monthly}
			   animation={list.animation}
			/>
		 })
	   }

		</div>
	</div>
	<img className="shape pricing-shape" src="/assets/images/shape/hrrd-pricing.png" alt=""/>
</div>
</>
)
}
export default HomePricing