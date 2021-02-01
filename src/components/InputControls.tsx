import React from 'react'
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react'

const InputControls: React.FC<{
  selected: 'mkg' | 'flb'
  unitsCallback: (value: 'mkg' | 'flb') => void
}> = (props) => {
  const selectionMade = (event: CustomEvent) => {
    props.unitsCallback(event.detail.value)
  }

  return (
    <IonSegment value={props.selected} onIonChange={selectionMade}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="flb">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  )
}

export default InputControls
