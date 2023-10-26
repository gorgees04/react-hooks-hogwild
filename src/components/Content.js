import React, { useState } from "react";
import Hogs from "./Hogs";
import Form from "./Form";

function Content({ data }) {
  const [hogs, setHogs] = useState(data);
  const [isGreased, setIsGreased] = useState(false);
  const [greasedColorBtn, setGreasedColorBtn] = useState("");
  const [sortOn, setSortOn] = useState("");
  const [hogFormData, setHogFormData] = useState({
    name: "",
    image: "",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
  });

  // handle form
  const handleFormChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      setHogFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (name === "image") {
      setHogFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // handle submit
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newData = {
      ...hogFormData,
      name: hogFormData.name,
      image: hogFormData.image,
    };
    console.log(newData);
    setHogs((prev) => [...prev, newData]);
  };

  // handle filter by greased
  const handleFilterGreased = () => {
    setIsGreased((prev) => !prev);
    if (!isGreased) {
      const cloneData = [...hogs];
      const filteredData = cloneData.filter((data) => data.greased);
      console.log(filteredData);
      setHogs(filteredData);
      setGreasedColorBtn("green"); // setting a filter butten green when do filtering
    } else {
      setHogs(data);
      setGreasedColorBtn("");
    }
  };

  // sorting
  const handleSortChanges = (e) => {
    const selectedSort = e.target.value;
    setSortOn(selectedSort);
    if (selectedSort === "name") {
      const sortedDataByName = [...hogs].sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setHogs(sortedDataByName);
    } else if (selectedSort === "weight") {
      const sortedDataByWeight = [...hogs].sort((a, b) =>
        a.weight > b.weight ? 1 : -1
      );
      setHogs(sortedDataByWeight);
    }
  };

  // render all the data
  const AllHogs = hogs.map((hog) => <Hogs key={hog.name} hog={hog} />);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Form
        name={hogFormData.name}
        image={hogFormData.image}
        handleFormChanges={handleFormChanges}
        handleSubmitForm={handleSubmitForm}
      />
      <h1>Hogs</h1>
      <div style={{ margin: "25px" }}>
        <button
          onClick={handleFilterGreased}
          style={{ background: greasedColorBtn }}
        >
          Greased
        </button>
        <select value={sortOn} onChange={handleSortChanges}>
          <option value="sort">sort by</option>
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{AllHogs}</div>
    </div>
  );
}

export default Content;
