import classNames from "classnames"
import SocialLink from "components/SocialLink"
import { NavLink } from "react-router-dom"

type Props = {}

function Header({ }: Props) {

    const navLinkClasses = (props: { isActive: boolean, isPending: boolean, }) => {
        const { isActive } = props

        return classNames(
            "font-medium text-sm tracking-wider relative w-full flex gap-x-3 items-center select-none",
            "before:content-[''] before:rounded-full before:h-[1.5px] before:bg-gray-300 before:transition-all delay-1000 duration-2000 ease-in-out",
            {
                ["before:w-16 text-blue-800"]: isActive,
                ["before:w-8 hover:before:w-16"]: !isActive,
            }
        )
    }

    return (
        <>
            <div>
                <h1 className="text-3xl pt-3 font-semibold">
                    Rayan Reynaldo
                </h1>

                <h2 className="mt-1 font-semibold">
                    Intern at RGRR WebMaker Philipines
                </h2>

                <p className="mt-5">
                    I am enthusiastic and resourceful in developing web applications.
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

            <div className="flex gap-x-2 mb-5 sticky top-0 z-50">
                <SocialLink classes="hover:scale-110" network="github" href="https://github.com/imdevry" />
                <SocialLink classes="hover:scale-110" network="email" href="mailto:official@reynaldorayan.dev" />
                <SocialLink classes="hover:scale-110" network="facebook" href="https://www.facebook.com/reynaldorayanvega" />
                <SocialLink classes="hover:scale-110" network="linkedin" href="https://www.linkedin.com/in/imdevry" />
            </div>
        </>
    )
}

export default Header