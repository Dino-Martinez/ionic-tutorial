import React, { useRef, useState } from 'react'
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
} from '@ionic/react'

import BmiControls from './components/BmiControls'
import BmiResults from './components/BmiResults'
import InputControls from './components/InputControls'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => {
  const [bmi, setBmi] = useState<number>(-999)
  const [err, setErr] = useState<string>()
  const [units, setUnits] = useState<'mkg' | 'flb'>('mkg')

  const heightRef = useRef<HTMLIonInputElement>(null)
  const weightRef = useRef<HTMLIonInputElement>(null)

  const calculateBMI = () => {
    const height = heightRef.current!.value
    const weight = weightRef.current!.value

    if (!weight || !height || +height > +weight) {
      setErr('You may have mistaken height for weight!')
      return
    }

    const weightFactor = units === 'mkg' ? 1 : 2.2
    const heightFactor = units === 'mkg' ? 1 : 3.28

    const convertedWeight = +weight / weightFactor
    const convertedHeight = +height / heightFactor

    const calculatedBmi: number =
      convertedWeight / (convertedHeight * convertedHeight)
    setBmi(calculatedBmi)
  }

  const resetInputs = () => {
    heightRef.current!.value = ''
    weightRef.current!.value = ''
    setBmi(-999)
  }

  const updateUnits = (newUnits: 'mkg' | 'flb') => {
    setUnits(newUnits)
  }

  const resetError = () => {
    setErr('')
  }

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!err}
        message={err}
        buttons={[
          {
            text: 'Okay.',
            handler: resetError,
          },
        ]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow className="ion-padding">
              <InputControls selected={units} unitsCallback={updateUnits} />
            </IonRow>
            <IonRow className="ion-padding">
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Height ({units === 'mkg' ? 'Meters' : 'Feet'})
                  </IonLabel>
                  <IonInput type="number" min="1" ref={heightRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-padding">
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Weight ({units === 'mkg' ? 'Kilograms' : 'Pounds'})
                  </IonLabel>
                  <IonInput type="number" min="1" ref={weightRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            {bmi > 0 && <BmiResults bmi={bmi} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  )
}

export default App
