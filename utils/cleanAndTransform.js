import React from 'react'
import {v4 as uuid4} from "uuid"

//This is used to modify the content coming from GraphQL and then send to web app
//Here we're adding id to blocks(arrays)
export const cleanAndTransform = (blocksJSON) => {
  console.log("all",blocksJSON)
    const blocks = JSON.parse(JSON.stringify(blocksJSON));
  
    const assignIds = (b) => {
      b.forEach((block, index) => {
        try {
          block.id = uuid4(); // Generate a unique identifier for each block
        } catch (error) {
          console.error(`Error assigning ID to block at index ${index}:`, error);
        }
  
        if (block.innerBlocks?.length) {
          assignIds(block.innerBlocks);
        }
      });
    };
  
    assignIds(blocks);
    return blocks;
  };
  