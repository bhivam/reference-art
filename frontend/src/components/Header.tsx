export default function Header() {
  return (
    <header className="sticky top-0 bg-zinc-950">
      <ul className="flex p-2 gap-4 text-gray-50 items-center">
        <li className="font-bold">LOGO</li>
        <li className="ml-auto text-xs"><a href="/tutorial" referrerPolicy="no-referrer">Tutorial</a></li>
        <li className="text-xs"><a href="/contact">Contact</a></li>
      </ul>
    </header>
  );
}