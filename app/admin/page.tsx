import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function page() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("current user is : ", user?.email);

  if (!(await isAuthenticated())) {
    redirect("/auth/login");
  }
  if ((await isAuthenticated()) && user?.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }
  return null;
}
