import {Contract} from "../../contract/model/contract";
import {AttachService} from "./attach-service";

export interface ContractDetail {
  id?: number;
  contract?: Contract;
  attachService?: AttachService;
  quantity?: number;
}
