import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { GatsbyImage } from "gatsby-plugin-image";

function Page(props) {
  console.log(props);

  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={(block) => {
          switch (block.name) {
            case "core/media-text":
              console.log("Render Component:", block);
              const content = <BlockRenderer blocks={block.innerBlocks} />;
              return (
                <div
                  key={block.id}
                  className={getClasses(block)}
                  style={getStyles(block)}
                >
                  {block.attributes.mediaPosition === "right" && (
                    <div>{content}</div>
                  )}
                  <div>
                    <GatsbyImage alt="" image={block.attributes.gatsbyImage} />
                  </div>
                  <div>
                    {block.attributes.mediaPosition !== "right" && (
                      <div>{content}</div>
                    )}
                  </div>
                </div>
              );
            default:
              return null;
          }
        }}
      ></BlockRendererProvider>
    </div>
  );
}

export default Page;
