import React, {useEffect, useState, useContext} from 'react'
import { Filter, Friend } from "../Components/index";


const index = () => {
    return (
        <div>
            <Filter />
            <Friend />
        </div>
    );
};

export default index;