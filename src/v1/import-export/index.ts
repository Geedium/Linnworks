import axios, { AxiosInstance } from "axios";
import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axiosRetry from "axios-retry";
import {
  DeleteExportRequest,
  DeleteImportRequest,
  EnableExportRequest,
  EnableExportResponse,
  EnableImportRequest,
  EnableImportResponse,
  GetExportRequest,
  GetFullfilmentCenterSettingsRequest,
  GetFullfilmentCenterSettingsResponse,
  GetImportListResponse,
  GetImportRequest,
  RunNowExportRequest,
  RunNowImportRequest,
} from "./types";

export class ImportExport extends LinnworksBase {
  private axiosClient: AxiosInstance;

  constructor(options: ApiOptions) {
    super(options);
    this.axiosClient = axios.create({
      baseURL: this.sessionServer + "/api/ImportExport",
      headers: {
        Authorization: this.sessionToken,
      },
    });
    axiosRetry(this.axiosClient, {
      retries: 3,
    });
  }

  reinvalidateClient() {
    this.axiosClient.defaults.baseURL =
      this.sessionServer + "/api/ImportExport";
    this.axiosClient.defaults.headers.Authorization = this.sessionToken;
  }

  /** Enable/disable a specific import */
  async enableImport(params: EnableImportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.post<EnableImportResponse>(
      "EnableImport",
      params
    );
    return data;
  }

  /** Put the specific import immediately in the queue */
  async runNowImport(params: RunNowImportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.post<EnableImportResponse>(
      "RunNowImport",
      params
    );
    return data;
  }

  /** Get an import configuration */
  async getImport(params: GetImportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.get<EnableImportResponse>(
      "GetImport",
      {
        params,
      }
    );
    return data;
  }

  /** Delete an import configuration */
  async deleteImport(params: DeleteImportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    await this.axiosClient.post("DeleteImport", params);
  }

  /** Gets fulfillment center settings */
  async getFullfilmentCenterSettings(
    params: GetFullfilmentCenterSettingsRequest
  ) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } =
      await this.axiosClient.get<GetFullfilmentCenterSettingsResponse>(
        "GetFullfilmentCenterSettings",
        {
          params,
        }
      );
    return data;
  }

  /** Enable/disable a specific export */
  async enableExport(params: EnableExportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.post<EnableExportResponse>(
      "EnableExport",
      params
    );
    return data;
  }

  /** Put the specific export immediately in the queue */
  async runNowExport(params: RunNowExportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    await this.axiosClient.post("RunNowExport", params);
  }

  /** Get an export configuration */
  async getExport(params: GetExportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    await this.axiosClient.get("GetExport", { params });
  }

  /** Delete an export configuration */
  async deleteExport(params: DeleteExportRequest) {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    await this.axiosClient.post("DeleteExport", params);
  }

  /** Get all existing imports */
  async getImportList() {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.get<GetImportListResponse>(
      "GetImportList"
    );
    return data;
  }

  /** Get all existing exports */
  async getExportList() {
    if (!this.axiosClient) {
      throw new Error("No http (axios) client instance found.");
    }
    this.reinvalidateClient();
    const { data } = await this.axiosClient.get(
      "GetExportList"
    );
    return data;
  }
}
