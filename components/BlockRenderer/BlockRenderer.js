import { Button } from 'components/Button/Button';
import { Column } from 'components/Column';
import { Columns } from 'components/Columns';
import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { FormspreeForm } from 'components/FormspreeForm';

import dynamic from 'next/dynamic';
const Property = dynamic(() => import('components/Property/Property'), {
  ssr: false,
})
 
import React from 'react'
import { theme } from 'theme';
import { PropertyFeatures } from 'components/PropertyFeatures';

export default function BlockRenderer({blocks}) {
  return blocks?.map((block) =>{
    switch (block.name){
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={'50%'}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/group":
    console.log(block)

        case "core/block": {

          return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
        }
      case "core/image": {
        return (
          <img
            key={block.id}
            src='http://hot-dang-homes.local/wp-content/uploads/2024/02/cytonn-photography-n95VMLxqM2I-unsplash-1024x684-1.webp'
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
            priority="low"
          />
        );
      }
      case 'core/button':{
        return <Button  
        key={block.id} 
        textAlign={block.attributes.textAlign} 
        content={block.attributes.content} 
        url={block.attributes.url} 
        ></Button>  
      }
        case 'core/buttons':{
          return <div key={block.id} >
          <BlockRenderer blocks={block.innerBlocks} />
          </div>
      }
        case 'core/paragraph':{
            return <Paragraph 
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}   
            textColor={
                theme[block.attributes.textColor] ||
                block.attributes.style?.color?.text
              }        
            />

            
        }
        case 'core/post-title':
        case "core/heading":{
          
            return <Heading  
            key={block.id} 
            content={block.attributes.content}
            textAlign={block.attributes.textAlign || ""}
            level={block.attributes.level}
             />
        }
        case "core/cover":{
          console.log(blocks)
            return <Cover  key={block.id} background={block.attributes.url} >
                <BlockRenderer blocks={block.innerBlocks} ></BlockRenderer>
            </Cover>
        }
        case "acf/propertysearch":{
          console.log(block)

            return <Property key={block.id} />
        }
        case "acf/formspreeform": {
          return (
            <FormspreeForm
              key={block.id}
              formId={block.attributes.data.form_id}
            />
          );
        }
        default:{
            return null;
        }
    }
  })
}
