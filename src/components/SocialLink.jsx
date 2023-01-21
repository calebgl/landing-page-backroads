import { Icon } from "@iconify/react";

function SocialLink(props) {
  const { socialLink, className } = props;
  return (
    <li>
      <a
        href={socialLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Icon icon={socialLink.icon} />
      </a>
    </li>
  );
}

export default SocialLink;
