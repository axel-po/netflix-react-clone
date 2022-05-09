import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useWidth } from "../../utils/hooks";

export default function RowSkeleton({ nbElement = 20, title = "Films" }) {
  const styles = {
    row: {
      backgroundColor: "#2C2C2C",
    },
  };

  const postersSkeletons = [];

  const width = useWidth();

  console.log(width);

  for (let i = 0; i < nbElement; i++) {
    postersSkeletons.push(
      <div style={styles.row} key={i} className='rounded-sm w-6/12 shrink-0 max-w-xs cursor-pointer transition-all ease-out hover:scale-110'>
        {width <= 683 ? (
          <Skeleton variant='rectangular' height={120} animation='wave' />
        ) : (
          <Skeleton variant='rectangular' height={170} animation='wave' />
        )}
      </div>
    );
  }
  return (
    <section className='px-4 sm-2xl:px-14'>
      <h2 className='text-md text-white sm:text-xl font-bold mt-8 mb-5'>{title}</h2>
      <div className='flex gap-2 overflow-y-hidden overflow-x-auto mb-10'>{postersSkeletons}</div>
    </section>
  );
}
