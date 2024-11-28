import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import { TotalExpensePerCategory, TransactionPercentageTypes } from "./types";

export const getDashboard = async (month: string) => {
  const whereMonth = {
    date: {
      gte: new Date(`${new Date().getFullYear()}-${month}-01`),
      lt: new Date(`${new Date().getFullYear()}-${month}-31`),
    },
  };

  const depositTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...whereMonth, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...whereMonth, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...whereMonth, type: "EXNPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const balanceTotal = depositTotal - investmentsTotal - expensesTotal;
  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where: whereMonth,
        _sum: { amount: true },
      })
    )._sum?.amount,
  );

  const typesPercentage: TransactionPercentageTypes = {
    [TransactionType.DEPOSIT]:
      Math.round(
        (Number(depositTotal || 0) / Number(transactionsTotal)) * 100,
      ) || 0,
    [TransactionType.INVESTMENT]:
      Math.round(
        (Number(investmentsTotal || 0) / Number(transactionsTotal)) * 100,
      ) || 0,
    [TransactionType.EXNPENSE]:
      Math.round(
        (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100,
      ) || 0,
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...whereMonth,
        type: TransactionType.EXNPENSE,
      },
      _sum: { amount: true },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum?.amount),
    percentageOfTotal: Math.round(
      (Number(category._sum?.amount || 0) / Number(expensesTotal)) * 100,
    ),
  }));

  const lastTransactions = await db.transaction.findMany({
    where: whereMonth,
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return {
    depositTotal,
    investmentsTotal,
    expensesTotal,
    balanceTotal,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions,
  };
};
