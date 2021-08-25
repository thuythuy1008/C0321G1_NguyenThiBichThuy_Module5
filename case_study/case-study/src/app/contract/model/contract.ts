import {Employee} from "../../employee/model/employee";
import {Customer} from "../../customer/model/customer";
import {Service} from "../../service/model/service";

export interface Contract {
  id?: number;
  contractStartDate?: string;
  contractEndDate?: string;
  contractDeposit?: number;
  contractTotalMoney?: number;
  employee?: Employee;
  customer?: Customer;
  service?: Service;
}
