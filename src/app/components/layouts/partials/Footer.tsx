import moment from "moment"
import { BsArrowUp } from "react-icons/bs"

type Props = {}

function Footer({ }: Props) {

    const year = moment().year()

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer className="my-5 rounded-md flex justify-end gap-x-2 p-5 pb-0">
            <p className="text-gray-600 text-sm">
                &copy; {year} Designed and built by Me
            </p>
            <button onClick={scrollTop} className="animate-bounce border border-gray-300 p-1 mb-1 rounded-full">
                <BsArrowUp className="text-gray-800" />
            </button>
        </footer>
    )
}

export default Footer