import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href="/">
            <Image height={100} width={165} className="max-w-[100px] md:max-w-[165px]" src="/lws_logo.png" alt="Lws"/>
        </Link>
    );
}

export default Logo;
