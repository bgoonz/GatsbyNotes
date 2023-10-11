import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
function page(props) {
  console.log(props);
  return (
    <div>
      <BlockRendererProvider allBlocks={props.pageContext.blocks} />
    </div>
  );
}

export default page;
