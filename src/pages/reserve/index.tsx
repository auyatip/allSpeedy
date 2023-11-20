import LayoutUserComponent from "@/components/layout";
import { ReactElement, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setParcelList } from "../../store/slice/parcelSlice/parcelSlice";
import BookingScreen from "@/screens/booking/list";

export default function ReserveComponent() {
  const dispatch = useAppDispatch();

  const getData = async () => {
    dispatch(
      setParcelList([
        {
          id: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          id: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          id: "3",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "4",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "5",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "6",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "7",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "8",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "9",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          id: "10",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ])
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return <BookingScreen />;
}

export async function getServerSideProps() { return { props: { header: "จองการจัดส่งพัสดุ"}};}
