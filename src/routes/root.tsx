import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button"

export default function Root() {
    return (
        <div id="detail">
            <nav className="flex flex-row content-between justify-between mb-8 mx-4">
                <div></div>
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-24" src='/logo.png' alt="Logo" />
                    <h2 className="text-2xl">Career Partners</h2>
                </div>
                <div className="flex items-center">
                    <Button>Find Your Mentors</Button>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

