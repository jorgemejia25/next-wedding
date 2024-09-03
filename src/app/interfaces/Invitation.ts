import { Status } from "../enums/Status";

export interface Invitation {
  id?: string;
  name: string;
  guests: number;
  status: Status;
  confirmedGuests?: string;
}
