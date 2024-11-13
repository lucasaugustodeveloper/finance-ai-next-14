// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/times-selects";
import TransactionPieChart from "./_components/transactionPieChart";

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

  const dashboard = await getDashboard(month);

  return (
    <div className="flex flex-col space-y-6 overflow-hidden p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <TimeSelect />
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
        <div className="flex flex-col gap-6 overflow-hidden">
          <SummaryCards month={month} {...dashboard} />

          <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
            <TransactionPieChart {...dashboard} />
            <ExpensesPerCategory
              expensesPerCategory={dashboard.totalExpensePerCategory}
            />
          </div>
        </div>

        <LastTransactions lastTransactions={dashboard.lastTransactions} />
      </div>
    </div>
  );
};

export default Home;
