import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_OPTIONS_LABEL = {
  HOUSING: "Habitação",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  EDUCATION: "Educação",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_LABELS = {
  DEPOSIT: "Depósito",
  EXNPENSE: "Despesa",
  INVESTMENT: "Investimento",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Despesa",
    value: TransactionType.EXNPENSE,
  },
  {
    label: "Depósito",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTMENT,
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_TRANSFER,
    value: TransactionPaymentMethod[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CREDIT_CARD,
    value: TransactionPaymentMethod[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.DEBIT_CARD,
    value: TransactionPaymentMethod[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_SLIP,
    value: TransactionPaymentMethod[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CASH,
    value: TransactionPaymentMethod[TransactionPaymentMethod.CASH],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.PIX,
    value: TransactionPaymentMethod[TransactionPaymentMethod.PIX],
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.OTHER,
    value: TransactionPaymentMethod[TransactionPaymentMethod.OTHER],
  },
];

export const CATEGORY_METHOD_LABELS = [
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.EDUCATION,
    value: TransactionCategory[TransactionCategory.EDUCATION],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.ENTERTAINMENT,
    value:
      TRANSACTION_CATEGORY_OPTIONS_LABEL[TransactionCategory.ENTERTAINMENT],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.FOOD,
    value: TransactionCategory[TransactionCategory.FOOD],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.HEALTH,
    value: TransactionCategory[TransactionCategory.HEALTH],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.HOUSING,
    value: TransactionCategory[TransactionCategory.HOUSING],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.OTHER,
    value: TransactionCategory[TransactionCategory.OTHER],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.SALARY,
    value: TransactionCategory[TransactionCategory.SALARY],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.TRANSPORTATION,
    value:
      TRANSACTION_CATEGORY_OPTIONS_LABEL[TransactionCategory.TRANSPORTATION],
  },
  {
    label: TRANSACTION_CATEGORY_OPTIONS_LABEL.UTILITY,
    value: TransactionCategory[TransactionCategory.UTILITY],
  },
];

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};
