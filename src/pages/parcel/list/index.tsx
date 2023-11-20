import LayoutUserComponent from "@/components/layout";
import { ReactElement, useEffect } from "react";
import ParcelListScreen from "../../../screens/parcel/list";
import { useAppDispatch } from "../../../store/hooks";
import { setParcelList } from "../../../store/slice/parcelSlice/parcelSlice";

export default function ParcelListComponent() {
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

  return <ParcelListScreen />;
}

// ParcelListComponent.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <LayoutUserComponent
//       children={page}
//       headerText={"เข้าสู่ระบบ"}
//     ></LayoutUserComponent>
//   );
// };

export async function getServerSideProps() { return { props: { header: "เรียกรถเข้ารับพัสดุ (xxx)"}};}
