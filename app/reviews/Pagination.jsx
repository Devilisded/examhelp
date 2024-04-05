"use client";
import { useRouter } from "next/navigation";
import { Pagination } from "@mui/material";
const Pagination1 = (props) => {
  const router = useRouter();
  return (
    <Pagination
      count={parseInt(props.Pages)}
      size="large"
      page={parseInt(props.currentPage)}
      onChange={(e, value) => router.push(`/reviews?page=${value}`)}
    />
  );
};

export default Pagination1;
