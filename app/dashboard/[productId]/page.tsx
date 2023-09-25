import prisma from "@/app/prismadb";
import ImageGallery from "@/components/Pages/ProductDetail/ImageGallery";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductId({ params }: Props) {
  const productId = params.productId;

  const product = await prisma.product.findUnique({
    where: {
      id: +productId,
    },
  });
  const imgUrlString = product?.images;

  return (
    <main>
      {" "}
      {/* <div className="font-semibold text-2xl mb-2">
        <Link />{" "}
      </div> */}
      {product && (
        <div className="grid grid-cols-2 mt-10 gap-14">
          {imgUrlString && <ImageGallery imageUrls={imgUrlString} />}
          <Info
            {...product}
            rating={avgRating}
            numberComments={allReview.length}
          />
        </div>
      )}
    </main>
  );
}
