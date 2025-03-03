"use client";

import { useEffect, useState } from "react";
import BoxFieldComponent from "../components/BoxFieldComponent";
import SendRequest from "@quanlysanbong/utils/SendRequest";

const itemsPerPage = 12;

const SanBongNoiBatComponent = () => {
  const [fields, setFields] = useState([]);

  // Fetch fields data from API
  useEffect(() => {
    const fetchFields = async () => {
      const response = await SendRequest("GET", "/api/stadiums");
      if (response.payload) {
        setFields(response.payload);
      }
    };
    fetchFields();
  }, []);

  return (
    <div className="container-fluid contact">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 mb-4">Các sâm tiêu biểu</h1>
          <p className="mb-0">
            Chúng tôi cung cấp các sân chất lượng, đáp ứng mọi nhu cầu của bạn, giúp bạn có những trận đấu tuyệt vời
            nhất.
          </p>
        </div>
        {/* Fields List */}
        <div className="row g-3">
          {fields.slice(0, 6).map((field) => (
            <BoxFieldComponent key={field._id} field={field} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanBongNoiBatComponent;
