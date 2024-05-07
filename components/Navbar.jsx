import Logo from "@/components/Logo";

function Navbar() {
    return (
        <nav className="py-4 md:py-6 border-b">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <Logo/>

                <div className="flex gap-4 items-center">

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
