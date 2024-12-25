import { Outlet } from "react-router";

export function AuthLayout(){
    return(
        <div className="layout">
            <h1>hello everone</h1>
            <div><Outlet/></div>
        </div>
    )

}