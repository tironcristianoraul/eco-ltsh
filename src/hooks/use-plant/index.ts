import { useCallback, useState } from "react";
import {
  createPlant,
  deleteSinglePlant,
  getAllPlants,
  getQrCode,
  getSinglePlant,
  updatePlant,
  type IPlant,
  type PlantInputs,
} from "./index.actions";

export interface PlantReturnType<T extends IPlant | IPlant[]> {
  plant: T;
  isError: boolean;
  create: (postFields: PlantInputs) => void;
  getAll: () => void;
  getSingle: (id: string) => void;
  deletePlant: (id: string) => void;
  update: (postFields: PlantInputs, id: string) => void;
  getQRCode: (id: string) => void;
  qr: string;
}

function usePlant<T extends IPlant | IPlant[]>(): PlantReturnType<T> {
  const [plant, setPlant] = useState<IPlant | IPlant[]>([]);
  const [qrCode, setQRCode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const create = useCallback(async (u: PlantInputs) => {
    try {
      await createPlant(u);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  const getAll = useCallback(async () => {
    try {
      const res = await getAllPlants();
      if (typeof res != "string") setPlant(res);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  const getSingle = useCallback(async (id: string) => {
    try {
      const res = await getSinglePlant(id);
      if (typeof res != "string") setPlant(res);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  const deletePlant = useCallback(async (id: string) => {
    try {
      await deleteSinglePlant(id);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  const update = useCallback(async (u: PlantInputs, id: string) => {
    try {
      await updatePlant(u, id);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  const getQRCode = useCallback(async (id: string) => {
    try {
      const res = await getQrCode(id);
      if (typeof res != "string") setQRCode(res.qr);
      setIsError(false);
    } catch (errorMessage) {
      console.error(errorMessage);
      setIsError(true);
    }
  }, []);

  return {
    plant: plant as T,
    qr: qrCode,
    getQRCode,
    isError,
    create,
    getAll,
    getSingle,
    deletePlant,
    update,
  };
}

export default usePlant;
