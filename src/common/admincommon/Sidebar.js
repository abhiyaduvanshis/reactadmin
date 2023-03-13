import React from "react";


function Sidebar(){
    return(
        <>
            <div className="col col-lg-2 sidebarbg">
                <h4 className="text-center p-3 whitecolor">Hastaghits</h4>
                <ul className="siderbar-ul">
                <li className="active">< a href="">Dashboard</a></li>
                <li>< a href="">Campaign</a></li>
                <li>< a href="">Order</a></li>
                <li>< a href="">List</a></li>
                <li>< a href="">Payment Plan</a></li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;