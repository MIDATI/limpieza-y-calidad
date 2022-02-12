import Catalog from "./pages/Catalog";
import "./App.css";

function App() {
  const products = [
    {
      description:
        "Altamente concentrado para prendas de vestir fuertes como Jeans, chaquetas, cobijas ... \n tambíen utencilios de cocina como el brillo de ollas e higiene sanitaria.",
      title: "Jabón Rey",
      image:
        "https://lh3.googleusercontent.com/pw/AM-JKLVnJEyOfcbYLSXp7qnmCe_UVyHmyZT89U_jVBKSoiKxs_FjbAbp3gF0F9ST7m239ApCgS87A0tGe3uzKtTlTvHpgr-smC8WR4iPsSayOzL5j1ZFG1gps0t3SAQX-nEUPOAooS87jqZBl5OI00VtQF-Tgw=w574-h1178-no",
      categories: { litro: 6000, galon: 18000, garrafa: 72000 },
      id: "1",
    },
    {
      title: "Limpido Ropa Color",
      description:
        "Es un liquido especial para quitar todo tipo de manchas en la ropa de color, tambien se puede usar para el lavado de calzado deportivo, muebles y poltronas.",
      image: "https://picsum.photos/200/140",
      categories: { litro: 6000, galon: 18000, garrafa: 72000 },
      id: "2",
    },
    {
      title: "Suavizante",
      description:
        "Es un producto especial para suavizar, aromatizar y mejorar el planchado",
      image: "https://picsum.photos/200/110",
      categories: { litro: 6000, galon: 18000, garrafa: 72000 },
      id: "3",
    },
    {
      title: "Jabón De Manos",
      description:
        "Jabón liquido desinfectante y humectante para manos, textura suave y cremosa, desinfecta las manos de manera profunda",
      image: "https://picsum.photos/200/120",
      categories: { litro: 9000, galon: 29000, garrafa: 70000 },
      id: "4",
    },
    {
      title: "Jabón de loza",
      description:
        "Desengrasa y deja limpio todo tipo de elementos de cocina, dejando un acabado suave en tus manos",
      image: "https://picsum.photos/200/100",
      categories: { litro: 9000, galon: 29000, garrafa: 80000 },
      id: "5",
    },
    {
      title: "Limpia Crem",
      description:
        "Jabón para loza en crema, de gran duración, desengrasa, limpia y brilla todos tus utensilios de cocina",
      image: "https://picsum.photos/200/200",
      categories: { litro: null, galon: null, garrafa: 30000 },
      id: "6",
    },
    {
      title: "Limpia Frut",
      description:
        "Desinfectante de frutas y verduras a base de semillas de toronja con amplio espectromicrobiano frente a bacterias, virus y protozoos",
      image: "https://picsum.photos/200/100",
      categories: { litro: 18000, galon: null, garrafa: null },
      id: "7",
    },
  ];

  return <Catalog data={products} />;
}

export default App;
