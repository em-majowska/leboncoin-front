import { memo } from "react";

type THeadlineProps = {
  label: string;
  level: 1 | 2 | 3;
};

const Headline = ({ label, level }: THeadlineProps) => {
  switch (level) {
    case 3:
      return <h3 className="mbe-3 text-lg font-bold">{label}</h3>;
    case 2:
      return <h2 className="mbe-3 text-xl font-bold">{label}</h2>;
    case 1:
      return <h1 className="mbe-3 text-2xl font-bold">{label}</h1>;
  }
};

export default memo(Headline);
