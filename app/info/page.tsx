import Link from "next/link";

const InfoPage = () => {
  return (
    <div>
      <h1 className='text-8xl'>Info page</h1>
      <Link href='/'>Home page</Link>
      <Link href='/about'>about</Link>
    </div>
  );
};
export default InfoPage;
