import Image from 'next/image';
export const SocialLinks = () => {
  return (
    <>
      <div className='social__icon'>
        <a href='https://www.clarosports.com/en-vivo/' target='_blank'>
          <Image src='/mobli-icon.png' width={30} height={30} alt='claro' />
        </a>
      </div>
      <div className='social__icon'>
        <a href='https://twitter.com/ClaroSports' target='_blank'>
          <Image src='/twitter-icon.png' width={30} height={30} alt='twitter' />
        </a>
      </div>
      <div className='social__icon'>
        <a href='https://www.facebook.com/clarosports/' target='_blank'>
          <Image
            src='/Facebook_icon.png'
            width={30}
            height={30}
            alt='facebook'
          />
        </a>
      </div>
      <div className='social__icon'>
        <a href='https://www.youtube.com/clarosports' target='_blank'>
          <Image src='/youtube-icon.png' width={30} height={30} alt='youtube' />
        </a>
      </div>
    </>
  );
};
