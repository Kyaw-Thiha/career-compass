import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export default function Root() {
    const navigate = useNavigate()
    return (
        <div id="detail">
            <nav className="grid grid-cols-2 md:grid-cols-3 mb-4 md:mb-8 mx-4">
                <div className="hidden md:block"></div>
                <div className="flex flex-row gap-2 items-center md:justify-self-center cursor-pointer" onClick={() => navigate("/")}>
                    <img className="w-48 md:w-64" src='/logo.png' alt="Logo" />
                </div>
                <div className="flex items-center justify-self-end">
                    <Button>Find Your Mentors</Button>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

