import React, { createContext, useContext, useEffect, useState } from "react";

interface DollarContextType {
  amount: number | null;
  add: (value: number) => void;
  reset: () => void;
}

const DollarContext = createContext<DollarContextType | undefined>(undefined);

export function DollarProvider({ children }: { children: React.ReactNode }) {
    const [dollar, setDollar] = useState(0)

    const add = (value: number) => {
        setDollar(dollar+value);
    }

    const reset = () => {
        setDollar(0);
    }

    return(
        <DollarContext.Provider value={{ amount: dollar, add, reset }}>
            {children}
        </DollarContext.Provider>
    )
}

export function useDollar() {
  const context = useContext(DollarContext);
  if (!context) throw new Error("useDollar must be used within a DollarProvider");
  return context;
}
