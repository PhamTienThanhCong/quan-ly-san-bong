"use client";

import { formatCurrency } from "@quanlysanbong/utils/Main";
import Link from "next/link";

const BoxFieldComponent = ({ field }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={field.images[0]}
          alt={field.stadiumName}
          className="card-img-top img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <Link href={`/san-bong/${field._id}`} className="text-decoration-none">
            <h5 className="card-title text-primary">{field.stadiumName}</h5>
          </Link>
          <p className="card-text text-muted mb-2">
            <i className="bi bi-geo-alt-fill"></i> {field.locationDetail}, {field.location}
          </p>
          <p className="card-text">
            <strong>Giờ mở cửa:</strong> {field.openingTime} - {field.closingTime}
          </p>
          <p className="card-text">
            <strong>Loại sân khả dụng:</strong>
          </p>
          <ul className="list-unstyled">
            {Object.values(field.fields)
              .filter((f) => f.isAvailable)
              .map((f, index) => (
                <li key={index}>
                  {f.name}: <span className="text-success">{formatCurrency(f.price)}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoxFieldComponent;
