function Form({ name, image, handleFormChanges, handleSubmitForm }) {
  return (
    <form
      onSubmit={handleSubmitForm}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        padding: "50px",
        margin: "auto",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Hog Name"
        value={name}
        onChange={handleFormChanges}
      />
      <input
        type="text"
        name="image"
        placeholder="Image"
        value={image}
        onChange={handleFormChanges}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
