export default function PortfilioButton({ font, link }) {
  return (
    <>
      <a
        href={link}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center border border-black text-black px-3 py-2 rounded hover:bg-black hover:text-white visited:text-black focus:text-black active:text-black no-underline transition-colors"
      >
        <img
          src="/android-chrome-192x192-modified.png"
          alt="Icon"
          className="w-6 h-6"
        />
        <span className="ml-2">Pratham Snehi</span>
      </a>
    </>
  );
}
