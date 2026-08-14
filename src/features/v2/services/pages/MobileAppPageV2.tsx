import CommonServicePage from "../components/CommonServicePage";
import { mobileAppServiceData } from "../data/serviceData";

function MobileAppPageV2() {
    return <CommonServicePage {...mobileAppServiceData} />;
}

export default MobileAppPageV2;
