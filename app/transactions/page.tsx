import { TransactionColumns } from "@/app/transactions/_columns";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/login");
  }

  const transaction = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButton />
      </div>

      <div>
        <DataTable
          columns={TransactionColumns}
          data={JSON.parse(JSON.stringify(transaction))}
        />
      </div>
    </div>
  );
};

export default TransactionsPage;
