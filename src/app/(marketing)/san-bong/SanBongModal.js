"use client";

import { useEffect, useState } from "react";
import SearchAddressComponent from "../components/SearchAddressComponent";
import BoxFieldComponent from "../components/BoxFieldComponent";
import SendRequest from "@quanlysanbong/utils/SendRequest";

const itemsPerPage = 12;

const SanBongModal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [areaFilter, setAreaFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSizeFilterChange = (e) => {
    setSizeFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter fields based on area and size
  const filteredFields = fields.filter((field) => {
    const matchesArea = areaFilter ? field.location.includes(areaFilter) : true;
    const matchesSize = sizeFilter ? field.name.includes(sizeFilter) : true;
    return matchesArea && matchesSize;
  });

  // Paginate fields
  const paginatedFields = filteredFields.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredFields.length / itemsPerPage);

  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        {/* Filters Section */}
        <div className="row mb-2">
          <SearchAddressComponent onSearch={setAreaFilter} className="col-md-3 mb-2" />
          <div className="col-md-3 mb-2">
            {/* kích thươc sân 5-7-11 */}
            <select className="form-select" value={sizeFilter} onChange={handleSizeFilterChange}>
              <option value="">Kích thước sân</option>
              <option value="5">5 người</option>
              <option value="7">7 người</option>
              <option value="11">11 người</option>
            </select>
          </div>
        </div>

        {/* Fields List */}
        <div className="row g-3">
          {paginatedFields.map((field) => (
            <BoxFieldComponent key={field._id} field={field} />
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">{`${currentPage} / ${totalPages}`}</span>
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Back to Top Button */}
        <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default SanBongModal;
