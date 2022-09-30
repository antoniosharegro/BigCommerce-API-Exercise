import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [updated, setUpdated] = useState<Array<any>>([]);

  const GetOrders = () => {
    fetch("http://localhost:8090/orders")
      .then((response) => response.json())
      .then((data) => setUpdated(data));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="bannercontainer">
          <img className="imgstyle" src="../../assets/icon/logo.png" />
        </div>
        <p className="title">Orders</p>
        <IonButton className="button-style" shape="round" onClick={GetOrders}>
          {" "}
          Show Orders{" "}
        </IonButton>
        <IonGrid className="grid">
          {updated.length !== 0 ? (
            <IonRow>
              <IonCol size="1" className="ion-column-first">
                ID
              </IonCol>
              <IonCol className="ion-column-first">Customer ID</IonCol>
              <IonCol className="ion-column-first">Customer Info</IonCol>
              <IonCol className="ion-column-first">Customer Address</IonCol>
              <IonCol className="ion-column-first">Date Created</IonCol>
              <IonCol className="ion-column-first">Status</IonCol>
              <IonCol className="ion-column-first">Total items</IonCol>
              <IonCol className="ion-column-first">Total with Tax</IonCol>
            </IonRow>
          ) : (
            <div></div>
          )}
          {updated.map((order, i) => {
            return (
              <IonRow key={i}>
                <IonCol size="1" className="ion-column">
                  {order.id}
                </IonCol>
                <IonCol className="ion-column">{order.customer_id}</IonCol>
                <IonCol className="ion-column">
                  {order.billing_address.first_name}{" "}
                  {order.billing_address.last_name}{" "}
                  {order.billing_address.email}
                </IonCol>
                <IonCol className="ion-column">
                  {order.billing_address.street_1} {order.billing_address.city}{" "}
                  {order.billing_address.state}
                </IonCol>
                <IonCol className="ion-column">{order.date_created}</IonCol>
                <IonCol className="ion-column">{order.status}</IonCol>
                <IonCol className="ion-column">{order.items_total}</IonCol>
                <IonCol className="ion-column">
                  {parseInt(order.total_inc_tax)}
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
