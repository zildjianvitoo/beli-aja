import Link from "next/link";
import React from "react";
import Filter from "./Filter";
import Item from "./Item";

type Props = {};

export default function Container({}: Props) {
  return (
    <section className=" ">
      <div className=" flex">
        <Link href={"/dashboard/filter"} className="opacity-60">
          <div>
            <Filter />
          </div>
        </Link>
        <div className="pl-16 md:pl-10 lg:px-6 xl:px-12">
          <Item />
        </div>
      </div>
    </section>
  );
}
