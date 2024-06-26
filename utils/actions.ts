"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  "use server";
  try {
    const rawData = Object.fromEntries(formData);
    // const firstName = formData.get("firstName") as string;
    // const lastName = formData.get("lastName") as string;
    const newUser: User = {
      firstName: rawData.firstName as string,
      lastName: rawData.lastName as string,
      id: Date.now().toString(),
    };
    await saveUser(newUser);
    revalidatePath("/actions");
    return { message: "user created successfully...", resetKey: newUser.id };
  } catch (error) {
    console.log(error);
    return { message: "user creation was failed...", resetKey: new Date() };
  }
  // redirect("/actions");
};

export const fetchUsers = async (): Promise<User[]> => {
  const results = await readFile("users.json", { encoding: "utf-8" });
  const users = results ? JSON.parse(results) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const users = await fetchUsers();
    const deletedUser = users.filter((user: User) => user.id !== id);
    await writeFile("users.json", JSON.stringify(deletedUser));
    revalidatePath("/actions");
    return "User deleted successfully...";
  } catch (error) {
    console.log(error);
    return "Deletion was failed...";
  }
};

export const removeUser = async (id: string, formData: FormData) => {
  try {
    const users = await fetchUsers();
    const deletedUser = users.filter((user) => user.id !== id);
    await writeFile("users.json", JSON.stringify(deletedUser));
    revalidatePath("/actions");
    return "User deleted successfully...";
  } catch (error) {
    console.log(error);
    return "Deletion was failed...";
  }
};

export const fetchSingle = async (id: string) => {
  try {
    const users = await fetchUsers();
    const singleUser = users.find((user) => user.id === id);
    return singleUser;
  } catch (error) {
    console.log(error);
  }
};

export const editPerson = async (formData: FormData) => {
  const id = formData.get("id") as string;
  try {
    const users = await fetchUsers();
    const editPerson = users.map((user) => {
      if (user.id === id) {
        const newNames: User = {
          ...user,
          lastName: formData.get("lastName") as string,
          firstName: formData.get("firstName") as string,
        };
        return newNames;
      } else {
        return user;
      }
    });
    writeFile("users.json", JSON.stringify(editPerson));
  } catch (error) {
    console.log(error);
  }
  redirect("/actions");
};
