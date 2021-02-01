import React from 'react'

import { IonRow, IonCol, IonIcon, IonButton } from '@ionic/react'
import { calculatorOutline, refreshOutline } from 'ionicons/icons'

const BmiControls: React.FC<{
  onCalculate: () => void
  onReset: () => void
}> = (props) => {
  return (
    <IonRow className="ion-padding">
      <IonCol>
        <IonButton onClick={props.onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          Reset
          <IonIcon slot="end" icon={refreshOutline} />
        </IonButton>
      </IonCol>
    </IonRow>
  )
}

export default BmiControls
