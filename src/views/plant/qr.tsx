import { useEffect } from "react";
import usePlant from "../../hooks/use-plant";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import { useParams } from "react-router";

const QR = () => {
  const { plant, getSingle } = usePlant<IPlant>();

  const params = useParams();

  useEffect(() => {
    getSingle(params.id as string);
  }, []);

  return (
    <>
      <iframe
        src={plant.link}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title={plant.name}
      />
    </>
  );
};

export default QR;
