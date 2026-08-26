import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { galleryImages, pastCruises } from "../mock";

const GalleryPage = () => {
  const images = [...galleryImages, ...pastCruises.map((p) => ({ src: p.image, alt: p.title }))];

  return (
    <Layout>
      <PageBanner
        title="Gallery"
        crumb="Gallery"
        bgImage="https://images.unsplash.com/photo-1579592672790-39239b6cbc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxjcnVpc2UlMjBwb29sJTIwc3Vuc2V0fGVufDB8fHx8MTc4Nzc0ODIzM3ww&ixlib=rb-4.1.0&q=85"
        subtitle="A glimpse of the magic \u2014 parties, performances, gourmet dining and breathtaking horizons."
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {images.map((img, i) => (
              <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-md group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
