import { SocialIcon } from "react-social-icons"

type Props = {
    href: string
    network: string
}

function SocialLink({ href, network }: Props) {
    return (
        <SocialIcon title={network} href={href} network={network} style={{ height: 35, width: 35 }} target="_blank" />
    )
}

export default SocialLink