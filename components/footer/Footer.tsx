import FooterLinks from "./FooterLinks";
import FooterCopyrightLinks from "./FooterCopyrightLinks";
import FooterCopyright from "./FooterCopyright";
import CarLogo from "./CarLogo";
import FooterCopyrightCol from "./FooterCopyrightCol";

const Footer = () => (

  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>

    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>

      <div className='flex flex-col justify-start items-start gap-6'>
        <CarLogo />
        <FooterCopyrightCol />
      </div>
      <FooterLinks />
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <FooterCopyright />
      <FooterCopyrightLinks />
    </div>
  </footer>
);

export default Footer;
