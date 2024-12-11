import { useContext } from "react";
import { AuthContext } from "../Providers/MainContex";
import AllCards from "./AllCards";


const AllJObs = () => {
    const {datas}=useContext(AuthContext)
    console.log(datas)
    return (
        <div className="px-[4vw] space-y-5 mt-[5vw]">
            {
                datas.map(data=><AllCards key={data.id} data={data}></AllCards>)
            }
        </div>
    );
};

export default AllJObs;