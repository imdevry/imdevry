import SocialLink from "components/SocialLink"

type Props = {}

function Header({ }: Props) {
    return (
        <div>
            <div className="flex gap-x-1 mb-5">
                <SocialLink network="github" href="https://github.com/imdevry" />
                <SocialLink network="linkedin" href="https://www.linkedin.com/in/imdevry" />
            </div>
        </div>
    )
}

export default Header