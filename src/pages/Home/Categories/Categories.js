import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Category from "./Category";

const Categories = () => {
  // const [categories, setCategories] = useState([]);

  //alternate of fetching with useState and useEffect;
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://cell-deal-server.vercel.app/categories").then((res) =>
        res.json()
      ),
  });

  // useEffect(() => {
  //   fetch("https://cell-deal-server.vercel.app/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCategories(data);
  //     });
  // }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-6">
      <p className=" text-4xl mb-8 font-bold text-center">Cell Category</p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
