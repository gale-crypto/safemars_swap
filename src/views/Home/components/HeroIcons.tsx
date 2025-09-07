import Image from 'next/image';
import Link from 'next/link';
import swapIcon from '../../../../public/images/home/trade/swap.jpg';
import presaleIcon from '../../../../public/images/home/trade/presale.jpg';
import questionsIcon from '../../../../public/images/home/trade/questions.jpg';
import xyieldIcon from '../../../../public/images/home/trade/staking.jpg';
import xfortuneIcon from '../../../../public/images/home/trade/xfortune.jpg';

const iconWidth = 160;
const iconHeight = 160;

const iconStyle: React.CSSProperties = {
  borderRadius: '25px',
  boxShadow: '0 0 8px rgba(0, 0, 0, 1)',
};

const textBox: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'rgba(100, 100, 100, 0.3)',
  borderRadius: '25px',
  border: '1px solid lightgray',
  padding: '5px',
  margin: '5px',
  paddingBottom: '10px',
};

const heroIconsContainer: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap', // Allow items to wrap into multiple rows
  justifyContent: 'center',
};

const HeroIcons = () => {
  return (
    <div style={heroIconsContainer}>
      <div style={textBox}>
        <Link href="/swap">
          <a>
            <Image
              src={swapIcon}
              alt="Safemars Swap"
              width={iconWidth}
              height={iconHeight}
              style={iconStyle}
            />
            <p>Safemars Swap</p>
          </a>
        </Link>
      </div>
      <div style={textBox}>
        <Link href="/presale">
          <a>
            <Image
              src={presaleIcon}
              alt="Safemars Token Presale"
              width={iconWidth}
              height={iconHeight}
              style={iconStyle}
            />
            <p>Safemars Token Presale</p>
          </a>
        </Link>
      </div>
      <div style={textBox}>
        <Link href="/questions">
          <a>
            <Image
              src={questionsIcon}
              alt="Questions"
              width={iconWidth}
              height={iconHeight}
              style={iconStyle}
            />
            <p>????</p>
          </a>
        </Link>
      </div>
      <div style={textBox}>
        <Link href="/staking">
          <a>
            <Image
              src={xyieldIcon}
              alt="Staking (LP Staking)"
              width={iconWidth}
              height={iconHeight}
              style={iconStyle}
            />
            <p>Staking (LP Staking)</p>
          </a>
        </Link>
      </div>
      {/* <div style={textBox}>
        <Link href="/xfortune">
          <a>
            <Image
              src={xfortuneIcon}
              alt="XFortune"
              width={iconWidth}
              height={iconHeight}
              style={iconStyle}
            />
            <p>XFortune</p>
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default HeroIcons;
