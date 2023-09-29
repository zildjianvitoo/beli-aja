import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/app/prismadb";
import ImageGallery from "@/components/Pages/ProductDetail/ImageGallery";
import Info from "@/components/Pages/ProductDetail/Info";
import Review from "@/components/Pages/ProductDetail/Review";
import { getServerSession } from "next-auth";
import Image from "next/image";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductId({ params }: Props) {
  const productId = params.productId;
  const session = await getServerSession(options);
  const currentUserId = session?.user.id;

  const product = await prisma.product.findUnique({
    where: {
      id: +productId,
    },
  });
  const imgUrlString = product?.images;

  return (
    <main className=" px-5 lg:px-0">
      {" "}
      {/* <div className="font-semibold text-2xl mb-2">
        <Link />{" "}
      </div> */}
      {product && (
        <div className="grid  sm:grid-cols-2 mt-10 gap-12">
          {imgUrlString && <ImageGallery imageUrls={imgUrlString} />}
          <Info
            // rating={avgRating}
            // numberComments={allReview.length}
            {...product}
          />
        </div>
      )}
      <div className="my-20">
        <div className="flex items-center space-x-5 mb-10">
          <span className="w-[5px] h-[30px] bg-purple-600 rounded-full inline-block"></span>
          <span className="font-medium text-xl">Deskripsi Produk</span>
        </div>
        {product && (
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-5 mb-5">
                <div>
                  <h3 className="font-medium">Kategori</h3>
                  <p className="text-sm text-purple-500">{product.category}</p>
                </div>
                <div>
                  <h3 className="font-medium">Jenis Pakaian</h3>
                  <p className="text-sm text-purple-500">{product.style}</p>
                </div>
                {/* <div>
                  <h3 className="font-medium">Toko</h3>
                  <p className="text-sm text-purple-500">{product.store}</p>
                </div> */}
              </div>
              <div
                className="leading-6 text-sm text-neutral-700 h-[200px] border rounded-md p-4 overflow-y-scroll"
                style={{ borderColor: `${product.color.split(",").pop()}` }}
                dangerouslySetInnerHTML={{ __html: product?.description }}
              >
                {/* {product.description} */}
              </div>
            </div>
            <div className="flex justify-end relative items-center">
              <img
                src={product.images.split(",").pop()}
                className="max-h-[300px] w-10/12 rounded-lg object-cover"
                alt="Foto"
              />
              <span className="text-sm absolute bottom-2 right-2 text-white font-medium">
                {product.title}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="my-20">
        <div className="flex items-center space-x-5 mb-10">
          <span className="w-[5px] h-[30px] bg-purple-600 rounded-full inline-block"></span>
          <span className="font-medium text-xl">Komen & Penilaian Produk</span>
        </div>
        <div className=" grid grid-cols-2">
          <div></div>
          <Review productId={product?.id} userId={currentUserId} />
        </div>
      </div>
    </main>
  );
}
