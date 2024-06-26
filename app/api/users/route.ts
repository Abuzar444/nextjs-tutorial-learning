import { fetchUsers } from "@/utils/actions";
import { saveUser } from "@/utils/actions";
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  const users = await fetchUsers();
  return Response.json({ users });
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ user });
};
