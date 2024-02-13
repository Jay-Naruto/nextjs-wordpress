
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import { MainMenu } from 'components/MainMenu'
import React from 'react'

export default function Page(props) {
  return (
    <div>
    <MainMenu items={props.mainMenuItems}
  callToActionLabel={props.callToActionLabel}
   callToActionDestination={props.callToActionDestination} />
    <BlockRenderer blocks={props.blocks} />
    </div>
  )
}
