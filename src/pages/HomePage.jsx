import React from "react";
import Navbar from "../components/Navbar";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Person3Icon from "@mui/icons-material/Person3";

const items = [
  <div className="item" data-value="1">
    <img src="/assets/image1.png" alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src="/assets/image1.png" alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src="/assets/image1.png" alt="" />
  </div>,
];

const categoryList = [
  {
    id: 1,
    icon: <Person3Icon fontSize="large" />,
    title: "Men",
  },
  {
    id: 2,
    icon: <Person3Icon fontSize="large" />,
    title: "Women",
  },
  {
    id: 3,
    icon: <Person3Icon fontSize="large" />,
    title: "Kids",
  },
  {
    id: 4,
    icon: <Person3Icon fontSize="large" />,
    title: "Electronics",
  },
  {
    id: 5,
    icon: <Person3Icon fontSize="large" />,
    title: "Sports",
  },
];

const brandsList = [
  {
    id: 1,
    icon: <Person3Icon fontSize="large" />,
    title: "H&M",
  },
  {
    id: 2,
    icon: <Person3Icon fontSize="large" />,
    title: "Adidas",
  },
  {
    id: 3,
    icon: <Person3Icon fontSize="large" />,
    title: "Nike",
  },
  {
    id: 4,
    icon: <Person3Icon fontSize="large" />,
    title: "Puma",
  },
  {
    id: 5,
    icon: <Person3Icon fontSize="large" />,
    title: "Zara",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />

      <section className=" p-10">
        <header className="font-extrabold text-5xl">
          <h1 className="text-center">Shop By Category</h1>
        </header>

        <article className=" p-20 flex justify-evenly flex-wrap">
          {categoryList.map((category) => {
            return (
              <div className="px-10 py-5 border border-gray-300 rounded-lg shadow">
                <figure className="text-lg text-center p-3">
                  {category.icon}
                </figure>
                <h3 className=" text-center text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </article>
      </section>

      <section className=" p-10">
        <header className="font-extrabold text-5xl">
          <h1 className="text-center">Shop By Brands</h1>
        </header>

        <article className=" p-20 flex justify-evenly flex-wrap">
          {brandsList.map((category) => {
            return (
              <div className="px-10 py-5 border border-gray-300 rounded-lg shadow">
                <figure className="text-lg text-center p-3">
                  {category.icon}
                </figure>
                <h3 className=" text-center text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </article>
      </section>

      <section className="p-10 border">
        <header className="font-extrabold text-5xl">
          <h1 className="text-center">Featured Products</h1>
        </header>

        <article className="border p-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="p-5">
            <div className="p-4 border border-gray-300 rounded-xl shadow-lg">
              <img
                src="https://www.dropicts.com/wp-content/uploads/Dropicts-Feautred-Images-Beauty-Product-02.jpg"
                alt=""
                className="h-[200px] w-full rounded-t-lg"
              />

              <h1 className="text-2xl font-bold">Product Name</h1>

              <p className="flex justify-between font-semibold">
                <del className="text-gray-600">Rs.1059</del>
                <span>Rs.899</span>
              </p>

              <button className="w-full bg-black text-white py-2 rounded font-semibold">
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
