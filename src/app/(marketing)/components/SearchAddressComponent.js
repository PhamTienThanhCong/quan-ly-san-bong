import { useCallback, useEffect, useRef, useState } from "react";

const SearchAddressComponent = (props) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [search, setSearch] = useState({
    province: "1",
    district: "",
    ward: ""
  });

  const allDistricts = useRef({});
  const allWards = useRef({});

  useEffect(() => {
    let address = "";
    if (search.ward) {
      const ward = wards.find((ward) => ward.id === search.ward);
      address = ward?.name || "" + ", ";
    }
    if (search.district) {
      const district = districts.find((district) => district.id === search.district);
      address += district?.name || "" + ", ";
    }
    if (search.province) {
      const province = provinces.find((province) => province.id === search.province);
      address += province?.name || "";
    }
    props.onSearch(address);
  }, [districts, props, provinces, search, wards]);

  const getDistricts = useCallback((provinceId) => {
    if (allDistricts.current[provinceId]) {
      setDistricts(allDistricts.current[provinceId]);
    } else {
      fetch(`https://open.oapi.vn/location/districts/${provinceId}?size=100`)
        .then((response) => response.json())
        .then((data) => {
          allDistricts.current[provinceId] = data.data;
          setDistricts(data.data);
        });
    }
    setWards([]);
  }, []);

  const getWards = useCallback((districtId) => {
    if (allWards.current[districtId]) {
      setWards(allWards.current[districtId]);
    } else {
      fetch(`https://open.oapi.vn/location/wards/${districtId}?size=100`)
        .then((response) => response.json())
        .then((data) => {
          allWards.current[districtId] = data.data;
          setWards(data.data);
        });
    }
  }, []);

  useEffect(() => {
    fetch("https://open.oapi.vn/location/provinces?size=100")
      .then((response) => response.json())
      .then((data) => setProvinces(data.data));
  }, []);

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSearch({
      province: provinceId,
      district: "",
      ward: ""
    });
    getDistricts(provinceId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSearch({
      ...search,
      district: districtId,
      ward: ""
    });
    getWards(districtId);
  };

  const handleWardChange = (e) => {
    setSearch({
      ...search,
      ward: e.target.value
    });
  };

  return (
    <>
      <div className={`${props.className}`}>
        <select className={`form-select`} value={search.province} onChange={handleProvinceChange}>
          <option value="">Chọn Tỉnh/Thành phố</option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>
      <div className={`${props.className}`}>
        <select className={`form-select`} value={search.district} onChange={handleDistrictChange}>
          <option value="">Chọn Quận/Huyện</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
      <div className={`${props.className}`}>
        <select className={`form-select`} value={search.ward} onChange={handleWardChange}>
          <option value="">Chọn Phường/Xã</option>
          {wards.map((ward) => (
            <option key={ward.id} value={ward.id}>
              {ward.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchAddressComponent;
