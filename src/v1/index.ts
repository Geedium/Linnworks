import LinnworksBase from "../api/index";
import { ApiOptions } from "../types";
import { Authenticate } from "./authenticate";
import { Dashboards } from "./dashboards";
import { Email } from "./email";
import { GenericListings } from "./generic-listings";
import { ImportExport } from "./import-export";
import { ShippingService } from "./shipping-service";

class LinnworksApi extends LinnworksBase {
    public readonly auth: Authenticate;
    public readonly dashboards: Dashboards;
    public readonly email: Email;
    public readonly genericListings: GenericListings;
    public readonly shippingService: ShippingService;
    public readonly importExport: ImportExport;

    constructor(options: ApiOptions) {
        super(options);
        this.auth = new Authenticate(options);
        this.dashboards = new Dashboards(options);
        this.email = new Email(options);
        this.genericListings = new GenericListings(options);
        this.shippingService = new ShippingService(options);
        this.importExport = new ImportExport(options);
    }
}

export default LinnworksApi;
