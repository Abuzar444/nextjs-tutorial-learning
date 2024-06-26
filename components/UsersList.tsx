import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import EditButton from "./EditButton";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className='max-w-lg mt-5'>
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className='flex justify-between items-center shadow p-4 mt-4'
              >
                <div>
                  <h4 className='capitalize text-lg flex justify-between items-center mb-2'>
                    {user.firstName} {user.lastName}
                  </h4>
                </div>
                <div className='flex items-center gap-5'>
                  <EditButton id={user.id} />
                  <DeleteButton id={user.id} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};
export default UsersList;
