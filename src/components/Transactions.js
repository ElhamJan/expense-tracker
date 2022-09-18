import { useEffect, useState } from "react";

const Transactions = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions); // this is not correct!!! lift it up

  const filterTnx = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTnx(e.target.value);
  };

  useEffect(() => {
    filterTnx(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h4>Add some transactions...</h4>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for ..."
        className="search"
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>{t.amount}</span>
            </div>
          ))
        : "No item is matched!"}
    </section>
  );
};

export default Transactions;
