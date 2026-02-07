const Footer = () => {
  return (
    <footer className="p-10 border-t border-white/10 bg-black flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-bold italic underline decoration-accent">NexGen Academy</div>
      <div className="text-gray-500 text-sm">© 2026 NexGen Academy. All Rights Reserved.</div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:text-accent">Twitter</span>
        <span className="cursor-pointer hover:text-accent">Instagram</span>
      </div>
    </footer>
  );
};
export default Footer;