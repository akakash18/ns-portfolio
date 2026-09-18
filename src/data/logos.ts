import amazonLogo from '../assets/logo/amazon.png';
import amazonSellerCentralLogo from '../assets/logo/amazon seller central.png';
import blinkitLogo from '../assets/logo/blinkit.png';
import flipkartLogo from '../assets/logo/flipkart.png';
import googleSheetsLogo from '../assets/logo/gsheets logo.webp';
import heliumLogo from '../assets/logo/Helium logo.png';
import jungleScoutLogo from '../assets/logo/JS logo.png';
import keepaLogo from '../assets/logo/keepa.jpg';
import microsoftExcelLogo from '../assets/logo/ms logo.png';
import myntraLogo from '../assets/logo/myntra.png';
import sellerSpriteLogo from '../assets/logo/seller prite.png';
import swiggyLogo from '../assets/logo/swiggy.png';
import zeptoLogo from '../assets/logo/zepto.png';

export const platformLogos = {
  Amazon: amazonLogo,
  Flipkart: flipkartLogo,
  Myntra: myntraLogo,
  Blinkit: blinkitLogo,
  Zepto: zeptoLogo,
  Swiggy: swiggyLogo,
} as const;

export const toolLogos: Record<string, string> = {
  SellerSprite: sellerSpriteLogo,
  'Helium 10': heliumLogo,
  'Jungle Scout': jungleScoutLogo,
  Keepa: keepaLogo,
  'Amazon Seller Central': amazonSellerCentralLogo,
  'Flipkart Seller Hub': flipkartLogo,
  Myntra: myntraLogo,
  Blinkit: blinkitLogo,
  Zepto: zeptoLogo,
  'Swiggy Instamart': swiggyLogo,
  'Microsoft Excel': microsoftExcelLogo,
  'Google Sheets': googleSheetsLogo,
};
