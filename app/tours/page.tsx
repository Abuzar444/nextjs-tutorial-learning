import { fetchTours } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";

const TasksPage = async () => {
  const data = await fetchTours();
  return (
    <section className='grid md:grid-cols-2 gap-8'>
      {data.map((tour) => {
        return (
          <Link
            href={`/tours/${tour.id}`}
            key={tour.id}
            className='hover:text-blue-500'
          >
            <div className='relative h-48 mb-2'>
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes='33vw'
                priority
                className='object-cover rounded-md'
              />
            </div>
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
};
export default TasksPage;
