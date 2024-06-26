import Link from "next/link";

const Navbar = () => {
  return (
    <div className='flex  items-center mx-auto max-w-3xl gap-5 my-5'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/tours'>Tasks</Link>
      <Link href='/counter'>Counter</Link>
      <Link href='/actions'>Actions</Link>
    </div>
  );
};
export default Navbar;
