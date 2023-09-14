import { footerLinks } from "@/constants";
import Link from "next/link";

const FooterLinks = () => {
    return (
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
            {footerLinks.map((item) => (
                <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                    <h3 className="font-bold">{item.title}</h3>
                    <div className="flex flex-col gap-5">
                        {item.links.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                className="text-gray-500"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default FooterLinks