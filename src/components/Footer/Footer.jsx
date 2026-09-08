import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/netflix" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/netflix" },
  { id: "twitter", label: "Twitter", href: "https://twitter.com/netflix" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/netflix" },
];

const COLUMNS = [
  {
    heading: "Browsing",
    links: [
      "Audio Description",
      "Help Center",
      "Gift Cards",
      "Media Center",
      "Investor Relations",
      "Jobs",
      "Terms of Use",
      "Privacy",
    ],
  },
  {
    heading: "Series & Films",
    links: [
      "Legal Notices",
      "Cookie Preferences",
      "Corporate Information",
      "Contact Us",
      "Speed Test",
      "Ad Choices",
      "Do Not Sell or Share My Personal Information",
    ],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social media links */}
        <div className={styles.socials}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label={social.label}>
              {renderSocialIcon(social.id)}
            </a>
          ))}
        </div>

        {/* Link columns */}
        <div className={styles.columns}>
          {COLUMNS.map((column) => (
            <ul key={column.heading} className={styles.column} aria-label={column.heading}>
              {column.links.map((link) => (
                <li key={link} className={styles.columnLink}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Service code + copyright */}
        <button type="button" className={styles.serviceCode}>
          Service Code
        </button>
        <p className={styles.copyright}>
          © 1997-2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

function renderSocialIcon(id) {
  switch (id) {
    case "facebook":
      return <FacebookIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "youtube":
      return <YouTubeIcon />;
    default:
      return null;
  }
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.22a4.02 4.02 0 1 1 0-8.04 4.02 4.02 0 0 1 0 8.04Zm6.44-11.72a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.26 22h-6.24l-4.89-6.4L6.5 22H3.36l7.24-8.28L1.5 2h6.4l4.42 5.85L18.9 2Zm-1.1 18h1.73L7.86 3.9H6L17.8 20Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export default Footer;
