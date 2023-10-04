import { SocialIcon } from "react-social-icons"

type Props = {
    href: string
    network: string
    classes?: string
}

function SocialLink({ href, network, classes }: Props) {
    return (
        <SocialIcon className={classes} title={network} href={href} network={network} style={{ height: 35, width: 35 }} target="_blank" />
    )
}

export default SocialLink