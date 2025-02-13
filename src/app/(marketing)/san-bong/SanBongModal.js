"use client";

import { useState } from "react";
import SearchAddressComponent from "../components/SearchAddressComponent";
import Link from "next/link";

// Dummy data for fields
const fields = [
  {
    id: 1,
    name: "Sân Bóng 1",
    image: "/img/service-2.jpg",
    location: "Hà Nội A",
    status: { available: 7, total: 7 }, // 7/7
    owner: "Nguyễn Văn A"
  },
  {
    id: 2,
    name: "Sân Bóng 2",
    image: "/img/service-2.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 3,
    name: "Sân Bóng 2",
    image: "/img/service-2.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 4,
    name: "Sân Bóng 2",
    image: "/img/service-2.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  }
  // Add more fields here
];

const itemsPerPage = 12;

const SanBongModal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [areaFilter, setAreaFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

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
        <div className="row">
          {paginatedFields.map((field) => (
            <div key={field.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card">
                <img src={field.image} alt={field.name} className="card-img-top" />
                <div className="card-body">
                  <Link href="/san-bong/[id]" as={`/san-bong/${field.id}`}>
                    <h5 className="card-title">{field.name}</h5>
                  </Link>
                  <p className="card-text mb-2">{field.location}</p>
                  <p className="mt-2 mb-2">
                    Tình trạng: {field.status.available}/{field.status.total}
                  </p>
                  <p className="mb-0">Chủ sân: {field.owner}</p>
                </div>
              </div>
            </div>
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
