import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from '@/Layout/components/SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__privacy'>
          <Link href='/aviso-privacidad'>Aviso de Privacidad</Link>
          <span>/</span>
          <Link href='/contacto'>Contacto</Link>
        </div>
        <div className='footer__logo'>
          <Link href='/'>
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
        <div className='footer__social'>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
