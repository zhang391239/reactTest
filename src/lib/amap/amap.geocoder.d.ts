// TypeScript file
declare namespace AMap {
    interface AddressComponent {
        province: string;
        city: string;
        citycode: string;
        district: string;
        adcode: string;
        township: string;
        street: string;
        streetNumber: string;
        neighborhood: string;
        neighborhoodType: string;
        building: string;
        buildingType: string;
        businessAreas: BusinessArea[];
    }

    interface BusinessArea {
        id: string;
        name: string;
        location: string;
    }
}
export default AMap;