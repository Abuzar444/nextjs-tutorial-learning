import Link from "next/link";

const Home = () => {
  return (
    <div className=''>
      <h1 className='text-6xl'>Welcome to next app</h1>
      <Link href='/about' className='text-2xl underline border'>
        About
      </Link>
      <Link href='/info' className='text-2xl underline border'>
        Info
      </Link>
    </div>
  );
};
export default Home;
