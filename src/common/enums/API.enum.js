export class API {
  static get States_API() {
    return "https://cdn-api.co-vin.in/api/v2/admin/location/states";
  }

  static get District_API() {
    return "https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
  }

//   static get Dashboard_API(state_id, district_id, date) {
//       return `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${state_id}&district_id=${district_id}&date=${date}`;
//   }
  static get Dashboard_API() {
      return "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=";
  }
}
