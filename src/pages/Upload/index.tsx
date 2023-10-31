import React from "react";

import { useFormik, Formik } from "formik";
import { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { siteInfoSchema } from "../../components/YupSchema";
import ToolTip from "../../components/ToolTip";
const Upload: React.FC = () => {
  const [editForm, setEditForm] = useState(false);
  const [image, setImage] = useState<any>("");
  const siteInformation = {
    image: "",
    name: "",
    productDetails: "",
    features: ["", ""],
    price: 24354,
    inStock: "",
    PayOnDelivery: false,
  };
  const [newValue, setNewValue] = useState({});
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: siteInformation,
    validationSchema: siteInfoSchema,

    onSubmit: (values, actions) => {
      console.log(values);
      // actions.resetForm();
      setEditForm(false);
    },
  });
  return (
    <div className="mx-auto w-full md:w-5/6 h-full bg-white overflow-y-scroll scrollbar-hide items-center">
      <div className="mx-auto w-full md:w-96 p-2 mt-16  h-full flex flex-col   items-center">
        {image && (
          <div className="w-auto mx-auto md:mx-4 my-3 py-1 flex flex-col items-center">
            <img src={image} alt="" className="mx-auto w-48 h-48 object-cover" />
          </div>
        )}

        <div className="w-4/5 mx-auto md:px-2 md:mx-4 my-1 py-1 flex flex-col items-center ">
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product image:</label>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png image/svg"
              multiple={false}
              onChange={(e) => {
                e.target.files && e.target.files.length > 0
                  ? setImage(URL.createObjectURL(e.target.files[0]))
                  : "";
                8;
              }}
              className=" mx-auto w-full h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product name:</label>
            <textarea
              draggable={false}
              value={"2, adesanya street , obanla close ikeja "}
              placeholder="product name"
              className=" my-auto w-full h-16 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito"> Product Details:</label>
            <textarea
              draggable={false}
              value={"2, adesanya street , obanla close ikeja "}
              placeholder="Product details"
              className=" my-auto w-full h-20 p-1  text-sm text-slate-800 font-normal focus:outline-none resize-none no-scrollbar border-2 border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="w-full mx-auto my-3  flex flex-col">
            <label className="text-lg text-gray-700 font-nunito flex flex-row items-center">
              <ToolTip tipp="what are the key attributes of the product" /> Product Features:
            </label>
            <div className="w-auto mx-auto md:mx-4 my-3  flex flex-col ">
              <div className="w-full h-auto flex flex-col">
                <div>
                  {values &&
                    values.features.map((features, i) => (
                      <div className=" flex flex-row items-center" key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            values.features.splice(i, 1);
                            setNewValue({ ...values });
                          }}
                          className="m-0.5 p-0.5 w-5 h-5 mr-1 text-center font-bold  rounded-full bg-gray-200 text-red-600"
                        >
                          <MdClose size={15} />
                        </button>
                        <input
                          type="text"
                          name={`features[${i}]`}
                          defaultValue={features}
                          id={`features[${i}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // disabled={!editForm}
                          placeholder="Services offered"
                          className="w-64 h-auto p-1 my-1 text-nunito bg-white border-2 outline-none border-gray-300 rounded "
                        />
                      </div>
                    ))}
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        values.features.length < 5 ? values.features.push("") : null;
                        setNewValue({ ...values });
                      }}
                      className="mx-6 p-0.5 px-2 w-14 h-8 text-center text-nunito text-sm rounded-sm bg-purple-700 text-white"
                    >
                      Add
                    </button>
                  </>
                </div>

                {errors.features && touched.features ? (
                  <p className="py-0.5 text-sm text-red-600 font-roboto">{errors.features}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">₦ Price :</label>

            <input
              type="tel"
              className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>
          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">Available Quantity :</label>

            <input
              type="tel"
              className=" px-2 mx-1 w-44 h-auto text-nunito bg-white border-2 outline-none border-slate-300 rounded shadow-sm"
            />
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <label className="text-lg text-gray-700 font-nunito">Allow pay on delivery</label>
            <div className=" py-1 flex flex-row  items-center ">
              <span>Yes:</span>
              <input
                type="checkbox"
                value={"yes"}
                className=" mx-2 w-4 h-4 text-nunito  outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
            <div className=" py-1 flex flex-row  items-center ">
              <span>No:</span>
              <input
                type="checkbox"
                value={"No"}
                className=" mx-2 w-4 h-4 text-nunito  outline-none border-slate-300 rounded shadow-sm"
              />
            </div>
          </div>

          <div className="w-full mx-auto my-1 py-1 flex flex-col   ">
            <button
              type="button"
              onClick={() => {
                null;
              }}
              className="mx-auto py-2 px-2 w-full  text-white text-center text-nunito text-lg rounded-sm bg-purple-700"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
