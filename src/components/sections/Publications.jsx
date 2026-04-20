import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { publications, patents } from '../../data/publications';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <SectionHeader preText="CIST" highlightText="Publications & Patents" />
        
        <div className="pub-content">
          {/* Publications */}
          <div className="pub-subsection mb-12" data-aos="fade-up">
            <h3 className="subsection-title">CIST Publications</h3>
            <div className="table-responsive">
              <table className="pub-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Authors</th>
                    <th>Title</th>
                    <th>Journal</th>
                    <th>Index</th>
                    <th>Volume</th>
                    <th>Pages</th>
                    <th>ISSN</th>
                  </tr>
                </thead>
                <tbody>
                  {publications.map((pub) => (
                    <tr key={pub.id}>
                      <td>{pub.id}</td>
                      <td className="authors-text">{pub.authors}</td>
                      <td className="title-text"><strong>{pub.title}</strong></td>
                      <td className="journal-text"><em>{pub.journal}</em></td>
                      <td><Badge label={pub.index} color="green" /></td>
                      <td>{pub.volume}</td>
                      <td>{pub.pages}</td>
                      <td className="issn-text">Print: {pub.issnPrint}<br/>Online: {pub.issnOnline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Patents */}
          <div className="pub-subsection" data-aos="fade-up" data-aos-delay="100">
            <h3 className="subsection-title">CIST Patents</h3>
            <div className="table-responsive">
              <table className="pub-table patents-table">
                <thead>
                  <tr>
                    <th>Faculty</th>
                    <th>Topic</th>
                    <th>Status</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {patents.map((pat, idx) => (
                    <tr key={idx}>
                      <td className="authors-text">{pat.faculty}</td>
                      <td className="title-text">{pat.topic}</td>
                      <td>
                        <Badge label={pat.status} color={pat.status === 'Published' ? 'green' : 'primary'} />
                      </td>
                      <td className="journal-text">{pat.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
