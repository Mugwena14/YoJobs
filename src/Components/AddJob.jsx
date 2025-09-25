import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';

const AddJob = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null); // file object
  const [productDescription, setProductDescription] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [whatsaapNo, setWhatsaapNo] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info("Adding product...", {
      autoClose: 5000,
    });


    try {
      let imageUrl = "";

      if (productImage) {
        const imageRef = ref(storage, `LoopKartImages/${productImage.name}`);
        const snapshot = await uploadBytes(imageRef, productImage);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const productData = {
        productName,
        productPrice,
        productImage: imageUrl,
        productDescription,
        name,
        location,
        phoneNo,
        whatsaapNo,
        email,
      };

      await addDoc(collection(db, "products"), productData);

    } catch (error) {
      console.error("Error uploading product:", error);
    }

    navigate("/jobs");

  };

  return (
    <section className="bg-violet-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-2xl border border-teal-200 m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-bold mb-6 text-violet-700">
              Add Product
            </h2>

            {/* Product Name */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block text-violet-800 font-semibold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. Wireless Headphones"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            {/* Product Price */}
            <div className="mb-4">
              <label
                htmlFor="productPrice"
                className="block text-violet-800 font-semibold mb-2"
              >
                Product Price
              </label>
              <input
                type="number"
                id="productPrice"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. 2500"
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>

            {/* Product Image */}
            <div className="mb-4">
              <label
                htmlFor="productImage"
                className="block text-violet-800 font-semibold mb-2"
              >
                Product Image
              </label>
              <input
                type="file"
                id="productImage"
                accept="image/*"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </div>

            {/* Product Description */}
            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="block text-violet-800 font-semibold mb-2"
              >
                Product Description
              </label>
              <textarea
                id="productDescription"
                rows="4"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Describe the product details, features, or condition..."
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Seller Info */}
            <h3 className="text-2xl mb-5 text-teal-600 font-bold">Seller Info</h3>

            {/* Seller Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-violet-800 font-semibold mb-2"
              >
                Seller Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-violet-800 font-semibold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="City, Area"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNo"
                className="block text-violet-800 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. 012 345 6789"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            {/* WhatsApp Number */}
            <div className="mb-4">
              <label
                htmlFor="whatsaapNo"
                className="block text-violet-800 font-semibold mb-2"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsaapNo"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. 012 345 6789"
                value={whatsaapNo}
                onChange={(e) => setWhatsaapNo(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-violet-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div>
              <button
                className="bg-violet-600 hover:bg-teal-500 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
