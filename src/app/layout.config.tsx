import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { HomeIcon, CloudIcon, ServerIcon } from 'lucide-react';
import Logo from '@/images/logo.png'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    githubUrl: 'https://github.com/prismhost/documentation',
    nav: {
        title: (
        <>
        <img src={Logo.src} className="size-6"></img>
            Prism Knowledgebase
        </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        // {
        //     icon: <HomeIcon />,
        //     text: 'Home',
        //     url: 'https://prism-host.com',
        //     secondary: false,
        // },
        // {
        //     icon: <CloudIcon />,
        //     text: "VPS Guides",
        //     url: "/vps",
        //     secondary: false,
        // },
        //         {
        //     icon: <ServerIcon />,
        //     text: "Dedicated Server Guides",
        //     url: "/dedicated-server-guides",
        //     secondary: false,
        // },
    ],
};
