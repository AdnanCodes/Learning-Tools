import React, { useState, useEffect } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init("2650ccbc70a94ac99af74aa88444628f");

const HomePage = () => {
    const [pageJson, setPage] = useState(null)
  
    useEffect(() => { 
      builder.get('page', { url: '/' }).promise().then(setPage)
    , [])
    return <BuilderComponent model="page" content={pageJson} />
  }

export default HomePage;
