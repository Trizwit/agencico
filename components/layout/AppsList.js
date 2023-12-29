
const AppsList=(props)=>{
return(
    <>
    <div>
        <div>
            <div className="works-image-container">
            <img className="works-image" src={props.icon} alt=""/>
            </div>
            <div className="works-text">
               <img src={props.steptext} alt="" />
            </div>
        </div>
    </div>
    </>
)
}
export default AppsList