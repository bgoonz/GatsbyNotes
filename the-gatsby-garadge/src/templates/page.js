import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
} from "@webdeveducation/wp-block-tools";

function Page(props) {
  console.log(props);
  


  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={(block) => {
          console.log("Render Component:", block);
          switch (block.name) {
            case "core/media-text":
              return (
                <div key={block.id}>
                  <BlockRenderer blocks={block.innerBlocks} />
                </div>
              );
            default:
              return null;
          }
        }}
      >

      </BlockRendererProvider>
    </div>
  );
}

export default Page;
