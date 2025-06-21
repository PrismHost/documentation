import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { HomeIcon, DollarSignIcon, MessageSquareMoreIcon } from 'lucide-react';
import Logo from '@/images/logo.png'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
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
        {
            icon: <HomeIcon />,
            text: 'Home',
            url: 'https://prism-host.com',
            secondary: false,
        },
        {
            icon: <DollarSignIcon />,
            text: "Client Portal",
            url: "https://client.prism-host.com",
            secondary: false,
        },
        {
            icon: <MessageSquareMoreIcon />,
            text: "Discord Community",
            url: "https://discord.prism-host.com",
            secondary: false,
        },
    ],
};
