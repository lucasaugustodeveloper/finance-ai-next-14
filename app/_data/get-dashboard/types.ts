import { TransactionType } from "@prisma/client";

export type TransactionPercentageTypes = {
  [key in TransactionType]: number;
};
