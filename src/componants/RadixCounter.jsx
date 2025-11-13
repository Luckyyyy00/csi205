import { useState  } from "react"
const RadixCounter = () => {
    const [value, setValue] = useState(0)

    const minucClicked = () => {
        console.log('-')
        if(value <= 0){
            setValue(4095)
        } else {
            setValue((prev) => prev -1)
        }

    }
    const resetClicked = () => {
        console.log('re')
        setValue(0)

    }
    const plusClicked = () => {
        console.log('+')
        if (value >= 4095)  {
            setValue (0)
        } else {
            setValue( prev => prev + 1)
        }
    }
    return(
        <div className="border border-2 border-black rounded-3 p-3 m-auto" style={{width:'400px'}}>

        <div className="text-center fw-bold fs-4" >RADIX COUNTER</div>

            <div className="d-flex justify-content-between">
                <div className="text-center">
                    <div className="fw-bold">[HEX]</div>
                    <div className="font-monospace">{value.toString(16).toUpperCase().padStart(3,'0')}</div>
                    </div>
                <div className="text-center">
                    <div className="fw-bold">[DEX]</div>
                    <div className="font-monospace text-primary fw-bold">{value.toString(10).padStart(4,'0')}</div>
                    </div>
                <div className="text-center">
                    <div className="fw-bold">[OCT]</div>
                    <div className="font-monospace">{value.toString(8).padStart(4,'0')}</div>
                    </div>
                <div className="text-center">
                    <div className="fw-bold">[BIN]</div>
                    <div className="font-monospace">{value.toString(2).padStart(12,'0')}</div>
                    </div>
            </div>

            <div className="mt-3 d-flex justify-content-around">
                <button className="btn btn-danger px-4 " onClick={ minucClicked }>&minus;</button>
                <button className="btn btn-secondary px-4" onClick={ resetClicked }>RESET</button>
                <button className="btn btn-success px-4" onClick={ plusClicked }>+</button>
            </div>
        </div>
    )
}

export default RadixCounter