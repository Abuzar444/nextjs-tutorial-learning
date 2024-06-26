import { fetchSingle } from "@/utils/actions";
import Link from "next/link";
import { editPerson } from "@/utils/actions";
const SinglePage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const id = params.id;
  const users = await fetchSingle(id);
  return (
    <div>
      <form
        action={editPerson}
        className='flex flex-col shadow-md max-w-lg p-8 gap-y-4'
      >
        <input
          type='text'
          name='firstName'
          defaultValue={users?.firstName}
          className='border shadow rounded py-2 px-3 text-gray-900'
          required
        />
        <input
          type='text'
          name='lastName'
          defaultValue={users?.lastName}
          className='border shadow rounded py-2 px-3 text-gray-900'
          required
        />
        <input type='hidden' name='id' id='' value={id} />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'
          type='submit'
        >
          Edit
        </button>
      </form>
    </div>
  );
};
export default SinglePage;
