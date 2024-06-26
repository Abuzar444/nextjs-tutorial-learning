import { removeUser } from "@/utils/actions";

const DeleteButton = ({ id }: { id: string }) => {
  const removeWithId = removeUser.bind(null, id);
  return (
    <form action={removeWithId}>
      <button className='bg-red-500 hover:bg-red-700 text-white rounded px-4 py-2'>
        Delete
      </button>
      <input type='hidden' name='name' value='value' />
    </form>
  );
};
export default DeleteButton;
