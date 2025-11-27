import Card from "./card/card";

const HostelGrid = ({ title, data }) => {
  return (
    <div className="mb-12 px-4">
      {title && (
        <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            bed={item.bed}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default HostelGrid;
