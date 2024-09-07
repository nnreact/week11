import { useEffect, useState } from "react"

const BaseURL = "https://mocki.io/v1/e1691959-9884-49bd-94a8-51dc2e697a92";

function App() {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    //async function
    const fetchData = async () => {

      try {
        setIsLoading(true);
        const response = await fetch(BaseURL);
        const data = await response.json();
        setPhotos(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }

    };

    fetchData();

  }, [])

  return (
    <>
      {
        isLoading && <p className="loading">Loading...</p>
      }
      <div className="grid">
        {
          !isLoading && photos.map((item, i) => {
            return <div key={i} className="photo">
              <img src={item.url} alt="" />
              <p>{item.title}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
