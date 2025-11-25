import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ServicePanelCard from "./ServicePanel/ServicePanelCard";

const ServiceList = () => {
  const { id } = useParams(); // category from URL
  const services = useLoaderData(); // all services from parent loader
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!services) return;

    if (!id || id === "0") {
      setFiltered(services); // show all if no category selected
    } else {
      setFiltered(
        services.filter((service) => service.category === id) // exact match
      );
    }
  }, [id, services]);

  return (
    <div className="mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
      {filtered.length > 0 ? (
        filtered.map((service) => (
          <ServicePanelCard key={service.serviceId} service={service} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No services found in this category.
        </p>
      )}
    </div>
  );
};

export default ServiceList;
