import { some, none } from 'fp-ts/lib/Option';
import CustomBtn from '../custom/CustomBtn';
import CarLogo from "../CarLogo";

const NavBar = () => (
    <header className='w-full absolute z-10'>
        <nav className='flex mx-auto px-6 py-4 sm:px-16 max-w-[1440px] justify-between items-center bg-transparent'>

            <CarLogo />

            <CustomBtn
                title='Sign in'
                btnType='button'
                containerStyles={some('text-primary-blue rounded-full bg-white min-w-[130px]')}
                textStyles={none}
                rightIcon={none}
            />
        </nav>
    </header>
);

export default NavBar;
