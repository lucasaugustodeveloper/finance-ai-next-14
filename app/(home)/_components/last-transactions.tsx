import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = {
    [TransactionType.DEPOSIT]: "text-green-500",
    [TransactionType.EXNPENSE]: "text-red-500",
    [TransactionType.INVESTMENT]: "text-white",
  };

  const getAmountPrefix = (transaction: Transaction) =>
    transaction.type === TransactionType.DEPOSIT ? "+" : "-";

  return (
    <ScrollArea className="rounded-md border">
      <Card className="border-0 border-none">
        <CardHeader className="items-cente flex-row justify-between">
          <CardTitle className="flex items-center text-center font-bold">
            Últimas Transações
          </CardTitle>
          <Button variant="outline" className="rounded-full font-bold" asChild>
            <Link href="/transactions">Ver mais</Link>
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {lastTransactions.map((transaction) => (
            <div
              className="flex items-center justify-between"
              key={transaction.id}
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white bg-opacity-[3%] p-3">
                  <Image
                    src={
                      TRANSACTION_PAYMENT_METHOD_ICONS[
                        transaction.paymentMethod
                      ]
                    }
                    alt="Pix"
                    width={20}
                    height={20}
                  />
                </div>

                <div>
                  <p className="text-lg font-bold">{transaction.name}</p>
                  <p className="text-xs font-bold text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <p
                className={`text-sm font-bold ${getAmountColor[transaction.type]}`}
              >
                {}
                {getAmountPrefix(transaction)}
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default LastTransactions;
