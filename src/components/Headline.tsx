type THeadlineProps = {
  label: string;
  type: "sm" | "md" | "lg";
};

const Headline = ({ label, type }: THeadlineProps) => {
  switch (type) {
    case "sm":
      return <h3 className="mbe-3 text-lg font-bold">{label}</h3>;
    case "md":
      return <h2 className="mbe-3 text-xl font-bold">{label}</h2>;
    case "lg":
      return <h1 className="mbe-3 text-2xl font-bold">{label}</h1>;
  }
};

export default Headline;
