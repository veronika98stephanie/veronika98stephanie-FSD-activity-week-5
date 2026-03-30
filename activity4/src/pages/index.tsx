import { useDollar } from "@/context/DollarContext"
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const { amount } = useDollar();
  const router = useRouter();

  return(
    <div>
      <p>You currently have {amount} dollar in your account</p>
      <Link href="/update"><button>Go to Update</button></Link>
      <button onClick={() => router.push("/update")}>Update your balance</button>
    </div>
  )
}