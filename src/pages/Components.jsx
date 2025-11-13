import { useState } from "react";

import RadixCounter from "../componants/RadixCounter";
import Value from "../componants/Value";
import Adder from "../componants/Adder";
import Timer from "../componants/Timer";
import Temperature from "../componants/Temperature"

const Components  = () => {

    const [counter, setCounter] = useState(0)

    return ( <>
        <h2>COMPONENTS PAGE</h2>
        <Value name={'COUNTER'} value={counter} setValue={setCounter}/>
      {/* <RadixCounter /> */}
      <Adder />
      <Timer />
      <Temperature />
      <RadixCounter />

       <p className='text-center fw-bold mt-3'>67163975 นายภูบดินทร์ เรืองวิลัย</p>
   
    </> 
    );
}
 
export default Components