import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

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
  },
  {
    id: 2,
    icon: <FaTwitter size={20} />,
    name: "X",
    link: "https://github.com/demonicheinz",
  },
  {
    id: 3,
    icon: <FaInstagram size={20} />,
    name: "Instagram",
    link: "https://github.com/demonicheinz",
  },
];

const Footer: React.FC<FooterProps> = ({
  copyrightName = "Heinz",
  copyrightYear,
  showSocialMedia = true,
  className = "",
}) => {
  const year = copyrightYear || new Date().getFullYear();

  return (
    <footer className={`w-full py-8 border-t border-neutral-800 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-6">
        <p className="text-sm md:text-base text-neutral-400">
          © {year} {copyrightName}. All rights reserved.
        </p>

        {showSocialMedia && (
          <div className="flex items-center space-x-4">
            {showSocialMedia && (
              <div className="flex items-center space-x-4">
                {socialMedia.map((info) => (
                  <a
                    key={info.id}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    {info.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
