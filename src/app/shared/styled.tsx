'use client';
import { fontSize, heightPixel, mobileStyle, widthPixel } from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { Manrope, Raleway } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RaleText } from '../styles';

export const Wrapper = styled.section({
  width: '100%',
  padding: `${heightPixel(95)} ${widthPixel(135)}`,
  flexDirection: 'column',
  display: 'flex',
  gap: heightPixel(50),
  ...mobileStyle({
    padding: `${heightPixel(40)} ${widthPixel(24)}`
  })
});

const man = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: '600'
});

const rale = Raleway({
  weight: '600',
  subsets: ['latin', 'cyrillic']
});

const rale400 = Raleway({
  weight: '400',
  subsets: ['latin', 'cyrillic']
});

export const SmallerHeader = styled.p([
  man.style,
  {
    fontSize: fontSize(16),
    color: '#FF1654',
    textTransform: 'uppercase',
    lineHeight: '150%'
  },
  mobileStyle({
    fontSize: fontSize(12)
  })
]);

export const Header = styled.p([
  man.style,
  {
    fontSize: fontSize(32),
    color: '#1D2029',
    lineHeight: '150%',
    textAlign: 'center'
  },
  mobileStyle({
    fontSize: fontSize(24)
  })
]);

export const HeaderSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

export const ItemRows = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: 0,
  gap: widthPixel(24),
  ...mobileStyle({
    flexDirection: 'column',
    marginBottom: heightPixel(12)
  })
});

export const ContentArea = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: heightPixel(24),
  padding: '0px'
});

const getStyle = (index: number) => {
  switch (index) {
    case 0:
      return {
        backgroundColor: '#D9FFE8',
        '&:hover': {
          backgroundColor: '#194C2E',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 1:
      return {
        backgroundColor: '#FFE5EC',
        '&:hover': {
          backgroundColor: '#5C0A20',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 2:
      return {
        backgroundColor: '#FFF0E5',
        '&:hover': {
          backgroundColor: '#662B00',
          '& p': {
            color: '#ffffff'
          }
        }
      };
    case 3:
      return {
        backgroundColor: '#EBF2FF',
        '&:hover': {
          backgroundColor: '#0A275C',
          '& p': {
            color: '#ffffff'
          }
        }
      };
  }
};

export const Card = styled.div<{ index: number }>(({ index }) => [
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: widthPixel(572),
    padding: `${heightPixel(69)} ${widthPixel(40)}`,
    borderRadius: widthPixel(16),
    height: heightPixel(240),
    gap: widthPixel(24),
    '& img': {
      width: widthPixel(120),
      height: widthPixel(120),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  },
  getStyle(index),
  mobileStyle({
    width: widthPixel(366),
    '& img': {
      width: widthPixel(76.783),
      height: widthPixel(76.783),
      objectFit: 'cover',
      objectPosition: 'center'
    },
    padding: `${heightPixel(44)} ${widthPixel(26)}`
  })
]);

export const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: heightPixel(12),
  width: widthPixel(329),
  ...mobileStyle({
    maxWidth: widthPixel(210),
    gap: heightPixel(7.678)
  })
});

export const Text = styled(RaleText)({
  fontSize: fontSize(22),
  ...mobileStyle({
    fontSize: fontSize(14),
    maxWidth: widthPixel(210)
  })
});

export const CardHeader = styled(RaleText)([
  rale.style,
  {
    color: '#1D2029',
    ...mobileStyle({
      fontSize: fontSize(16),
      maxWidth: widthPixel(210)
    })
  }
]);

export const LegalContainerView = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  padding: ${heightPixel(80)} ${widthPixel(100)};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;
`;

export const SideNav = styled.aside({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});

export const MainContent = styled.article([
  {
    width: widthPixel(977),
    margin: 'auto !important',
    '& p': {
      fontWeight: 400,
      margin: 'auto !important',
      ...rale400.style,
      color: '#515665',
      fontSize: fontSize(22),
      lineHeight: '160%',
      padding: `${heightPixel(12)}`
    }
  }
]);

export const NewLink = styled(Link)`
  color: #515665;
  font-size: ${fontSize(16)};
  font-style: normal;
  line-height: 140%;
  padding: ${heightPixel(12)} ${widthPixel(10)};
`;

export const SideLink = styled(NewLink)(({ href }) => {
  const currentRoute = usePathname();
  return [
    {
      ':hover': {
        color: '#FF1654'
      },
      ':active': {
        color: '#FF1654',
        borderLeft: `${widthPixel(4)} solid #FF1654`
      }
    },
    currentRoute === href && {
      color: '#FF1654',
      borderLeft: `${widthPixel(4)} solid #FF1654`
    }
  ];
});
