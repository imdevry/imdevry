import moment from "moment"
import { BsArrowUp } from "react-icons/bs"

type Props = {}

function Footer({ }: Props) {

    const year = moment().year()

    const scrollTop = () => {
        if (typeof window !== undefined) scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="my-5 rounded-md flex justify-end gap-x-2">
            <p className="text-gray-600">
                &copy; {year} Designed and built by Me
            </p>
            <button onClick={scrollTop} className="animate-bounce border border-gray-300 p-2 mb-1 rounded-full">
                <BsArrowUp className="text-gray-800" />
            </button>
        </footer>
    )
}

export default Footer