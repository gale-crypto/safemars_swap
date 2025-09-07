import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SpinnerProps {
  size?: number;
  pulseLogo?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 160, pulseLogo = false }) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <>
    <Image src="/images/safemars.png" width={size} height={size} />
      {/* {isSafari ? (
        <Image src="/images/safemars.png" width={size} height={size} />
      ) : (
        <video autoPlay loop muted playsInline width={size} height={size}>
          <source src="/images/home/lunar-bunny/logo.webm?v=2" type="video/webm" />
          <Image src="/images/safemars.png" width={size} height={size} />
        </video>
      )} */}
      {/* {pulseLogo && (
        <div>
          <Image src="/images/safemars.png" width={size} height={size} />
        </div>
      )} */}
    </>
  );
};

export default Spinner;
