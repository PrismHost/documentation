import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata = createMetadata({
    title: {
        template: '%s | Prism Docs',
        default: 'Prism Host Documentation',
    },
    description: 'Prism Host Documentation / Knowledgebase. Here you can find all kinds of useful guides and other information.',
    metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />

                <meta property="og:site_name" content="Prism Host" />
                <meta property="og:title" content="Prism Docs" />
                <meta property="og:locale" content="en" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Prism Host Documentation / Knowledgebase. Here you can find all kinds of useful guides and other information." />
                <meta property="og:url" content="https://prism-host.com" />
                <meta property="og:image" content="/banner.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="prismhost" />
                <meta name="twitter:title" content="Prism Docs" />
                <meta name="twitter:image" content="/banner.png" />
                <meta name="twitter:image:alt" content="Prism Host Documentation" />
                <meta name="twitter:description" content="Prism Host Documentation / Knowledgebase. Here you can find all kinds of useful guides and other information." />
                <meta name="twitter:creator" content="prismhost" />
            </head>
            <body className="flex flex-col min-h-screen">
                <RootProvider>{children}</RootProvider>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener("load", function () {
                                requestIdleCallback(() => {
                                    var BASE_URL = "https://chat.prism-host.com";
                                    var g = document.createElement("script");
                                    g.src = BASE_URL + "/packs/js/sdk.js";
                                    g.async = true;
                                    g.onload = function () {
                                        window.chatwootSDK.run({
                                            websiteToken: 'QV1vpqzZAZwAZdvGUcbLPdtW',
                                            baseUrl: BASE_URL
                                        });
                                    };
                                    document.body.appendChild(g);
                                });
                            });
                        `,
                    }}
                />

                <script
                    defer
                    data-domain="prism-host.com"
                    src="https://analytics.prism-host.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
                ></script>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.plausible = window.plausible || function() {
                                (window.plausible.q = window.plausible.q || []).push(arguments)
                            }
                        `,
                    }}
                />
            </body>
        </html>
    );
}
