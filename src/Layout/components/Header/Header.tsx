import Image from 'next/image';
import Link from 'next/link';
export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__brand'>
          <Link href="/">
            <Image
              src='/logo-sochi.png'
              width={160}
              height={40}
              alt='Claro Sports SOCHI 2014'
							priority
							className="w-full h-auto"
            />
          </Link>
        </div>

        <div className='header__logo'>
          <div>
            <Image
              src='/logo-claro-sports.png'
              width={160}
              height={60}
              alt='Claro Sports'
							priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};
