import {Position} from "./position";
import {Division} from "./division";
import {EducationDegree} from "./education-degree";

export interface Employee {
  employeeId?: number;
  employeeName?: string;
  employeeBirthday?: string;
  employeeIdCard?: string;
  employeeSalary?: number;
  employeePhone?: string;
  employeeEmail?: string;
  employeeAddress?: string;
  position?: Position;
  division?: Division;
  educationDegree?: EducationDegree;
}
