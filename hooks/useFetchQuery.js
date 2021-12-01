import { getData } from "../utils/NormalFecth";
import { getRoomsURL } from "../utils/BaseURL";
//
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { roomsAction } from "../redux/slices/room-slice";
function useFetchQuery(dataINIT) {
  const dispatch = useDispatch();

  const { data } = useQuery("room", () => getData(getRoomsURL), {
    initialData: dataINIT,
    staleTime: 60000,
    cacheTime: 100000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  if (data) {
    dispatch(roomsAction.setRooms(data));
  }
  return data;
}

export default useFetchQuery;
