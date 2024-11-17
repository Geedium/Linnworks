export interface EnableImportRequest {
  importId: number;
  enable: boolean;
}

export interface EnableImportResponse {
  LastFileChecksum: string;
  ImportStatus: string;
  ImportSkipped: boolean;
  Id: number;
  Type:
    | "StockItemCompositions"
    | "Customers"
    | "eBayCompatibility"
    | "eBayCompatibilityKtypes"
    | "eBayCompatibilityePID"
    | "Inventory"
    | "ProcessOrder"
    | "StockCount"
    | "SupplierPricesByCode"
    | "StockLevelBySupplierCode"
    | "StockLevel"
    | "ItemMapping"
    | "ItemMappingWithChannelLocations"
    | "Orders"
    | "FulfilmentCenterOrdersImport"
    | "FulfilmentCenterInventoryImport"
    | "DeletePriceByChannel"
    | "DeleteTitleByChannel"
    | "DeleteDescriptionByChannel"
    | "DeleteStockItem"
    | "DeleteImages"
    | "DeleteNonPrimaryImages"
    | "DeletePrimaryImages"
    | "DeleteExtendedProperties"
    | "DeleteVariationItems"
    | "DeleteItemMapping"
    | "DeleteComposition"
    | "DeleteSuppliersFromItems"
    | "StockLevelBatch"
    | "ebayListingStrikeOff"
    | "ebayListingRelistPendingDelete"
    | "RenameSKU"
    | "ProductIdentifiers"
    | "TrackingNumbers"
    | "JITStatus"
    | "ReorderPointGeneralParams"
    | "ReorderPointWeeklyParams"
    | "eBayCompatibilityKtypesCulture"
    | "eBayCompatibilityePIDCulture"
    | "MultipleListingTitlesAndPrices"
    | "StockSupplierDetail"
    | "StockLevelBatchBySupplierCode"
    | "WeightAndDimensions";
  FriendlyName: string;
  Executing: boolean;
  justOnce: boolean;
  Started: string;
  Completed: string;
  IsQueued: boolean;
  Enabled: boolean;
  IsNew: boolean;
  AllSchedulesDisabled: boolean;
  TimeZoneOffset: number;
  NextSchedule: string;
}

export interface RunNowImportRequest {
  importId: number;
}

export interface GetImportRequest {
  /** Id of the import to get */
  id: number;
}

export interface DeleteImportRequest {
  /** Id of the import to delete */
  id: number;
}

export interface GetFullfilmentCenterSettingsRequest {
  /** Stock location id */
  fkStockLocationId: string;
}

export interface GetFullfilmentCenterSettingsResponse {
  fkStockLocationId: string;
  fkOrdersExportId: number;
  fkOrdersImportId: number;
  fkInventoryImportId: number;
  OrdersExportEnabled: boolean;
  OrdersImportEnabled: boolean;
  InventoryImportEnabled: boolean;
}

export interface EnableExportRequest {
  /** Export id to enable/disable */
  exportId: number;
  /** Boolean value to indicate the state */
  enable: boolean;
}

export interface EnableExportResponse {
  LastQueryExecuted: string;
  LastExportStatus: boolean;
  Id: number;
  Type: string;
  FriendlyName: string;
  Executing: boolean;
  justOnce: boolean;
  Started: string;
  Completed: string;
  IsQueued: boolean;
  Enabled: boolean;
  IsNew: boolean;
  AllSchedulesDisabled: boolean;
  TimeZoneOffset: number;
  NextSchedule: string;
}

export interface RunNowExportRequest {
  /** Export id to execute */
  exportId: number;
}

export interface GetExportRequest {
  /** Id of the export to get */
  id: number;
}

export interface DeleteExportRequest {
  /** Id of the export to delete */
  id: number;
}

export interface GetImportListResponse {
  register: {
    Schedules: {
      Id: number;
      Order: number;
      Name: string;
      OwnerId: number;
      Migrated: number;
      ScheduleXML: string;
      Configuration: Object;
    }[];
    LastFileChecksum: string;
    ImportStatus: string;
    ImportSkipped: boolean;
    Id: number;
    Type:
      | "StockItemCompositions"
      | "Customers"
      | "eBayCompatibility"
      | "eBayCompatibilityKtypes"
      | "eBayCompatibilityePID"
      | "Inventory"
      | "ProcessOrder"
      | "StockCount"
      | "SupplierPricesByCode"
      | "StockLevelBySupplierCode"
      | "StockLevel"
      | "ItemMapping"
      | "ItemMappingWithChannelLocations"
      | "Orders"
      | "FulfilmentCenterOrdersImport"
      | "FulfilmentCenterInventoryImport"
      | "DeletePriceByChannel"
      | "DeleteTitleByChannel"
      | "DeleteDescriptionByChannel"
      | "DeleteStockItem"
      | "DeleteImages"
      | "DeleteNonPrimaryImages"
      | "DeletePrimaryImages"
      | "DeleteExtendedProperties"
      | "DeleteVariationItems"
      | "DeleteItemMapping"
      | "DeleteComposition"
      | "DeleteSuppliersFromItems"
      | "StockLevelBatch"
      | "ebayListingStrikeOff"
      | "ebayListingRelistPendingDelete"
      | "RenameSKU"
      | "ProductIdentifiers"
      | "TrackingNumbers"
      | "JITStatus"
      | "ReorderPointGeneralParams"
      | "ReorderPointWeeklyParams"
      | "eBayCompatibilityKtypesCulture"
      | "eBayCompatibilityePIDCulture"
      | "MultipleListingTitlesAndPrices"
      | "StockSupplierDetail"
      | "StockLevelBatchBySupplierCode"
      | "WeightAndDimensions";
    FriendlyName: string;
    Executing: boolean;
    justOnce: boolean;
    Started: string;
    Completed: string;
    IsQueued: boolean;
    Enabled: boolean;
    IsNew: boolean;
    AllSchedulesDisabled: boolean;
    TimeZoneOffset: number;
    NextSchedule: string;
  }[];
}
