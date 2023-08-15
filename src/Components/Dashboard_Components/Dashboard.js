import React, { useState } from "react";
import './Dashboard.css'
import Location from "./Objects/LocationTable/Location";


const Dashboard = () => {


    const [Sidebar, setSidebar] = useState(true)
    const [sbSize, setsbSize] = useState(15)
    const [mainSize, setMainsize] = useState(100)
    const [State, setState] = useState(1)


    const ChangeButtonState = () => {
        if (Sidebar) {
            setSidebar(false)
            setsbSize(5)
            setMainsize(95)
        }
        else {
            setSidebar(true)
            setsbSize('max-content')
            setMainsize('100')

        }
    }


    return (
        <div className="Dashboard_main_div">

            {/* Sidebar */}
            <div className="Dashboard_side_bar" style={{ width: `${sbSize}`, alignItems: Sidebar ? 'normal' : 'center' }}>
                <h2 style={{ display: Sidebar ? 'block' : 'none' }} className="Sidebar_heading">Transport</h2>
                <div className="Dashboard_btn_div">
                    <button onClick={ChangeButtonState} className="Sidebar_btn"><i class={Sidebar ? "fa-solid fa-chevron-right" : "fa-solid fa-chevron-left"}></i></button>
                </div>
                <ul className="Dashboard_sidebar_ul">
                    <li className={State === 1 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(1)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
                        <path d="M31.04 24.5499C31.5759 22.6609 31.6446 20.6807 31.2406 18.7626C30.8366 16.8445 29.9709 15.0398 28.7103 13.4883C27.4497 11.9367 25.8281 10.6799 23.9709 9.81487C22.1137 8.94989 20.0707 8.5 18 8.5C15.9293 8.5 13.8863 8.94989 12.0291 9.81487C10.1719 10.6799 8.55031 11.9367 7.28973 13.4883C6.02915 15.0398 5.16338 16.8445 4.7594 18.7626C4.35542 20.6807 4.42406 22.6609 4.96 24.5499" stroke="#909497" stroke-linecap="round" />
                        <path d="M19.1485 22.0749C19.8797 23.0798 19.3655 24.6129 18 25.4992C16.6345 26.3854 14.9348 26.2892 14.2036 25.2843C13.353 24.1153 10.2257 17.0472 8.68091 13.5065C8.46991 13.0228 9.08416 12.6242 9.48657 12.9836C12.4326 15.6149 18.298 20.9059 19.1485 22.0749Z" stroke={State === 1 ? 'black' : "#909497"} />
                        <path d="M18 8.5V11.3333" stroke={State === 1 ? 'black' : "#909497"} stroke-linecap="round" />
                        <path d="M8.45398 12.234L10.5753 14.2374" stroke={State === 1 ? 'black' : "#909497"} stroke-linecap="round" />
                        <path d="M27.546 12.234L25.4247 14.2374" stroke={State === 1 ? 'black' : "#909497"} stroke-linecap="round" />
                        <path d="M31.04 24.5496L28.1423 23.8162" stroke={State === 1 ? 'black' : "#909497"} stroke-linecap="round" />
                        <path d="M4.95996 24.5496L7.85774 23.8162" stroke={State === 1 ? 'black' : "#909497"} stroke-linecap="round" />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }} >Dashboard</p></li>
                    <li className={State === 2 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(2)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                        <path d="M28.4375 22.9754V8.98745C28.4375 8.65069 28.0812 8.43326 27.7817 8.58727L22.7642 11.1677C22.6615 11.2205 22.5423 11.2318 22.4315 11.1993L12.5685 8.30074C12.4577 8.26817 12.3385 8.27947 12.2358 8.3323L6.80669 11.1244C6.65675 11.2015 6.5625 11.356 6.5625 11.5246V25.5125C6.5625 25.8493 6.91883 26.0667 7.21831 25.9127L12.2358 23.3323C12.3385 23.2795 12.4577 23.2682 12.5685 23.3007L22.4315 26.1993C22.5423 26.2318 22.6615 26.2205 22.7642 26.1677L28.1933 23.3756C28.3432 23.2985 28.4375 23.144 28.4375 22.9754Z" stroke={State === 2 ? 'black' : "#909497"} />
                        <path d="M22.6042 26.25V11.25" stroke={State === 2 ? 'black' : "#909497"} />
                        <path d="M12.3958 23.25V8.25" stroke={State === 2 ? 'black' : "#909497"} />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }} >Location</p></li>
                    <li className={State === 3 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(3)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.8125C0 2.56386 0.0987721 2.3254 0.274587 2.14959C0.450403 1.97377 0.68886 1.875 0.9375 1.875H3.75C3.95912 1.87506 4.16222 1.94503 4.327 2.0738C4.49177 2.20256 4.60877 2.38272 4.65937 2.58562L5.41875 5.625H27.1875C27.3261 5.62508 27.4631 5.65592 27.5883 5.71528C27.7136 5.77465 27.8242 5.86107 27.9121 5.96831C28 6.07555 28.063 6.20095 28.0965 6.33548C28.1301 6.47 28.1334 6.61029 28.1062 6.74625L26.2312 16.1212C26.1902 16.3257 26.0822 16.5106 25.9243 16.6468C25.7664 16.783 25.5676 16.8626 25.3594 16.8731L7.74 17.7581L8.27812 20.625H24.375C24.6236 20.625 24.8621 20.7238 25.0379 20.8996C25.2137 21.0754 25.3125 21.3139 25.3125 21.5625C25.3125 21.8111 25.2137 22.0496 25.0379 22.2254C24.8621 22.4012 24.6236 22.5 24.375 22.5H7.5C7.28144 22.4998 7.06981 22.4232 6.90171 22.2836C6.7336 22.1439 6.61959 21.9498 6.57938 21.735L3.76875 6.76313L3.01875 3.75H0.9375C0.68886 3.75 0.450403 3.65123 0.274587 3.47541C0.0987721 3.2996 0 3.06114 0 2.8125ZM5.81625 7.5L7.39125 15.8981L24.5363 15.0375L26.0438 7.5H5.81625ZM9.375 22.5C8.38044 22.5 7.42661 22.8951 6.72335 23.5984C6.02009 24.3016 5.625 25.2554 5.625 26.25C5.625 27.2446 6.02009 28.1984 6.72335 28.9016C7.42661 29.6049 8.38044 30 9.375 30C10.3696 30 11.3234 29.6049 12.0267 28.9016C12.7299 28.1984 13.125 27.2446 13.125 26.25C13.125 25.2554 12.7299 24.3016 12.0267 23.5984C11.3234 22.8951 10.3696 22.5 9.375 22.5ZM22.5 22.5C21.5054 22.5 20.5516 22.8951 19.8484 23.5984C19.1451 24.3016 18.75 25.2554 18.75 26.25C18.75 27.2446 19.1451 28.1984 19.8484 28.9016C20.5516 29.6049 21.5054 30 22.5 30C23.4946 30 24.4484 29.6049 25.1516 28.9016C25.8549 28.1984 26.25 27.2446 26.25 26.25C26.25 25.2554 25.8549 24.3016 25.1516 23.5984C24.4484 22.8951 23.4946 22.5 22.5 22.5ZM9.375 24.375C8.87772 24.375 8.40081 24.5725 8.04918 24.9242C7.69754 25.2758 7.5 25.7527 7.5 26.25C7.5 26.7473 7.69754 27.2242 8.04918 27.5758C8.40081 27.9275 8.87772 28.125 9.375 28.125C9.87228 28.125 10.3492 27.9275 10.7008 27.5758C11.0525 27.2242 11.25 26.7473 11.25 26.25C11.25 25.7527 11.0525 25.2758 10.7008 24.9242C10.3492 24.5725 9.87228 24.375 9.375 24.375ZM22.5 24.375C22.0027 24.375 21.5258 24.5725 21.1742 24.9242C20.8225 25.2758 20.625 25.7527 20.625 26.25C20.625 26.7473 20.8225 27.2242 21.1742 27.5758C21.5258 27.9275 22.0027 28.125 22.5 28.125C22.9973 28.125 23.4742 27.9275 23.8258 27.5758C24.1775 27.2242 24.375 26.7473 24.375 26.25C24.375 25.7527 24.1775 25.2758 23.8258 24.9242C23.4742 24.5725 22.9973 24.375 22.5 24.375Z" fill={State === 3 ? 'black' : "#909497"} />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }} >Orders</p></li>
                    <li className={State === 4 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(4)}><svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M26.3124 5.16187C26.6139 5.16187 26.8582 4.91751 26.8582 4.61608C26.8582 4.31465 26.6139 4.0703 26.3124 4.0703C26.011 4.0703 25.7667 4.31465 25.7667 4.61608C25.7667 4.91751 26.011 5.16187 26.3124 5.16187Z" fill="black" />
                        <path d="M22.5744 13.4562L21.7432 3.06744" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.26055 3.02065L6.42114 13.5126" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.4207 12.9427L20.8749 10.2137C20.8448 10.0628 20.7632 9.92695 20.6442 9.82936C20.5252 9.73178 20.376 9.67848 20.222 9.67856H8.77791C8.62398 9.67848 8.47479 9.73178 8.35576 9.82936C8.23672 9.92695 8.1552 10.0628 8.12508 10.2137L7.59473 12.8655" stroke="#909497" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.8036 21.7321H26.0714V15.5848C26.0713 15.2971 25.957 15.0213 25.7536 14.8179C25.5502 14.6145 25.2743 14.5001 24.9866 14.5H23.1786" stroke="#909497" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.74478 14.5H4.01341C3.72574 14.5001 3.44988 14.6145 3.24647 14.8179C3.04305 15.0213 2.92872 15.2971 2.92859 15.5848V21.7321H9.19645" stroke="#909497" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.1928 14.5H18.3249C18.2082 13.5682 17.7552 12.711 17.0511 12.0896C16.347 11.4682 15.4402 11.1253 14.5011 11.1253C13.562 11.1253 12.6552 11.4682 11.951 12.0896C11.2469 12.711 10.7939 13.5682 10.6772 14.5H9.73315" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.74998 16.9107C8.8151 16.9107 9.67855 16.0473 9.67855 14.9821C9.67855 13.917 8.8151 13.0536 7.74998 13.0536C6.68486 13.0536 5.82141 13.917 5.82141 14.9821C5.82141 16.0473 6.68486 16.9107 7.74998 16.9107Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 16.9107C22.3151 16.9107 23.1786 16.0473 23.1786 14.9821C23.1786 13.917 22.3151 13.0536 21.25 13.0536C20.1849 13.0536 19.3214 13.917 19.3214 14.9821C19.3214 16.0473 20.1849 16.9107 21.25 16.9107Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.80273 19.8036H1V22.2143C1 22.5979 1.15239 22.9658 1.42365 23.2371C1.69491 23.5083 2.06281 23.6607 2.44643 23.6607H26.5536C26.9372 23.6607 27.3051 23.5083 27.5764 23.2371C27.8476 22.9658 28 22.5979 28 22.2143V19.8036H26.3125" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.26794 23.8386V25.8222C7.26794 26.144 7.14009 26.4527 6.9125 26.6803C6.68492 26.9079 6.37625 27.0357 6.05439 27.0357H5.1065C4.78464 27.0357 4.47597 26.9079 4.24839 26.6803C4.0208 26.4527 3.89294 26.144 3.89294 25.8222V23.9066" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.1071 23.8386V25.8222C25.1071 26.144 24.9792 26.4527 24.7516 26.6803C24.524 26.9079 24.2154 27.0357 23.8935 27.0357H22.9456C22.6238 27.0357 22.3151 26.9079 22.0875 26.6803C21.8599 26.4527 21.7321 26.144 21.7321 25.8222V23.9524" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.5 15.4643C15.0115 15.4643 15.502 15.6675 15.8637 16.0292C16.2254 16.3908 16.4286 16.8814 16.4286 17.3929V21.7322H12.5714V17.3929C12.5714 16.8814 12.7746 16.3908 13.1363 16.0292C13.498 15.6675 13.9885 15.4643 14.5 15.4643Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.8393 23.8386V25.5893H10.1608V23.8386" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.6428 22.6964C11.4417 22.6964 12.0893 22.0488 12.0893 21.25C12.0893 20.4511 11.4417 19.8036 10.6428 19.8036C9.844 19.8036 9.19641 20.4511 9.19641 21.25C9.19641 22.0488 9.844 22.6964 10.6428 22.6964Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.3572 22.6964C19.156 22.6964 19.8036 22.0488 19.8036 21.25C19.8036 20.4511 19.156 19.8036 18.3572 19.8036C17.5584 19.8036 16.9108 20.4511 16.9108 21.25C16.9108 22.0488 17.5584 22.6964 18.3572 22.6964Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.71434 1H20.2858C20.7973 1 21.2878 1.20319 21.6495 1.56487C22.0111 1.92654 22.2143 2.41708 22.2143 2.92857H6.78577C6.78577 2.41708 6.98896 1.92654 7.35063 1.56487C7.71231 1.20319 8.20285 1 8.71434 1Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.6429 4.375L8.95544 6.0625" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5714 4.375L9.19641 7.75" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.1786 14.0179L25.5893 11.6071" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.5535 11.6071C27.0861 11.6071 27.5178 11.1754 27.5178 10.6428C27.5178 10.1103 27.0861 9.67856 26.5535 9.67856C26.021 9.67856 25.5892 10.1103 25.5892 10.6428C25.5892 11.1754 26.021 11.6071 26.5535 11.6071Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.82148 14.0179L3.41077 11.6071" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.44634 11.6071C2.9789 11.6071 3.41063 11.1754 3.41063 10.6428C3.41063 10.1103 2.9789 9.67856 2.44634 9.67856C1.91378 9.67856 1.48206 10.1103 1.48206 10.6428C1.48206 11.1754 1.91378 11.6071 2.44634 11.6071Z" stroke={State === 4 ? 'black' : "#909497"} stroke-linecap="round" stroke-linejoin="round" />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }} >vehicles</p></li>
                    <li className={State === 5 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(5)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 21.0357C4.5 21.0357 3 21.0357 3 19.5357C3 18.0357 4.5 13.5357 12 13.5357C19.5 13.5357 21 18.0357 21 19.5357C21 21.0357 19.5 21.0357 19.5 21.0357H4.5ZM12 12.0357C13.1935 12.0357 14.3381 11.5616 15.182 10.7177C16.0259 9.87377 16.5 8.72918 16.5 7.53571C16.5 6.34223 16.0259 5.19764 15.182 4.35373C14.3381 3.50981 13.1935 3.03571 12 3.03571C10.8065 3.03571 9.66193 3.50981 8.81802 4.35373C7.97411 5.19764 7.5 6.34223 7.5 7.53571C7.5 8.72918 7.97411 9.87377 8.81802 10.7177C9.66193 11.5616 10.8065 12.0357 12 12.0357Z" fill={State === 5 ? 'black' : "#909497"} />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }}>Drivers</p></li>
                    <li className={State === 6 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(6)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clip-path="url(#clip0_1_64)">
                            <path d="M4.5 3.03571H16.5C17.2956 3.03571 18.0587 3.35178 18.6213 3.91439C19.1839 4.47699 19.5 5.24006 19.5 6.03571V21.0357C19.5 21.8314 19.1839 22.5944 18.6213 23.157C18.0587 23.7196 17.2956 24.0357 16.5 24.0357H4.5C3.70435 24.0357 2.94129 23.7196 2.37868 23.157C1.81607 22.5944 1.5 21.8314 1.5 21.0357H3C3 21.4335 3.15804 21.8151 3.43934 22.0964C3.72064 22.3777 4.10218 22.5357 4.5 22.5357H16.5C16.8978 22.5357 17.2794 22.3777 17.5607 22.0964C17.842 21.8151 18 21.4335 18 21.0357V6.03571C18 5.63788 17.842 5.25635 17.5607 4.97505C17.2794 4.69374 16.8978 4.53571 16.5 4.53571H4.5C4.10218 4.53571 3.72064 4.69374 3.43934 4.97505C3.15804 5.25635 3 5.63788 3 6.03571H1.5C1.5 5.24006 1.81607 4.47699 2.37868 3.91439C2.94129 3.35178 3.70435 3.03571 4.5 3.03571Z" stroke={State === 6 ? 'black' : "#909497"} />
                            <path d="M7.5 0.0357056H19.5C20.2956 0.0357056 21.0587 0.351776 21.6213 0.914385C22.1839 1.47699 22.5 2.24006 22.5 3.03571V18.0357C22.5 18.8314 22.1839 19.5944 21.6213 20.157C21.0587 20.7196 20.2956 21.0357 19.5 21.0357V19.5357C19.8978 19.5357 20.2794 19.3777 20.5607 19.0964C20.842 18.8151 21 18.4335 21 18.0357V3.03571C21 2.63788 20.842 2.25635 20.5607 1.97505C20.2794 1.69374 19.8978 1.53571 19.5 1.53571H7.5C7.10218 1.53571 6.72064 1.69374 6.43934 1.97505C6.15804 2.25635 6 2.63788 6 3.03571H4.5C4.5 2.24006 4.81607 1.47699 5.37868 0.914385C5.94129 0.351776 6.70435 0.0357056 7.5 0.0357056V0.0357056ZM1.5 9.03571V8.28571C1.5 8.08679 1.57902 7.89603 1.71967 7.75538C1.86032 7.61472 2.05109 7.53571 2.25 7.53571C2.44891 7.53571 2.63968 7.61472 2.78033 7.75538C2.92098 7.89603 3 8.08679 3 8.28571V9.03571H3.75C3.94891 9.03571 4.13968 9.11472 4.28033 9.25538C4.42098 9.39603 4.5 9.58679 4.5 9.78571C4.5 9.98462 4.42098 10.1754 4.28033 10.316C4.13968 10.4567 3.94891 10.5357 3.75 10.5357H0.75C0.551088 10.5357 0.360322 10.4567 0.21967 10.316C0.0790176 10.1754 0 9.98462 0 9.78571C0 9.58679 0.0790176 9.39603 0.21967 9.25538C0.360322 9.11472 0.551088 9.03571 0.75 9.03571H1.5ZM1.5 13.5357V12.7857C1.5 12.5868 1.57902 12.396 1.71967 12.2554C1.86032 12.1147 2.05109 12.0357 2.25 12.0357C2.44891 12.0357 2.63968 12.1147 2.78033 12.2554C2.92098 12.396 3 12.5868 3 12.7857V13.5357H3.75C3.94891 13.5357 4.13968 13.6147 4.28033 13.7554C4.42098 13.896 4.5 14.0868 4.5 14.2857C4.5 14.4846 4.42098 14.6754 4.28033 14.816C4.13968 14.9567 3.94891 15.0357 3.75 15.0357H0.75C0.551088 15.0357 0.360322 14.9567 0.21967 14.816C0.0790176 14.6754 0 14.4846 0 14.2857C0 14.0868 0.0790176 13.896 0.21967 13.7554C0.360322 13.6147 0.551088 13.5357 0.75 13.5357H1.5ZM1.5 18.0357V17.2857C1.5 17.0868 1.57902 16.896 1.71967 16.7554C1.86032 16.6147 2.05109 16.5357 2.25 16.5357C2.44891 16.5357 2.63968 16.6147 2.78033 16.7554C2.92098 16.896 3 17.0868 3 17.2857V18.0357H3.75C3.94891 18.0357 4.13968 18.1147 4.28033 18.2554C4.42098 18.396 4.5 18.5868 4.5 18.7857C4.5 18.9846 4.42098 19.1754 4.28033 19.316C4.13968 19.4567 3.94891 19.5357 3.75 19.5357H0.75C0.551088 19.5357 0.360322 19.4567 0.21967 19.316C0.0790176 19.1754 0 18.9846 0 18.7857C0 18.5868 0.0790176 18.396 0.21967 18.2554C0.360322 18.1147 0.551088 18.0357 0.75 18.0357H1.5Z" fill={State === 6 ? 'black' : "#909497"} />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_64">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.0357056)" />
                            </clipPath>
                        </defs>
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }}>Reports</p></li>
                    <li className={State === 7 ? "Dashboard_sidebar_li_active" : "Dashboard_sidebar_li"} onClick={() => setState(7)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1801 4.83668V4.8367L21.2539 5.57461C21.4172 7.20815 21.4989 8.02492 22.0517 8.2539C22.6046 8.48288 23.2398 7.9631 24.5104 6.92352L25.0844 6.45394C25.7501 5.90922 26.083 5.63687 26.4678 5.65606C26.8527 5.67526 27.1568 5.97938 27.7651 6.58764L29.448 8.27059C30.0563 8.87884 30.3604 9.18297 30.3796 9.5678C30.3988 9.95264 30.1264 10.2855 29.5817 10.9513L29.1121 11.5253C28.0725 12.7958 27.5527 13.4311 27.7817 13.984C28.0107 14.5368 28.8275 14.6185 30.461 14.7818L31.199 14.8556C32.0549 14.9412 32.4829 14.984 32.7415 15.2697C33 15.5554 33 15.9855 33 16.8457V19.2257C33 20.0859 33 20.516 32.7415 20.8017C32.4829 21.0874 32.0549 21.1302 31.199 21.2158H31.199L30.4616 21.2895C28.828 21.4529 28.0113 21.5346 27.7823 22.0874C27.5533 22.6402 28.0731 23.2755 29.1127 24.5461L29.5818 25.1195C30.1265 25.7852 30.3989 26.1181 30.3797 26.5029C30.3605 26.8878 30.0563 27.1919 29.4481 27.8002L27.7651 29.4831C27.1569 30.0914 26.8528 30.3955 26.4679 30.4147C26.0831 30.4339 25.7502 30.1615 25.0844 29.6168L24.5105 29.1472C23.2399 28.1076 22.6046 27.5879 22.0518 27.8168C21.499 28.0458 21.4173 28.8626 21.254 30.4961L21.1801 31.2347V31.2347C21.0945 32.0906 21.0517 32.5186 20.766 32.7772C20.4803 33.0357 20.0502 33.0357 19.19 33.0357H16.81C15.9498 33.0357 15.5197 33.0357 15.234 32.7772C14.9483 32.5186 14.9055 32.0906 14.8199 31.2347L14.7461 30.4967C14.5827 28.8632 14.5011 28.0464 13.9483 27.8174C13.3954 27.5884 12.7601 28.1082 11.4896 29.1478L10.9155 29.6175C10.2497 30.1622 9.91686 30.4346 9.53203 30.4154C9.14719 30.3962 8.84307 30.092 8.23481 29.4838L6.55186 27.8008C5.94361 27.1926 5.63948 26.8885 5.62029 26.5036C5.60109 26.1188 5.87345 25.7859 6.41816 25.1202L6.8878 24.5461C7.92738 23.2756 8.44717 22.6403 8.21819 22.0874C7.9892 21.5346 7.17243 21.4529 5.5389 21.2896L4.80099 21.2158H4.80097C3.94505 21.1302 3.51709 21.0874 3.25855 20.8017C3 20.516 3 20.0859 3 19.2257V16.8457C3 15.9855 3 15.5554 3.25855 15.2697C3.51709 14.984 3.94506 14.9412 4.80099 14.8556L5.53946 14.7818C7.173 14.6184 7.98977 14.5367 8.21875 13.9839C8.44773 13.4311 7.92795 12.7958 6.88837 11.5252L6.41823 10.9506C5.87352 10.2848 5.60116 9.95196 5.62036 9.56712C5.63955 9.18229 5.94368 8.87816 6.55193 8.26991L8.23488 6.58696C8.84314 5.9787 9.14726 5.67458 9.5321 5.65538C9.91693 5.63619 10.2498 5.90854 10.9156 6.45326L11.4896 6.92293C12.7602 7.96251 13.3955 8.4823 13.9483 8.25331C14.5011 8.02433 14.5828 7.20756 14.7462 5.57402L14.8199 4.8367C14.9055 3.98077 14.9483 3.5528 15.234 3.29425C15.5197 3.03571 15.9498 3.03571 16.81 3.03571H19.19C20.0502 3.03571 20.4803 3.03571 20.766 3.29425C21.0517 3.5528 21.0945 3.98076 21.1801 4.83668ZM18 24.0357C21.3137 24.0357 24 21.3494 24 18.0357C24 14.722 21.3137 12.0357 18 12.0357C14.6863 12.0357 12 14.722 12 18.0357C12 21.3494 14.6863 24.0357 18 24.0357Z" fill={State === 7 ? 'black' : "#909497"} />
                    </svg><p style={{ display: Sidebar ? 'block' : 'none' }}>Settings</p></li>

                </ul>

            </div>
            {/* Main div */}
            <div className="Dashboard_right_div" style={{ width: `${mainSize}%` }}>
                <div className="Right_upper_div">
                    <div className="Right_upper_div_sec1">
                        <div className="Right_upper_div_user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68 64" fill="none">
                                <ellipse cx="33.9948" cy="26.2868" rx="8.28367" ry="7.88603" fill="#4F4F4F" />
                                <ellipse cx="33.9948" cy="31.5441" rx="24.851" ry="23.6581" stroke="#4F4F4F" stroke-width="1.2" />
                                <path d="M50.1756 49.4658C50.4061 49.2905 50.4993 48.986 50.3916 48.7172C49.3473 46.1096 47.2681 43.8114 44.4361 42.1462C41.4406 40.3848 37.7705 39.4301 33.9948 39.4301C30.2191 39.4301 26.5489 40.3848 23.5534 42.1462C20.7214 43.8114 18.6422 46.1096 17.5979 48.7172C17.4902 48.986 17.5835 49.2905 17.8139 49.4658C27.3753 56.7387 40.6143 56.7387 50.1756 49.4658Z" fill="#7E869E" fill-opacity="0.25" stroke="#4F4F4F" stroke-width="1.2" stroke-linecap="round" />
                            </svg>
                            <h4 className="UserName">User</h4>
                        </div>
                    </div>

                </div>
                <div>
                    <Location State={State}/>
                </div>

            </div>
        </div>
    )
}


export default Dashboard