
/* eslint-disable */

import { Link } from 'react-router-dom';

// IlanKartlari bileşeni, ilanlar dizisini alır ve her ilan için bir kart oluşturur.
const IlanKartlari = ({ ilanlar }) => (
  <div>
    {ilanlar.map((ilan, index) => (
      <div className="ilan" key={index}>
        <div className="ilan-baslik">{ilan.job_title}</div>
        <img src={ilan.job_image_url} alt={ilan.job_title} />
        <div className="ilan-aciklama">{ilan.job_description}</div>
        <div className="ilan-lokasyon">Konum: {ilan.location}</div>
        <div className="ilan-kategori">Kategori: {ilan.category}</div>
        <Link to={`/job/${index}`}>Detayları Gör</Link>
      </div>
    ))}
  </div>
);

export default IlanKartlari;
