import Link from "next/link"
import HomeDetailOne from "../../../constant/home/DetailOne"

const DetailLeft=()=>{
return(
<>
<div className="col-xxl-6 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="everything-img-wrap">
        <img src="assets/images/shape/everything-hrrd.png" alt=""/>
        <div className="income-cart">
        <img src={HomeDetailOne.MeetingIcon1} alt=""/>
        </div>
        <div className="like-cart">
        <div className="like-cart-box">
                <div className="like-cart-icon">
                <img src={HomeDetailOne.MeetingIcon2} alt=""/>
                </div>
            </div>
    </div>
        <div className="time-cart">
            <div className="time-cart-img-list">
                <img src={HomeDetailOne.MeetingIcon3} alt=""/>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default DetailLeft