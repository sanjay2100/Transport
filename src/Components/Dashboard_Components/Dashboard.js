import React, { useState } from "react";
import './Dashboard.css'


const Dashboard=()=>{


const [Sidebar,setSidebar]=useState(true)
const[sbSize,setsbSize]=useState(15)
const[mainSize,setMainsize]=useState(85)
const[State,setState]=useState(1)

const ChangeButtonState=()=>{
    if(Sidebar){
        setSidebar(false)
        setsbSize(5)
        setMainsize(95)
    }
    else{
        setSidebar(true)
        setsbSize('max-content')
        setMainsize('max-content')
    
}


    return(
        <div className="Dashboard_main_div">
            
            {/* Sidebar */}
            <div className="Dashboard_side_bar"style={{width:`${sbSize}`,alignItems:Sidebar?'normal':'center'}}>
                <div className="Dashboard_btn_div">
                <button onClick={ChangeButtonState} className="Sidebar_btn"><i class={Sidebar?"fa-solid fa-chevron-right":"fa-solid fa-chevron-left"}></i></button>
                </div>
                <ul className="Dashboard_sidebar_ul">
                    <li className={State===1?"Dashboard_sidebar_li_active":"Dashboard_sidebar_li"} onClick={()=>setState(1)}><i class="fa-regular fa-clipboard" style={{fontSize:Sidebar?"16px":"25px"}}></i><p style={{display:Sidebar?'block':'none'}} >Application</p></li>
                    <li className={State===2?"Dashboard_sidebar_li_active":"Dashboard_sidebar_li"}  onClick={()=>setState(2)}><i class="fa-solid fa-list" style={{fontSize:Sidebar?"16px":"25px"}}></i><p style={{display:Sidebar?'block':'none'}} >List</p></li>
                    <li className={State===3?"Dashboard_sidebar_li_active":"Dashboard_sidebar_li"}  onClick={()=>setState(3)}><i class="fa-regular fa-bell" style={{fontSize:Sidebar?"16px":"25px"}}></i><p style={{display:Sidebar?'block':'none'}} >Bell</p></li>
                    <li className={State===4?"Dashboard_sidebar_li_active":"Dashboard_sidebar_li"}  onClick={()=>setState(4)}><i class="fa-solid fa-star" style={{fontSize:Sidebar?"16px":"25px"}}></i><p style={{display:Sidebar?'block':'none'}} >Star</p></li>
                </ul>

            </div>
            {/* Main div */}
            <div className="Dashboard_right_div" style={{width:`${mainSize}`}}>

            </div>
        </div>
    )
}}


export default Dashboard