import CommonServicePage from "../components/CommonServicePage";
import { mobileAppServiceData } from "../data/serviceData";
import MobileAppIdeaCta from "../components/MobileAppIdeaCta";

function MobileAppPageV2() {
    return (
        <CommonServicePage {...mobileAppServiceData}>
            <MobileAppIdeaCta />
        </CommonServicePage>
    );
}

export default MobileAppPageV2;
