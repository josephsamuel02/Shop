import React from "react";
import DefaultNav from "../../components/DefaultNav";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("product_id");
  const Product = useSelector((state: any) => state.Product.Products);
  const priceFormat = new Intl.NumberFormat("en-US");
  return (
    <div className="w-full h-screen bg-white overflow-y-scroll scrollbar-hide">
      <DefaultNav />

      <div className="w-full md:w-11/12 p-4 mx-auto mt-12 md:mt-28 h-full flex flex-col">
        <h3 className="mx-6 mb-4 text-2xl md:text-3xl text-slate-800 font-dayone">
          Product Details
        </h3>

        <div className="w-full  flex flex-col border-2 rounded">
          {Product.map(
            (i: any, index: number) =>
              i.productId === productId && (
                <div
                  className="w-full h-auto mx-auto my-3 py-6 flex flex-col md:flex-row  bg-white"
                  key={index}
                >
                  <div className="mx-auto w-3/5 md:w-2/5  flex flex-col md:flex-row">
                    <img src={i.image} alt="" className="w-full h-52 object-contain rounded" />
                  </div>

                  <div className="p-2 md:w-4/5 h-auto flex flex-col">
                    <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                      Product Name:
                      <span className="pl-2 font-roboto text-base font-normal">{i.name}</span>
                    </p>
                    <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                      Price:
                      <span className="pl-2 font-roboto text-xl font-normal">
                        ₦{priceFormat.format(i.price)}
                      </span>
                    </p>

                    <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                      Quantity in stock:
                      <span className="pl-2 font-roboto text-xl font-normal">{i.inStock}</span>
                    </p>

                    <p className="mx-3 py-3 text-lg font-roboto font-bold text-slate-800">
                      Product Details:
                      <span className=" pl-2 font-roboto text-base font-normal">
                        {i.ProductDetails}
                      </span>
                    </p>

                    <ul className="mx-3 my-10 py-3 text-sm font-roboto text-slate-800 list-disc">
                      <h3 className=" py-2 text-lg text-slate-800 font-roboto font-bold">
                        Description & features
                      </h3>
                      {i.keyFeatures.map((i: string, index: number) => (
                        <li className="py-1 font-roboto text-base" key={index}>
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="w-3/5 mx-auto py-3 text-lg text-center font-roboto text-white rounded bg-Storepurple hover:bg-purple-800 cursor-pointer">
                      Edit product
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
