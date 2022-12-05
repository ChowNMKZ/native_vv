import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products').then(function (response) {
            setData(response.data["hydra:member"]);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

  return (
    <View>
        {
            data?.map(product=>
                <View key={product.id} style={styles.product}>
                    <Text><b>Nom : </b>{product.name}</Text>
                    <Text><b>Description : </b>{product.description}</Text>
                    <Text><b>Catégorie : </b>{product.category.name}</Text>
                    <Text><b>Stock : </b>{product.stock}</Text>
                    <Text><b>Fournisseur : </b>{product.supplier.name}</Text>
                    <Text><b>Prix d'achat : </b>{product.buyPrice}</Text>
                    <Text><b>Prix de vente : </b>{product.sellPrice}</Text>
                </View>)
        }
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
   marginBottom: 15
  },
});
