import {APIRequestContext, APIResponse, request} from "@playwright/test";
import reportApiDetails from "../reporter/reportApiDetails";

class ApiManager {

     apiContext: APIRequestContext = {} as APIRequestContext;

     apiResponse: APIResponse = {} as APIResponse;

     apiDefaultHeaders: { [key: string]: string; } = {'Content-type': 'application/json; charset=UTF-8'};

     /**
      * Function for making GET API call
      * @param url: destination URL
      * @param headers: headers in the request
      * @param body: body of the request
      * @return APIResponse
      */
     async get(url: string, headers?: { [key: string]: string; }, body?: string) {
          return this.send("GET", url, headers, body);
     }

     /**
      * Function for making POST API call
      * @param url: destination URL
      * @param headers: headers in the request
      * @param body: body of the request
      * @return APIResponse
      */
     async post(url: string, headers?: { [key: string]: string; }, body?: string) {
          return this.send("POST", url, headers, body);
     }

     /**
      * Function for making PUT API call
      * @param url: destination URL
      * @param headers: headers in the request
      * @param body: body of the request
      * @return APIResponse
      */
     async put(url: string, headers?: { [key: string]: string; }, body?: string) {
          return this.send("PUT", url, headers, body);
     }

     /**
      * Function for making PATCH API call
      * @param url: destination URL
      * @param headers: headers in the request
      * @param body: body of the request
      * @return APIResponse
      */
     async patch(url: string, headers?: { [key: string]: string; }, body?: string) {
          return this.send("PATCH", url, headers, body);
     }

     /**
      * Function for making DELETE API call
      * @param url: destination URL
      * @param headers: headers in the request
      * @param body: body of the request
      * @return APIResponse
      */
     async delete(url: string, headers?: { [key: string]: string; }, body?: string) {
          return this.send("DELETE", url, headers, body);
     }

     /**
      * Function for making the HTTP call
      * @param method: HTTP method. Example: GET, POST etc.
      * @param url: destination URL
      * @param headers: headers in the request
      * @param requestBody: body of the request
      * @return APIResponse
      */
     async send(method: string, url: string, headers?: { [key: string]: string; }, requestBody?: string) {

          const finalRequestHeaders = { ...this.apiDefaultHeaders, ...headers}

          const options = {
               data: requestBody,
               headers: finalRequestHeaders
          };

          this.apiContext  = await request.newContext();

          if (method.toUpperCase() === "GET") {

               this.apiResponse = await this.apiContext.get(url, options);

          } else if (method.toUpperCase() === "POST") {

               this.apiResponse = await this.apiContext.post(url, options);

          } else if (method.toUpperCase() === "PUT") {

               this.apiResponse = await this.apiContext.put(url, options);

          } else if (method.toUpperCase() === "PATCH") {

               this.apiResponse = await this.apiContext.patch(url, options);

          } else if (method.toUpperCase() === "DELETE") {

               this.apiResponse = await this.apiContext.delete(url, options);

          }

          await reportApiDetails.traceApiCalls(method, url, finalRequestHeaders, requestBody, this.apiResponse);

          return this.apiResponse;
     }

}

export default new ApiManager();