import { useQuery } from "@tanstack/react-query";
import { getUserDetail } from "../services/apiUser";

function Dashboard() {
  //SAMPLE ID FOR USER
  const userId = 1;
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetail(userId),
  });
  console.log(user);
  return <div>DashBoard</div>;
}

export default Dashboard;
