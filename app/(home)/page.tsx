// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/times-selects";

interface HomeProps {
  searchParams: { month: string };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  // const { userId } = await auth();

  // if (!userId) {
  //   redirect("/login");
  // }

  const monthIsInvalid = !month || !isMatch(month, "MM");

  console.log("month:", month);

  if (monthIsInvalid) {
    return redirect("?month=01");
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <TimeSelect />
      </div>

      <SummaryCards month={month} />
    </div>
  );
};

export default Home;
