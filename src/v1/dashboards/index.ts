import {
    GetInventoryDataOptions,
    GetInventoryLocationCategoriesDataOptions,
    GetInventoryLocationProductsDataOptions,
    GetPerformanceDetail,
    GetPerformanceDetailOptions,
    GetPerformanceTableOptions,
    GetStockLevelOptions,
    GetTopProductsOptions,
    InventoryLocationCategoriesData,
    InventoryLocationData,
    InventoryLocationProductsData,
    LowStockLevel,
    PerformanceTable,
    TopOrderedProduct
} from "./types";

import axios, { AxiosInstance } from "axios";
import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axiosRetry from 'axios-retry';

export class Dashboards extends LinnworksBase {
    private axiosClient: AxiosInstance;

    constructor(options: ApiOptions) {
        super(options);
        this.axiosClient = axios.create({
            baseURL: this.getSession().Server + "/Dashboards",
            headers: {
                Authorization: "Bearer " + this.sessionToken,
            },
        });
        axiosRetry(this.axiosClient, {
            retries: 3,
        });
    }

    /**
     * Use this call to retrieve report about "Low stock in location"
     * @param options - request query parameters
     */
    async getLowStockLevel(options: GetStockLevelOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<LowStockLevel[]>(
            "GetLowStockLevel", {
            params: options,
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Performance table"
     * @param options - request query parameters
     */
    async getPerformanceTableData(options: GetPerformanceTableOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<PerformanceTable[]>(
            "GetPerformanceTableData", {
            params: options,
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Performance through time chart"
     * @param options - request query parameters
     */
    async getPerformanceDetail(options: GetPerformanceDetailOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<GetPerformanceDetail>(
            "GetPerformanceDetail", {
            params: options,
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Top ordered products" for top "10" products
     * @params options - request query parameters
     */
    async getTopProducts(options: GetTopProductsOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<TopOrderedProduct[]>(
            "GetTopProducts", {
            params: options
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Stock info for locations"
     * @params options - request query parameters
     */
    async getInventoryData(options: GetInventoryDataOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<InventoryLocationData[]>(
            "GetInventoryLocationData", {
            params: options
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Stock info for categories in a specific location"
     * @params options - request query parameters
     */
    async getInventoryLocationCategoriesData(options: GetInventoryLocationCategoriesDataOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<InventoryLocationCategoriesData[]>(
            "GetInventoryLocationCategoriesData", {
            params: options
        });
        return data;
    }

    /**
     * Use this call to retrieve report about "Stock info for products in a specific category and location"
     * @params options - request query parameters
     */
    async getInventoryLocationProductsData(options: GetInventoryLocationProductsDataOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.get<InventoryLocationProductsData>(
            "GetInventoryLocationProductsData", {
            params: options
        });
        return data;
    }
}