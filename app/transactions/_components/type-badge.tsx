import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import { Badge } from "../../_components/ui/badge";

interface TransactionProps {
  transaction: Transaction;
}

export const TransactionTypeBadge = ({ transaction }: TransactionProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={8} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXNPENSE) {
    return (
      <Badge className="bg-danger bg-opacity-20 font-bold text-danger">
        <CircleIcon className="mr-2 fill-danger" size={8} />
        Despesa
      </Badge>
    );
  }

  return (
    <Badge className="bg-neutral-600 font-bold text-white hover:bg-neutral-600">
      <CircleIcon className="mr-2 fill-white" size={8} />
      Investimento
    </Badge>
  );
};
