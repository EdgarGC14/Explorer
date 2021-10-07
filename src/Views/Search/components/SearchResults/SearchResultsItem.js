export default function SearchResultsItem({ name, email }) {
  return (
    <div
      style={{
        backgroundColor: "#DDDDDD",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        width: "100%",
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
