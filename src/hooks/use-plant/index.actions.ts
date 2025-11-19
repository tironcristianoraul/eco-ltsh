/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { guestRequest, request } from "../../utils/axios";

interface PromiseData {
  message: string;
}

interface IQRCode {
  message: string;
  qr: string;
}

export interface PlantInputs {
  name: string;
  link: string;
}

export interface IPlant {
  name: string;
  link: string;
  _id: string;
}

async function createPlant({
  name,
  link,
}: PlantInputs): Promise<PromiseData | string> {
  try {
    const data: PromiseData = await request.post("/plant", { name, link });
    return {
      message: data.message,
    };
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to create.");
  }
}

async function getAllPlants(): Promise<IPlant[] | string> {
  try {
    const res: any = await guestRequest.get("/plants");
    return res?.data?.plants;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to get plants.");
  }
}

async function getSinglePlant(id: string): Promise<IPlant | string> {
  try {
    const res: any = await guestRequest.get(`/plant/${id}`);
    return res?.data?.plant;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to get plant.");
  }
}

async function deleteSinglePlant(id: string): Promise<IPlant[] | string> {
  try {
    const res: any = await request.delete(`/plant/${id}`);
    return res?.data?.message;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to delete.");
  }
}

async function updatePlant(
  { name, link }: PlantInputs,
  id: string
): Promise<IPlant[] | string> {
  try {
    const res: any = await request.patch(`/plant/${id}`, { name, link });
    return res?.data?.message;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to login.");
  }
}

async function getQrCode(id: string): Promise<string | IQRCode> {
  try {
    const res: any = await guestRequest.get(`/plant/qr/${id}`);
    return res?.data;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data as { error: string };
    throw new Error(data?.error || "Failed to login.");
  }
}

export {
  getQrCode,
  getSinglePlant,
  getAllPlants,
  updatePlant,
  deleteSinglePlant,
  createPlant,
};
