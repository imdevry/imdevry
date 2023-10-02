import classNames from "classnames"
import SocialLink from "components/SocialLink"
import { NavLink } from "react-router-dom"

type Props = {}

function Header({ }: Props) {

    const navLinkClasses = (props: { isActive: boolean, isPending: boolean, }) => {
        const { isActive } = props

        return classNames(
            "text-sm tracking-wider relative w-full flex gap-x-3 items-center select-none",
            "before:content-[''] before:rounded-full before:h-[1.5px] before:bg-gray-200 before:transition-all duration-2000 ease-in-out",
            {
                ["before:w-16 text-blue-800"]: isActive,
                ["before:w-8 hover:before:w-20"]: !isActive,
            }
        )
    }

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold tracking-tighest">
                    Rayan Reynaldo
                </h1>

                <h2 className="mt-1 text-sm tracking-wider font-medium">
                    Intern at WebMaker Philipines
                </h2>

                <p className="mt-5 font-thin">
                    I am humble and passionate in developing web applications.
                </p>
            </div>

            <nav className="flex flex-col gap-y-4">
                <NavLink to="/" className={navLinkClasses}>
                    About
                </NavLink>
                <NavLink to="/experience" className={navLinkClasses}>
                    Experience
                </NavLink>
                <NavLink to="/projects" className={navLinkClasses}>
                    Projects
                </NavLink>
            </nav>

            <div className="flex gap-x-2 my-5">
                <SocialLink network="github" href="https://github.com/imdevry" />
                <SocialLink network="email" href="mailto:official@reynaldorayan.dev" />
                <SocialLink network="facebook" href="https://www.facebook.com/reynaldorayanvega" />
                <SocialLink network="linkedin" href="https://www.linkedin.com/in/imdevry" />
            </div>
        </>
    )
}

export default Header