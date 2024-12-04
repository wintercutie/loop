import localFont from 'next/font/local'

// Define the Montserrat font from the /public/fonts directory
const MontserratFont = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Regular.ttf',
      weight: '400', // Regular weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Light.ttf',
      weight: '300', // Light weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Medium.ttf',
      weight: '500', // Medium weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-SemiBold.ttf',
      weight: '600', // SemiBold weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Bold.ttf',
      weight: '700', // Bold weight
      style: 'normal',
    },
  ],
  display: 'swap', // Optional, to improve font rendering
});

export const metadata = {
  title: 'DataBlitz',
  description: 'Your Total Gaming & Multimedia Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={MontserratFont.className}>
      <body>{children}</body>
    </html>
  );
}
