import navlinks from "../../data/navlinks"
import Link from "next/link"

export default function Nav() {

    return (
        <nav>
            {navlinks.map(nav => (
                <Link href={nav.link} key={nav.title}>
                    <p className={`mr-5`}>{nav.title}</p>
                </Link>
            ))}
        </nav>
    )
}