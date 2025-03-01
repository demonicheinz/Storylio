import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

interface FooterProps {
  copyrightName?: string;
  copyrightYear?: string | number;
  showSocialMedia?: boolean;
  className?: string;
}

const socialMedia = [
  {
    id: 1,
    icon: <FaGithub size={20} />,
    name: "GitHub",
    link: "https://github.com/demonicheinz",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    id: 2,
    icon: <FaTwitter size={20} />,
    name: "X",
    link: "https://twitter.com/demonicheinz",
    ariaLabel: "Follow me on X (Twitter)",
  },
  {
    id: 3,
    icon: <FaInstagram size={20} />,
    name: "Instagram",
    link: "https://instagram.com/demonicheinz",
    ariaLabel: "Follow me on Instagram",
  },
  {
    id: 4,
    icon: <FaLinkedin size={20} />,
    name: "LinkedIn",
    link: "https://linkedin.com/in/demonicheinz",
    ariaLabel: "Connect with me on LinkedIn",
  },
];

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
];

const Footer: React.FC<FooterProps> = ({
  copyrightName = "Heinz",
  copyrightYear,
  showSocialMedia = true,
  className = "",
}) => {
  const year = copyrightYear || new Date().getFullYear();

  return (
    <footer className={`w-full py-12 border-t border-border dark:border-neutral-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground dark:text-blue-100 hover:text-purple dark:hover:text-purple transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {showSocialMedia && (
          <div className="flex items-center gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.ariaLabel}
                className="text-muted-foreground dark:text-blue-100 hover:text-purple dark:hover:text-purple hover:scale-110 transition-all"
              >
                {info.icon}
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground dark:text-blue-100">
            © {year} {copyrightName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 dark:text-blue-100/60">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
