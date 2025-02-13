"use client";

import Link from "next/link";

const BoxFieldComponent = (props) => {
  return (
    <div className={`col-lg-4 col-md-6 col-12 ${props.className}`}>
      <div className="card">
        <img src={props.field.image} alt={props.field.name} className="card-img-top img-the-san-bong" />
        <div className="card-body">
          <Link href="/san-bong/[id]" as={`/san-bong/${props.field.id}`}>
            <h5 className="card-title">{props.field.name}</h5>
          </Link>
          <p className="card-text mb-2">{props.field.location}</p>
          <p className="mt-2 mb-2">
            Tình trạng: {props.field.status.available}/{props.field.status.total}
          </p>
          <p className="mb-0">Chủ sân: {props.field.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxFieldComponent;
