import "./MetadataPanel.css";

const MetadataPanel = () => {
  const productCategories = [
    "Jewelry",
    "Home Decor",
    "Clothing and Accessories",
    "Art and Prints",
    "Craft Supplies",
    "Vintage",
    "Beauty and Personal Care",
    "Toys and Games",
    "Wedding and Party Supplies",
    "Pet Accessories",
    "Stationery",
    "Ceramics and Pottery",
    "Woodworking",
    "Digital Downloads",
    "Photography",
    "Food and Beverage",
    "Health and Wellness",
    "Plant and Garden",
    "Custom Gifts",
    "Electronics Accessories",
  ];

  const quanitity = Array.from({ length: 200 }, (_, index) => index + 1);

  return (
    <div className="metadata-container">
      <div className="metadata-card">
        <div className="m-group">
          <label htmlFor="p-name">Product Name</label>
          <input id="p-name" type="text" placeholder="Enter a name.." />
        </div>

        <div className="m-group">
          <label htmlFor="p-category">Product Category</label>
          <select id="p-category">
            {productCategories.map((el, id) => {
              return <option key={id}>{el}</option>;
            })}
          </select>
        </div>

        <div className="m-group">
          <label htmlFor="p-creator">Who made it?</label>
          <input id="p-creator" type="text" placeholder="Enter a name.." />
        </div>

        <div className="m-group">
          <label htmlFor="p-created-date">When was it made?</label>
          <input id="p-created-date" type="text" placeholder="Enter a name.." />
        </div>

        <div className="m-group">
          <label htmlFor="p-quanitity">Quantity</label>
          <select id="p-quantity">
            {quanitity.map((el, id) => {
              return <option key={id}>{id}</option>;
            })}
          </select>
        </div>

        <div className="m-group">
          <div className="m-group">
            <label htmlFor="p-price">Product Price</label>
            <input id="p-price" type="text" placeholder="$" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetadataPanel;
