import React, {useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
import Invoice from './Invoice';
const ParentInvoice = () => {
    const componentRef = useRef<any>();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "invoice-2024",
    });
  
    return (
      <div>
        {/* Reference to the component to be printed */}
        <div style={{ display: "none" }}>
          <Invoice ref={componentRef} />
        </div>
  
        {/* Render the Invoice */}
        <Invoice ref={componentRef} />
  
        {/* Print Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          style={{ marginTop: "20px" }}
        >
          Print Invoice
        </Button>
      </div>)
  
};

export default ParentInvoice;