import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, YoutubeIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "",
      },
      {
        label: "Blog",
        href: "",
      },
      {
        label: "Community",
        href: "",
      },
      {
        label: "—",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.defipower.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.defipower.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.defipower.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "",
      },
      {
        label: "Documentation",
        href: "",
      },
      {
        label: "Bug Bounty",
        href: "",
      },
      {
        label: "Audits",
        href: "",
      },
      {
        label: "Careers",
        href: "",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/defipower_official",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/egoldchain",
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/cloudtxchain",
  // },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/Kg9wGKmk",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@Defipower_official",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
