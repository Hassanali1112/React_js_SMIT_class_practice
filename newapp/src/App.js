import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';

function App() {
  const gSHock = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
    },
    {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg",
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg",
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg",
    },
    {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg",
    },
    {
      name: "G-shock Casio 14 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2200SL-8ADR.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-700BP-1ADR.jpg",
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
     { 
        gSHock.map((product,index) =>{
          return <Products img={product.img} name={product.name} caption={product.caption}  price={product.price}  />;
        })
          

      }
    </div>
  );
}

export default App;
