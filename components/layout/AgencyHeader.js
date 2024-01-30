import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import NavConstant from "../../constant/HeaderConstant/NavConstant"
import { useIsVisible } from "react-is-visible"

const AgencyHeader=()=>{

const navToggle = useRef(null)
const navHambargar = useRef(null)

const navRef = useRef()
const isVisible = useIsVisible(navRef)



// toggle nav
async function ToggleNav(){
    try{
    navHambargar.current.classList.toggle('h-active')
    navToggle.current.classList.toggle('slidenav')
    }catch(err){}
}

// toggle sub menu
async function ToggleSubMenu(e){
    try{
    if(e.target.nextSibling.style.display==="block"){
        e.target.nextSibling.style.display="none"
        e.target.innerHTML="+"
    }else{
        e.target.nextSibling.style.display="block"
        e.target.innerHTML="-"
    }
    }catch(err){}
}    

return(
<>
<nav ref={navRef}>
<div className={`header-menu-area agency-menu ${isVisible?'':'sticky'} `}>
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-6 col-6">
        <div className="logo text-left">
            <Link href="/"><a><Image src={NavConstant.Logo} alt="" width="160px" height="108px"/></a></Link>
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-8 col-sm-6 col-6">
        <div className="hidden-lg hamburger" ref={navHambargar} onClick={ToggleNav}>
            <span className="h-top"></span>
            <span className="h-middle"></span>
            <span className="h-bottom"></span>
        </div>
        <nav className="main-nav" ref={navToggle}> 
            <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                <Link href="/"><a><Image src={NavConstant.Logo} alt="" width="120px" height="120px"/></a></Link>
            </div>
            <ul>
                <li><Link href="/agency"><a className="active">Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li className="has-child-menu">
                    <a>Products</a>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="https://pindown.app/"><a>Pindown</a></Link></li>
                        <li><Link href="https://blockiot.trizwit.com/"><a>BlockIoT</a></Link></li>
                        <li><Link href="https://trizui.trizwit.com/"><a>FASTN UI</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"><a>Contact </a></Link></li>
            </ul>
        </nav>
    </div>
</div>
</div>
</div>
</nav>
</>
)
}
export default AgencyHeader