
    
const loadData = async () => {
    const url="https://type.fit/api/quotes"
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    

let button = document.getElementById("Quote");

let genQuote = () => {
    const getQuote = arr => {
        const randomNum = () => Math.floor(Math.random() * 1642);
         return arr[randomNum];
  }
}
  button.addEventListener('click', genQuote);

}
loadData();