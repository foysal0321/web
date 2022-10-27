import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';

const Pdf = () => {
   const compontRef= useRef();
   const handlePrint = useReactToPrint({
    content:() => compontRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('print success')
   })
    return (
        <div>
            <div ref={compontRef} style={{width: '100%',height: window.innerHeight}} className="">
                <h1>Learning Text</h1>
            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
};

export default Pdf;