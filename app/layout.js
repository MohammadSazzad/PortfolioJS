import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme') || 'system';
    var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) document.documentElement.classList.add('dark');
  })();
`;

export const metadata = {
  title: 'Mohammad Sazzad',
  description:
    'Portfolio of Mohammad Sazzad — Full-Stack Software Engineer specializing in production web applications, secure APIs, and cloud-ready delivery.',
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/PortfolioJS/logo.png' : '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
