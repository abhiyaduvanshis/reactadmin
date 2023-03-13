import React from "react";
import Header from "../common/admincommon/Header";
import Sidebar from "../common/admincommon/Sidebar";
function Dashboard(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <Header/>
                </div>
            </div>
        </>
    )
}
export default Dashboard;