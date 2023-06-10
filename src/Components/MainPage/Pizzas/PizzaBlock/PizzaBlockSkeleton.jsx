import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = (props) => (
    <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="120" r="120" />
    <rect x="0" y="260" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="315" rx="8" ry="8" width="280" height="88" />
    <rect x="0" y="420" rx="8" ry="8" width="92" height="45" />
    <rect x="140" y="420" rx="30" ry="30" width="132" height="45" />
  </ContentLoader>
)

export default PizzaBlockSkeleton;