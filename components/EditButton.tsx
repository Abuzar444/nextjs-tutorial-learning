import { editPerson } from "@/utils/actions";
import Link from "next/link";

const EditButton = async ({ id }: { id: string }) => {
  return (
    <Link
      href={`/actions/${id}`}
      className='bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 text-white'
    >
      Edit
    </Link>
  );
};
export default EditButton;
