Linnworks Node.js SDK
---
The Linnworks Node.js SDK is here to make connecting with the Linnworks platform super easy for Node.js developers.

Installiation
---
```bash
yarn add @geedium/linnworks
```

Integrations
---
| Integration                  | Implemented |
|:-----------------------------|:------------|
| **Channel integration**      | ✗           |
| **Accounting integration**   | ✗           |
| **Shipping integration**     | ✔           |

v1
---
| API                                        | Implemented |
|:-------------------------------------------|:------------|
| **Authenticate API**                       | ✔           |
| **Dashboards API**                         | ✔           |
| **Email API**                              | ✗           |
| **Generic Listings API**                   | ✗           |
| **Import and Export API**                  | ✗           |
| **Listings API**                           | ✗           |
| **Locations API**                          | ✗           |
| **Macros API**                             | ✗           |
| **Open Orders API**                        | ✗           |
| **Orders API**                             | ✗           |
| **Picking API**                            | ✗           |
| **Post Sale (Cancellations) API**          | ✗           |
| **Postal Services API**                    | ✗           |
| **Print Service API**                      | ✗           |
| **Processed Orders API**                   | ✗           |
| **Purchase Orders API**                    | ✗           |
| **Returns and Refunds API**                | ✗           |
| **Rules Engine API**                       | ✗           |
| **Settings API**                           | ✗           |
| **ShipStation API**                        | ✗           |
| **Stock API**                              | ✗           |
| **Warehouse Transfer (Legacy) API**        | ✗           |
| **Warehouse Transfer API**                 | ✗           |
| **WMS API**                                | ✗           |
| **Shipping service API**                   | ✗           |
| **Inventory API**                          | ✗           |

v2
---
| API                    | Implemented |
|:-----------------------|:------------|
| **Warehouse Transfer** | ✗           |

Quick Start
---
```ts
import { Linnworks } from '@geedium/linnworks';

const client = new Linnworks({
    applicationId: "<your_application_id>",
    applicationSecret: "<your_application_secret>",
    installiationToken: "<your_installation_token>",
    version: "v1"
});

await client.v1.authenticate.authorizeByApplication();

const topProducts = await client.v1.dashboards.getPerformanceTableData({
    period: 1,
});

console.log(topProducts);
```
