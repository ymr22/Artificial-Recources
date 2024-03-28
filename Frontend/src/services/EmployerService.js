import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8000/employee/getall/");
  }

  getEmployerById(id) {
    return axios.get("http://localhost:8000/employee/profile/"+id)
  }

  getEmployerDashboard(id) {
    return axios.get("http://localhost:8000/employee/dashboard/"+id)
  }

  getEmployerOffDayById(id) {
    return axios.get("http://localhost:8000/employee/dayoff/"+id)
  }

  getCvInfo() {
    return axios.get("http://localhost:8000/utils/cvinfo/")
  }

  getOffDayReq() {
    return axios.get("http://localhost:8000/utils/offdayreq/")
  }
}