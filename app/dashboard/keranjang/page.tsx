import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import AllCartProduct from "@/components/Pages/Keranjang/AllCartProduct";
import AllPurchased from "@/components/Pages/Keranjang/AllPurchased";

type Props = {};

export default async function Keranjang({}: Props) {
  const session = await getServerSession(options);
  return (
    <div>
      <AllCartProduct userId={session?.user.id} />
      <hr className="my-10" />
      <AllPurchased userId={session?.user.id} />
    </div>
  );
}
