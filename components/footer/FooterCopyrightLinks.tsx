
import Link from "next/link";

const FooterCopyrightLinks = () => {
    return (
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
            <Link href="/" className="text-gray-500">
                Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
                Terms & Condition
            </Link>
        </div>
    )
}

export default FooterCopyrightLinks