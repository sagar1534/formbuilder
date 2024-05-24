import React, { useRef, useEffect } from "react";
import { Formio } from '@formio/js';
import 'formiojs/dist/formio.full.min.css';
import 'formiojs/dist/formio.embed';
import 'formiojs/dist/formio.utils';
import 'formiojs/builders/Builders'


const CustomizeForm = ()=>{
    const builderRef = useRef(null);
    useEffect(() => {
   
        const builderElement = builderRef.current;
        if (builderElement) {
          Formio.builder(builderElement, {}, {
            builder: {
              resource: false,
              advanced: false,
              premium: false,
            },
          }).then(builder => {
            builder.on('saveComponent', () => {
              debugger
              console.log(builder.schema);
            });
          }).catch(error => {
            console.error('Error initializing Formio builder:', error);
          });
        }
      }, []);
    return(
        <>
            <div ref={builderRef} id="builder"></div>
        </>
    )
}

export default CustomizeForm;
