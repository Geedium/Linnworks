type PackageFormat = "BOX" | "PARCEL" | "PACKET" | "LETTER";
declare enum ValueType {
    String = 0,
    Integer = 1,
    Double = 2,
    Boolean = 3,
    Password = 4,
    List = 5
}
type GenericValue = {
    Display: string;
    Value: string;
};
type GenericResponse = {
    ErrorMessage: string | null;
    IsError: boolean;
};
type ListValue = GenericValue;
type Only<T, U> = {
    [P in keyof T]: T[P];
} & {
    [P in keyof U]?: U[P];
};
type Either<T, U> = Only<T, U> | Only<U, T>;

interface AddNewUserRequest {
    LinnworksUniqueIdentifier: string;
    Email: string;
    AccountName: string;
}
interface AddNewUserResponse extends GenericResponse {
    AuthorizationToken: string;
}

interface CancelLabelRequest {
    AuthorizationToken: string;
    OrderReference: string;
}
interface CancelLabelResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}

interface Config {
}
type ConfigListItem = GenericValue;
interface ConfigItem {
    ConfigItemId: string;
    Name: string;
    Description: string;
    GroupName: string;
    SortOrder: number;
    SelectedValue: string;
    RegExValidation: string | null;
    RegExError: string | null;
    MustBeSpecified: boolean;
    ReadOnly: boolean;
    ListValues: ConfigListItem[];
    ValueType: ValueType;
}
interface ConfigItemValue {
    ConfigItemId: string;
    SelectedValue: string;
}
interface ConfigStage {
    WizardStepDescription: string;
    WizardStepTitle: string;
    ConfigItems: ConfigItem[];
}

interface ServiceProperty {
    PropertyName: string;
    PropertyValue: string;
}

interface CourierService {
    ServiceName: string;
    ServiceCode: string;
    ServiceTag: string;
    ServiceGroup: string;
    ServiceUniqueId: string;
    ConfigItems: ConfigItem[];
    ServiceProperty: ServiceProperty[];
}

interface CreateManifestRequest {
    AuthorizationToken: string;
    OrderId: string[];
}
interface CreateManifestResponse {
    IsError: boolean;
    ErrorMessage: string | null;
    ManifestReference: string;
}

interface DeleteConfigRequest {
    AuthorizationToken: string;
}
interface DeleteConfigResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}

interface ExtendedProperty {
    Name: string;
    Value: string;
}

interface ExtendedPropertyMapping {
    PropertyTitle: string;
    PropertyName: string;
    PropertyDescription: string;
    PropertyType: string;
}
interface ExtPropertyMapRequest {
    AuthorizationToken: string;
}
interface ExtendedPropertyMapResponse {
    Items: ExtendedPropertyMapping[];
    IsError: boolean;
    ErrorMessage: string | null;
}

interface OrderExtendedProperties {
    Name: string;
    Value: string;
}

interface Item {
    ItemName: string;
    ProductCode: string;
    Quantity: number;
    UnitValue: number;
    UnitWeight: number;
    Height: number;
    Width: number;
    Length: number;
    ExtendedProperties: ExtendedProperty[];
}

type Package = Either<{
    SequenceNumber: number;
    PackageWeight: number;
    PackageWidth: number;
    PackageHeight: number;
    PackageDepth: number;
    PackageFormat: PackageFormat;
    Items: Item[];
}, {
    SequenceNumber: number;
    TrackingNumber: string;
    PNGLabelDataBase64: string;
    AdditionalPngsBase64?: string[];
    PDFBytesDocumentationBase64: string[];
    LabelWidth: number;
    LabelHeight: number;
}>;

interface SaveConfigItem {
    ConfigItemId: string;
    SelectedValue: string;
}

interface GenerateLabelRequest {
    AuthorizationToken: string;
    Name: string;
    CompanyName: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    Town: string;
    Region: string;
    CountryCode: string;
    Postalcode: string;
    DeliveryNote: string;
    Email: string;
    Phone: string;
    OrderId: number;
    OrderReference: string;
    OrderCurrency: string;
    OrderValue: number;
    PostageCharges: number;
    ServiceId: string;
    Packages: Package[];
    OrderExtendedProperties: OrderExtendedProperties[];
    SaveConfigItems: SaveConfigItem[];
}
interface GenerateLabelResponse extends GenericResponse {
    LeadTrackingNumber: string;
    Cost: number;
    Currency: string;
    Package: Package[];
}
type GenerateLabelResult = GenerateLabelResponse | Package;

interface QuoteItem {
    ServiceName: string;
    ServiceCode: string;
    ServiceId: string;
    ServiceTag: string;
    CollectionDate: Date | string;
    EstimatedDeliveryDate: Date | string;
    Cost: number;
    Tax: number;
    TotalCost: number;
    Currency: string;
    PropertyItem: QuoteProperty[];
    Options: QuoteServiceOption[];
}
interface QuoteProperty {
    Title: string;
    Value: string;
}
interface QuoteServiceOption {
    OptionName: string;
    OptionValue: string;
}
interface QuoteRequest {
    AuthorizationToken: string;
    Name: string;
    CompanyName: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    Town: string;
    Region: string;
    CountryCode: string;
    Postalcode: string;
    Email: string;
    Phone: string;
    Packages: Package[];
    OrderReference: string;
    OrderCurrency: string;
    OrderValue: number;
    OrderExtendedProperties: OrderExtendedProperties[];
}
interface QuoteResponse extends GenericResponse {
    QuoteItems: QuoteItem[];
}

interface UserAvailableServicesResponse {
    Services: CourierService[];
    IsError: boolean;
    ErrorMessage: string | null;
}

type UserConfigRequest = Either<{
    AuthorizationToken: string;
    ConfigStatus: string;
    ConfigItems: ConfigItemValue[];
}, {
    AuthorizationToken: string;
}>;
type UserConfigResponse = {
    IsConfigActive: boolean;
    ConfigStatus: string;
    ConfigStage: ConfigStage;
    WizardStepDescription: string;
    IsError: boolean;
    ErrorMessage: string | null;
} | GenericResponse;

export { type AddNewUserRequest, type AddNewUserResponse, type CancelLabelRequest, type CancelLabelResponse, type Config, type ConfigItem, type ConfigItemValue, type ConfigListItem, type ConfigStage, type CourierService, type CreateManifestRequest, type CreateManifestResponse, type DeleteConfigRequest, type DeleteConfigResponse, type Either, type ExtPropertyMapRequest, type ExtendedProperty, type ExtendedPropertyMapResponse, type ExtendedPropertyMapping, type GenerateLabelRequest, type GenerateLabelResponse, type GenerateLabelResult, type GenericResponse, type GenericValue, type Item, type ListValue, type Only, type OrderExtendedProperties, type Package, type PackageFormat, type QuoteItem, type QuoteProperty, type QuoteRequest, type QuoteResponse, type QuoteServiceOption, type SaveConfigItem, type ServiceProperty, type UserAvailableServicesResponse, type UserConfigRequest, type UserConfigResponse, ValueType };