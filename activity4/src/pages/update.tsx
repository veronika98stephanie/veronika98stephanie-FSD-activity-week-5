import { useDollar } from "@/context/DollarContext";
import { useState } from "react";
import Link from "next/link";

export default function Update() {
    const {amount, add, reset} = useDollar()
    const [dollar, setDollar] = useState(0)
    return(
        <div>
            <p>Your current balance is {amount} dollar.</p>
            <Link href="/"><button>Go to Balance Info</button></Link>
            <form onSubmit={(e) => { e.preventDefault(); add(dollar); }}>
                <input
                    type="number"
                    value={dollar}
                    onChange={(e) => setDollar(Number(e.target.value))}
                />
                <button type="submit">Add</button>
                <button type="button" onClick={() => { reset(); }}>Reset</button>
            </form>

        </div>
    )
}