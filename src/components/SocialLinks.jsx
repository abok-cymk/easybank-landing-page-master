const socialPlatforms = [
  { title: "Facebook", platform: "/icon-facebook.svg" },
  { title: "Youtube", platform: "/icon-youtube.svg" },
  { title: "Twitter", platform: "/icon-twitter.svg" },
  { title: "Pinterest", platform: "/icon-pinterest.svg" },
  { title: "Instagram", platform: "/icon-instagram.svg" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-3 items-center justify-center">
      {socialPlatforms.map((social, index) => (
        <img
          key={index}
          src={social.platform}
          alt={social.title}
          className="h-6 w-6 object-cover cursor-pointer transition duration-200 hover:brightness-125"
        />
      ))}
    </div>
  );
}
