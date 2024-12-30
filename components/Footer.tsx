// app/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-[#1F3C88] text-[#F8F9FA] text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FavFix by Chubby. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
  