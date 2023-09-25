import Link from "next/link";
import React from "react";
import Filter from "./Filter";
import Item from "./Item";

type Props = {};

export default function Container({}: Props) {
  return (
    <section className=" ">
      <div className=" flex">
        {/* <Link href={"/dashboard/filter"} className=""> */}
        <div>
          <Filter />
        </div>
        {/* </Link> */}
        <div className="px-20">
          <Item />
        </div>
      </div>
    </section>
  );
}