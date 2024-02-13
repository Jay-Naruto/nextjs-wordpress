import { gql } from '@apollo/client'
import client from 'client'
import React from 'react'
import { cleanAndTransform } from './cleanAndTransform'
import { mapMainMenuItems } from './mapMainMenuItems'

export default async function getProps(context) {
    console.log(context)
  const uri=context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
    const {data} = await client.query({
      query:gql`
      query NewQuery($uri:String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
          ... on Property {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              destination {
                ... on Page {
                  id
                  uri
                }
              }
              label
            }
            menuItems {
              menuItem {
                destinations {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
      `,
      variables:{
        uri
      }
    })
  return{
    props:{
      mainMenuItems:mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      callToActionLabel:data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks:cleanAndTransform(data.nodeByUri.blocks),
   
    }
  }
  }
