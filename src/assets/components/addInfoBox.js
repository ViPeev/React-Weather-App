import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddInfoBox({data}){

    return (
        <span className="box">
            <FontAwesomeIcon icon={data.icon}/>
            <div>{data.descr}</div>
            <div>{data.descrVal}</div>
        </span>
    )
}

export default AddInfoBox;