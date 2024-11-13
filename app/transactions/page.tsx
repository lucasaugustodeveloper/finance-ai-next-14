import { TransactionColumns } from "@/app/transactions/_columns";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { ScrollArea } from "../_components/ui/scroll-area";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transaction = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="space-y-6 overflow-hidden p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButton />
      </div>

      <ScrollArea>
        <DataTable
          columns={TransactionColumns}
          data={JSON.parse(JSON.stringify(transaction))}
        />
      </ScrollArea>
    </div>
  );
};

export default TransactionsPage;
