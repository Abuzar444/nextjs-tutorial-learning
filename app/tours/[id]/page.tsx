import Image from "next/image";
import Link from "next/link";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className='grid md:grid-cols-2 gap-8'>
      <Link href='/tours' className='gap-x-4 flex mt-4'>
        <Image
          src={url}
          alt='romote'
          width={192}
          height={192}
          className='w-96 h-96 object-cover rounded-md'
        />
        <h1>Remote Image</h1>
      </Link>
    </div>
  );
};
export default page;
