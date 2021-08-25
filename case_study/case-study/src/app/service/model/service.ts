import {RenType} from "./ren-type";
import {ServiceType} from "./service-type";

export interface Service {
  id?: number;
  serviceCode?: string;
  serviceName?: string;
  serviceArea?: number;
  serviceCost?: number;
  serviceMaxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  renType?: RenType;
  serviceType?: ServiceType;
}
