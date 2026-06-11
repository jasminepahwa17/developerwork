import './global.css';

export const metadata = {
  title: 'Jasmine Pahwa - Frontend Engineer',
  description: '4 years of experience building scalable frontend systems (Next.js, TypeScript, Node.js), currently at Ticketmaster',
  applicationName: "Jasmine Pahwa - Frontend Engineer",
  openGraph: {
    siteName: "Jasmine Pahwa - Frontend Engineer",
    title: "Jasmine Pahwa - Frontend Engineer",
    description: "4 years of experience building scalable frontend systems (Next.js, TypeScript, Node.js), currently at Ticketmaster",
    url: "https://developerjas.vercel.app",
    type: "website",
    images: ["/jas.JPG"],
  },
  twitter: {
    card: "/jas.JPG",
    title: "Jasmine Pahwa - Frontend Engineer",
    description: "4 years of experience building scalable frontend systems (Next.js, TypeScript, Node.js), currently at Ticketmaster",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9pBPwYPMEKgaaCN_5AtBoRqmBszOkRqnGJYXqIY5M2o" />
      </head>
      <body className="antialiased min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
