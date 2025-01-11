import { DM_Sans, DM_Serif_Display, Noto_Sans } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Miles Blackwell',
  description:
    'Portfolio showcasing my interests in technology and finance.',
};

const fontHeading = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const notoSans = Noto_Sans({
  weight: ['300', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${notoSans.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
