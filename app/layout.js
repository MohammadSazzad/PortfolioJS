import './globals.css';

export const metadata = {
  title: 'Mohammad Sazzad',
  description:
    'Portfolio of Mohammad Sazzad — Full-Stack Software Engineer specializing in production web applications, secure APIs, and cloud-ready delivery.',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
