import prisma from "@/app/prismadb";
import Edit from "@/components/Pages/EditProduk/Edit";

type Props = {
  params: {
    productId: string;
  };
};

export default async function EditProduk({ params }: Props) {
  const productId = parseInt(params.productId);

  if (isNaN(productId)) {
    return <div>Tidak ada produk</div>;
  }

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return <div className="">Produk Tidak Ditemukan</div>;
    }

    return (
      <main>
        <Edit {...product} />
      </main>
    );
  } catch (error) {
    console.log(error);
  }
}
