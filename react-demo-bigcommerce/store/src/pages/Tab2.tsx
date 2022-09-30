import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [updated, setUpdated] = useState<Array<any>>([]);

  const GetProducts = () => {
    fetch("http://localhost:8090/products")
      .then((response) => response.json())
      .then((data) => setUpdated(data.data));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="bannercontainer">
      <img className= "imgstyle"src="../../assets/icon/logo.png"/>
      </div>
      <p className="title">Products</p>
        <IonButton className="button-style" shape="round" onClick={GetProducts}>
          {" "}
          Show Products{" "}
        </IonButton>
        <IonGrid className="grid">
          {updated.length !== 0 ? (<IonRow>
                <IonCol size="1" className="ion-column-first">
                  ID
                </IonCol>
                <IonCol className="ion-column-first">
                  Name
                </IonCol>
                <IonCol className="ion-column-first">
                 Code
                </IonCol>
                <IonCol className="ion-column-first">
                  Price
                </IonCol>
                <IonCol className="ion-column-first">
                  Availability
                </IonCol>
              </IonRow>) : ( <div></div>)}
          {updated.map((product, i) => {
            return (
              <IonRow key={i}>
                <IonCol size="1" className="ion-column">
                  {product.id}
                </IonCol>
                <IonCol className="ion-column">
                  {product.name.substring(8)}
                </IonCol>
                <IonCol className="ion-column">
                  {product.sku}
                </IonCol>
                <IonCol className="ion-column">
                  Q {product.price}
                </IonCol>
                <IonCol className="ion-column">
                  {product.availability}
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
