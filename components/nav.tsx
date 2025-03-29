import Link from "next/link"
import Image from "next/image"

const Nav = () => {
    return (
        <nav className="
            bg-gradient-to-t from-slate-900 to-slate-700
            text-white 
            p-6 
            flex 
            flex-col 
            items-center 
            min-h-screen
            bottom-0
            "
        >
            <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                className="rounded-full w-24 h-24 mb-4"
                width={96}
                height={96}
            />
            <ul className="flex flex-col space-y-4 w-full text-center">
                <li>
                    <Link href="/">
                        <span className="hover:underline block py-2">About Me</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <span className="hover:underline block py-2">Work</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className="hover:underline block py-2">Resume</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav