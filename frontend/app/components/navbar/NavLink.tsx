import Link from "next/link";

//This component used to show the title and link to the page

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-slate-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;
