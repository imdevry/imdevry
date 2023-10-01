import SocialLink from "components/SocialLink"

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <div>
                <h1 className="text-4xl font-bold tracking-tighest">
                    Rayan Reynaldo
                </h1>

                <h2 className="mt-1 text-sm tracking-wider">
                    Intern at WebMaker Philipines
                </h2>

                <p className="my-5">
                    I am passionate in developing web and hybrid applications.
                </p>
            </div>

            <div>
               
            </div>

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