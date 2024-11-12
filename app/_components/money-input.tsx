import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input } from "./ui/input";

export const MoneyInput = forwardRef(
  (props: NumericFormatProps, ref: React.ForwardedRef<HTMLInputElement>) => (
    <NumericFormat
      {...props}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      allowNegative={false}
      customInput={Input}
      getInputRef={ref}
    />
  ),
);

MoneyInput.displayName = "MoneyInput";
