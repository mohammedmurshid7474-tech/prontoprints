import React from 'react';
import { useApp } from '../../context/AppContext';
import { GreetingCardMockup } from './GreetingCardMockup';
import { BusinessCardMockup } from './BusinessCardMockup';
import { BannerMockup } from './BannerMockup';
import { BoxMockup } from './BoxMockup';
import { FlatSheetMockup } from './FlatSheetMockup';
import { PosterMockup } from './PosterMockup';
import { ApparelMockup } from './ApparelMockup';

export const MockupViewer: React.FC = () => {
  const { selectedProduct } = useApp();

  switch (selectedProduct.mockupType) {
    case 'greeting-card':
      return <GreetingCardMockup />;
    case 'business-card':
      return <BusinessCardMockup />;
    case 'banner-stand':
      return <BannerMockup />;
    case 'box-package':
      return <BoxMockup />;
    case 'poster-frame':
      return <PosterMockup />;
    case 'apparel':
      return <ApparelMockup />;
    case 'flat-sheet':
    default:
      return <FlatSheetMockup />;
  }
};
