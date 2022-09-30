import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [updated, setUpdated] = useState<Array<any>>([]);

  const GetCustomers = () => {
    fetch("http://localhost:8090/customers")
      .then((response) => response.json())
      .then((data) => setUpdated(data.data));
  };
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="bannercontainer">
      <img className= "imgstyle"src="../../assets/icon/logo.png"/>
      </div>
      <p className="title">Customers</p>
        <IonButton className="button-style" shape="round" onClick={GetCustomers}>
          {" "}
          Show Customers{" "}
        </IonButton>
        <IonGrid className="grid">
          {updated.length !== 0 ? (<IonRow>
                <IonCol size="1" className="ion-column-first">
                  ID
                </IonCol>
                <IonCol  className="ion-column-first">
                  Name
                </IonCol>
                <IonCol className="ion-column-first">
                  Email
                </IonCol>
                <IonCol className="ion-column-first">
                  Phone Number
                </IonCol>
                <IonCol className="ion-column-first">
                 Company
                </IonCol>
                <IonCol className="ion-column-first">
                 Date Created
                </IonCol>
                <IonCol className="ion-column-first">
                Registrated IP Address
                </IonCol>
              </IonRow>) : ( <div></div>)}
          {updated.map((customer, i) => {
            return (
              <IonRow key={i}>
                <IonCol size="1" className="ion-column">
                  {customer.id}
                </IonCol>
                <IonCol className="ion-column">
                  {customer.first_name}  {customer.last_name}
                </IonCol>
                <IonCol className="ion-column">
                 {customer.email}
                </IonCol>
                <IonCol className="ion-column">
                {customer.phone}
                </IonCol>
                <IonCol className="ion-column">
                {customer.company}
                </IonCol>
                <IonCol className="ion-column">
                {customer.date_created}
                </IonCol>
                <IonCol className="ion-column">
                {customer.registration_ip_address}
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
